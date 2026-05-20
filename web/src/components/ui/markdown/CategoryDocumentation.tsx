import React, { useState, useEffect } from 'react';
import { Spinner } from '@heroui/react';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import directive from 'remark-directive';
import rehypeRaw from 'rehype-raw';
import MermaidDiagram from './MermaidDiagram';
import { Lightbulb, AlertTriangle, Copy, Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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

const generateId = (children: React.ReactNode): string => {
  const text = Array.isArray(children)
    ? children.map((c: any) => (typeof c === 'string' ? c : c?.props?.children || '')).join('')
    : String(children ?? '');
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, directive, remarkDirectiveRehype]}
      rehypePlugins={[rehypeHighlight, rehypeKatex, rehypeRaw]}
      components={{
        tip: ({ children }: any) => (
          <div className="my-6 rounded-lg border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-4">
            <div className="flex items-center gap-2 mb-2 text-green-700 dark:text-green-400">
              <Lightbulb size={14} className="shrink-0" />
              <span className="font-semibold text-sm">Tip</span>
            </div>
            <div className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
              {children}
            </div>
          </div>
        ),
        warning: ({ children }: any) => (
          <div className="my-6 rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30 p-4">
            <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400">
              <AlertTriangle size={14} className="shrink-0" />
              <span className="font-semibold text-sm">Warning</span>
            </div>
            <div className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              {children}
            </div>
          </div>
        ),
        h1: ({ children }: any) => (
          <h1
            id={generateId(children)}
            className="text-[28px] font-bold text-gray-900 dark:text-white mt-10 mb-5 pb-3 border-b border-gray-200 dark:border-neutral-800 first:mt-0 scroll-mt-20"
          >
            {children}
          </h1>
        ),
        h2: ({ children }: any) => (
          <h2
            id={generateId(children)}
            className="text-xl font-semibold text-gray-900 dark:text-white mt-10 mb-4 pb-2 border-b border-gray-200 dark:border-neutral-800 scroll-mt-20"
          >
            {children}
          </h2>
        ),
        h3: ({ children }: any) => (
          <h3
            id={generateId(children)}
            className="text-[17px] font-semibold text-gray-900 dark:text-white mt-8 mb-3 scroll-mt-20"
          >
            {children}
          </h3>
        ),
        h4: ({ children }: any) => (
          <h4
            id={generateId(children)}
            className="text-[15px] font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2 scroll-mt-20"
          >
            {children}
          </h4>
        ),
        p: ({ children }: any) => (
          <p className="text-[15px] text-gray-600 dark:text-gray-400 mb-5 leading-7">
            {children}
          </p>
        ),
        ul: ({ children }: any) => (
          <ul className="mb-5 pl-5 space-y-1.5 list-disc marker:text-gray-400 dark:marker:text-gray-600">
            {children}
          </ul>
        ),
        ol: ({ children }: any) => (
          <ol className="mb-5 pl-5 space-y-1.5 list-decimal marker:text-gray-500 dark:marker:text-gray-500">
            {children}
          </ol>
        ),
        li: ({ children }: any) => (
          <li className="text-[15px] text-gray-600 dark:text-gray-400 leading-7 pl-1">
            {children}
          </li>
        ),
        strong: ({ children }: any) => (
          <strong className="font-semibold text-gray-900 dark:text-gray-100">{children}</strong>
        ),
        em: ({ children }: any) => (
          <em className="italic text-gray-700 dark:text-gray-300">{children}</em>
        ),
        a: ({ children, href, ...props }: any) => (
          <a
            href={href}
            className="text-[#fc035a] hover:text-[#d9024e] underline decoration-[#fc035a]/40 underline-offset-2 transition-colors"
            {...props}
          >
            {children}
          </a>
        ),
        blockquote: ({ children }: any) => (
          <blockquote className="my-6 rounded-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 px-5 py-4 text-[15px] text-gray-600 dark:text-neutral-400 italic leading-7">
            {children}
          </blockquote>
        ),
        hr: () => (
          <hr className="my-8 border-0 border-t border-gray-200 dark:border-neutral-800" />
        ),
        table: ({ children }: any) => (
          <div className="my-6 overflow-x-auto rounded-lg border border-gray-200 dark:border-neutral-800">
            <table className="min-w-full text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }: any) => (
          <thead className="bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
            {children}
          </thead>
        ),
        tbody: ({ children }: any) => (
          <tbody className="bg-white dark:bg-neutral-950 divide-y divide-gray-100 dark:divide-neutral-800">
            {children}
          </tbody>
        ),
        tr: ({ children }: any) => (
          <tr className="hover:bg-gray-50 dark:hover:bg-neutral-900/60 transition-colors">
            {children}
          </tr>
        ),
        th: ({ children, ...props }: any) => (
          <th
            className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-wider"
            {...props}
          >
            {children}
          </th>
        ),
        td: ({ children, ...props }: any) => (
          <td className="px-4 py-3 text-[14px] text-gray-700 dark:text-neutral-300" {...props}>
            {children}
          </td>
        ),
        img: ({ alt, src, ...props }: any) => (
          <figure className="my-8">
            <img
              src={src}
              alt={alt}
              className="rounded-lg border border-gray-200 dark:border-neutral-800 max-w-full h-auto"
              {...props}
            />
            {alt && (
              <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                {alt}
              </figcaption>
            )}
          </figure>
        ),
        code({ node, inline, className, children, ...props }: any) {
          const isMermaid = /language-mermaid/.test(className || '');
          if (isMermaid) {
            return <MermaidDiagram code={String(children).trim()} />;
          }

          const codeStr = String(children).replace(/\n$/, '');
          const isInline = inline || (!className && !codeStr.includes('\n'));

          if (isInline) {
            return (
              <code
                className="bg-gray-100 dark:bg-neutral-800 text-[#fc035a] dark:text-[#ff527d] text-[13px] px-1.5 py-0.5 rounded font-mono"
                {...props}
              >
                {children}
              </code>
            );
          }

          const language = className?.replace('language-', '') || '';
          const blockId = `${language}-${codeStr.slice(0, 40)}`;

          return (
            <div className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-800">
              <div className="flex items-center justify-between bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 px-4 py-2">
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                  {language || 'plaintext'}
                </span>
                <button
                  type="button"
                  onClick={() => copyCode(blockId, codeStr)}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  {copiedId === blockId ? (
                    <>
                      <Check size={12} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="overflow-x-auto">
                <pre className="bg-gray-950 text-gray-200 px-4 py-4 text-sm font-mono leading-relaxed m-0">
                  <code className={className}>{children}</code>
                </pre>
              </div>
            </div>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

const buildPath = (cat: Category): string => {
  const tag = cat.tags?.join('-') || 'untagged';
  const slug = (cat.name || '').toLowerCase().replace(/\s+/g, '-');
  return cat.parentId === null ? `/${tag}` : `/${tag}/${slug}`;
};

const getExcerpt = (text: string): string =>
  text
    .replace(/^---[\s\S]+?---\n?/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/#{1,6}\s+/g, '')
    .replace(/[*_`~>\[\]]/g, '')
    .replace(/\n+/g, ' ')
    .trim()
    .slice(0, 100);

const CategoryDocumentation: React.FC<{ categories: Category[] }> = ({ categories }) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { '*': wildcard } = useParams();

  useEffect(() => {
    if (categories.length === 0) return;

    const segments = (wildcard || '').split('/').filter(Boolean);
    const slug = segments[segments.length - 1];

    if (!slug) {
      setIsLoading(false);
      return;
    }

    const matched = categories.find(
      (cat) => (cat.name || '').toLowerCase().replace(/\s+/g, '-') === slug
    );

    setCategory(matched || null);
    setIsLoading(false);
  }, [categories, wildcard]);

  if (isLoading || categories.length === 0) {
    return (
      <div className="flex justify-center items-center py-24">
        <Spinner style={{ color: '#fc035a' }} size="lg" />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center px-6">
        <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Page not found</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This page doesn't exist or has been moved.
        </p>
      </div>
    );
  }

  const publicCats = categories.filter((c) => c.visibility === 'public');
  const subCategories = publicCats.filter((c) => c.parentId === category.id);
  const sameLevelCats = publicCats.filter((c) => c.parentId === category.parentId);
  const currentIndex = sameLevelCats.findIndex((c) => c.id === category.id);
  const prevCat = currentIndex > 0 ? sameLevelCats[currentIndex - 1] : null;
  const nextCat = currentIndex < sameLevelCats.length - 1 ? sameLevelCats[currentIndex + 1] : null;

  return (
    <article className="w-full">
      <MarkdownRenderer content={category.description || ''} />

      {/* Subcategory cards */}
      {subCategories.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-neutral-800">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-neutral-500 mb-4">
            In this section
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subCategories.map((sub) => (
              <Link
                key={sub.id}
                to={buildPath(sub)}
                className="group flex items-start gap-3 p-4 rounded-lg border border-gray-200 dark:border-neutral-800 hover:border-[#fc035a]/40 dark:hover:border-[#fc035a]/30 hover:bg-gray-50 dark:hover:bg-neutral-900/60 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-neutral-100 group-hover:text-[#fc035a] transition-colors">
                    {sub.name}
                  </p>
                  {sub.description && (
                    <p className="text-xs text-gray-500 dark:text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                      {getExcerpt(sub.description)}
                    </p>
                  )}
                </div>
                <ArrowRight
                  size={14}
                  className="text-gray-300 dark:text-neutral-600 group-hover:text-[#fc035a] transition-colors mt-0.5 shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next navigation */}
      {(prevCat || nextCat) && (
        <div className="mt-8 flex items-stretch gap-3">
          {prevCat ? (
            <Link
              to={buildPath(prevCat)}
              className="group flex-1 flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-neutral-800 hover:border-[#fc035a]/40 dark:hover:border-[#fc035a]/30 hover:bg-gray-50 dark:hover:bg-neutral-900/60 transition-all min-w-0"
            >
              <ChevronLeft size={16} className="text-gray-400 dark:text-neutral-500 group-hover:text-[#fc035a] transition-colors shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] text-gray-400 dark:text-neutral-500 uppercase tracking-wide">Previous</p>
                <p className="text-sm font-medium text-gray-900 dark:text-neutral-100 group-hover:text-[#fc035a] transition-colors truncate">{prevCat.name}</p>
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {nextCat ? (
            <Link
              to={buildPath(nextCat)}
              className="group flex-1 flex items-center justify-end gap-3 p-4 rounded-lg border border-gray-200 dark:border-neutral-800 hover:border-[#fc035a]/40 dark:hover:border-[#fc035a]/30 hover:bg-gray-50 dark:hover:bg-neutral-900/60 transition-all text-right min-w-0"
            >
              <div className="min-w-0">
                <p className="text-[11px] text-gray-400 dark:text-neutral-500 uppercase tracking-wide">Next</p>
                <p className="text-sm font-medium text-gray-900 dark:text-neutral-100 group-hover:text-[#fc035a] transition-colors truncate">{nextCat.name}</p>
              </div>
              <ChevronRight size={16} className="text-gray-400 dark:text-neutral-500 group-hover:text-[#fc035a] transition-colors shrink-0" />
            </Link>
          ) : <div className="flex-1" />}
        </div>
      )}
    </article>
  );
};

export default CategoryDocumentation;
