import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import {
  ChevronLeft,
  ChevronRight,
  ListCollapse,
  LogOut,
  FolderClosed,
  LibraryBig,
  Code,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { NBoldIcon } from '../../Icons/nBoldIcon';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  collapsed: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, collapsed, onClick }) => (
  <li
    className={cn(
      'flex items-center gap-2.5 rounded-md cursor-pointer transition-colors duration-150',
      collapsed ? 'justify-center p-2' : 'px-3 py-2',
      isActive
        ? 'bg-[#fc035a]/8 text-[#fc035a] font-medium'
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
    )}
    onClick={onClick}
    title={collapsed ? label : undefined}
  >
    <span className={cn('shrink-0', isActive ? 'text-[#fc035a]' : 'text-gray-400 dark:text-gray-500')}>
      {icon}
    </span>
    {!collapsed && <span className="text-sm truncate">{label}</span>}
  </li>
);

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname.includes(path);

  const navItems = [
    { path: '/dashboard/categorytree', icon: <ListCollapse size={18} />, label: 'Categories' },
    { path: '/dashboard/navigationtab', icon: <LibraryBig size={18} />, label: 'Navigation Tabs' },
    { path: '/dashboard/storage', icon: <FolderClosed size={18} />, label: 'Storage' },
    { path: '/dashboard/apireference', icon: <Code size={18} />, label: 'API Reference' },
  ];

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 bottom-0 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col z-20 sidebar-transition',
        collapsed ? 'w-[var(--sidebar-width-collapsed)]' : 'w-[var(--sidebar-width)]'
      )}
    >
      <div className="flex items-center h-[var(--header-height)] px-3 border-b border-gray-200 dark:border-gray-800 shrink-0 gap-2">
        {collapsed ? (
          <div className="flex items-center justify-center w-full">
            <NBoldIcon className="w-6 h-auto" />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
              <NBoldIcon className="w-6 h-auto shrink-0" />
              <span className="font-semibold text-gray-900 dark:text-white text-base leading-none truncate">
                Bold
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 shrink-0">Docs</span>
            </div>
            <button
              onClick={() => setCollapsed(true)}
              className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shrink-0"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft size={16} />
            </button>
          </>
        )}
      </div>

      {collapsed && (
        <div className="flex justify-center py-2 border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={() => setCollapsed(false)}
            className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Expand sidebar"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto py-3 px-2 no-scrollbar">
        <ul className="space-y-0.5">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              isActive={isActive(item.path)}
              collapsed={collapsed}
              onClick={() => navigate(item.path)}
            />
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-200 dark:border-gray-800 p-2 shrink-0">
        <div
          className={cn(
            'flex items-center gap-2.5 rounded-md cursor-pointer transition-colors duration-150 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white',
            collapsed ? 'justify-center p-2' : 'px-3 py-2'
          )}
          onClick={() => { logout(); navigate('/login'); }}
          title={collapsed ? 'Logout' : undefined}
        >
          <LogOut size={18} className="shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
