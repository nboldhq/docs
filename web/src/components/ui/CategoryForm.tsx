import React, { useState, useEffect } from 'react';
import {
  Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter,
  Button, Input, Select, SelectItem, toast,
} from '@heroui/react';
import yaml from 'js-yaml';
import MDEditor from '@uiw/react-md-editor';
import { Globe, Lock, HelpCircle, Lightbulb, AlertTriangle, Upload, X } from 'lucide-react';
import IconPicker from './IconPicker';

interface Category {
  visibility: string;
  icon: string;
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  author?: string;
  tags?: string[];
  title?: string;
  children: Category[];
}

interface CategoryFormProps {
  category: Category | null;
  categories: Category[];
  initialParentId?: number | null;
  onClose: () => void;
  onSave: () => void;
}

interface FormData {
  id?: number;
  name: string;
  description: string;
  parentId: number | null;
  icon: string;
  tags: string[];
  author: string;
  visibility: string;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ category, categories, initialParentId, onClose, onSave }) => {
  const [inputType, setInputType] = useState<'editor' | 'upload'>('editor');
  const [showHints, setShowHints] = useState(false);
  const [isTagsDisabled, setIsTagsDisabled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    parentId: null,
    icon: '',
    tags: [],
    author: '',
    visibility: 'private',
  });

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (category) {
      setFormData({
        id: category.id,
        name: category.name,
        description: category.description,
        parentId: category.parentId,
        icon: category.icon,
        tags: category.tags || [],
        author: category.author || '',
        visibility: category.visibility || 'private',
      });
      setIsTagsDisabled(!!category.parentId);
    } else if (initialParentId != null) {
      const parent = categories.find((c) => c.id === initialParentId);
      setFormData((prev) => ({
        ...prev,
        parentId: initialParentId,
        tags: [parent?.name.trim().replace(/\s+/g, '-').toLowerCase() || ''],
      }));
      setIsTagsDisabled(true);
    }
  }, [category, initialParentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.details || 'Failed to save category');
      }
      onSave();
      onClose();
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const parseMarkdownFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const match = text.match(/^---\n([\s\S]+?)\n---\n?/);
      let fm: { title?: string; author?: string; tags?: string[] } = {};
      let body = text;
      if (match) {
        try { fm = yaml.load(match[1]) as any; body = text.slice(match[0].length); } catch {}
      }
      setFormData((prev) => ({
        ...prev,
        name: fm.title || prev.name,
        author: fm.author || prev.author,
        tags: fm.tags?.map((t) => t.trim().replace(/\s+/g, '-')) || prev.tags,
        description: body,
      }));
      setInputType('editor');
    };
    reader.readAsText(file);
  };

  return (
    <Drawer isOpen placement="right" size="3xl" onClose={onClose} hideCloseButton>
      <DrawerContent>
        <form onSubmit={handleSubmit} className="flex flex-col h-full">

          {/* Header */}
          <DrawerHeader className="flex items-start justify-between border-b border-gray-200 dark:border-gray-800 px-6 py-4 shrink-0">
            <div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                {category ? 'Edit category' : initialParentId ? 'New subcategory' : 'New category'}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {category
                  ? 'Update metadata and documentation content.'
                  : initialParentId
                  ? `Adding under "${categories.find((c) => c.id === initialParentId)?.name ?? ''}"`
                  : 'Fill in the details and write your documentation.'}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-0.5"
            >
              <X size={16} />
            </button>
          </DrawerHeader>

          {/* Body */}
          <DrawerBody className="flex-1 overflow-y-auto px-6 py-5 space-y-4 no-scrollbar">

            {/* Row 1: Icon + Name + Parent */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-full sm:w-40 shrink-0">
                <IconPicker
                  value={formData.icon}
                  onChange={(icon) => setFormData((prev) => ({ ...prev, icon }))}
                />
              </div>
              <Input
                label="Category name"
                value={formData.name}
                onChange={(e) => {
                  const v = e.target.value;
                  const tag = v.trim().replace(/\s+/g, '-').toLowerCase();
                  setFormData((prev) => ({
                    ...prev,
                    name: v,
                    tags: prev.parentId ? prev.tags : [tag],
                  }));
                }}
                isRequired
                isInvalid={!formData.name.trim()}
                errorMessage={!formData.name.trim() ? 'Name is required' : ''}
                className="flex-1"
              />
              <Select
                label="Parent category"
                selectedKeys={formData.parentId ? [formData.parentId.toString()] : []}
                onChange={(e) => {
                  const sel = e.target.value;
                  const parent = categories.find((c) => c.id === parseInt(sel));
                  if (!sel || sel === 'none') {
                    setFormData((prev) => ({
                      ...prev,
                      parentId: null,
                      tags: [prev.name.trim().replace(/\s+/g, '-').toLowerCase()],
                    }));
                    setIsTagsDisabled(false);
                  } else {
                    setFormData((prev) => ({
                      ...prev,
                      parentId: parseInt(sel),
                      tags: [parent?.name.trim().replace(/\s+/g, '-').toLowerCase() || ''],
                    }));
                    setIsTagsDisabled(true);
                  }
                }}
                className="w-full sm:w-52 shrink-0"
                placeholder="None"
              >
                <SelectItem key="none">None</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id.toString()}>{cat.name}</SelectItem>
                ))}
              </Select>
            </div>

            {/* Row 2: Author + Tags + Visibility */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                label="Author"
                value={formData.author}
                onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
                isRequired
                className="flex-1"
              />
              <Input
                label="URL tag"
                value={formData.tags.join(', ')}
                isDisabled={isTagsDisabled}
                onChange={(e) => {
                  if (!isTagsDisabled) {
                    setFormData((prev) => ({
                      ...prev,
                      tags: e.target.value.split(',').map((t) => t.trim().replace(/\s+/g, '-')).filter(Boolean),
                    }));
                  }
                }}
                description={isTagsDisabled ? 'Inherited from parent' : 'Used in the URL path'}
                className="flex-1"
              />
              <div className="w-full sm:w-44 shrink-0">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 ml-0.5">Visibility</p>
                <div className="flex h-10 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, visibility: 'public' }))}
                    className={`flex-1 flex items-center justify-center gap-1.5 transition-colors ${
                      formData.visibility === 'public'
                        ? 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Globe size={12} /> Public
                  </button>
                  <div className="w-px bg-gray-200 dark:bg-gray-700" />
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, visibility: 'private' }))}
                    className={`flex-1 flex items-center justify-center gap-1.5 transition-colors ${
                      formData.visibility === 'private'
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Lock size={12} /> Private
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-800 !mt-5" />

            {/* Content section */}
            <div className="space-y-3 !mt-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Content</span>
                  <div className="flex rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setInputType('editor')}
                      className={`px-3 py-1 text-xs font-medium transition-colors ${
                        inputType === 'editor'
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      Editor
                    </button>
                    <div className="w-px bg-gray-200 dark:bg-gray-700" />
                    <label className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                      inputType === 'upload'
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}>
                      <Upload size={11} />
                      Import .md
                      <input
                        type="file"
                        accept=".md"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) parseMarkdownFile(f);
                        }}
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowHints((v) => !v)}
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  <HelpCircle size={13} />
                  Markdown guide
                </button>
              </div>

              {showHints && (
                <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 space-y-3">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Custom callout blocks</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-md border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-3">
                      <div className="flex items-center gap-1.5 text-green-700 dark:text-green-400 mb-2">
                        <Lightbulb size={12} />
                        <span className="text-xs font-semibold">Tip block</span>
                      </div>
                      <pre className="text-xs text-green-800 dark:text-green-300 font-mono leading-relaxed">{':::tip\nYour tip here\n:::'}</pre>
                    </div>
                    <div className="rounded-md border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30 p-3">
                      <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 mb-2">
                        <AlertTriangle size={12} />
                        <span className="text-xs font-semibold">Warning block</span>
                      </div>
                      <pre className="text-xs text-amber-800 dark:text-amber-300 font-mono leading-relaxed">{':::warning\nYour warning here\n:::'}</pre>
                    </div>
                  </div>
                </div>
              )}

              <MDEditor
                value={formData.description}
                onChange={(v) => setFormData((prev) => ({ ...prev, description: v || '' }))}
                preview="live"
                height={480}
                data-color-mode={theme}
              />
            </div>
          </DrawerBody>

          {/* Footer */}
          <DrawerFooter className="shrink-0 border-t border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-end gap-3">
            <Button variant="flat" color="default" onPress={onClose} className="text-sm font-medium">
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#fc035a] text-white hover:bg-[#d9024e] rounded-lg text-sm font-medium px-5"
            >
              {category ? 'Save changes' : 'Create category'}
            </Button>
          </DrawerFooter>

        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryForm;
