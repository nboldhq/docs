import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-');

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim() === '') {
        setResults([]);
        setShowDropdown(false);
        return;
      }
      try {
        const response = await fetch('http://localhost:3000/api/categories');
        const data = await response.json();
        const filtered = data.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setShowDropdown(filtered.length > 0);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchResults();
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <li key={item.id} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
             <Link to={`/docs/${item.tags[0]}/${slugify(item.name)}`}>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                     <ReactMarkdown>{item.description}</ReactMarkdown>
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
