import React from 'react';

const DocsFooter: React.FC = () => (
    <footer className="bg-[#171717] dark:bg-[#18181B] bg-opacity-100 w-auto border-t border-gray-200 dark:border-gray-700 py-8 px-4 mt-20 ">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Table of contents</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-[#ff003d] dark:text-gray-300 dark:hover:text-[#ff003d]">
                  Administrator Guide

                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#ff003d] dark:text-gray-300 dark:hover:text-[#ff003d]">
                  Catalog Manager Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Follow us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/company/nbold" className="text-white hover:text-[#ff003d] dark:text-gray-300 dark:hover:text-[#ff003d]">
                  LinkedIn 
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#ff003d] dark:text-gray-300 dark:hover:text-[#ff003d]">
                Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-[#ff003d] dark:text-gray-300 dark:hover:text-[#ff003d]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#ff003d] dark:text-gray-300 dark:hover:text-[#ff003d]">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-white dark:text-gray-400">
          <p>Copyright © {new Date().getFullYear()} SalesTim SAS.
  </p>
        </div>
      </div>
    </footer>
  );
export default DocsFooter;