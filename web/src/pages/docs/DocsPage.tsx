import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DocsLayout from '../../components/layout/docs/DocsLayout';
import '../../style.css';
import CategoryDocumentation from '../../components/ui/markdown/CategoryDocumentation';
import ApiReference from '../dashboard/ApiReference';

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

const DocsPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('docs-theme') === 'dark';
  });

  const navigate = useNavigate();

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('docs-theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('docs-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`https://${process.env.VITE_ALLOWED_HOST}/api/categories`);
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();

        if (!data || data.length === 0) {
          navigate('/page-not-found');
          return;
        }

        setCategories(data);
      } catch (e) {
        console.error('Failed to fetch categories:', e);
        navigate('/page-not-found');
      }
    };

    fetchCategories();
  }, [navigate]);

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
