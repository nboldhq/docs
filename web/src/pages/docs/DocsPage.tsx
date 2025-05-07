import React, { useState, useEffect, ReactNode } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import DocsLayout from '../../components/layout/docs/DocsLayout';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Spinner } from '@heroui/react';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { KeyboardShortcut } from '../../components/ui/KeyboardShortCut';
import directive from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import rehypeRaw from 'rehype-raw';
import { ApiReferenceReact } from "@scalar/api-reference-react";
import '../../style.css'
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

interface MarkdownPreviewProps {
  markdown: string;
  theme: string;
}
const ApiReference: React.FC = () => {
  return (
    <div className='w-full'>

      <ApiReferenceReact
        configuration={{
          spec: {
            url: '/OpenApi.yaml',
          },
        }}
        />
   </div>
  )
};

const CategoryDocumentation: React.FC<{ categories: Category[] }> = ({ categories }) => {
  const [category, setCategory] = useState<Category | null>(null);
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

  if (!category) {
    return (
      <div className="flex justify-center items-center h-screen p-8">
        <Spinner color="danger" />
      </div>
    );
  }

  const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
    const processedMarkdown = markdown.replace();

    const isShortcut = (text: string) =>
      /^[A-Za-z]+(\s*\+\s*[A-Za-z]+)+$/.test(text);
      const generateId = (children: ReactNode) => {
        const text = Array.isArray(children)
          ? children.map((child: any) => child?.props?.children || child).join('')
          : children;
        return String(text)
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '');
      };
    return (
      <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, directive, remarkDirectiveRehype]}
      rehypePlugins={[rehypeHighlight, rehypeKatex, rehypeRaw]}
        components={{
          tip: ({ children }) => (
            <div className="my-6 bg-green-50 border-l-4 border-green-500 rounded-lg p-4 dark:bg-gray-800 dark:border-green-400">
              <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                <span className="font-semibold text-lg">💡 Tip</span>
              </div>
              <div className="text-green-900 dark:text-green-200 whitespace-pre-wrap">
                {children}
              </div>
            </div>
          ),
        
          warning: ({ children }) => (
            <div className="my-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4 dark:bg-gray-800 dark:border-yellow-400">
              <div className="flex items-center mb-2 text-yellow-700 dark:text-yellow-300">
                <span className="font-semibold text-lg">⚠️ Warning</span>
              </div>
              <div className="text-yellow-900 dark:text-yellow-200 whitespace-pre-wrap">
                {children}
              </div>
            </div>
          ),
          h1: ({ children, ...props }) => {
            const id = generateId(children);
            return (
              <h1
                id={id}
                className="text-4xl font-bold text-gray-900 dark:text-white mt-12 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700"
                {...props}
              >
                {children}
              </h1>
            );
          },
          h2: ({ children, ...props }) => {
            const id = generateId(children);
            return (
              <h2
                id={id}
                className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-10 mb-6"
                {...props}
              >
                {children}
              </h2>
            );
          },
       
          p: ({ node, children, ...props }) => (
            <p className="text-md text-gray-600 dark:text-gray-400 mb-6 leading-relaxed" {...props}>
              {children}
            </p>
          ),
          ul: ({ ...props }) => (
            <ul className="list-disc list-inside ml-5 mb-6 space-y-3 text-gray-700 dark:text-gray-400" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="list-decimal list-inside ml-5 mb-6 space-y-3 text-gray-700 dark:text-gray-400" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="mb-3 pl-2 text-md marker:text-gray-400 dark:marker:text-gray-600" {...props} />
          ),
          a: ({ ...props }) => (
            <a className="text-[#ff003d] dark:text-[#ff527d] hover:underline font-medium transition-colors duration-200" {...props} />
          ),
          img: ({ ...props }) => (
            <figure className="my-8 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group">
              <img className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105" {...props} />
              {props.alt && (
                <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 px-4 py-2 bg-gray-50 dark:bg-gray-800">
                  {props.alt}
                </figcaption>
              )}
            </figure>
          ),
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 border-[#606060ab] bg-gray-100 dark:bg-gray-800/50 p-6 my-8 rounded-lg text-gray-700 dark:text-gray-300 italic" {...props} />
          ),
          code({ node, className, children, ...props }) {
            const txt = String(children);
            if (isShortcut(txt)) {
              return <KeyboardShortcut combo={txt} />;
            }
            return (
              <code
                className={`${className} bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono`}
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {processedMarkdown}
      </ReactMarkdown>
    );
  };

  return (
    <div className="max-w-4xl mx-4 px-4 sm:px-6 lg:px-8 py-8">
      <MarkdownPreview markdown={category.description || ''} theme="light" />
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
          const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/categories`);
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
          <Route path="/api-reference" element={<ApiReference />} />
          <Route path="/:tags/:title" element={<CategoryDocumentation categories={categories} />} />
          <Route path="/:tags" element={<CategoryDocumentation categories={categories} />} />
          <Route path="*" element={<CategoryDocumentation categories={categories} />} />
        </Routes>

      </DocsLayout>
    );
  };



  export default DocsPage;