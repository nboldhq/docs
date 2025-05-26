import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownViewer = ({ fileMap }: { fileMap: Record<string, () => Promise<{ default: string }>> }) => {
  const { category, subcategory } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const slugPath = subcategory
      ? `../../../../../content/${category}/${subcategory}.md`
      : `../../../../../content/${category}/README.md`;

    const loadMarkdown = async () => {
      if (fileMap[slugPath]) {
        const module = await fileMap[slugPath]();
        setContent(module.default);
      } else {
        setContent('# Not Found\n\nThis document does not exist.');
      }
    };

    loadMarkdown();
  }, [category, subcategory, fileMap]);

  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
