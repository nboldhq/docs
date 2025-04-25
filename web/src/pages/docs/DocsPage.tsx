import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import DocsLayout from '../../components/layout/docs/DocsLayout';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Spinner } from '@heroui/react';

const markdownFiles = import.meta.glob('../../../../../docs/**/*.md', {
  query: '?raw',
  import: 'default',
});

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // allow letters, numbers, spaces, hyphens
    .replace(/\s+/g, '-') // convert spaces to dashes
    .replace(/-+/g, '-'); // collapse multiple dashes


    const findMatchingPath = (tags?: string, title?: string) => {
      const slugParts = [tags, title].filter(Boolean).map(slugify);
    
      return Object.keys(markdownFiles).find((path) => {
        const normalized = path
          .toLowerCase()
          .replace('../../../../docs/', '') // adjust to match your actual key
          .replace('/readme.md', '') // remove filename
          .split('/')
          .map(slugify)
          .join('/');
    
        return normalized === slugParts.join('/');
      });
    };
    

const CategoryDocumentation: React.FC = () => {
  const { tags, title } = useParams();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const matchedPath = findMatchingPath(tags, title);
    setLoading(true);
    console.log("Matching markdown path:", matchedPath);
    console.log("Available paths:", Object.keys(markdownFiles));
    
    if (matchedPath && markdownFiles[matchedPath]) {
      markdownFiles[matchedPath]().then((markdown: string) => {
        setContent(markdown);
        setLoading(false);
      });
    } else {
      setContent('# Page not found\n\nLe fichier Markdown est introuvable.');
      setLoading(false);
    }
  }, [tags, title]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen p-8">
        <Spinner color="danger" />
      </div>
    );
  }

  return (
    <div className="prose dark:prose-invert max-w-none p-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => <h1 className="text-4xl font-bold mb-6" {...props} />,
          h2: (props) => <h2 className="text-2xl font-semibold mb-4" {...props} />,
          p: (props) => <p className="text-gray-600 dark:text-gray-300 mb-4" {...props} />,
          ul: (props) => <ul className="list-disc list-inside ml-5 mb-4" {...props} />,
          li: (props) => <li className="mb-2" {...props} />,
          a: (props) => <a className="text-[#ff003d] hover:underline" {...props} />,
          img: (props) => (
            <img
              className="w-full h-auto object-cover rounded-xl border border-gray-300 dark:border-gray-700 mb-8"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

const DocsPage: React.FC = () => {
  return (
    <DocsLayout>
      <Routes>
        <Route path="/:tags" element={<CategoryDocumentation />} />
        <Route path="/:tags/:title" element={<CategoryDocumentation />} />
      </Routes>
    </DocsLayout>
  );
};

export default DocsPage;
