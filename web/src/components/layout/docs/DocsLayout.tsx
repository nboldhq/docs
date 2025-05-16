import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NBoldIcon } from '../../Icons/nBoldIcon';
import DocsNavbar from './DocsNavbar';
import DocsFooter from './DocsFooter';
import TableOfContents from './TableOfContents';
import { ApiReferenceReact } from '@scalar/api-reference-react';
import DocsSidebar from './DocsSidebar';

type Category = {
  icon: string;
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  visibility?: string;
  author?: string;
  tags?: string[];
  title?: string;
  subItems?: Category[];
};

const DocsLayout: React.FC<{
   children: React.ReactNode;
   categories: Category[];
   isDarkMode: boolean;             
   toggleDarkMode: () => void;
 }> = ({ children, isDarkMode, toggleDarkMode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isApiReference = location.pathname.includes('/api-reference');
  const [expandedItemId, setExpandedItemId] = React.useState<number | null>(null);

  const toggleExpanded = (itemId: number) => {
    setExpandedItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  const buildCategoryTree = (flatCategories: Category[]) => {
    const categoryMap: Record<number, Category & { subItems: Category[] }> = {};
    const roots: Category[] = [];

    flatCategories.forEach((cat) => {
      categoryMap[cat.id] = { ...cat, subItems: [] };
    });

    flatCategories.forEach((cat) => {
      if (cat.parentId && categoryMap[cat.parentId]) {
        categoryMap[cat.parentId].subItems.push(categoryMap[cat.id]);
      } else {
        roots.push(categoryMap[cat.id]);
      }
    });

    const filterPublicTree = (nodes: Category[]): Category[] =>
      nodes
        .filter((node) => node.visibility === 'public')
        .map((node) => ({
          ...node,
          subItems: filterPublicTree(node.subItems || []),
        }));

    return filterPublicTree(roots);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/categories`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data: Category[] = await response.json();
        const publicCategories = data.filter((cat) => cat.visibility === 'public');
        const tree = buildCategoryTree(publicCategories);
        setCategories(tree);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(()=>{
        console.log('dark mode layout',isDarkMode)
        console.log('dark mode layout 2 ',toggleDarkMode)
    },[])

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      <div className="flex flex-1">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex">
          <DocsSidebar
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              categories={categories}
              expandedItemId={expandedItemId}
              toggleExpanded={toggleExpanded}
              locationPath={location.pathname}
            />
          <div
            className={`flex-1 ml-0 transition-all duration-300 ease-in-out ${
              isSidebarOpen ? 'ml-64' : 'ml-0'
            }`}
          >
           <button
              className="hidden md:flex fixed top-1 left-4 z-50 items-center sm:mt-[18px] md:mt-[18px] lg:mt-[18px] xl:mt-3"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle Sidebar"
            >
              <NBoldIcon />

              {/* Always show full text on xl and above */}
              <span className="hidden xl:block text-4xl font-bold text-gray-900 dark:text-white">
                Bold
                <span className="text-sm align-super ml-1 text-black dark:text-gray-500">Docs</span>
              </span>

              {/* Show text only when sidebar is open and screen is less than xl */}
              {isSidebarOpen && (
                <span className="ml-2 text-4xl font-bold text-gray-900 dark:text-white xl:hidden">
                  Bold
                  <span className="text-sm align-super ml-1 text-black dark:text-gray-500">Docs</span>
                </span>
              )}
            </button>


          </div>
        </div>
        <main id="page-content" className="flex-1 relative">
        <DocsNavbar  categories={[]} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} children={undefined} />
        {isApiReference ? (
            <div className={`mt-20 min-h-screen px-4 lg:px-0 relative ${isSidebarOpen ? 'ml-10':'ml-2'}`}>
              <ApiReferenceReact
                configuration={{
                  spec: { url: 'https://skan-dev.nbold.dev/api/spec' },
                  darkMode: isDarkMode,
                  hideDarkModeToggle:true,
                  hideClientButton:true,

                }}
              />
            </div>
          ) : (
            <>
             <div
                className={` mb-8 mt-20 min-h-screen px-4 lg:px-7 relative ${
                  isSidebarOpen ? 'mx-auto md:ml-[220px] max-w-4xl px-12' : '   md:ml-[274px] md:mr-[50px] max-w-5xl'
                }`}
              >
                {children}
              </div>
              <TableOfContents />
            </>
          )}
          <DocsFooter />

        </main>
      </div>
    </div>
  );
};

export default DocsLayout;