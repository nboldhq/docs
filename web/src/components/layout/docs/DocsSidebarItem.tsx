import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { CategoryIcon, ICON_MAP, IconName } from '../../../utils/icon-map';

interface SubItem {
  label: string;
  path: string;
  subItems?: Array<{ label: string; path: string }>;
}

interface DocsSidebarItemProps {
  icon?: string;
  label: string;
  path: string;
  isActive: boolean;
  hasSubItems?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  subItems?: SubItem[];
  locationPath: string;
  isCollapsed?: boolean;
}

const DocsSidebarItem: React.FC<DocsSidebarItemProps> = ({
  icon,
  label,
  path,
  isActive,
  hasSubItems,
  isExpanded,
  onToggle,
  subItems,
  locationPath,
  isCollapsed,
}) => {
  const navigate = useNavigate();
  const [expandedSubs, setExpandedSubs] = React.useState<string[]>([]);

  const toggleSub = (key: string) =>
    setExpandedSubs((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );

  if (isCollapsed) {
    const hasValidIcon = !!icon && !!ICON_MAP[icon as IconName];
    return (
      <div title={label} className="px-2 py-0.5">
        <button
          onClick={() => navigate(path)}
          className={cn(
            'flex items-center justify-center w-9 h-9 rounded-md mx-auto transition-colors duration-150',
            isActive
              ? 'bg-[#fc035a]/8 text-[#fc035a]'
              : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
          )}
        >
          {hasValidIcon ? (
            <CategoryIcon name={icon!} size={16} />
          ) : (
            <span className="text-[11px] font-semibold leading-none select-none">
              {label.charAt(0).toUpperCase()}
            </span>
          )}
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors duration-150 text-sm',
          isActive
            ? 'bg-[#fc035a]/8 text-[#fc035a] font-medium'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white font-medium'
        )}
        onClick={() => {
          if (hasSubItems) onToggle?.();
          navigate(path);
        }}
      >
        {icon && (
          <span className="shrink-0 flex items-center justify-center w-4 h-4 opacity-60">
            <CategoryIcon name={icon} size={13} />
          </span>
        )}
        <span className="flex-1 truncate">{label}</span>
        {hasSubItems && (
          <ChevronRight
            size={14}
            className={cn(
              'shrink-0 text-gray-400 transition-transform duration-150',
              isExpanded && 'rotate-90'
            )}
          />
        )}
      </div>

      {hasSubItems && isExpanded && (
        <div className="ml-3 mt-0.5 mb-1 border-l border-gray-200 dark:border-gray-800 pl-3 space-y-0.5">
          {subItems?.map((item, i) => {
            const isSubActive = locationPath === item.path;
            const isSubExpanded = expandedSubs.includes(item.label);
            const hasNested = !!item.subItems?.length;

            return (
              <div key={i}>
                <div
                  className={cn(
                    'flex items-center gap-1 px-2 py-1.5 rounded-md cursor-pointer transition-colors duration-150 text-sm',
                    isSubActive
                      ? 'text-[#fc035a] bg-[#fc035a]/6'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
                  )}
                  onClick={() => {
                    navigate(item.path);
                    if (hasNested) toggleSub(item.label);
                  }}
                >
                  <span className="flex-1 truncate">{item.label}</span>
                  {hasNested && (
                    <ChevronRight
                      size={12}
                      className={cn(
                        'shrink-0 text-gray-400 transition-transform duration-150',
                        isSubExpanded && 'rotate-90'
                      )}
                    />
                  )}
                </div>

                {hasNested && isSubExpanded && (
                  <div className="ml-2 mt-0.5 space-y-0.5">
                    {item.subItems?.map((sub, j) => (
                      <div
                        key={j}
                        className={cn(
                          'px-2 py-1.5 rounded-md cursor-pointer transition-colors duration-150 text-xs',
                          locationPath === sub.path
                            ? 'text-[#fc035a]'
                            : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60'
                        )}
                        onClick={() => navigate(sub.path)}
                      >
                        {sub.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DocsSidebarItem;
