// DocsSidebar.tsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import DocsSidebarItem from './DocsSidebarItem';

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

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  categories: Category[];
  expandedItemId: number | null;
  toggleExpanded: (itemId: number) => void;
  locationPath: string;
}

const DocsSidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
  categories,
  expandedItemId,
  toggleExpanded,
  locationPath,
}) => {
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
          isActive={locationPath === fullPath}
          hasSubItems={!!category.subItems?.length}
          isExpanded={expandedItemId === category.id}
          onToggle={() => toggleExpanded(category.id)}
          subItems={category.subItems?.map((sub) => {
            const subTitle = sub.name.toLowerCase().replace(/\s+/g, '-');
            const subTags = sub.tags?.join('-') || 'untagged';
            return {
              label: sub.name,
              path: `/docs/${subTags}/${subTitle}`,
              subItems: sub.subItems?.map((subSub) => ({
                label: subSub.name,
                path: `/docs/${subTags}/${subTitle}/${subSub.name.toLowerCase().replace(/\s+/g, '-')}`,
              })),
            };
          })}
        />
      );
    });

  return (
    <>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 lg:hidden" onClick={toggleSidebar} />
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-white dark:bg-black border-r border-gray-200 dark:border-gray-700 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-72 z-40`}
      >
        <div className="flex items-center justify-between p-[18px] border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center" />
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
    </>
  );
};

export default DocsSidebar;
