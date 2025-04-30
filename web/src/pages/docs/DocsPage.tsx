  import React, { useState, useEffect } from 'react';
  import { Routes, Route, useParams } from 'react-router-dom';
  import DocsLayout from '../../components/layout/docs/DocsLayout';
  import ReactMarkdown from 'react-markdown';
  import remarkGfm from 'remark-gfm';
  import { Spinner } from '@heroui/react';

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


  const CategoryDocumentation: React.FC<{ categories: Category[] }> = ({ categories }) => {
    const [category, setCategory] = useState<Category | null>(null);
    const markdownContent = category ? category.description : '';
    const { '*': wildcard } = useParams();
    const segments = wildcard?.split('/') || [];
    

    useEffect(() => {
      if (categories.length > 0 && segments.length > 0) {
        const slug = segments[segments.length - 1];
        const matched = categories.find((cat) => {
          const formattedSlug = (cat.name || '').toLowerCase().replace(/\s+/g, '-');
          return formattedSlug === slug;
        });
        setCategory(matched || null);
      }
    }, [categories, segments]);

    if (!category)return (
      <div className="flex justify-center items-center h-screen p-8">
        <Spinner color="danger" />
      </div>
    );
    return (
      <div className="prose dark:prose-invert max-w-none">
        {category.description && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ ...props }) => <h1 className="text-4xl font-bold mb-6" {...props} />,
              h2: ({ ...props }) => <h2 className="text-2xl font-semibold mb-4" {...props} />,
              p: ({ ...props }) => <p className="text-gray-600 dark:text-gray-300 mb-4" {...props} />,
              ul: ({ ...props }) => <ul className="list-disc list-inside ml-5 mb-4" {...props} />,
              li: ({ ...props }) => <li className="mb-2" {...props} />,
              a: ({ ...props }) => <a className="text-[#ff003d] hover:underline" {...props} />,
              img: ({ ...props }) => (
                <img
                  className="w-full h-auto object-cover rounded-xl border border-gray-300 dark:border-gray-700 mb-8"
                  {...props}
                />
              ),
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        )}
      </div>
    );
  };


  const DocsPage: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);

    const toggleDarkMode = () => {
      setIsDarkMode((prev) => !prev);
      document.documentElement.classList.toggle('dark');
    };

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/categories');
          if (!response.ok) throw new Error('Network error');
          const data = await response.json();
          setCategories(data);
        } catch (e) {
          console.error('Failed to fetch categories:', e);
        }
      };

      fetchCategories();
    }, []);

    return (
      <DocsLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} categories={categories}>
        <Routes>
          <Route path="/:tags" element={<CategoryDocumentation categories={categories} />} />
          <Route path="/:tags/:title" element={<CategoryDocumentation categories={categories} />} />
          <Route path="/*" element={<CategoryDocumentation categories={categories} />} />
        </Routes>
      </DocsLayout>
    );
  };



  export default DocsPage;