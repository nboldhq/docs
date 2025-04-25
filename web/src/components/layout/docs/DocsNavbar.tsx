
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@heroui/react';
import SearchBar from '../../ui/searchbar';

const DocsNavbar: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
      navigate('/dashboard');
    };

    return (
      <div className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
      <div className="pl-64 max-w-screen-xl mx-auto flex flex-wrap items-center justify-between h-auto sm:h-[84px] px-4 sm:px-6 lg:px-10 py-4 sm:py-0">
        
        <nav className="hidden md:flex items-center space-x-6 mx-auto">
          <Link to="/docs/overview" className="text-gray-700 hover:text-[#ff003d] dark:text-gray-300 dark:hover:text-[#ff003d] font-medium">
            Administrator Guide
          </Link>
          <Link to="/docs/quick-start" className="text-gray-700 hover:text-[#ff003d] dark:text-gray-300 dark:hover:text-[#ff003d] font-medium">
            Catalog Manager Guide
          </Link>
          <Link to="/docs/api/rest" className="text-gray-700 hover:text-[#ff003d] dark:text-gray-300 dark:hover:text-[#ff003d] font-medium">
            API Reference
          </Link>
          <Link to="/docs/no-code" className="text-gray-700 hover:text-[#ff003d] dark:text-gray-300 dark:hover:text-[#ff003d] font-medium">
            No-Code
          </Link>
        </nav>
    
        <div className="flex items-center space-x-4">
          <SearchBar />
          <Button
              className="border-gradient text-white min-h-10 max-h-15"
              onClick={handleLogin}
            >
              Login
            </Button>
        </div>
      </div>
    </div>
    
        
    );
  };
export default DocsNavbar;

