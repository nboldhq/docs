import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Button, ScrollShadow, Spinner } from '@heroui/react';
import CategoryForm from '../../components/ui/CategoryForm';
import CategoryItem from '../../components/ui/CategoryItem';

interface Category {
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  icon: string;
  author?: string;
  tags?: string[];
  title?: string;
  visibility: string;
  children: Category[];
}

const CategoryTree: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const spinnerColor = '#921d7f';

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async (retries = 3, delay = 1000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/categories`, {
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const contentType = response.headers.get('content-type');
        if (!contentType?.includes('application/json')) {
          throw new Error('Received non-JSON response');
        }
  
        const json = await response.json();
        const data: Category[] = Array.isArray(json) ? json : [];

        setCategories(data);
        return;
      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error);
        if (attempt === retries) {
          console.error('Error fetching categories:', error);
          alert('Failed to load categories. Please try again later.');
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;
    
    try {
      await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/categories/reorder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          draggedId: parseInt(result.draggableId),
          targetId: parseInt(result.destination.droppableId)
        })
      });
      fetchCategories();
    } catch (error) {
      console.error('Error reordering categories:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this category and all its subcategories?")) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/api/categories/${id}`,
        { method: 'DELETE' }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      await fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      alert('Failed to delete category. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await fetchCategories();
    } finally {
      setIsLoading(false);
    }
  };

  const renderCategories = (
    items: Category[],
    parentId: number | null = null,
    level: number = 0
  ): React.ReactNode => {
    if (!Array.isArray(items)) return null;
  
    return items
      .filter(item => item.parentId === parentId)
      .map((item, index) => {
        const isExpanded = expandedIds.has(item.id);
        return (
          <CategoryItem
            key={item.id}
            item={item}
            index={index}
            level={level}
            onEdit={() => {
              setSelectedCategory(item);
              setShowForm(true);
            }}
            onDelete={handleDelete}
            isExpanded={isExpanded}
            onToggle={() => {
              setExpandedIds(prev => {
                const updated = new Set(prev);
                isExpanded ? updated.delete(item.id) : updated.add(item.id);
                return updated;
              });
            }}
            renderChildren={() => renderCategories(items, item.id, level + 1)}
          />
        );
      });
  };
  

  return (
    <div className="p-6">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Spinner style={{ color: spinnerColor }} size="lg" />
        </div>
      )}

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Categories</h2>
        <Button
          className="flex text-wrap py-7 md:py-0 rounded-xl bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-white focus:outline-none focus:ring-0"
          onClick={() => { setSelectedCategory(null); setShowForm(true); }}
          disabled={isLoading}
        >
          Add New Category
        </Button>
      </div>

      <ScrollShadow hideScrollBar className="w-full h-[750px]">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="categories">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {renderCategories(categories)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </ScrollShadow>

      {showForm && (
        <CategoryForm
          category={selectedCategory}
          categories={categories}
          onClose={() => setShowForm(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default CategoryTree;