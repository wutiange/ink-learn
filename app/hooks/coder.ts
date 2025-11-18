'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import type { Terminal as XTermType } from '@xterm/xterm';

const clientId = uuidv4();
let es: EventSource | null = null;
const allListeners: Record<string, ((data: string) => void)[]> = {}
const initEventSource = () => {
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


  useEffect(() => {
    initEventSource()
    return () => {
      fetch('/code-previewer', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clientId }),
      })
    }
  }, [])

  useEffect(() => {
    if (!fileName) return
    return addListener(fileName, (data: string) => {
      console.log('------data-----', data)
      term?.write(data)
    })
  }, [fileName, term])

  const send = useCallback(async (code: string) => {
    setIsRunning(true)
    term?.clear();
    const {cols = 80, rows = 40} = term ?? {};
    await fetch('/code-previewer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, cols, rows, clientId, fileName }),
    }).then(res => res.json())
    setIsRunning(false)
  }, [fileName, term])

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

  return { send, content, isRunning, setContent, setTerm, setCode: handleEditorChange, code }
}

export default useCoder;