import { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Radio, RadioGroup, Select, SelectItem, useDisclosure } from '@heroui/react';
import 'react-quill/dist/quill.snow.css';
import ReactMarkdownEditorLite from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
import SortableItem from '../../components/ui/SortableItem';
import yaml from 'js-yaml';


interface Category {
  icon: string;
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  author?: string;
  tags?: string[];
  title?: string;
  
}

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [parentIdForAdd, setParentIdForAdd] = useState<number | null>(null);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [inputType, setInputType] = useState<'editor' | 'upload'>('editor');
  const [file, setFile] = useState<File | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mdParser = new MarkdownIt();
  const sensors = useSensors(useSensor(PointerSensor));
  const [tags, setTags] = useState<string[]>([]);
  const [author, setAuthor] = useState('');
  const [visibility, setVisibility] = useState('public');
  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, []);

 const handleDragEnd = async (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    try {
      await fetch(`http://localhost:3000/api/categories/reorder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          draggedId: active.id,
          targetId: over.id
        })
      });
      fetchCategories();
    } catch (error) {
      console.error('Error reordering:', error);
    }
  };
  const handleSave = async () => {
    if (!newName.trim()) return;
  
    const payload = {
      name: newName.trim(),
      description: newDescription.trim(),
      icon: selectedIcon,
      parentId: parentIdForAdd !== null
        ? parentIdForAdd
        : editingCategory?.parentId ?? null,
      author,
      tags,
    };
  
    try {
      if (editingCategory) {
        // Update existing category
        await fetch(`http://localhost:3000/api/categories`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, id: editingCategory.id }),
        });
      } else {
        // Create new category
        await fetch('http://localhost:3000/api/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
  
      fetchCategories();
      resetForm();
      onClose();
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };
  const deleteCategory = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/categories/${id}`, {
        method: 'DELETE',
      });
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const resetForm = () => {
    setEditingCategory(null);
    setParentIdForAdd(null);
    setNewName('');
    setNewDescription('');
    setSelectedIcon('');
    setFile(null);
    setAuthor('');
    setTags([]);

  };

  const renderTree = (parentId: number | null, depth = 0): React.ReactNode => {
    const items = categories.filter(c => c.parentId === parentId);
  
    return (
      <SortableContext items={items.map(c => c.id)} strategy={verticalListSortingStrategy}>
        {items.map(category => (
          <SortableItem
            key={category.id}
            category={category}
            depth={depth}
            onEdit={(cat) => {
              resetForm();
              setEditingCategory(cat);
              setNewName(cat.name);
              setNewDescription(cat.description || '');
              setSelectedIcon(cat.icon || '');
              setAuthor(cat.author || '');
              setTags(cat.tags || []);
              setParentIdForAdd(cat.parentId ?? null); // This line is key
              onOpen();
            }}            
            
            
            onDelete={deleteCategory}
            onAddSub={(parentId) => {
              resetForm();
              setParentIdForAdd(parentId);
              onOpen();
            }}
          >
            {renderTree(category.id, depth + 1)}
          </SortableItem>
        ))}
      </SortableContext>
    );
  };

  const parseMarkdownMetadata = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
        const frontmatterMatch = text.match(/^---\n([\s\S]+?)\n---\n?/);
      let frontmatter = {};
      let markdownBody = text;
  
      if (frontmatterMatch) {
        try {
          frontmatter = yaml.load(frontmatterMatch[1]);
          markdownBody = text.slice(frontmatterMatch[0].length); // Get the rest as body
        } catch (err) {
          console.error('Error parsing frontmatter:', err);
        }
      }
  
      const { title, author, tags } = frontmatter as any;
  
      // Set fields
      setNewName(title || '');
      setAuthor(author || '');
      setTags(tags || []);
      setNewDescription(markdownBody || '');
  
      // Switch to editor mode
      setInputType('editor');
    };
  
    reader.readAsText(file);
  };
  

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Categories</h2>
        <Button
          color="primary"
          className="bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-white"
          onPress={() => {
            resetForm();
            onOpen();
          }}
        >
          Add Category
        </Button>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {renderTree(null)}
      </DndContext>
      <Modal isOpen={isOpen} onOpenChange={onClose} size="5xl">
        <ModalContent>
          <ModalHeader>
            {parentIdForAdd && (
              <div className="text-sm text-gray-600">
                Parent Category: {categories.find(c => c.id === parentIdForAdd)?.name}
              </div>
            )}
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  label="Category Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  fullWidth
                  isRequired
                />
                  <Select
                    label="Icon"
                    selectedKeys={selectedIcon ? [selectedIcon] : []}
                    onChange={(e) => setSelectedIcon(e.target.value)}
                    className="w-20 p-0"
                    style={{ textAlign: 'center',gap:'0px' }}
                  >
                    {[
                      '','📚', '💼', '🛠️', '💡', '🎓',  
                      '🖥️', '📱', '📊', '📈', '🌍',   
                      '🎨', '🎮', '🏆', '🔒', '💻',    
                      '🔑', '💎', '🖋️', '📅', '✏️',   
                      '🔧', '🔨', '📖', '🖌️', '💡',    
                      '🎧', '🎤', '🎬', '📸', '🎥'     
                    ].map(icon => (
                      <SelectItem key={icon} value={icon}>
                        {icon}
                      </SelectItem>
                    ))}
                  </Select>
              </div>
              <div className='flex gap-4'>
                <Input
                  label="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  fullWidth
                  isRequired
                />

                <Input
                  label="Tags (comma-separated)"
                  value={tags.join(', ')}
                  onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
                  fullWidth
                  isRequired
                />
                   <div className="flex gap-4">
                      <Select
                          label="Visibility"
                          selectedKeys={visibility ? [visibility] : []}
                          onChange={(e) => setVisibility(e.target.value)}
                          className="w-40"
                        >
                          <SelectItem value="public">Public 🌐</SelectItem>
                          <SelectItem value="private">Private 🔒</SelectItem>
                        </Select>
                    </div>
              </div>         

              <div className="space-y-2">
                <RadioGroup
                  label="Description Type"
                  value={inputType}
                  onValueChange={(v: 'editor' | 'upload') => setInputType(v)}
                  orientation="horizontal"
                >
                  <Radio value="editor">Write Content</Radio>
                  <Radio value="upload">Upload File</Radio>
                </RadioGroup>

                {inputType === 'editor' ? (
                  <ReactMarkdownEditorLite
                    value={newDescription}
                    onChange={({ text }) => setNewDescription(text)}
                    renderHTML={text => mdParser.render(text)}
                    style={{ height: '300px' }}
                  />
                ) : (
                  <Input
                    label="Upload File"
                    type="file"
                    accept=".md"
                    errorMessage="Should be a markdown file"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setFile(file);
                      if (file) {
                        parseMarkdownMetadata(file);
                        setInputType('editor');
                      }
                    }}
                    className="block w-full mt-20 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#c1124a] file:text-white hover:file:bg-[#921d7f]"
                  />
                )}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={onClose}>Cancel</Button>
            <Button
              color="primary"
              className="bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-white"
              onPress={handleSave}
            >
              {editingCategory ? 'Save' : 'Create'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  );
};


export default CategoriesPage;
