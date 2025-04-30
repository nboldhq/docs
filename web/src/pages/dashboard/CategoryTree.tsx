import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import CategoryForm from '../../components/ui/CategoryForm';
import CategoryItem from '../../components/ui/CategoryItem';
import { Button, ScrollShadow } from '@heroui/react';

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

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/categories');
      const data: Category[] = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;
    
    try {
      await fetch('http://localhost:3000/api/categories/reorder', {
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

  const renderCategories = (items: Category[], parentId: number | null = null, level: number = 0): React.ReactNode => {
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
  

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this category and all its subcategories?")) return;
  
    try {
      await fetch(`http://localhost:3000/api/categories/${id}`, { method: 'DELETE' });
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };
  

  return (
    <div className="p-6">
    
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Categories</h2>
        <Button
          className="bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-white"
          onClick={() => { setSelectedCategory(null); setShowForm(true); }}>
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
          onSave={fetchCategories}
        />
     
      )}
    </div>
  );
};

export default CategoryTree;