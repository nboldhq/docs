import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DocsNavbar from "./DocsNavbar";
import DocsFooter from "./DocsFooter";
import TableOfContents from "./TableOfContents";
import { ApiReferenceReact } from "@scalar/api-reference-react";
import DocsSidebar from "./DocsSidebar";
import { Spinner } from "@heroui/react";

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

const DocsLayout: React.FC<{
  children: React.ReactNode;
  categories: Category[];
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ children, isDarkMode, toggleDarkMode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [apiSpec, setApiSpec] = useState<any>(null);
  const [isSpecLoading, setIsSpecLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isApiReference = location.pathname.includes("/api-reference");
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

  const toggleExpanded = (itemId: number) => {
    setExpandedItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  const buildCategoryTree = (flatCategories: Category[]) => {
    const categoryMap: Record<number, Category & { subItems: Category[] }> = {};
    const roots: Category[] = [];

    flatCategories.forEach((cat) => {
      categoryMap[cat.id] = { ...cat, subItems: [] };
    });

    flatCategories.forEach((cat) => {
      if (cat.parentId && categoryMap[cat.parentId]) {
        categoryMap[cat.parentId].subItems.push(categoryMap[cat.id]);
      } else {
        roots.push(categoryMap[cat.id]);
      }
    });

    const filterPublicTree = (nodes: Category[]): Category[] =>
      nodes
        .filter((node) => node.visibility === "public")
        .map((node) => ({
          ...node,
          subItems: filterPublicTree(node.subItems || []),
        }));

    return filterPublicTree(roots);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://${import.meta.env.VITE_ALLOWED_HOST}/api/categories`
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data: Category[] = await response.json();
        const publicCategories = data.filter((cat) => cat.visibility === "public");
        const tree = buildCategoryTree(publicCategories);
        setCategories(tree);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (isApiReference) {
      setIsSpecLoading(true);
      setError(null);
      const fetchApiSpec = async () => {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000);
          const response = await fetch(
            `https://${import.meta.env.VITE_ALLOWED_HOST}/api/spec`,
            { signal: controller.signal }
          );
          clearTimeout(timeoutId);
          if (!response.ok) throw new Error("Failed to fetch API spec");
          const data = await response.json();
          setApiSpec(data);
        } catch (error: any) {
          console.error("Error fetching API spec:", error);
          setError(error.message || "Failed to load API specification");
          setApiSpec(null);
        } finally {
          setIsSpecLoading(false);
        }
      };
      fetchApiSpec();
    } else {
      setIsSpecLoading(false);
      setApiSpec(null);
      setError(null);
    }
  }, [isApiReference]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isSpecEmpty = apiSpec && (
    (!apiSpec.title || apiSpec.title === "") &&
    (!apiSpec.description || apiSpec.description === "") &&
    (!apiSpec.tags || (Array.isArray(apiSpec.tags) && apiSpec.tags.length === 0)) &&
    (!apiSpec['x-tagGroups'] || (Array.isArray(apiSpec['x-tagGroups']) && apiSpec['x-tagGroups'].length === 0)) &&
    (!apiSpec.paths || (apiSpec.paths && Object.keys(apiSpec.paths).length === 0))
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      <div className="flex flex-1">
        <div className="hidden md:block flex">
          <DocsSidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            categories={categories}
            expandedItemId={expandedItemId}
            toggleExpanded={toggleExpanded}
            locationPath={location.pathname}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <main id="page-content" className="flex-1 relative">
          <DocsNavbar
            categories={[]}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            children={undefined}
          />
          {isApiReference ? (
            <div
              className={`mt-20 min-h-screen px-4 lg:px-0 relative ${
                isSidebarOpen ? "ml-0 lg:ml-80" : "ml-0 md:ml-20"
              }`}
            >
              {isSpecLoading ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <Spinner style={{ color: '#921d7f' }} size="lg" />
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4 py-16">
                  <div className="text-6xl mb-6">⚠️</div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                    <span className="p-2 rounded-md text-white bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000]">
                      Error Loading API Specification
                    </span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-xl text-base md:text-lg">
                    {error}. Please try again later or contact support.
                  </p>
                </div>
              ) : isSpecEmpty ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4 py-16">
                  <div className="text-6xl mb-6">🛠️</div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                    <span className="p-2 rounded-md text-white bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000]">
                      API Specification Unavailable
                    </span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-xl text-base md:text-lg">
                    The API specification is currently empty or not properly configured. Please check back later.
                  </p>
                </div>
              ) : (
                <ApiReferenceReact
                  configuration={{
                    spec: { content: apiSpec },
                    darkMode: isDarkMode,
                    hideDarkModeToggle: true,
                    hideClientButton: true,
                  }}
                />
              )}
            </div>
          ) : (
            <div className="flex justify-between">
              {isSidebarOpen ? (
                <>
                  <div
                    className="hidden xl:block lg:w-64 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <div className="mb-8 mt-20 min-h-screen lg:-[87%] xl:w-[47%] relative">
                    {children}
                  </div>
                  <div
                    className="hidden xl:block w-64 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <TableOfContents />
                </>
              ) : (
                <>
                  <div className="mb-8 sm:ml-2 ml-6 md:ml-15 lg:ml-20 mt-20 min-h-screen lg:px-7 w-[90%] md:w-[78%] relative">
                    {children}
                  </div>
                  <div
                    className="hidden xl:block w-64 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <TableOfContents />
                </>
              )}
            </div>
          )}
          <DocsFooter />
        </main>
      </div>
    </div>
  );
};

export default DocsLayout;