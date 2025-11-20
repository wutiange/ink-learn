'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import type { Terminal as XTermType } from '@xterm/xterm';

let es: EventSource | null = null;
const allListeners: Record<string, ((data: string) => void)[]> = {}
const initEventSource = (clientId: string) => {
  if (!es) {
    es = new EventSource(`/code-previewer?clientId=${clientId}`)
  }
  es.onmessage = (event: MessageEvent) => {
    const { fileName, data } = JSON.parse(event.data) as { fileName: string, data: string };
    // console.log(fileName, data, '------message-----', allListeners[fileName])
    if (allListeners[fileName]) {
      allListeners[fileName].forEach(callback => callback(data))
    }
  }
  es.onerror = (event: Event) => {
    console.log(event, '------error-----')
  }
  es.onopen = (event: Event) => {
    console.log(event, '------open-----')
  }
}
const addListener = (eventName: string, callback: (data: string) => void) => {
  if (!allListeners[eventName]) {
    allListeners[eventName] = []
  }
  allListeners[eventName].push(callback)
  return () => {
    allListeners[eventName].splice(allListeners[eventName].indexOf(callback) ?? -1, 1)
  }
}

const useCoder = (fileName: string, defCode: string) => {
  // 只在首次挂载时从 props 初始化，后续变化由外部事件（OPEN_FILE）驱动
  const [code, setCodeState] = useState<string>(defCode);
  const [currentFileName, setCurrentFileName] = useState<string>(fileName);
  const [content, setContent] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [term, setTerm] = useState<XTermType | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [clientId] = useState<string>(() => {
    if (typeof window === 'undefined') {
      return '';
    }
    const tempClientId = localStorage.getItem('clientId');
    if (tempClientId) {
      return tempClientId;
    }
    const newClientId = uuidv4();
    localStorage.setItem('clientId', newClientId);
    return newClientId;
  });

  useEffect(() => {
    if (!clientId) return;
    initEventSource(clientId)
  }, [clientId])

  const setCode = useCallback((val: string) => {
     setCodeState(val);
  }, []);

  const send = useCallback(async (code: string) => {
    if (!clientId || !term) return;
    setIsRunning(true)
    term?.reset();
    const {cols = 80, rows = 40} = term ?? {};
    await fetch('/code-previewer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, cols, rows, clientId, fileName: currentFileName }),
    }).then(res => res.json())
    setIsRunning(false)
  }, [currentFileName, term, clientId])

  useEffect(() => {
    const handleData = (data: string) => {
      const match = data.match(/<<OPEN_FILE::(.*?)::(.*?)>>/);
      if (match) {
         const [, fName, contentBase64] = match;
         try {
           const decodedContent = contentBase64 ? atob(contentBase64) : '';
           setCode(decodedContent);
           setCurrentFileName(fName);
           
           const cleanData = data.replace(/<<OPEN_FILE::.*?::.*?>>(\r\n)?/g, '');
           if (cleanData) term?.write(cleanData);
         } catch (e) {
           console.error('Failed to decode file content', e);
           term?.write(data);
         }
      } else {
         term?.write(data);
      }
    };

    const unsubShell = addListener('shell', handleData)
    const unsubFile = fileName ? addListener(fileName, handleData) : () => {}; 
    
    return () => {
      unsubShell()
      unsubFile()
    }
  }, [fileName, term, setCode])

  useEffect(() => {
    if (!clientId || !term) return

    const disposable = term.onData(async (data) => {
      try {
        await fetch('/code-previewer', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ clientId, data }),
        })
      } catch (error) {
        console.error('send input error', error)
      }
    })

    return () => {
      disposable.dispose()
    }
  }, [clientId, term])

  const delTempFile = useCallback(async () => {
    if (!clientId) return;
    await fetch('/code-previewer', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clientId }),
    })
  }, [clientId])

  const handleEditorChange = useCallback((value: string | undefined) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      if (value) {
        send(value);
        setCode(value);
      }
    }, 500);
  }, [send, setCode])

  return { send, content, isRunning, setContent, setTerm, setCode: handleEditorChange, code, delTempFile }
}

export default useCoder;
