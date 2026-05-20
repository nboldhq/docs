import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, X } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
  tags?: string[];
  parentId: number | null;
  visibility: string;
}

const stripMarkdown = (text: string) =>
  text
    .replace(/^---[\s\S]+?---\n?/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/#{1,6}\s+/g, '')
    .replace(/[*_`~>\[\]]/g, '')
    .replace(/\n+/g, ' ')
    .trim();

const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setResults([]);
        setIsOpen(false);
        return;
      }
      setIsLoading(true);
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) throw new Error('Failed');
        const data: Category[] = await res.json();
        const terms = query.toLowerCase().split(' ');
        const filtered = data.filter((item) => {
          const content = `${item.name} ${item.description}`.toLowerCase();
          return terms.every((t) => content.includes(t));
        });
        setResults(filtered.slice(0, 8));
        setIsOpen(true);
        setActiveIndex(-1);
      } catch {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 280);
    return () => clearTimeout(timer);
  }, [query]);

  const go = useCallback((item: Category) => {
    const tag = item.tags?.[0] || 'general';
    navigate(`/${tag}/${slugify(item.name)}`);
    setQuery('');
    setIsOpen(false);
  }, [navigate]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      go(results[activeIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Input */}
      <div className="relative flex items-center">
        <Search
          size={14}
          className="absolute left-2.5 text-gray-400 dark:text-neutral-500 pointer-events-none"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { if (results.length > 0) setIsOpen(true); }}
          onKeyDown={handleKeyDown}
          placeholder="Search docs..."
          aria-label="Search documentation"
          className="
            h-8 w-44 focus:w-64 pl-8 pr-16 text-sm rounded-lg
            transition-all duration-200 focus:outline-none
            bg-gray-100 focus:bg-white
            border border-transparent focus:border-gray-300
            text-gray-700 placeholder:text-gray-400
            dark:bg-neutral-800 dark:focus:bg-neutral-800
            dark:border-neutral-700 dark:focus:border-neutral-600
            dark:text-neutral-200 dark:placeholder:text-neutral-500
          "
        />
        <div className="absolute right-2 flex items-center gap-1.5">
          {isLoading ? (
            <div className="w-3.5 h-3.5 border-2 border-[#fc035a] border-t-transparent rounded-full animate-spin" />
          ) : query ? (
            <button
              onClick={() => { setQuery(''); setIsOpen(false); inputRef.current?.focus(); }}
              className="text-gray-400 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
            >
              <X size={13} />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium select-none leading-none
              text-gray-400 bg-gray-200 border border-gray-300
              dark:text-neutral-500 dark:bg-neutral-700 dark:border-neutral-600">
              {isMac ? '⌘' : 'Ctrl'}<span>K</span>
            </kbd>
          )}
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="
          absolute right-0 top-[calc(100%+8px)] w-80 z-50 overflow-hidden
          rounded-xl shadow-2xl
          bg-white border border-gray-200
          dark:bg-neutral-900 dark:border-neutral-800
        ">
          {results.length > 0 ? (
            <>
              <div className="px-3 pt-3 pb-1.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-neutral-600">
                  {results.length} result{results.length !== 1 ? 's' : ''}
                </p>
              </div>

              <ul className="max-h-72 overflow-y-auto no-scrollbar pb-1.5">
                {results.map((item, i) => {
                  const excerpt = stripMarkdown(item.description || '').slice(0, 80);
                  const isActive = i === activeIndex;
                  return (
                    <li key={item.id}>
                      <button
                        className={`w-full text-left px-3 py-2.5 flex items-start gap-3 transition-colors ${
                          isActive
                            ? 'bg-[#fc035a]/6 dark:bg-[#fc035a]/10'
                            : 'hover:bg-gray-50 dark:hover:bg-neutral-800'
                        }`}
                        onMouseEnter={() => setActiveIndex(i)}
                        onClick={() => go(item)}
                      >
                        <div className="mt-0.5 shrink-0 w-6 h-6 rounded-md flex items-center justify-center bg-gray-100 dark:bg-neutral-800">
                          <FileText size={12} className="text-gray-400 dark:text-neutral-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium truncate ${
                            isActive
                              ? 'text-[#fc035a]'
                              : 'text-gray-900 dark:text-neutral-100'
                          }`}>
                            {item.name}
                          </p>
                          {excerpt && (
                            <p className="text-xs mt-0.5 line-clamp-1 text-gray-500 dark:text-neutral-500">
                              {excerpt}
                            </p>
                          )}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-gray-100 dark:border-neutral-800 px-3 py-2 flex items-center gap-3 text-[10px] text-gray-400 dark:text-neutral-600">
                <span><kbd className="font-mono">↑↓</kbd> navigate</span>
                <span><kbd className="font-mono">↵</kbd> open</span>
                <span><kbd className="font-mono">Esc</kbd> close</span>
              </div>
            </>
          ) : (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                No results for{' '}
                <span className="font-medium text-gray-700 dark:text-neutral-300">"{query}"</span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
