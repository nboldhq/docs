import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { NBoldIcon } from '../components/Icons/nBoldIcon';
import { BackgroundBeams } from '../components/ui/background-beams';

const DESCRIPTIONS = [
  {
    title: 'Templatize your processes',
    body: 'Make sure each team member has all the necessary tools to collaborate efficiently by templatizing repetitive processes. Provide your team with content, policies, procedures, and standard tools for distinct types of teams.',
  },
  {
    title: 'Bring operational excellence',
    body: 'Provide your teams with a pre-built working environment within 60 seconds. Each time you start a new project, open a sales deal, or mitigate a crisis — your team gets a collaborative workspace with the same structure, file templates, and integrated apps.',
  },
  {
    title: 'Ensure a secure workspace',
    body: 'Ensure a strong, predictable, and supported workspace without overloading your IT. Prevent information loss, duplication, the mess in your working environment, and unsecured access.',
  },
];

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [firstPath, setFirstPath] = useState('/page-not-found');
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fetchFirst = async () => {
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) return;
        const data = await res.json();
        const first = data
          .filter((c: any) => c.visibility === 'public' && c.parentId === null)
          .sort((a: any, b: any) => a.sortOrder - b.sortOrder)[0];
        if (first?.tags?.length) setFirstPath(`/${first.tags[0]}`);
      } catch {}
    };
    fetchFirst();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((i) => (i + 1) % DESCRIPTIONS.length);
        setVisible(true);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const current = DESCRIPTIONS[activeIndex];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 overflow-hidden relative">
      <BackgroundBeams />

      {/* Header */}
      <header className="relative z-10 h-[60px] flex items-center px-6 border-b border-neutral-800 shrink-0">
        <div className="flex items-center gap-1.5">
          <NBoldIcon className="w-7 h-auto" />
          <span className="font-semibold text-white text-lg leading-none">Bold</span>
          <span className="text-xs text-gray-500 mt-0.5">Docs</span>
        </div>
      </header>

      {/* Hero */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="flex items-center justify-center gap-2 text-3xl md:text-5xl font-bold text-white tracking-tight mb-10">
          <span>Welcome to</span>
          <NBoldIcon className="w-8 h-8 md:w-12 md:h-12" />
          <span>Bold</span>
        </h1>

        {/* Animated description */}
        <div
          className="max-w-xl mx-auto min-h-[140px] flex flex-col justify-start transition-all duration-400"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-10px)' }}
        >
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#fc035a] bg-clip-text text-transparent mb-3">
            {current.title}
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            {current.body}
          </p>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center gap-1.5 mt-6 mb-10">
          {DESCRIPTIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setVisible(false); setTimeout(() => { setActiveIndex(i); setVisible(true); }, 400); }}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-4 h-1.5 bg-[#fc035a]'
                  : 'w-1.5 h-1.5 bg-gray-700 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#fc035a] hover:opacity-90 transition-opacity">
          <button
            onClick={() => navigate(firstPath)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-950 text-white font-medium text-sm"
          >
            Browse documentation
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-neutral-800 py-6 px-6 text-center text-sm text-gray-600 shrink-0">
        Copyright © {new Date().getFullYear()} SalesTim SAS.
      </footer>
    </div>
  );
};

export default WelcomePage;
