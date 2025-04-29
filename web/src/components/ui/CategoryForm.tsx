import React, { useState, useEffect } from 'react';
import { Modal,Radio , ModalBody, ModalContent, ModalHeader, ModalFooter, Button, Input, Select, SelectItem, Textarea, RadioGroup } from '@heroui/react';
import ReactMarkdownEditorLite from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
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
  children: Category[];
}

interface CategoryFormProps {
  category?: Category;
  categories: Category[];
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
}

const CategoryForm: React.FC<CategoryFormProps> = ({ 
  category, 
  categories, 
  onClose, 
  onSave 
}) => {
  const [selectedIcon, setSelectedIcon] = useState('');
  const [inputType, setInputType] = useState<'editor' | 'upload'>('editor');
  const [newDescription, setNewDescription] = useState('');
  const mdParser = new MarkdownIt();
  const [file, setFile] = useState<File | null>(null);
  const [newName, setNewName] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [visibility, setVisibility] = useState('public');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    parentId: null,
    icon: '',
    tags: [],
    author: ''
  });

  useEffect(() => {
    if (category) {
      setFormData({
        id: category.id,
        name: category.name,
        description: category.description,
        parentId: category.parentId,
        icon: category.icon,
        tags: category.tags || [],
        author: category.author || ''
      });
    }
  }, [category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Failed to save category');
      
      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };
  interface Frontmatter {
    title?: string;
    author?: string;
    tags?: string[];
  }
  const parseMarkdownMetadata = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const frontmatterMatch = text.match(/^---\n([\s\S]+?)\n---\n?/);
      let frontmatter: Frontmatter = {};
      let markdownBody = text;
  
      if (frontmatterMatch) {
        try {
          frontmatter = yaml.load(frontmatterMatch[1]) as Frontmatter;
          markdownBody = text.slice(frontmatterMatch[0].length);
        } catch (err) {
          console.error('Error parsing frontmatter:', err);
        }
      }
  
      setFormData(prev => ({
        ...prev,
        name: frontmatter.title || prev.name,
        author: frontmatter.author || prev.author,
        tags: frontmatter.tags || prev.tags,
        description: markdownBody
      }));
  
      setInputType('editor');
    };
  
    reader.readAsText(file);
  };
  


  return (
    <Modal isOpen onClose={onClose}  size="5xl" backdrop="blur" placement="center">
      <ModalContent>
        <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1">
              {category ? 'Edit Category' : 'Create Category'}
            </ModalHeader>

          <ModalBody className="gap-4">
            <div className="space-y-4">
              <div className="flex gap-4">
                    <Input
                      label="Category Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className='w-[600px]'
                    />
                    <Select
                        label="Parent Category"
                        selectedKeys={formData.parentId ? [formData.parentId.toString()] : []}
                        onChange={(e) => 
                          setFormData({ 
                            ...formData, 
                            parentId: e.target.value ? parseInt(e.target.value) : null 
                          })
                        }
                        className="w-40"
                        placeholder="Select parent category"
                      >
                        <SelectItem key="null" value={null}>
                          None
                        </SelectItem>
                        {categories.map(cat => (
                          <SelectItem key={cat.id.toString()} value={cat.id.toString()}>
                            {cat.name}
                          </SelectItem>
                        ))}
                    </Select>
                   <Select
                    label="Icon"
                    selectedKeys={selectedIcon ? [selectedIcon] : []}
                    onChange={(e) => setSelectedIcon(e.target.value)}
                    className="w-24 p-0"
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
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    fullWidth
                    isRequired
                  />
                  <Input
                    label="Tags (comma-separated)"
                    value={formData.tags.join(', ')}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) 
                    })}
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
              <div className="space-y-4">
                <RadioGroup
                  label="Description Type"
                  value={inputType}
                  onValueChange={(v: 'editor' | 'upload') => setInputType(v)}
                  orientation="horizontal"
                  className="mb-4"
                >
                  <Radio value="editor">Write Content</Radio>
                  <Radio value="upload">Upload File</Radio>
                </RadioGroup>

                {inputType === 'editor' ? (
                 <ReactMarkdownEditorLite
                    value={formData.description}
                    onChange={({ text }) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: text,
                      }))
                    }
                    renderHTML={text => mdParser.render(text)}
                    style={{ height: '300px', marginBottom: '20px' }}
                    className="markdown-editor"
                  />
               
                ) : (
                  <Input
                    label="Upload Markdown File"
                    type="file"
                    accept=".md"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFile(file);
                        parseMarkdownMetadata(file);
                        setInputType('editor'); // Switch back to editor after upload
                      }
                    }}
                    className="w-full"
                    description="Upload a .md file to import content"
                  />
                )}
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Annuler
            </Button>
            <Button color="primary" type="submit">
              Sauvegarder
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CategoryForm;
