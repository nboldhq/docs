import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../../ui/Searchbar';
import { Menu, Sun, Moon, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { NBoldIcon } from '../../Icons/nBoldIcon';
import { cn } from '../../../utils/cn';

interface Category {
  id: string;
  name: string;
  label: string;
  showInNavbar: boolean;
  tags: string[];
  visibility: string;
}

const DocsNavbar: React.FC<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onMenuToggle?: () => void;
  onToggleSidebar?: () => void;
  isSidebarCollapsed?: boolean;
  children?: React.ReactNode;
  categories?: any[];
}> = ({ isDarkMode, toggleDarkMode, onMenuToggle, onToggleSidebar, isSidebarCollapsed }) => {
  const [navbarTabs, setNavbarTabs] = useState<Category[]>([]);
  const location = useLocation();

  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) return;
        const data: Category[] = await res.json();
        setNavbarTabs(
          data.filter((c) => c.visibility === 'public' && c.showInNavbar)
        );
      } catch {
        /* ignore */
      }
    };
    fetchCategories();
  }, []);

  return (
    <header className="sticky top-0 z-30 h-[60px] flex items-center bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 px-4 gap-3 shrink-0">
      {/* Mobile: open drawer */}
      <button
        className="md:hidden p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={onMenuToggle}
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Desktop: collapse / expand sidebar */}
      {onToggleSidebar && (
        <button
          className="hidden md:flex p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={onToggleSidebar}
          aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isSidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>
      )}

      <Link
        to="/"
        className="flex items-center gap-1.5 hover:opacity-80 transition-opacity shrink-0"
      >
        <NBoldIcon className="w-7 h-auto" />
        <span className="font-semibold text-gray-900 dark:text-white text-lg leading-none">
          Bold
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Docs</span>
      </Link>

      <nav className="hidden md:flex items-center gap-0.5 ml-6">
        {navbarTabs.map((tab) => {
          const segment = tab.tags?.join('-') || slugify(tab.name);
          const href = `/${segment}`;
          const isActive = location.pathname.startsWith(href);
          return (
            <Link
              key={tab.id}
              to={href}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm transition-colors',
                isActive
                  ? 'text-[#fc035a] bg-[#fc035a]/8 font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
            >
              {tab.label || tab.name}
            </Link>
          );
        })}
        <Link
          to="/api-reference"
          className={cn(
            'px-3 py-1.5 rounded-md text-sm transition-colors',
            location.pathname === '/api-reference'
              ? 'text-[#fc035a] bg-[#fc035a]/8 font-medium'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
          )}
        >
          API Reference
        </Link>
      </nav>

      <div className="flex items-center gap-2 ml-auto">
        <SearchBar />
        <button
          className="p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};

export default DocsNavbar;
