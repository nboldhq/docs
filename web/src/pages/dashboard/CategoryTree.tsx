import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Button, Spinner, toast } from '@heroui/react';
import CategoryForm from '../../components/ui/CategoryForm';
import CategoryItem from '../../components/ui/CategoryItem';
import { Globe, Lock, Layers, Edit2, FileText, User, Tag, Eye } from 'lucide-react';
import { CategoryIcon, ICON_MAP, IconName } from '../../utils/icon-map';
import { cn } from '../../utils/cn';

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

const stripMarkdown = (md: string, maxLen = 300): string =>
  md
    .replace(/^---[\s\S]*?---\n?/m, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#>*_`~|]/g, '')
    .replace(/\n+/g, ' ')
    .trim()
    .slice(0, maxLen);

const wordCount = (md: string) =>
  md.trim() ? md.trim().split(/\s+/).length : 0;

const PreviewPanel: React.FC<{
  category: Category | null;
  allCategories: Category[];
  onEdit: () => void;
}> = ({ category, allCategories, onEdit }) => {
  if (!category) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-3">
          <Eye size={18} className="text-gray-400 dark:text-gray-500" />
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">No category selected</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          Click any category in the list to preview its content and metadata.
        </p>
      </div>
    );
  }

  const hasValidIcon = !!category.icon && !!ICON_MAP[category.icon as IconName];
  const isPublic = category.visibility === 'public';
  const parent = category.parentId
    ? allCategories.find((c) => c.id === category.parentId)
    : null;
  const children = allCategories.filter((c) => c.parentId === category.id);
  const excerpt = stripMarkdown(category.description || '');
  const words = wordCount(category.description || '');
  const readingTime = Math.max(1, Math.round(words / 200));

  return (
    <div className="flex flex-col h-full">
      {/* Preview header */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 shrink-0">
              {hasValidIcon ? (
                <CategoryIcon name={category.icon} size={15} />
              ) : (
                <span className="text-xs font-bold">{category.name.charAt(0).toUpperCase()}</span>
              )}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug truncate">
                {category.name}
              </h3>
              {parent && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 truncate">
                  under {parent.name}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onEdit}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fc035a] text-white text-xs font-medium hover:bg-[#d9024e] transition-colors shrink-0"
          >
            <Edit2 size={12} />
            Edit
          </button>
        </div>

        {/* Metadata pills */}
        <div className="flex flex-wrap gap-1.5">
          <span
            className={cn(
              'flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full font-medium',
              isPublic
                ? 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/40'
                : 'text-gray-500 bg-gray-100 dark:bg-gray-800'
            )}
          >
            {isPublic ? <Globe size={9} /> : <Lock size={9} />}
            {isPublic ? 'Public' : 'Private'}
          </span>
          {category.tags?.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800"
            >
              /{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Metadata details */}
      <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-800 space-y-2.5">
        {category.author && (
          <div className="flex items-center gap-2.5">
            <User size={12} className="text-gray-400 shrink-0" />
            <span className="text-xs text-gray-500 dark:text-gray-400">{category.author}</span>
          </div>
        )}
        {children.length > 0 && (
          <div className="flex items-center gap-2.5">
            <Layers size={12} className="text-gray-400 shrink-0" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {children.length} subcategor{children.length === 1 ? 'y' : 'ies'}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2.5">
          <FileText size={12} className="text-gray-400 shrink-0" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {words} words &middot; ~{readingTime} min read
          </span>
        </div>
        {children.length > 0 && (
          <div className="flex flex-col gap-1 pt-1">
            <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
              Subcategories
            </span>
            {children.slice(0, 5).map((child) => {
              const childHasValidIcon = !!child.icon && !!ICON_MAP[child.icon as IconName];
              return (
                <div key={child.id} className="flex items-center gap-2 py-1 px-2 rounded-md bg-gray-50 dark:bg-gray-900">
                  <div className="w-5 h-5 flex items-center justify-center rounded text-gray-400 bg-gray-100 dark:bg-gray-800 shrink-0">
                    {childHasValidIcon ? (
                      <CategoryIcon name={child.icon} size={10} />
                    ) : (
                      <span className="text-[9px] font-bold">{child.name.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 truncate">{child.name}</span>
                  <span className={cn(
                    'ml-auto text-[10px] shrink-0',
                    child.visibility === 'public' ? 'text-green-600 dark:text-green-400' : 'text-gray-400'
                  )}>
                    {child.visibility === 'public' ? 'Public' : 'Private'}
                  </span>
                </div>
              );
            })}
            {children.length > 5 && (
              <p className="text-xs text-gray-400 dark:text-gray-500 pl-2">
                +{children.length - 5} more
              </p>
            )}
          </div>
        )}
      </div>

      {/* Content excerpt */}
      <div className="flex-1 px-5 py-4 overflow-y-auto no-scrollbar">
        <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
          Content preview
        </p>
        {excerpt ? (
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {excerpt}
            {(category.description || '').length > 300 && (
              <span className="text-gray-400 dark:text-gray-600"> …</span>
            )}
          </p>
        ) : (
          <p className="text-sm text-gray-400 dark:text-gray-500 italic">No content yet.</p>
        )}
      </div>
    </div>
  );
};

const CategoryTree: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [previewId, setPreviewId] = useState<number | null>(null);
  const [initialParentId, setInitialParentId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { fetchCategories(); }, []);

  const fetchCategories = async (retries = 3, delay = 1000) => {
    setIsLoading(true);
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const res = await fetch('/api/categories', {
          headers: { 'Content-Type': 'application/json' },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        if (!res.headers.get('content-type')?.includes('application/json'))
          throw new Error('Non-JSON response');
        const json = await res.json();
        setCategories(Array.isArray(json) ? json : []);
        setIsLoading(false);
        return;
      } catch {
        if (attempt === retries) {
          toast.error('Failed to load categories. Please try again.');
          setIsLoading(false);
          return;
        }
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  };

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;
    const draggedId = parseInt(result.draggableId);
    const newParentId =
      result.destination.droppableId === 'categories' ? null : parseInt(result.destination.droppableId);
    const newIndex = result.destination.index;
    try {
      const res = await fetch('/api/categories/reorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ draggedId, newParentId, newIndex }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.details || `HTTP ${res.status}`);
      }
      await fetchCategories();
    } catch (error: any) {
      toast.error(`Failed to reorder: ${error.message}`);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this category and all its subcategories?')) return;
    try {
      const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      if (previewId === id) setPreviewId(null);
      await fetchCategories();
      toast.success('Category deleted.');
    } catch {
      toast.error('Failed to delete category. Please try again.');
    }
  };

  const openNew = () => {
    setSelectedCategory(null);
    setInitialParentId(null);
    setShowForm(true);
  };

  const openAddChild = (parentId: number) => {
    setSelectedCategory(null);
    setInitialParentId(parentId);
    setShowForm(true);
  };

  const openEdit = (category: Category) => {
    setSelectedCategory(category);
    setInitialParentId(null);
    setShowForm(true);
  };

  const handleSave = async () => { await fetchCategories(); };

  const renderCategories = (
    items: Category[],
    parentId: number | null = null,
    level = 0
  ): React.ReactNode => {
    if (!Array.isArray(items)) return null;
    return items
      .filter((item) => item.parentId === parentId)
      .map((item, index) => (
        <CategoryItem
          key={item.id}
          item={item}
          index={index}
          level={level}
          onEdit={() => openEdit(item)}
          onDelete={handleDelete}
          onAddChild={openAddChild}
          onSelect={(id) => setPreviewId((prev) => (prev === id ? null : id))}
          selectedId={previewId}
          isExpanded={false}
          onToggle={() => {}}
          renderChildren={() => renderCategories(items, item.id, level + 1)}
        />
      ));
  };

  const totalCount = categories.length;
  const publicCount = categories.filter((c) => c.visibility === 'public').length;
  const privateCount = categories.filter((c) => c.visibility !== 'public').length;
  const rootCount = categories.filter((c) => c.parentId === null).length;
  const subCount = categories.filter((c) => c.parentId !== null).length;
  const previewCategory = categories.find((c) => c.id === previewId) ?? null;

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Page header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Categories</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Organize your documentation structure. Drag rows to reorder.
          </p>
        </div>
        <Button
          className="bg-[#fc035a] text-white hover:bg-[#d9024e] rounded-lg text-sm font-medium px-4 focus:outline-none focus:ring-0 shrink-0"
          onClick={openNew}
          disabled={isLoading}
        >
          New category
        </Button>
      </div>

      {/* Stats */}
      {totalCount > 0 && (
        <div className="flex items-center gap-5 mb-5 pb-5 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
            <Layers size={13} className="text-gray-400" />
            <span className="font-medium text-gray-900 dark:text-white">{totalCount}</span>
            total
          </div>
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />
          <div className="flex items-center gap-1.5 text-sm">
            <Globe size={12} className="text-green-600 dark:text-green-400" />
            <span className="font-medium text-green-700 dark:text-green-400">{publicCount}</span>
            <span className="text-gray-500 dark:text-gray-400">public</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <Lock size={12} className="text-gray-400" />
            <span className="font-medium text-gray-600 dark:text-gray-300">{privateCount}</span>
            <span className="text-gray-500 dark:text-gray-400">private</span>
          </div>
          {subCount > 0 && (
            <>
              <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium text-gray-700 dark:text-gray-300">{rootCount}</span> root &middot;{' '}
                <span className="font-medium text-gray-700 dark:text-gray-300">{subCount}</span> subcategories
              </span>
            </>
          )}
        </div>
      )}

      {/* Two-column layout */}
      <div className="flex gap-5 flex-1 min-h-0">
        {/* Left: category tree */}
        <div className="flex-1 min-w-0 overflow-y-auto no-scrollbar">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Spinner style={{ color: '#fc035a' }} size="md" />
            </div>
          ) : categories.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 py-16 text-center">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3">
                <Layers size={18} className="text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">No categories yet</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                Create your first category to start building your documentation.
              </p>
              <Button
                className="bg-[#fc035a] text-white hover:bg-[#d9024e] rounded-lg text-sm font-medium px-4"
                onClick={openNew}
              >
                New category
              </Button>
            </div>
          ) : (
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="categories">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-0.5">
                    {renderCategories(categories)}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </div>

        {/* Right: preview panel */}
        <div className="w-[320px] xl:w-[360px] shrink-0 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 overflow-hidden sticky top-0 self-start max-h-[calc(100vh-200px)]">
          <PreviewPanel
            category={previewCategory}
            allCategories={categories}
            onEdit={() => previewCategory && openEdit(previewCategory)}
          />
        </div>
      </div>

      {showForm && (
        <CategoryForm
          category={selectedCategory}
          categories={categories}
          initialParentId={initialParentId}
          onClose={() => { setShowForm(false); setInitialParentId(null); }}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default CategoryTree;
