import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../../ui/Searchbar';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { NBoldIcon } from '../../Icons/nBoldIcon';
import { cn } from '../../../utils/cn';

interface SubItem {
  id: string;
  name: string;
  tags?: string[];
  parentId?: string | null;
}

interface Category {
  id: string;
  name: string;
  label: string;
  showInNavbar: boolean;
  tags: string[];
  parentId?: string | null;
  subItems?: SubItem[];
}

const DocsNavbar: React.FC<{
  children: React.ReactNode;
  categories: Category[];
  isDarkMode: boolean;             
  toggleDarkMode: () => void;
}> = ({ isDarkMode, toggleDarkMode }) =>{ 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tabs, setTabs] = useState<Category[]>([]);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, '-');

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/categories`);
          const data: Category[] = await res.json();
    
          const allItems = [...data];
    
          // Build a map of all items (both categories and subItems)
          const itemMap = new Map<string, Category & { subItems: SubItem[] }>();

          allItems.forEach((item) => {
            itemMap.set(item.id, { ...item, subItems: [] });
          });
          
          const rootCategories: (Category & { subItems: SubItem[] })[] = [];
          
          itemMap.forEach((item) => {
            if (item.parentId) {
              const parent = itemMap.get(item.parentId);
              if (parent) {
                parent.subItems.push(item); 
              }
            } else {
              rootCategories.push(item); 
            }
          });
          
          const navbarTabs = rootCategories.filter((cat) => cat.showInNavbar);
          setTabs(navbarTabs);
        } catch (err) {
          console.error("Error loading categories:", err);
        }
      };
    
      fetchCategories();
    }, []);
    

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderSubItemsRecursive = (
    subItems: SubItem[] = [],
    parentTags: string[],
    depth = 1
  ) => {
    return subItems.map((sub) => {
      const subTitle = slugify(sub.name);
      const subTags = sub.tags?.join('-') || parentTags.join('-') || 'untagged';
      const subPath = `/docs/${subTags}/${subTitle}`;
      const isExpanded = expandedItems.includes(sub.id);
      const hasChildren = sub.subItems && sub.subItems.length > 0;
  
      return (
        <div key={sub.id} className={cn('ml-4', depth > 1 && 'ml-6')}>
          <div
            className={cn(
              'flex items-center py-2 cursor-pointer transition-colors duration-200',
              location.pathname === subPath,
              'text-gray-700 dark:text-gray-200',
              'text-sm'
            )}
            onClick={() => {
              if (hasChildren) {
                toggleExpanded(sub.id);
              } else {
                setIsMenuOpen(false);
                navigate(subPath);
              }
            }}
          >
            <span className="flex-grow">{sub.name}</span>
            {hasChildren && (
              <ChevronRight
                size={14}
                className={cn(
                  'ml-auto transform transition-transform duration-200',
                  isExpanded && 'rotate-90'
                )}
              />
            )}
          </div>
          {hasChildren && isExpanded && (
            <div className="mt-1 space-y-1">
              {renderSubItemsRecursive(sub.subItems!, parentTags, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  };
  
  

  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-10">
          {/* Mobile menu button */}
          <div className="flex items-center">
              {/* Mobile button: visible only on <md */}
              <div className="md:hidden flex items-center mr-[25px]">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>

              {/* Spacer div: visible only on md and up */}
              <div className="hidden md:flex mr-[46px]"></div>
            </div>

         
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            {tabs.map((tab) => {
              const tagSegment = tab.tags?.join('-') || slugify(tab.name);
              const fullPath = `/docs/${tagSegment}`;
              return (
                <Link
                  key={tab.id}
                  to={fullPath}
                  className={cn(
                    'nav-link text-gray-700 dark:text-gray-300 ',
                    location.pathname === fullPath 
                  )}
                >
                  {tab.label || tab.name}
                </Link>
              );
            })}
            <Link
              to={`/docs/api-reference`}
              className={cn(
                'nav-link text-gray-700 dark:text-gray-300',
                location.pathname === '/docs/api-reference'
              )}
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
          <>
            <div
              ref={menuRef}
              className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-black pt-2 pb-4 shadow-lg"
            >
              <div className="flex items-center justify-between my-3 mx-3">
                <div className="flex items-center space-x-2">
                  <NBoldIcon className="w-10 h-10" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    Bold
                    <span className="text-sm align-super ml-1 text-black dark:text-gray-500">Docs</span>
                  </span>
                </div>
                <button
                  className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
                  onClick={toggleDarkMode}
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>

              <div className="px-4 space-y-2">
                {tabs.map((tab) => {
                    const tagSegment = tab.tags?.join('-') || slugify(tab.name);
                    const fullPath = `/docs/${tagSegment}`;
                    const isExpanded = expandedItems.includes(tab.id);
                    const hasSubItems = !!tab.subItems?.length;
                    return (
                      <div key={tab.id}>
                        <div
                          className={cn(
                            'flex items-center py-2 cursor-pointer transition-colors duration-200  hover:underline',
                            location.pathname === fullPath
                              ? 'text-[#ff0000]  hover:underline'
                              : 'text-gray-700 dark:text-gray-200',
                            'text-base'
                          )}
                          onClick={() => {
                            navigate(fullPath); 
                            setIsMenuOpen(false); 
                            if (hasSubItems) {
                              toggleExpanded(tab.id); 
                            }
                          }}
                          
                        >
                          <span className="flex-grow">{tab.label || tab.name}</span>
                          {hasSubItems && (
                            <ChevronRight
                              size={16}
                              className={cn(
                                'ml-auto transform transition-transform duration-200',
                                isExpanded && 'rotate-90'
                              )}
                            />
                          )}
                        </div>
                        {hasSubItems && isExpanded && (
                          <div className="mt-1 space-y-1">
                            {renderSubItemsRecursive(tab.subItems!, tab.tags || [])}
                          </div>
                        )}
                      </div>
                    );
                  })}
                <Link
                  to={`/docs/api-reference`}
                  className={cn(
                    'block py-2 text-base  hover:underline',
                    location.pathname === '/docs/api-reference'
                      ? 'text-[#ff0000]  hover:underline'
                      : 'text-gray-700 dark:text-gray-200'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  API Reference
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DocsNavbar;