import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "../../../utils/cn";

interface SidebarSubItem {
  label: string;
  path: string;
  subItems?: Array<{
    label: string;
    path: string;
    subItems?: Array<{
      label: string;
      path: string;
      subItems?: any[]; 
    }>;
  }>;
  }

interface DocsSidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive: boolean;
  hasSubItems?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  subItems?: SidebarSubItem[];
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
  }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [expandedSubItems, setExpandedSubItems] = React.useState<string[]>([]);

    const toggleSubItem = (label: string) => {
      setExpandedSubItems((prev) =>
        prev.includes(label)
          ? prev.filter((item) => item !== label)
          : [...prev, label]
      );
    };
    return (
      <div className="mb-1">
       <div
        className={cn(
            "flex items-center px-4 py-2 rounded-md cursor-pointer transition-colors duration-200",
            isActive
            ? "bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-white"
            : "dark:text-white hover:bg-gradient-to-r hover:from-[#921d7f] hover:via-[#c1124a] hover:to-[#ff0000] hover:text-white"
        )}
        onClick={() => {
            navigate(path); 
            if (hasSubItems) onToggle?.(); 
        }}
        >
          <span className="flex-shrink-0 mr-3">{icon}</span>
          <span className="flex-grow font-medium">{label}</span>
          {hasSubItems && (
            <span
              className="ml-auto transform transition-transform duration-200"
              style={{ transform: isExpanded ? "rotate(90deg)" : "none" }}
            >
              <ChevronRight size={16} />
            </span>
          )}
        </div>
        
        {hasSubItems && isExpanded && (
          <div className="ml-10 mt-1 space-y-1">
            {subItems?.map((item, index) => {
              const isSubExpanded = expandedSubItems.includes(item.label);
              const hasNested = !!item.subItems && item.subItems.length > 0;

              return (
                <div key={index}>
                  <div
                    className={cn(
                      "flex items-center px-4 py-2 rounded-md cursor-pointer text-sm transition-colors duration-200",
                      location.pathname === item.path
                        ? "text-[#ff0000]"
                        : "dark:text-white hover:text-[#ff0000]"
                    )}
                    onClick={() => {
                      navigate(item.path);
                      if (hasNested) toggleSubItem(item.label);
                    }}
                  >
                    <span className="flex-grow">{item.label}</span>
                    {hasNested && (
                      <ChevronRight
                        size={14}
                        className={cn(
                          "ml-auto transform transition-transform duration-200",
                          isSubExpanded && "rotate-90"
                        )}
                      />
                    )}
                  </div>

                  {hasNested && isSubExpanded && (
                    <div className="ml-6">
                      {item.subItems?.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className={cn(
                            "flex items-center px-4 py-1 rounded-md cursor-pointer text-sm transition-colors duration-200",
                            location.pathname === sub.path
                              ? "text-[#ff0000]"
                              : "dark:text-white hover:text-[#ff0000]"
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