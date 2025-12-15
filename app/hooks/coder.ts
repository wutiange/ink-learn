'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import type { IDisposable, Terminal as XTermType } from '@xterm/xterm';

// WebSocket 连接配置 - 替换为你的 WebSocket 服务器地址
const WS_URL = process.env.NEXT_PUBLIC_WS_URL || 'wss://allunited.fun/ink-learn-websocket';

let ws: WebSocket | null = null;
let wsStatus: 'ready' | 'close' | null = null;
const allListeners: Record<string, ((data: string) => void)[]> = {}

const initWebSocket = async (
  clientId: string, 
  onProcessStateChange?: (running: boolean) => void
) => {
  if (ws && [WebSocket.OPEN, WebSocket.CONNECTING].includes(ws.readyState as 0 | 1)) {
    return;
  }

  ws = await new Promise((resolve, reject) => {
    const tempWs = new WebSocket(WS_URL);
    tempWs.onopen = () => {
      // 发送初始化消息
      tempWs.send(JSON.stringify({
        type: 'init',
        data: { clientId }
      }));
    };
    tempWs.onmessage = (event: MessageEvent) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case 'ready':
          wsStatus = 'ready';
          resolve(tempWs);
          break;
      }
    };
    tempWs.onerror = (event: Event) => {
      reject(event);
    };
    tempWs.onclose = () => {
      reject(new Error('WebSocket closed'));
    };
  })

  if (!ws) {
    throw new Error('WebSocket not initialized');
  }
  ws.onmessage = (event: MessageEvent) => {
    try {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case 'output':
          // 触发所有监听器
          for (const fileName in allListeners) {
            if (fileName === message.filename) {
              allListeners[fileName].forEach(callback => callback(message.data));
            }
          }
          break;

        case 'process_exit':
          onProcessStateChange?.(false);
          // 触发所有监听器，让它们知道进程已结束
          for (const fileName in allListeners) {
            if (fileName === message.filename) {
              allListeners[fileName].forEach(callback => callback('\n[Process exited]\n'));
            }
          }
          break;

        case 'error':
          console.error('WebSocket error:', message.data);
          onProcessStateChange?.(false);
          break;

        default:
          console.log('Unknown message type:', message.type);
      }
    } catch (error) {
      console.error('Failed to parse WebSocket message:', error);
    }
  };

  ws.onerror = (event: Event) => {
    console.error('WebSocket error:', event);
  };

  ws.onclose = () => {
    wsStatus = 'close';
    onProcessStateChange?.(false);
    ws = null;
  };
};

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
  const [content, setContent] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const termRef = useRef<XTermType | null>(null)
  const disposableRef = useRef<IDisposable | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [processRunning, setProcessRunning] = useState(false); // 记录进程是否在运行（用于交互式输入）
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

  const initHooksWebSocket = useCallback(async () => {
    if (!clientId) return;
    await initWebSocket(
      clientId, 
      (running) => {
        setProcessRunning(running);
      }
    );
  }, [clientId])

  useEffect(() => {
    // 清理函数
    return () => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: 'cleanup' }));
      }
      if (disposableRef.current) {
        disposableRef.current.dispose();
      }
    };
  }, [])

  const setCode = useCallback((val: string) => {
    setCodeState(val);
  }, []);

  const send = useCallback(async (code: string) => {
    if (!ws) {
      await initHooksWebSocket();
    }
    if (!clientId || !termRef.current || !ws || wsStatus !== 'ready') return;

    setIsRunning(true);
    setProcessRunning(true);
    termRef.current?.reset();
    const { cols = 80, rows = 40 } = termRef.current ?? {};

    try {
      ws.send(JSON.stringify({
        type: 'execute',
        filename: fileName,
        data: {
          code,
          cols,
          rows
        }
      }));
    } catch (error) {
      console.error('Failed to send code:', error);
      setProcessRunning(false);
    } finally {
      setIsRunning(false);
    }
  }, [clientId, initHooksWebSocket, fileName])

  const handleData = useCallback((data: string) => {
    termRef.current?.write(data);
  }, [])

  useEffect(() => {
    return fileName ? addListener(fileName, handleData) : () => { };
  }, [fileName, setCode, handleData])

  const delTempFile = useCallback(async () => {
    if (!clientId || !ws) return;

    try {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
          type: 'cleanup'
        }));
      }
    } catch (error) {
      console.error('cleanup error', error);
    }
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

  const setTerm = useCallback((term: XTermType | null) => {
    if (!term) return;
    termRef.current = term;
    send(code)
    disposableRef.current = term.onData((data) => {
      try {
        // 只有在进程运行时才发送输入（用于交互式脚本）
        if (ws && ws.readyState === WebSocket.OPEN && processRunning) {
          ws.send(JSON.stringify({
            type: 'input',
            data
          }));
        }
      } catch (error) {
        console.error('send input error', error);
      }
    });
  }, [code, processRunning, send])

  return { send, content, isRunning, setContent, setTerm, setCode: handleEditorChange, code, delTempFile }
}

export default useCoder;
