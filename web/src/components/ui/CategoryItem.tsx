import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Divider } from '@heroui/react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { DragIcon } from '../Icons/Icons'; 
import { ChevronDown, ChevronRight, Edit, Trash2 } from "lucide-react";


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
}

interface CategoryItemProps {
  item: Category;
  index: number;
  level: number;
  onEdit: () => void;
  onDelete: (id: number) => void;
  isExpanded: boolean;
  onToggle: () => void;
  renderChildren: () => React.ReactNode;
}


const CategoryItem: React.FC<CategoryItemProps> = ({
  item,
  index,
  level,
  onEdit,
  onDelete,
  renderChildren
}) => {
  const indent = level * 20;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Draggable draggableId={String(item.id)} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            marginLeft: `${indent}px`,
            backgroundColor: snapshot.isDragging ? '#f0f9ff' : 'transparent',
            borderRadius: '12px',
            padding: '8px',
            marginBottom: '12px'
          }}
          className="category-item"
        >
         <Card shadow="sm" radius="lg" fullWidth>
            <CardHeader
              className="flex gap-3 items-center justify-between"
              style={{ padding: "12px 16px" }}
            >
              <div className="flex items-center gap-2">
                <div {...provided.dragHandleProps} className="cursor-grab">
                  <DragIcon />
                </div>
                {item.icon && <span className="text-2xl">{item.icon}</span>}
                <div className="flex flex-col">
                  <p className="text-md font-semibold">{item.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {renderChildren() && (
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-500 focus:outline-none"
                  >
                    {isOpen ? <ChevronDown className='danger' size={16} /> : <ChevronRight className='danger'  size={16} />}
                  </button>
                )}
                <Button size="sm" variant="light" color="primary" onClick={onEdit}>
                  <Edit size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="light"
                  color="danger"
                  onClick={() => onDelete(item.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </CardHeader>
              {renderChildren() && isOpen && (
                <>
                  <Divider />
                  <CardBody style={{ padding: "12px 16px" }}>
                    {renderChildren()}
                  </CardBody>
                </>
              )}
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default CategoryItem;
