import React from 'react';
import { Bell, Search, Sun, Moon, User } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  collapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, collapsed }) => {
  return (
    <header className={cn(
      "fixed top-0 right-0 bg-white dark:bg-black h-[var(--header-height)] z-10 border-b border-gray-200 dark:border-gray-700 main-transition flex items-center justify-between px-4",
      collapsed ? "left-[var(--sidebar-width-collapsed)]" : "left-[var(--sidebar-width)]"
    )}>
      <div className="flex-1 max-w-md">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="search"
              className="pl-10 pr-4 w-full py-2 rounded-[4.5rem] border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#18181B] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 "
            placeholder="Search..."
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        
        <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center cursor-pointer">
          <div className="h-9 w-9 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-700 dark:text-primary-300">
            <User className="h-5 w-5" />
          </div>
          <div className="ml-3 hidden md:block">
            <p className="text-sm font-medium">User</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;