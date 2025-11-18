'use client'
import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const clientId = uuidv4();
let es: EventSource | null = null;
const allListeners: Record<string, ((data: string) => void)[]> = {}
const initEventSource = () => {
  if (!es) {
    es = new EventSource(`/code-previewer?clientId=${clientId}`)
  }
  es.onmessage = (event: MessageEvent) => {
    const { fileName, data } = JSON.parse(event.data) as { fileName: string, data: string }
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




const useEventSource = (fileName: string) => {
  const [content, setContent] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

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
      setContent(data)
    })
  }, [fileName])

  const send = useCallback(async (code: string, cols: number, rows: number) => {
    setIsRunning(true)
    await fetch('/code-previewer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, cols, rows, clientId, fileName }),
    }).then(res => res.json())
    setIsRunning(false)
  }, [fileName])
  return { send, content, isRunning }
}

export default useEventSource;