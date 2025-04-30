import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  ChevronLeft,
  ChevronRight,
  ListCollapse,
  LogOut,
  FolderClosed
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { NBoldIcon } from '../../Icons/nBoldIcon';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  collapsed: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  isActive = false, 
  collapsed,
  onClick 
}) => {
  return (
      <li 
        className={cn(
          "flex items-center px-3 py-3 cursor-pointer rounded-md mb-1 group transition-colors duration-200",
          isActive 
            ? "bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-white" 
            : "text-gray-700 hover:bg-gradient-to-r hover:from-[#921d7f] hover:via-[#c1124a] hover:to-[#ff0000] hover:text-white"
        )}
        onClick={onClick}
      >
        <div className={cn(
          "flex items-center",
          collapsed ? "justify-center w-full" : ""
        )}>
         <span className={cn(
            "flex-shrink-0",
            isActive
              ? "text-white" // Icon matches white text on active gradient background
              : "text-[#c1124a] group-hover:text-white" // Icon uses theme primary color, turns white on hover
          )}>
            {icon}
          </span>
          {!collapsed && (
            <span className={cn(
              "ml-3 font-medium transition-opacity duration-200",
              collapsed ? "opacity-0" : "opacity-100"
            )}>
              {label}
            </span>
          )}
        </div>
      </li>
  );
};

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 bottom-0 bg-white dark:bg-black shadow-md z-10 sidebar-transition",
        collapsed ? "w-[var(--sidebar-width-collapsed)]" : "w-[var(--sidebar-width)]",
        "border-r border-gray-200 dark:border-gray-700 flex flex-col"
      )}
    >
      <div className="flex items-center justify-between h-[var(--header-height)] px-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
               <NBoldIcon />
            {!collapsed && (
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
              Bold
              <span className="text-sm align-super ml-1 text-black dark:text-gray-500">Docs</span>
              </span>
            )}
          </div>

        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <ul>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            isActive={activeItem === 'dashboard'}
            collapsed={collapsed}
            onClick={() => {
              handleItemClick('dashboard');
              navigate('/dashboard');
            }}
          />

          <SidebarItem
            icon={<ListCollapse size={20} />}
            label="Categories"
            isActive={activeItem === 'categories'}
            collapsed={collapsed}
            onClick={() => {
              handleItemClick('categories');
              navigate('/dashboard/categorytree');
            }}
          />
          
           <SidebarItem
            icon={<FolderClosed size={20} />}
            label="Storage"
            isActive={activeItem === 'storage'}
            collapsed={collapsed}
            onClick={() => {
              handleItemClick('storage');
              navigate('/dashboard/storage');
            }}
          />
        </ul>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div 
          className={cn(
            "flex items-center cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2",
            collapsed ? "justify-center" : ""
          )}
          onClick={handleLogout}
        >
          <LogOut size={20} className="text-gray-500 dark:text-gray-400" />
          {!collapsed && <span className="ml-3 font-medium">Logout</span>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;