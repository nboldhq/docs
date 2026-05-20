import React, { useEffect, useState } from 'react';
import { Trash2, X } from 'lucide-react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, Select, SelectItem, useDisclosure } from '@heroui/react';

interface Category {
  id: string;
  name: string;
  label: string;
  showInNavbar?: boolean;
}

const NavigationTabs: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tabs, setTabs] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchCategories = async (retries = 3, delay = 1000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(`/api/categories`, {
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const contentType = response.headers.get('content-type');
        if (!contentType?.includes('application/json')) throw new Error('Received non-JSON response');

        const data: Category[] = await response.json();
        setCategories(data.map((cat) => ({ ...cat, id: String(cat.id) })));
        return;
      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error);
        if (attempt === retries) {
          alert('Failed to load categories. Please try again later.');
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  const fetchTabs = async () => {
    try {
      const response = await fetch(`/api/categories`, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Failed to fetch categories');
      const data: Category[] = await response.json();
      const filteredTabs = data.filter((category) => category.showInNavbar);
      setTabs(filteredTabs);
    } catch (error) {
      console.error('Error fetching tabs:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchTabs(); 
  }, []);

  const handleAddTab = async () => {
    const categoryToAdd = categories.find((cat) => cat.id === selectedCategory);

    if (!categoryToAdd || tabs.find((tab) => tab.id === categoryToAdd.id)) {
      console.warn("Category invalid or already added");
      return;
    }

    const tabWithNavbarFlag: Category = {
      ...categoryToAdd,
      id: String(categoryToAdd.id),
      showInNavbar: true,
    };

    try {
      const response = await fetch(`/api/categories/${tabWithNavbarFlag.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ showInNavbar: true }),
      });

      if (!response.ok) throw new Error('Failed to update category');

      setTabs((prev) => [...prev, tabWithNavbarFlag]);
      setSelectedCategory('');
      onClose();
    } catch (error) {
      console.error('Error saving tab:', error);
      alert('Failed to save the tab. Please try again.');
    }
  };

  useEffect(() => {
    console.log('Tabs updated:', tabs);
  }, [tabs]);

  const handleDeleteTab = async (id: string) => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);

    try {
      const response = await fetch(`/api/categories/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ showInNavbar: false }),
      });

      if (!response.ok) throw new Error('Failed to delete tab');
    } catch (error) {
      console.error('Error deleting tab:', error);
    }
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation Tabs</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Control which categories appear in the docs navbar.</p>
        </div>
        <Button
          onPress={onOpen}
          className="bg-[#fc035a] text-white hover:bg-[#d9024e] rounded-lg text-sm font-medium px-4"
        >
          Add tab
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalBody className="p-6">
            <div className="relative">
              <h3 className="text-lg font-semibold mb-4">Select Category</h3>
              <Select
                selectedKeys={selectedCategory ? [selectedCategory] : []}
                onSelectionChange={(keys) => {
                  const selected = Array.from(keys)[0] || '';
                  console.log("Selected category ID:", selected);
                  setSelectedCategory(selected);
                }}
                label="Select a category"
                className="w-full mb-4"
              >
                {categories.map((category) => (
                  <SelectItem key={category.id}>
                    {category.label || category.name}
                  </SelectItem>
                ))}
              </Select>

              <ModalFooter className="flex justify-end gap-2">
                <Button
                  onPress={onClose}
                  variant="light"
                  className="px-4 py-2 rounded-lg text-sm"
                >
                  Cancel
                </Button>
                <Button
                  onPress={handleAddTab}
                  isDisabled={!selectedCategory}
                  className="px-4 py-2 bg-[#fc035a] text-white hover:bg-[#d9024e] rounded-lg text-sm font-medium disabled:opacity-50"
                >
                  Confirm
                </Button>
              </ModalFooter>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Active tabs ({tabs.length})
          </p>
        </div>
        {tabs.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">No tabs added yet.</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Add a category tab to make it appear in the docs navigation bar.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100 dark:divide-gray-800">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {tab.label || tab.name}
                </span>
                <button
                  className="p-1.5 rounded-md text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                  onClick={() => handleDeleteTab(tab.id)}
                  aria-label="Remove tab"
                >
                  <Trash2 size={15} />
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
