'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Terminal as XTermType } from '@xterm/xterm';
import type { FitAddon as FitAddonType } from '@xterm/addon-fit';

type TerminalProps = {
  className?: string;
  content?: string;
}

const Terminal = ({ className, content }: TerminalProps) => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const termRef = useRef<XTermType | null>(null);
  const fitAddonRef = useRef<FitAddonType | null>(null);
  const [term, setTerm] = useState<XTermType | null>(null);

  useEffect(() => {
    if (term && content) {
      term.clear();
      term.write(content);
    }
  }, [content, term]);

  const handleResize = useCallback(() => {
    if (fitAddonRef.current) {
      fitAddonRef.current.fit();
    }
  }, [])

  const initTerminal = useCallback((ref: HTMLDivElement | null) => {
    const init = async () => {
      if (!ref) return;
      terminalRef.current = ref;
      const [{ Terminal: XTerm }, { FitAddon }] = await Promise.all([
        import('@xterm/xterm'),
        import('@xterm/addon-fit'),
      ]);

      if (!termRef.current) {
        termRef.current = new XTerm({
          convertEol: true,
          theme: {
            background: '#1e1e1e',
            foreground: '#ffffff',
          },
        });
      }
      if (!fitAddonRef.current) {
        fitAddonRef.current = new FitAddon();
      }
      termRef.current.loadAddon(fitAddonRef.current);

      termRef.current.open(terminalRef.current);
      fitAddonRef.current.fit();
      setTerm(termRef.current)
    }
    init();
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [handleResize])

  return <div ref={initTerminal} className={className} />;
};

export default Terminal;