import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { NBoldIcon } from '../../Icons/nBoldIcon';
import DocsNavbar from './DocsNavbar';
import DocsSidebarItem from './DocsSidebarItem';
import DocsFooter from './DocsFooter';

type Category = {
  icon: string;
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  author?: string;
  tags?: string[];
  title?: string;
  subItems?: Category[];
};

const DocsLayout: React.FC<{
  children: React.ReactNode;
  categories: Category[];
}> = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [expandedItems, setExpandedItems] = useState<number[]>([]); // Use numbers for consistency
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleExpanded = (itemId: number) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
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

    return roots;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/categories');
        if (!response.ok) throw new Error('Network response was not ok');
        const data: Category[] = await response.json();
        const tree = buildCategoryTree(data);
        setCategories(tree);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  const renderSidebarItems = (items: Category[]) =>
    items.map((category) => {
      const tagSegment = category.tags?.join('-') || 'untagged';
      const fullPath = `/docs/${tagSegment}`;

      return (
        <DocsSidebarItem
          key={category.id}
          icon={category.icon}
          label={category.name}
          path={fullPath}
          isActive={location.pathname === fullPath}
          hasSubItems={category.subItems?.length > 0}
          isExpanded={expandedItems.includes(category.id)} // Compare ids as numbers
          onToggle={() => toggleExpanded(category.id)} // Toggle by id
          subItems={category.subItems?.map((sub) => {
            const subTitle = sub.name.toLowerCase().replace(/\s+/g, '-');
            const subTags = sub.tags?.join('-') || 'untagged';
            return {
              label: sub.name,
              path: `/docs/${subTags}/${subTitle}`,
              subItems: sub.subItems?.map((subSub) => ({
                label: subSub.name,
                path: `/docs/${subTags}/${subTitle}/${subSub.name
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`,
              })),
            };
          })}
        />
      );
    });

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      <div className="flex flex-1 pt-16">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex">
          <aside
            className={`fixed top-0 left-0 h-full bg-white dark:bg-black border-r border-gray-200 dark:border-gray-700 transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out min-w-80 z-40`}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center"></div>
              <button
                className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
                onClick={toggleDarkMode}
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
            <nav className="p-4 overflow-y-auto h-[calc(100%-80px)]">
              {renderSidebarItems(categories)}
            </nav>
          </aside>
          <div
            className={`flex-1 ml-0 transition-all duration-300 ease-in-out ${
              isSidebarOpen ? 'ml-64' : 'ml-0'
            }`}
          >
            <button
              className="fixed top-1 left-4 z-50 flex items-center gap-2 p-2 mt-3"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle Sidebar"
            >
              <div className="flex items-center">
                <NBoldIcon />
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  Bold
                  <span className="text-sm align-super ml-1 text-black dark:text-gray-500">Docs</span>
                </span>
              </div>
            </button>
          </div>
        </div>
        <main className="flex-1">
          <DocsNavbar />
          <div className="max-w-4xl mx-auto mb-8 mt-20 min-h-screen">{children}</div>
          <DocsFooter />
        </main>
      </div>
    </div>
  );
};

export default DocsLayout;
