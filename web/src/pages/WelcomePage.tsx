import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@heroui/react';
import { NBoldIcon } from '../components/Icons/nBoldIcon';
import { useNavigate } from 'react-router-dom';
import { BackgroundBeams } from '../components/ui/background-beams';
import Textra from 'react-textra';

interface Category {
  name: string;
  description: string;
  parentId: number | null;
  icon: string;
  tags: string[];
  author: string;
  visibility: string;
  id: number;
  showInNavbar?: boolean;
  sortOrder: number;
  children: Category[];
}

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [firstCategoryPath, setFirstCategoryPath] = useState<string>('/page-not-found'); 

  const fetchCategories = async () => {
    try {
      const response = await fetch(`https://${process.env.VITE_ALLOWED_HOST}/api/categories`);
      if (!response.ok) throw new Error('Network error');
  
      const data: Category[] = await response.json();
  
      // Filter public categories
      const publicCategories = data.filter((cat) => cat.visibility === 'public');
  
      // ✅ Sort by sortOrder
      const sortedCategories = publicCategories.sort((a, b) => a.sortOrder - b.sortOrder);
  
      setCategories(sortedCategories);
  
      // Pick the first category to redirect to
      const firstPublicCategory = sortedCategories[0];
  
      if (firstPublicCategory && firstPublicCategory.tags.length > 0) {
        setFirstCategoryPath(`/docs/${firstPublicCategory.tags[0]}`);
      } else {
        setFirstCategoryPath('/page-not-found');
      }
  
    } catch (e) {
      console.error('Failed to fetch categories:', e);
      setFirstCategoryPath('/page-not-found');
    }
  };
  
  

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleOpen = () => {
    if (firstCategoryPath === '/page-not-found') {
      navigate('/page-not-found');
    } else {
      navigate(firstCategoryPath);
    }
  };
  
  const descriptions = [
    <div key="desc1">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-2xl md:text-3xl font-bold">
        Templatize your processes:
      </span>
      <p className="text-neutral-400 text-justify text-base md:text-lg mt-2">
        Make sure each team member has all the necessary tools to collaborate efficiently by templatizing repetitive processes. Provide your team with content, policies, procedures, and standard tools for distinct types of teams. Your teams and communities will share their knowledge and coordinate activities highly efficiently across the entire organization.
      </p>
    </div>,
    <div key="desc2">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-2xl md:text-3xl font-bold">
        Bring operational excellence:
      </span>
      <p className="text-neutral-400 text-justify text-base md:text-lg mt-2">
        Provide your teams with a pre-built working environment within 60 sec. Each time you start a new project, open a sales deal, or mitigate a crisis – your team will get a collaborative workspace with the same structure, file templates, document libraries, pre-built set of tasks, calendars, integrated apps, and more.
      </p>
    </div>,
    <div key="desc3">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-2xl md:text-3xl font-bold">
        Ensure secure workspace:
      </span>
      <p className="text-neutral-400 text-justify text-base md:text-lg mt-2">
        Ensure a strong, predictable, and supported workspace without overloading your IT. Prevent information loss, duplication, the mess in your working environment, and unsecured access.
      </p>
    </div>,
  ];

  return (
    <Layout>
      <div className="relative flex flex-col h-screen items-center justify-center w-full px-4 bg-neutral-950 antialiased">
        <div className="max-w-3xl mx-auto text-center space-y-8 z-10">
          <h1 className="flex items-center justify-center text-white text-3xl md:text-6xl font-bold">
            <span>Welcome to</span>
            <NBoldIcon className="w-10 h-10 md:w-16 md:h-16 ml-2" />
            <span>Bold</span>
          </h1>
          <div className="space-y-6 text-neutral-400 text-base md:text-lg min-h-[157px]">
            <Textra
              effect="topDown"
              data={descriptions.map(desc => desc.props.children.map((child: any) => (typeof child === 'string' ? child : child.props.children)).join(' '))}
              stopDuration={4000}
              duration={1000}
            />
          </div>
          <div className="border-gradient rounded-full inline-block">
            <Button
              onClick={handleOpen}
              className="bg-neutral-950 hover:border-gradient hover:px-[15px] text-white py-2 rounded-full min-h-12 max-h-15"
            >
              See nBold Docs
            </Button>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </Layout>
  );
};

export default WelcomePage;