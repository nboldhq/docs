// DocsSidebar.tsx
import React from "react";
import { PanelLeftClose, PanelRightClose } from "lucide-react";
import DocsSidebarItem from "./DocsSidebarItem";

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
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const DocsSidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  toggleSidebar,
  setIsSidebarOpen,
  categories,
  expandedItemId,
  toggleExpanded,
  locationPath,
}) => {
  const renderSidebarItems = (items: Category[]) =>
    items.map((category) => {
      const tagSegment = category.tags?.join("-") || "untagged";
      const fullPath = `/docs/${tagSegment}`;

      return (
        <DocsSidebarItem
          key={category.id}
          icon={category.icon}
          label={category.name}
          path={fullPath}
          isSidebarOpen={isSidebarOpen}
          isActive={locationPath === fullPath}
          hasSubItems={!!category.subItems?.length}
          isExpanded={expandedItemId === category.id}
          onToggle={() => toggleExpanded(category.id)}
          subItems={category.subItems?.map((sub) => {
            const subTitle = sub.name.toLowerCase().replace(/\s+/g, "-");
            const subTags = sub.tags?.join("-") || "untagged";
            return {
              label: sub.name,
              path: `/docs/${subTags}/${subTitle}`,
              subItems: sub.subItems?.map((subSub) => ({
                label: subSub.name,
                path: `/docs/${subTags}/${subTitle}/${subSub.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`,
              })),
            };
          })}
        />
      );
    });

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed top-[73px] left-0  right-28 h-full bg-white  dark:bg-black border-r border-gray-200 dark:border-gray-700 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[79%]"
        } transition-transform duration-300 ease-in-out w-80 z-40`}
      >
        <div
          className={`flex-1 ml-0 transition-all h-[36px]  duration-300 ease-in-out ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          {/* Updated toggle button with dynamic icons */}
          <button
            className="hidden md:flex fixed top-1 left-[17rem] z-50 items-center sm:mt-[18px] md:mt-[18px] lg:mt-[18px] xl:mt-3"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? (
              <>
                <PanelLeftClose className="mr-5" />
              </>
            ) : (
              <PanelRightClose className="mr-5" />
            )}
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
