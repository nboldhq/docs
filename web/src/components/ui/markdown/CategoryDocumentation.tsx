import { Spinner } from "@heroui/react";
import { useState, useEffect, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import directive from 'remark-directive';
import rehypeRaw from 'rehype-raw';
import { KeyboardShortcut } from "../KeyboardShortCut";



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
                  className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-12 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700"
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
            table: ({ children }) => (
              <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="min-w-full text-sm bg-white dark:bg-[#18181B]">
                  {children}
                </table>
              </div>
             ),
            
              thead: ({ children, ...props }) => (
                <thead className="bg-gray-50 dark:bg-[#18181B]">{children}</thead>
              ),
              tbody: ({ children, ...props }) => (
                <tbody className="divide-y divide-gray-200 dark:divide-bg-[#18181B]">
                  {children}
                </tbody>
              ),
              tr: ({ children, ...props }) => (
                <tr className="even:bg-gray-50 even:dark:bg-[#18181B]">{children}</tr>
              ),
              th: ({ children, ...props }) => (
                <th
                  className="px-4 py-3 text-left font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
                  {...props}
                >
                  {children}
                </th>
              ),
              td: ({ children, ...props }) => (
                <td
                  className="px-4 py-3 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700"
                  {...props}
                >
                  {children}
                </td>
              ),
         
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
              <blockquote className="border-l-4 border-[#606060ab] bg-gray-100 dark:bg-[#18181B] p-6 my-8 rounded-lg text-gray-700 dark:text-gray-300 italic" {...props} />
            ),
            code({ node, className, children, ...props }) {
              const txt = String(children);
              if (isShortcut(txt)) {
                return <KeyboardShortcut combo={txt} />;
              }
              return (
                <code
                  className={`${className} break-words bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded font-mono`}
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
      <div className="w-full px-4 sm:px-6 md:px-0 max-w-7xl mx-auto py-8">
        <MarkdownPreview markdown={category.description || ''} theme="" />
      </div>
    );
  };
export default CategoryDocumentation