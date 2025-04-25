import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "../../../utils/cn";

interface DocsSidebarItemProps {
    icon: React.ReactNode;
    label: string;
    path: string;
    isActive: boolean;
    hasSubItems?: boolean;
    isExpanded?: boolean;
    onToggle?: () => void;
    subItems?: Array<{ label: string; path: string }>;
    description?: string;
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
  
    return (
      <div className="mb-1">
       <div
        className={cn(
            "flex items-center px-4 py-2 rounded-md cursor-pointer transition-colors duration-200",
            isActive
            ? "bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-white"
            : "text-gray-700 hover:bg-gradient-to-r hover:from-[#921d7f] hover:via-[#c1124a] hover:to-[#ff0000] hover:text-white"
        )}
        onClick={() => {
            navigate(path); // Always navigate
            if (hasSubItems) onToggle?.(); // Also expand if needed
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
            {subItems?.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center px-4 py-2 rounded-md cursor-pointer text-sm transition-colors duration-200",
                  location.pathname === item.path
                    ? "text-[#ff0000]"
                    : "text-gray-600 hover:text-[#ff0000]"
                )}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

export default DocsSidebarItem;