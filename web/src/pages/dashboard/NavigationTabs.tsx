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
        const response = await fetch(`https://${process.env.VITE_ALLOWED_HOST}/api/categories`, {
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
      const response = await fetch(`https://${process.env.VITE_ALLOWED_HOST}/api/categories`, {
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
      const response = await fetch(`https://${process.env.VITE_ALLOWED_HOST}/api/categories/${tabWithNavbarFlag.id}`, {
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
      const response = await fetch(`https://${process.env.VITE_ALLOWED_HOST}/api/categories/${id}`, {
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
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Navigation Tabs</h1>
        <Button
          onPress={onOpen}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-white"
        >
          Add Tab
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
                  color="danger"
                  variant="light"
                  className="px-4 py-2 rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  onPress={handleAddTab}
                  isDisabled={!selectedCategory}
                  className="px-4 py-2 border-gradient text-white w-full md:w-auto rounded-xl"
                >
                  Confirm
                </Button>
              </ModalFooter>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Current Tabs</h2>
        {tabs.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No tabs added yet.</p>
        ) : (
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className="flex items-center justify-between p-2 bg-gray-100 dark:bg-[#18181B] rounded-md"
              >
                <span className="text-gray-900 dark:text-white">{tab.label || tab.name}</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDeleteTab(tab.id)}
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
