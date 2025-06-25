import React, { useEffect, useState } from 'react';
import { Bell, Search, Sun, Moon, User } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { useMsal } from '@azure/msal-react'; 
import { msalInstance } from '../../../contexts/authConfig';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  collapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, collapsed }) => {
  const { accounts } = useMsal(); 
  const account = accounts[0]; 
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  useEffect(() => {
    const getProfilePhoto = async () => {
      if (account) {
        try {
          const response = await msalInstance.acquireTokenSilent({
            scopes: ["User.Read"],
            account: account
          });

          const photoResponse = await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", {
            headers: {
              Authorization: `Bearer ${response.accessToken}`
            }
          });

          if (photoResponse.ok) {
            const photoBlob = await photoResponse.blob();
            const photoUrl = URL.createObjectURL(photoBlob);
            setUserPhoto(photoUrl);
          }
        } catch (error) {
          console.error("Error fetching user photo:", error);
        }
      }
    };

    getProfilePhoto();
  }, [account]);

  return (
    <header className={cn(
      "fixed top-0 right-0 bg-white dark:bg-black h-[var(--header-height)] z-10 border-b border-gray-200 dark:border-gray-700 main-transition flex items-center justify-between px-4",
      collapsed ? "left-[var(--sidebar-width-collapsed)]" : "left-[var(--sidebar-width)]"
    )}>
      <div className="flex-1 max-w-md">
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        {/* User Profile */}
        <div className="flex items-center cursor-pointer">
        <div className="h-9 w-9 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center overflow-hidden">
          {userPhoto ? (
            <img 
              src={userPhoto} 
              alt="User profile" 
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="h-5 w-5 text-primary-700 dark:text-primary-300" />
          )}
        </div>
        <div className="ml-3 hidden md:block">
          <p className="text-sm font-medium">
            {account?.name || 'User'}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
           {/* {account?.username || account?.idTokenClaims?.preferred_username || 'Admin'}*/}
          </p>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;