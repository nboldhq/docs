import React from 'react';
import { cn } from '../../../utils/cn';
import DocsSidebarItem from './DocsSidebarItem';

type Category = {
  icon: string;
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  visibility?: string;
  tags?: string[];
  subItems?: Category[];
};

interface SidebarProps {
  categories: Category[];
  expandedItemId: number | null;
  toggleExpanded: (id: number) => void;
  locationPath: string;
  isMobileOpen: boolean;
  onMobileClose: () => void;
  isCollapsed: boolean;
}

const SidebarNav: React.FC<{
  categories: Category[];
  expandedItemId: number | null;
  toggleExpanded: (id: number) => void;
  locationPath: string;
  isCollapsed?: boolean;
}> = ({ categories, expandedItemId, toggleExpanded, locationPath, isCollapsed }) => (
  <nav className={cn('space-y-0.5', isCollapsed ? 'py-3' : 'p-3')}>
    {categories.map((cat) => {
      const tagSegment = cat.tags?.join('-') || 'untagged';
      const fullPath = `/${tagSegment}`;
      const isActive = Boolean(
        locationPath === fullPath ||
          cat.subItems?.some((sub) =>
            locationPath.startsWith(`/${sub.tags?.join('-') || 'untagged'}/`)
          )
      );

      return (
        <DocsSidebarItem
          key={cat.id}
          icon={cat.icon}
          label={cat.name}
          path={fullPath}
          isActive={isActive}
          hasSubItems={!!cat.subItems?.length}
          isExpanded={expandedItemId === cat.id}
          onToggle={() => toggleExpanded(cat.id)}
          locationPath={locationPath}
          isCollapsed={isCollapsed}
          subItems={cat.subItems?.map((sub) => {
            const subTitle = sub.name.toLowerCase().replace(/\s+/g, '-');
            const subTags = sub.tags?.join('-') || 'untagged';
            return {
              label: sub.name,
              path: `/${subTags}/${subTitle}`,
              subItems: sub.subItems?.map((s) => ({
                label: s.name,
                path: `/${subTags}/${subTitle}/${s.name.toLowerCase().replace(/\s+/g, '-')}`,
              })),
            };
          })}
        />
      );
    })}
  </nav>
);

const DocsSidebar: React.FC<SidebarProps> = ({
  categories,
  expandedItemId,
  toggleExpanded,
  locationPath,
  isMobileOpen,
  onMobileClose,
  isCollapsed,
}) => {
  const navProps = { categories, expandedItemId, toggleExpanded, locationPath };

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-72 bg-white dark:bg-neutral-950 border-r border-gray-200 dark:border-gray-800 z-40 transform transition-transform duration-200 ease-out md:hidden overflow-y-auto no-scrollbar',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="h-[60px] flex items-center px-4 border-b border-gray-200 dark:border-gray-800 shrink-0">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Navigation
          </span>
        </div>
        <SidebarNav {...navProps} />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          'hidden md:flex flex-col sticky top-[60px] self-start max-h-[calc(100vh-60px)] border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 transition-all duration-200 ease-out shrink-0',
          isCollapsed ? 'w-14' : 'w-64'
        )}
      >
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <SidebarNav {...navProps} isCollapsed={isCollapsed} />
        </div>
      </aside>
    </>
  );
};

export default DocsSidebar;
