import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Clear results when query is emptied
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setShowDropdown(false);
    }
  }, [query]);

  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-');

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim() === '') return;

      try {
        const response = await fetch('skan-dev.nbold.dev/api/categories');
        const data = await response.json();
        
        const filtered = data.reduce((acc, item) => {
          if (item.name.toLowerCase().includes(query.toLowerCase()) ||
              item.description.toLowerCase().includes(query.toLowerCase())) {
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
        console.error('Error fetching search results:', error);
      }
    };

    const debounceTimer = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  // Prevent markdown headings from being rendered as actual HTML headings
  const MarkdownRenderer = ({ content }) => (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <div className="font-bold text-lg" {...props} />,
        h2: ({ node, ...props }) => <div className="font-bold text-base" {...props} />,
        h3: ({ node, ...props }) => <div className="font-bold text-sm" {...props} />
      }}
    >
      {content}
    </ReactMarkdown>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full md:w-auto pl-10 pr-4 py-2 rounded-[4.5rem] border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#18181B] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff003d]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowDropdown(results.length > 0)}
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
      {showDropdown && (
        <ul className="absolute z-10 mt-2 w-full bg-white dark:bg-[#18181B] border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto no-scrollbar divide-y divide-gray-200 dark:divide-gray-700">
          {results.map((item) => (
            <li key={item.searchId} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link 
                to={`/docs/${item.tags[0]}/${slugify(item.name)}`}
                onClick={() => {
                  setQuery('');
                  setShowDropdown(false);
                }}
              >
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  <MarkdownRenderer content={item.description} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;