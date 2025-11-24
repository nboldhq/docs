import mermaid from 'mermaid';
import { useEffect, useRef } from 'react';

const MermaidDiagram = ({ code }: { code: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.init(undefined, ref.current);
    }
  }, [code]);

  return (
    <div className="mermaid" ref={ref}>
      {code}
    </div>
  );
};

export default MermaidDiagram;