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
    console.log(fileName, data, '------message-----', allListeners[fileName])
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
  const [code, setCode] = useState<string>(defCode);
  const [content, setContent] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [term, setTerm] = useState<XTermType | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [clientId] = useState<string>(() => {
    // 检查是否在浏览器环境
    if (typeof window === 'undefined') {
      // 服务器端渲染时返回一个临时值
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

  useEffect(() => {
    if (!fileName) return
    return addListener(fileName, (data: string) => {
      term?.write(data)
    })
  }, [fileName, term])

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
      body: JSON.stringify({ code, cols, rows, clientId, fileName }),
    }).then(res => res.json())
    setIsRunning(false)
  }, [fileName, term, clientId])

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
  }, [send])

  return { send, content, isRunning, setContent, setTerm, setCode: handleEditorChange, code, delTempFile }
}

export default useCoder;