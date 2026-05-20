import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '../../../utils/cn';

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const content = document.getElementById('page-content');
      if (!content) return;

      const els = Array.from(
        content.querySelectorAll('h1:not(footer h1), h2:not(footer h2), h3:not(footer h3)')
      ).map((el) => {
        const id =
          el.id || el.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
        el.id = id;
        return { id, text: el.textContent || '', level: parseInt(el.tagName[1]) };
      });

      setHeadings(els);
      if (els.length > 0) setActiveId(els[0].id);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActiveId(e.target.id);
          });
        },
        { rootMargin: '0px 0px -80% 0px', threshold: 1 }
      );

      els.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    const offset = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-56 shrink-0 sticky top-[60px] self-start max-h-[calc(100vh-60px)] overflow-y-auto no-scrollbar py-10 pr-4 pl-2">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 px-2">
        On this page
      </p>
      <ul className="space-y-0.5">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? 'pl-3' : ''}>
            <button
              onClick={() => scrollTo(h.id)}
              className={cn(
                'w-full text-left px-2 py-1 rounded text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fc035a]',
                activeId === h.id
                  ? 'text-[#fc035a] font-medium'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              )}
              aria-current={activeId === h.id ? 'location' : undefined}
            >
              {h.text}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;
