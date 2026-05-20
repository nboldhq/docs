import React, { useEffect, useState } from 'react';
import { Sun, Moon, User } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { useMsal } from '@azure/msal-react';
import { msalInstance } from '../../../contexts/authConfig';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  collapsed: boolean;
}

const PAGE_TITLES: Record<string, string> = {
  categorytree: 'Categories',
  navigationtab: 'Navigation Tabs',
  storage: 'Storage',
  apireference: 'API Reference',
  file: 'Files',
};

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, collapsed }) => {
  const { accounts } = useMsal();
  const account = accounts[0];
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const location = useLocation();

  const segment = location.pathname.split('/').pop() || '';
  const pageTitle = PAGE_TITLES[segment] ?? 'Dashboard';

  useEffect(() => {
    if (!account) return;
    const getPhoto = async () => {
      try {
        const { accessToken } = await msalInstance.acquireTokenSilent({
          scopes: ['User.Read'],
          account,
        });
        const res = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.ok) setUserPhoto(URL.createObjectURL(await res.blob()));
      } catch {
        /* no photo available */
      }
    };
    getPhoto();
  }, [account]);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 bg-white dark:bg-gray-950 h-[var(--header-height)] z-10 border-b border-gray-200 dark:border-gray-800 main-transition flex items-center justify-between px-5',
        collapsed
          ? 'left-[var(--sidebar-width-collapsed)]'
          : 'left-[var(--sidebar-width)]'
      )}
    >
      <h1 className="text-sm font-semibold text-gray-900 dark:text-white">{pageTitle}</h1>

      <div className="flex items-center gap-3">
        <button
          className="p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden shrink-0">
            {userPhoto ? (
              <img src={userPhoto} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User size={16} className="text-gray-500 dark:text-gray-400" />
            )}
          </div>
          <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300 max-w-[140px] truncate">
            {account?.name || 'User'}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
