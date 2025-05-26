import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const contentElement = document.getElementById('page-content');
      if (!contentElement) return;

      const headingElements = Array.from(
        contentElement.querySelectorAll('h1:not(footer h1),h2:not(footer h2), h3:not(footer h3)')
      ).map((heading) => {
        const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
        heading.id = id;
        return {
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.substring(1))
        };
      });

      setHeadings(headingElements);

      if (headingElements.length > 0) {
        const firstId = headingElements[0].id;
        setActiveId(firstId);
        
        const element = document.getElementById(firstId);
        if (element) {
          const headerHeight = 100;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;
          
          if (window.scrollY < offsetPosition - 50) {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  setActiveId(entry.target.id);
              }
          });
        },
        { rootMargin: '0px 0px -80% 0px', threshold: 1 }
      );

      headingElements.forEach(({ id }) => {
          const element = document.getElementById(id);
          if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveId(id);
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="hidden xl:block w-64 fixed right-4 2xl:right-8 top-36 h-[calc(100vh-5rem)] overflow-y-auto p-4 border-gray-200 dark:border-gray-700 text-sm">
      <ul className="space-y-2 relative">
        {headings.length === 0 && (
          <p className="text-gray-500 text-sm"></p>
        )}
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`transition-all duration-200 ease-out ${
              heading.level === 3 ? 'pl-4' : 'pl-2'
            } ${
              activeId === heading.id
                ? 'text-[#ff0000] dark:text-[#ff0000] border-l-2 border-current'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
            style={{ transform: activeId === heading.id ? 'translateX(2px)' : 'none' }}
          >
            <button
              onClick={() => scrollTo(heading.id)}
              className="text-left w-full hover:underline focus:outline-none rounded"
              aria-current={activeId === heading.id ? 'location' : undefined}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;