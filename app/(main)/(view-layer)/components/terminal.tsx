'use client';

import { useEffect, useRef } from 'react';
import type { Terminal as XTermType } from '@xterm/xterm';
import type { FitAddon as FitAddonType } from '@xterm/addon-fit';

type TerminalProps = {
  className?: string;
  content?: string;
}

const Terminal = ({ className, content }: TerminalProps) => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const termRef = useRef<XTermType | null>(null);

  useEffect(() => {
    let fitAddon: FitAddonType | null = null;
    let handleResize: (() => void) | null = null;
    let disposed = false;

    (async () => {
      const [{ Terminal: XTerm }, { FitAddon }] = await Promise.all([
        import('@xterm/xterm'),
        import('@xterm/addon-fit'),
      ]);
      // 尝试按需加载样式（在某些 Next 配置下可能需要在全局引入）
      try {
        // @ts-expect-error: 动态引入 CSS 仅为运行时副作用，类型可忽略
        await import('@xterm/xterm/css/xterm.css');
      } catch {
        // 忽略样式动态加载失败
      }

      if (disposed) return;

      termRef.current = new XTerm({
        convertEol: true,
        theme: {
          background: '#1e1e1e',
          foreground: '#ffffff',
        },
      });
      fitAddon = new FitAddon();
      termRef.current.loadAddon(fitAddon);

      if (terminalRef.current) {
        termRef.current.open(terminalRef.current);
        fitAddon.fit();
      }

      handleResize = () => {
        if (fitAddon) {
          fitAddon.fit();
        }
      };
      window.addEventListener('resize', handleResize);
    })();

    return () => {
      disposed = true;
      if (handleResize) {
        window.removeEventListener('resize', handleResize);
      }
      if (termRef.current) {
        termRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (termRef.current && content) {
      termRef.current.write(content);
    }
  }, [content]);

  return <div ref={terminalRef} className={className} />;
};

export default Terminal;