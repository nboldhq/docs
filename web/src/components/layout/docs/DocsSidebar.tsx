import { useState } from 'react';
import { X } from 'lucide-react';
import DocsSidebarItem from './DocsSidebarItem';

const DocsSidebar = ({ items }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed bottom-4 right-4 bg-[#ff0000] text-white p-3 rounded-full shadow-lg z-30"
      >
        {isMobileMenuOpen ? <X size={24} /> : 'Menu'}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static lg:block top-0 left-0 h-full w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-700 z-20 transform transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-4 lg:p-6 overflow-y-auto h-[calc(100vh-5rem)]">
          {items.map((item, index) => (
            <DocsSidebarItem
              key={index}
              {...item}
              isExpanded={expandedItems.includes(item.label)}
              onToggle={() => toggleItem(item.label)}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default DocsSidebar;