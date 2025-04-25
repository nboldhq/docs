import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Plus, Edit, Trash2 } from 'lucide-react';


interface Category {
    icon: string;
    id: number;
    name: string;
    description: string,
    parentId: number | null;
  }
  const SortableItem: React.FC<{
    category: Category;
    depth: number;
    onEdit: (category: Category) => void;
    onDelete: (id: number) => void;
    onAddSub: (parentId: number) => void;
    children?: React.ReactNode;
  }> = ({ category, depth, onEdit, onDelete, onAddSub, children }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: category.id });
    
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      marginLeft: `${depth * 20}px`,
    };
  
    return (
      <div ref={setNodeRef} style={style}>
        <div className="flex items-center justify-between p-2 mb-1 bg-white dark:bg-[#18181B] border border-gray-200 dark:border-gray-700 rounded shadow">
          <div className="flex items-center flex-1">
            <div {...attributes} {...listeners} className="mr-2 cursor-move">☰</div>
            <div className="flex items-center gap-2">
              {category.icon && <span>{category.icon}</span>}
              <span className="text-gray-900 dark:text-white">{category.name}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddSub(category.id);
              }}
              className="text-green-500"
              title="Add subcategory"
            >
              <Plus size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(category);
              }}
              className="text-blue-500"
              title="Edit"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(category.id);
              }}
              className="text-red-500"
              title="Delete"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
        {children}
      </div>
    );
  };
export default SortableItem;