import React, { useState } from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { DragIcon } from '../Icons/Icons';
import { ChevronRight, Edit2, Trash2, Globe, Lock, Plus } from 'lucide-react';
import { CategoryIcon, ICON_MAP, IconName } from '../../utils/icon-map';
import { cn } from '../../utils/cn';

interface Category {
  icon: string;
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  children: Category[];
  author?: string;
  tags?: string[];
  title?: string;
  visibility?: string;
}

interface CategoryItemProps {
  item: Category;
  index: number;
  level: number;
  onEdit: () => void;
  onDelete: (id: number) => void;
  onAddChild: (parentId: number) => void;
  onSelect: (id: number) => void;
  selectedId: number | null;
  isExpanded: boolean;
  onToggle: () => void;
  renderChildren: () => React.ReactNode;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  item, index, level, onEdit, onDelete, onAddChild, onSelect, selectedId, renderChildren,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const children = renderChildren();
  const hasChildren = !!children;
  const hasValidIcon = !!item.icon && !!ICON_MAP[item.icon as IconName];
  const isPublic = item.visibility === 'public';
  const isSelected = selectedId === item.id;

  return (
    <Draggable draggableId={String(item.id)} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            marginLeft: `${level * 24}px`,
          }}
          className="mb-1"
        >
          {/* Row */}
          <div
            className={cn(
              'group flex items-center gap-2 px-3 py-2.5 rounded-lg border transition-all cursor-pointer',
              snapshot.isDragging
                ? 'bg-white dark:bg-gray-900 border-[#fc035a]/20 shadow-lg ring-1 ring-[#fc035a]/10'
                : isSelected
                ? 'bg-[#fc035a]/4 border-[#fc035a]/25 dark:bg-[#fc035a]/6 dark:border-[#fc035a]/20'
                : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
            )}
            onClick={() => onSelect(item.id)}
          >
            {/* Drag handle */}
            <div
              {...provided.dragHandleProps}
              className="text-gray-300 dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-500 cursor-grab active:cursor-grabbing transition-colors shrink-0"
            >
              <DragIcon />
            </div>

            {/* Icon or initial */}
            <div className="shrink-0 w-7 h-7 flex items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              {hasValidIcon ? (
                <CategoryIcon name={item.icon} size={13} />
              ) : (
                <span className="text-[11px] font-bold select-none">
                  {item.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>

            {/* Name + URL */}
            <div className="flex-1 min-w-0 flex items-center gap-2">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                {item.name}
              </span>
              {item.tags?.length ? (
                <span className="hidden lg:block text-xs text-gray-400 dark:text-gray-600 font-mono shrink-0">
                  /{item.tags[0]}
                </span>
              ) : null}
            </div>

            {/* Visibility */}
            <span
              className={cn(
                'hidden sm:flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full font-medium shrink-0 select-none',
                isPublic
                  ? 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/40'
                  : 'text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800'
              )}
            >
              {isPublic ? <Globe size={9} /> : <Lock size={9} />}
              {isPublic ? 'Public' : 'Private'}
            </span>

            {/* Actions */}
            <div className="flex items-center gap-0.5 shrink-0" onClick={(e) => e.stopPropagation()}>
              {/* Add subcategory — revealed on hover */}
              <button
                onClick={() => onAddChild(item.id)}
                className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-gray-400 hover:text-[#fc035a] hover:bg-[#fc035a]/8 transition-all opacity-0 group-hover:opacity-100"
                title="Add subcategory"
              >
                <Plus size={12} />
                <span>Add sub</span>
              </button>

              {/* Expand/collapse children */}
              {hasChildren && (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  title={isOpen ? 'Collapse' : 'Expand subcategories'}
                >
                  <ChevronRight
                    size={14}
                    className={cn('transition-transform duration-150', isOpen && 'rotate-90')}
                  />
                </button>
              )}

              <button
                onClick={onEdit}
                className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Edit"
              >
                <Edit2 size={14} />
              </button>

              <button
                onClick={() => onDelete(item.id)}
                className="p-1.5 rounded-md text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                title="Delete"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>

          {/* Tree connector */}
          {hasChildren && isOpen && (
            <div className="mt-1 ml-[22px] border-l border-gray-200 dark:border-gray-800 pl-3 pb-0.5">
              {children}
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default CategoryItem;
