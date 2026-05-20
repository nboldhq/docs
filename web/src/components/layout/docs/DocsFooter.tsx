import React from 'react';
import { NBoldIcon } from '../../Icons/nBoldIcon';

const DocsFooter: React.FC = () => (
  <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/40">
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">

        <div className="flex items-center gap-1.5 shrink-0">
          <NBoldIcon className="w-6 h-auto" />
          <span className="font-semibold text-gray-900 dark:text-white text-base leading-none">Bold</span>
          <span className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Docs</span>
        </div>

        <div className="flex gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Follow us
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/nbold"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#fc035a] dark:hover:text-[#fc035a] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#fc035a] dark:hover:text-[#fc035a] transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              More
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#fc035a] dark:hover:text-[#fc035a] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#fc035a] dark:hover:text-[#fc035a] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Copyright © {new Date().getFullYear()} SalesTim SAS.
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Microsoft 365 Workspace Provisioning
        </p>
      </div>
    </div>
  </footer>
);

export default DocsFooter;
