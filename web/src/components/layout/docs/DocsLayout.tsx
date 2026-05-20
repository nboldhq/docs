import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DocsNavbar from './DocsNavbar';
import DocsFooter from './DocsFooter';
import TableOfContents from './TableOfContents';
import DocsSidebar from './DocsSidebar';
import { ApiReferenceReact } from '@scalar/api-reference-react';
import { Spinner } from '@heroui/react';

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

const DocsLayout: React.FC<{
  children: React.ReactNode;
  categories?: Category[];
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ children, isDarkMode, toggleDarkMode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [apiSpec, setApiSpec] = useState<any>(null);
  const [isSpecLoading, setIsSpecLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('docs-sidebar-collapsed') === 'true';
  });

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed((v) => {
      const next = !v;
      localStorage.setItem('docs-sidebar-collapsed', String(next));
      return next;
    });
  };
  const location = useLocation();
  const isApiReference = location.pathname.includes('/api-reference');

  const toggleExpanded = (id: number) =>
    setExpandedItemId((prev) => (prev === id ? null : id));

  const buildTree = (flat: Category[]): Category[] => {
    const map: Record<number, Category & { subItems: Category[] }> = {};
    const roots: Category[] = [];

    flat.forEach((c) => { map[c.id] = { ...c, subItems: [] }; });
    flat.forEach((c) => {
      if (c.parentId && map[c.parentId]) {
        map[c.parentId].subItems.push(map[c.id]);
      } else {
        roots.push(map[c.id]);
      }
    });

    const filterPublic = (nodes: Category[]): Category[] =>
      nodes
        .filter((n) => n.visibility === 'public')
        .map((n) => ({ ...n, subItems: filterPublic(n.subItems || []) }));

    return filterPublic(roots);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) throw new Error('Failed');
        const data: Category[] = await res.json();
        setCategories(buildTree(data.filter((c) => c.visibility === 'public')));
      } catch {
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!isApiReference) {
      setApiSpec(null);
      setError(null);
      setIsSpecLoading(false);
      return;
    }
    setIsSpecLoading(true);
    setError(null);
    const fetchSpec = async () => {
      try {
        const controller = new AbortController();
        const tid = setTimeout(() => controller.abort(), 10000);
        const res = await fetch('/api/spec', { signal: controller.signal, cache: 'no-cache' });
        clearTimeout(tid);
        if (!res.ok) throw new Error('Failed to fetch API spec');
        setApiSpec(await res.json());
      } catch (e: any) {
        setError(e.message || 'Failed to load API specification');
        setApiSpec(null);
      } finally {
        setIsSpecLoading(false);
      }
    };
    fetchSpec();
  }, [isApiReference]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isSpecEmpty =
    apiSpec &&
    (!apiSpec.paths || Object.keys(apiSpec.paths).length === 0) &&
    (!apiSpec['x-tagGroups'] || apiSpec['x-tagGroups'].length === 0);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
      <DocsNavbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onMenuToggle={() => setIsMobileOpen(true)}
        onToggleSidebar={toggleSidebarCollapse}
        isSidebarCollapsed={isSidebarCollapsed}
      />

      <div className="flex flex-1">
        <DocsSidebar
          categories={categories}
          expandedItemId={expandedItemId}
          toggleExpanded={toggleExpanded}
          locationPath={location.pathname}
          isMobileOpen={isMobileOpen}
          onMobileClose={() => setIsMobileOpen(false)}
          isCollapsed={isSidebarCollapsed}
        />

        <main id="page-content" className="flex-1 min-w-0">
          {isApiReference ? (
            <div className="min-h-[50vh]">
              {isSpecLoading ? (
                <div className="flex items-center justify-center h-64">
                  <Spinner style={{ color: '#fc035a' }} size="lg" />
                </div>
              ) : error ? (
                <div className="max-w-lg mx-auto text-center px-6 py-24">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Error loading API specification
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {error}. Please try again later or contact support.
                  </p>
                </div>
              ) : isSpecEmpty ? (
                <div className="max-w-lg mx-auto text-center px-6 py-24">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    API specification unavailable
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The API specification is not yet configured.
                  </p>
                </div>
              ) : (
                <ApiReferenceReact
                  key={isDarkMode ? 'dark' : 'light'}
                  configuration={{
                    spec: { content: apiSpec },
                    darkMode: isDarkMode,
                    hideDarkModeToggle: true,
                    hideClientButton: true,
                    customCss: !isDarkMode
                      ? `
                        .dark-mode {
                          color-scheme: light !important;
                          --scalar-background-1: #fff !important;
                          --scalar-background-2: #f6f6f6 !important;
                          --scalar-background-3: #e7e7e7 !important;
                          --scalar-color-1: #2a2f45 !important;
                          --scalar-color-2: #757575 !important;
                          --scalar-color-accent: #0099ff !important;
                          --scalar-border-color: #dfdfdf !important;
                        }
                      `
                      : undefined,
                  }}
                />
              )}
            </div>
          ) : (
            <div className="flex">
              <div className="flex-1 min-w-0 px-8 py-10">
                {children}
              </div>
              <TableOfContents />
            </div>
          )}
        </main>
      </div>

      <DocsFooter />
    </div>
  );
};

export default DocsLayout;
