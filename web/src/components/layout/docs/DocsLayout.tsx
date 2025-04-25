import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';
import { NBoldIcon } from '../../Icons/nBoldIcon';
import DocsNavbar from './DocsNavbar';
import DocsSidebarItem from './DocsSidebarItem';
import DocsFooter from './DocsFooter';

type Category = {
  name: string;
  path: string;
  contentPath: string;
  subItems?: Category[];
};

const DocsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(['getting-started']);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  const formatName = (slug: string) =>
  slug
    .replace(/^\d+-/, '') 
    .replace(/-/g, ' ')    
    .replace(/\.md$/, '')  
    .replace(/\b\w/g, (l) => l.toUpperCase()); 

const buildCategoryTree = (files: Record<string, () => Promise<unknown>>): Category[] => {
  const tree: Record<string, Category> = {};

  Object.keys(files).forEach((filePath) => {
    const parts = filePath.split('/');
    const contentIndex = parts.indexOf('docs');
    const relativeParts = parts.slice(contentIndex); 

    if (!relativeParts.length) return;

    const isReadme = relativeParts.at(-1)?.toLowerCase() === 'readme.md';
    const slugParts = relativeParts.slice(1, -1);


    const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, '-');

    const addToTree = (parts: string[], index: number, parentPath: string, parent: Category[] | undefined) => {
      if (index >= parts.length) return;

      const name = formatName(parts[index]);
      const currentPath = parentPath ? `${parentPath}/${slugify(parts[index])}` : slugify(parts[index]);

      let existing = parent!.find((item) => item.name === name);
      if (!existing) {
        existing = {
          name,
          path: `/docs/${currentPath}`,
          contentPath: '',
          subItems: [],
        };
        parent!.push(existing);
      }

      if (index === parts.length - 1 && isReadme) {
        existing.contentPath = filePath;
      }

      addToTree(parts, index + 1, currentPath, existing.subItems);
    };

    if (slugParts.length) {
      addToTree(slugParts, 0, '', tree['root']?.subItems || (tree['root'] = { name: 'root', path: '', contentPath: '', subItems: [] }).subItems);
    }
  });

  return tree['root']?.subItems || [];
};


  useEffect(() => {
    const markdownFiles = import.meta.glob('../../../../../docs/**/*.md');
    console.log('Found markdown files:', Object.keys(markdownFiles));
  
    const tree = buildCategoryTree(markdownFiles);
    setCategories(tree);
  }, []);
  

  const renderSidebarItems = (items: Category[]) =>
    items.map((category) => (
      <DocsSidebarItem
        key={category.path}
        icon=""
        label={category.name}
        path={category.path}
        isActive={location.pathname === category.path}
        hasSubItems={!!category.subItems?.length}
        isExpanded={expandedItems.includes(category.name.toLowerCase().replace(/\s+/g, '-'))}
        onToggle={() =>
          toggleExpanded(category.name.toLowerCase().replace(/\s+/g, '-'))
        }
        subItems={category.subItems?.map((sub) => ({
          label: sub.name,
          path: sub.path,
        }))}
      />
    ));

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
          <div className={`flex-1 ml-0 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
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
