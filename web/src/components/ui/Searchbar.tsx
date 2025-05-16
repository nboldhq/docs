import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef(null);

  // Improved slugify function
  const slugify = useCallback((text) => 
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')      // Replace spaces with -
      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars except -
      .replace(/\-\-+/g, '-')     // Replace multiple - with single -
      .replace(/^-+/, '')         // Trim - from start
      .replace(/-+$/, ''),        // Trim - from end
    []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search functionality with error handling
  useEffect(() => {
    const fetchResults = async (searchQuery) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/categories`);
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        const searchTerms = searchQuery.toLowerCase().split(' ');

        const filtered = data.reduce((acc, item) => {
          const content = `${item.name} ${item.description}`.toLowerCase();
          const hasMatch = searchTerms.every(term => content.includes(term));
          
          if (hasMatch) {
            acc.push({
              ...item,
              searchId: `search-result-${slugify(item.name)}-${Date.now()}`
            });
          }
          return acc;
        }, []);

        setResults(filtered);
        setShowDropdown(filtered.length > 0);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      if (query.trim()) {
        fetchResults(query.trim());
      } else {
        setResults([]);
        setShowDropdown(false);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, slugify]);

  // Markdown renderer with error boundary
  const MarkdownRenderer = ({ content }) => (
    <div className="markdown-preview">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <div className="font-bold text-lg" {...props} />,
          h2: ({ node, ...props }) => <div className="font-bold text-base" {...props} />,
          h3: ({ node, ...props }) => <div className="font-bold text-sm" {...props} />,
          p: ({ node, ...props }) => <div className="text-sm" {...props} />
        }}
      >
        {content.length > 200 ? `${content.substring(0, 200)}...` : content}
      </ReactMarkdown>
    </div>
  );

  return (
    <div className="relative w-full max-w-xl" ref={dropdownRef} role="search">
      <div className="relative">
        <input
          type="text"
          placeholder="Search documentation..."
          className="w-full pl-10 pr-4 py-2 rounded-[4.5rem] border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#18181B] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff003d] transition-all"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value === '') setShowDropdown(false);
          }}
          aria-label="Search documentation"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
        
        {isLoading && (
          <div className="absolute right-3 top-2.5 animate-spin">
            <div className="h-5 w-5 border-2 border-[#ff003d] border-t-transparent rounded-full" />
          </div>
        )}
      </div>

      {showDropdown && (
        <ul className="absolute z-50 mt-2 w-full bg-white dark:bg-[#18181B] border border-gray-300 dark:border-gray-600 rounded-md shadow-xl max-h-80 overflow-y-auto no-scrollbar divide-y divide-gray-200 dark:divide-gray-700">
          {results.length > 0 ? (
            results.map((item) => (
              <li 
                key={item.searchId} 
                className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Link 
                  to={`/docs/${item.tags?.[0] || 'general'}/${slugify(item.name)}`}
                  className="block"
                  onClick={() => {
                    setQuery('');
                    setShowDropdown(false);
                  }}
                >
                  <div className="font-semibold text-[#ff003d] dark:text-[#ff527d]">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                    <MarkdownRenderer content={item.description} />
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-gray-500 dark:text-gray-400">
              No results found for "{query}"
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;