import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../../ui/Searchbar";
import { Menu, ChevronRight, Sun, Moon } from "lucide-react";
import { NBoldIcon } from "../../Icons/nBoldIcon";
import { cn } from "../../../utils/cn";
import { ScrollShadow } from "@heroui/react";

interface SubItem {
  id: string;
  name: string;
  tags?: string[];
  parentId?: string | null;
  subItems: SubItem[];
}

interface Category {
  id: string;
  name: string;
  label: string;
  showInNavbar: boolean;
  tags: string[];
  parentId?: string | null;
  subItems: SubItem[];
  visibility: string;
}

const DocsNavbar: React.FC<{
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [allCategories, setAllCategories] = useState<Category[]>([]); // Add this state
  const [navbarTabs, setNavbarTabs] = useState<Category[]>([]); // Rename tabs to navbarTabs

  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `https://${import.meta.env.VITE_ALLOWED_HOST}/api/categories`
        );
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data: Category[] = await res.json();

        const publicCategories = data.filter(
          (cat) => cat.visibility === "public"
        );

        const itemMap = new Map<string, Category>();
        publicCategories.forEach((item) => {
          itemMap.set(item.id, { ...item, subItems: item.subItems || [] });
        });
        const rootCategories: Category[] = [];

        itemMap.forEach((item) => {
          if (item.parentId) {
            const parent = itemMap.get(item.parentId);
            if (parent) {
              parent.subItems.push({ ...item, subItems: item.subItems || [] });
            }
          } else {
            rootCategories.push(item);
          }
        });

        setAllCategories(rootCategories);
        const navbarTabs = rootCategories.filter((cat) => cat.showInNavbar);
        setNavbarTabs(rootCategories.filter((cat) => cat.showInNavbar));
      } catch (err) {
        console.error("Error loading categories:", err);
        setError("Failed to load categories. Please try again later.");
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderSubItemsRecursive = (
    subItems: SubItem[] = [],
    parentTags: string[],
    depth = 1
  ) => {
    return subItems.map((sub) => {
      const subTitle = slugify(sub.name);
      const subTags = sub.tags?.join("-") || parentTags.join("-") || "untagged";
      const subPath = `/docs/${subTags}/${subTitle}`;
      const isExpanded = expandedItems.includes(sub.id);
      const hasChildren = sub.subItems.length > 0;

      return (
        <div key={sub.id} className={cn("ml-4", depth > 1 && "ml-6")}>
          <div
            className={cn(
              "flex items-center py-2 cursor-pointer transition-colors duration-200",
              location.pathname === subPath
                ? "text-red-600 dark:text-red-400"
                : "text-gray-700 dark:text-gray-200",
              "text-sm"
            )}
            onClick={() => {
              if (hasChildren) {
                toggleExpanded(sub.id);
              } else {
                setIsMenuOpen(false);
                navigate(subPath);
              }
            }}
          >
            <span className="flex-grow">{sub.name}</span>
            {hasChildren && (
              <ChevronRight
                size={14}
                className={cn(
                  "ml-auto transform transition-transform duration-200",
                  isExpanded && "rotate-90"
                )}
              />
            )}
          </div>
          {hasChildren && isExpanded && (
            <div className="mt-1 space-y-1">
              {renderSubItemsRecursive(sub.subItems, parentTags, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex items-center justify-between fixed top-0 left-0 right-0 z-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 p-4">
      <Link  className="flex items-center gap-2 hover:opacity-80 transition-opacity" to={"/"}>
        <NBoldIcon />
        <span className="hidden xl:block text-4xl font-bold text-gray-900 dark:text-white">
          Bold
          <span className="text-sm align-super ml-1 text-black dark:text-gray-500">
            Docs
          </span>
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-6">
        {navbarTabs.map((tab) => {
          const tagSegment = tab.tags?.join("-") || slugify(tab.name);
          const fullPath = `/docs/${tagSegment}`;
          return (
            <Link
              key={tab.id}
              to={fullPath}
              className={cn(
                "nav-link py-2 px-3 rounded-lg transition-colors",
                location.pathname === fullPath
                  ? "text-red-600 dark:bg-red-900/20 dark:text-red-400"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              )}
            >
              {tab.label || tab.name}
            </Link>
          );
        })}
        <Link
          to="/docs/api-reference"
          className={cn(
            "nav-link py-2 px-3 rounded-lg transition-colors",
            location.pathname === "/docs/api-reference"
              ? "text-red-600 dark:bg-red-900/20 dark:text-red-400"
              : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          )}
        >
          API Reference
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <div className="w-full ml-5 md:w-auto">
          <SearchBar />
        </div>
        <button
          className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
        <button
          className="block md:hidden p-2 text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      {error && (
        <div className="text-red-600 dark:text-red-400 p-4 text-center">
          {error}
        </div>
      )}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute left-0 right-0 top-[90%] bg-white dark:bg-black pt-2 pb-4 shadow-lg mt-2 z-10"
        >
          <div className="px-4 space-y-2">
            {allCategories.map((tab) => {
              const tagSegment = tab.tags?.join("-") || slugify(tab.name);
              const fullPath = `/docs/${tagSegment}`;
              const isExpanded = expandedItems.includes(tab.id);
              const hasSubItems = tab.subItems.length > 0;

              return (
                <div key={tab.id}>
                  <div
                    className={cn(
                      "flex items-center py-2 px-3 rounded-lg cursor-pointer transition-colors",
                      location.pathname === fullPath
                        ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                      "text-base"
                    )}
                    onClick={() => {
                      if (hasSubItems) {
                        toggleExpanded(tab.id);
                      } else {
                        navigate(fullPath);
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    <span className="flex-grow">{tab.label || tab.name}</span>
                    {hasSubItems && (
                      <ChevronRight
                        size={16}
                        className={cn(
                          "ml-auto transform transition-transform duration-200",
                          isExpanded && "rotate-90"
                        )}
                      />
                    )}
                  </div>
                  {hasSubItems && isExpanded && (
                    <ScrollShadow className="max-h-44 overflow-y-auto hidescrollbar">
                      <div className="mt-1 space-y-1">
                        {renderSubItemsRecursive(tab.subItems, tab.tags || [])}
                      </div>
                    </ScrollShadow>
                  )}
                </div>
              );
            })}
            <Link
              to="/docs/api-reference"
              className={cn(
                "block py-2 px-3 rounded-lg text-base transition-colors",
                location.pathname === "/docs/api-reference"
                  ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              API Reference
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocsNavbar;
