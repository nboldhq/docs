import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../ui/Searchbar';
import { Menu, X } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  label: string;
  showInNavbar: boolean;
  tags: string[];
}

const DocsNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tabs, setTabs] = useState<Category[]>([]);
  const menuRef = useRef(null);

  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/categories`);
        const data = await res.json();
        const filteredTabs = data.filter((tab: Category) => tab.showInNavbar);
        setTabs(filteredTabs);
      } catch (err) {
        console.error('Error loading tabs:', err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-10">
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={`/docs/${tab.tags[0] || slugify(tab.name)}/${slugify(tab.name)}`}
                className="nav-link text-gray-700 dark:text-gray-300 hover:underline"
              >
                {tab.label || tab.name}
              </Link>
            ))}
              <Link
                to={`/docs/api-reference`}
                className="nav-link text-gray-700 dark:text-gray-300 hover:underline"
              >
                API Reference
              </Link>
          </nav>

          {/* Search bar */}
          <div className="flex items-center gap-4 md:gap-6 flex-1 md:flex-none justify-end pl-5">
            <div className="w-full md:w-auto">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-black pt-2 pb-4"
          >
            <div className="px-4 space-y-4">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={`/docs/${tab.tags[0] || slugify(tab.name)}/${slugify(tab.name)}`}
                  className="mobile-nav-link block text-gray-700 dark:text-gray-200"
                >
                  {tab.label || tab.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsNavbar;
