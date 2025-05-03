import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@heroui/react';
import SearchBar from '../../ui/searchbar';
import { Menu, X } from 'lucide-react';

const DocsNavbar: React.FC = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleLogin = () => {
        navigate('/dashboard');
    };

    // Close menu when clicking outside
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
                    <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
                        <Link to="/docs/overview" className="nav-link">
                            Administrator Guide
                        </Link>
                        <Link to="/docs/quick-start" className="nav-link">
                            Catalog Manager Guide
                        </Link>
                        <Link to="/docs/api/rest" className="nav-link">
                            API Reference
                        </Link>
                        <Link to="/docs/no-code" className="nav-link">
                            No-Code
                        </Link>
                    </nav>

                    {/* Search and Login */}
                    <div className="flex items-center gap-4 md:gap-6 flex-1 md:flex-none justify-end pl-5">
                        <div className="w-full md:w-auto">
                            <SearchBar />
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div ref={menuRef} className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-black pt-2 pb-4">
                        <div className="px-4 space-y-4">
                            <Link to="/docs/overview" className="mobile-nav-link">
                                Administrator Guide
                            </Link>
                            <Link to="/docs/quick-start" className="mobile-nav-link">
                                Catalog Manager Guide
                            </Link>
                            <Link to="/docs/api/rest" className="mobile-nav-link">
                                API Reference
                            </Link>
                            <Link to="/docs/no-code" className="mobile-nav-link">
                                No-Code
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default DocsNavbar;