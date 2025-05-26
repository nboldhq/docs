import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useTabs } from '../../components/ui/TabsContext';

// Mock data for categories (based on provided data)
const availableCategories = [
  { id: '1', name: 'welcome-pages', label: 'Welcome Pages' },
  { id: '2', name: 'admin-guide', label: 'Admin Guide' },
  { id: '3', name: 'api-reference', label: 'API Reference' },
  // Add more categories as needed
];

const NavigationTabs: React.FC = () => {
  const { tabs, addTab, removeTab } = useTabs();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddTab = () => {
    if (!selectedCategory) return;
    const category = availableCategories.find((cat) => cat.name === selectedCategory);
    if (category && !tabs.some((tab) => tab.route === `/docs/${category.name}`)) {
      addTab(category.label, `/docs/${category.name}`);
      setSelectedCategory('');
    }
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Manage Navigation Tabs</h1>
      
      {/* Add Tab Form */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Add New Tab</h2>
        <div className="flex items-center gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="">Select a category</option>
            {availableCategories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddTab}
            disabled={!selectedCategory}
            className="px-4 py-2 bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-white rounded-md disabled:opacity-50"
          >
            Add Tab
          </button>
        </div>
      </div>

      {/* Current Tabs */}
      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Current Tabs</h2>
        {tabs.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No tabs added yet.</p>
        ) : (
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded-md"
              >
                <span className="text-gray-900 dark:text-white">{tab.label}</span>
                <button
                  onClick={() => removeTab(tab.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavigationTabs;