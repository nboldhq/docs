import React, { useState, useEffect } from 'react';
import { Modal,Radio , ModalBody, ModalContent, ModalHeader, ModalFooter, Button, Input, Select, SelectItem, RadioGroup, Popover, PopoverTrigger, PopoverContent, ScrollShadow, toast } from '@heroui/react';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
import yaml from 'js-yaml';
import MDEditor from '@uiw/react-md-editor';
import { Check, ShieldAlert, ShieldQuestion } from 'lucide-react';


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
      


  const CategoryForm: React.FC<CategoryFormProps> = ({ 
    category, 
    categories, 
    onClose, 
    onSave 
  }) => {
      const [selectedIcon, setSelectedIcon] = useState('');
      const [inputType, setInputType] = useState<'editor' | 'upload'>('editor');
      const mdParser = new MarkdownIt();
      const [file, setFile] = useState<File | null>(null);
      const [theme, setTheme] = useState<'light' | 'dark'>('light');
      const [activeTab, setActiveTab] = useState<'blocks' | 'formatting'>('blocks');
      const [isTagsDisabled, setIsTagsDisabled] = useState(false);
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
        const localTheme = localStorage.getItem('theme');
        if (localTheme === 'dark' || localTheme === 'light') {
          setTheme(localTheme);
        }
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
          setSelectedIcon(category.icon);
        }
      }, [category]);
      
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const response = await fetch(`https://${import.meta.env.VITE_ALLOWED_HOST}/api/categories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.details || 'Failed to save category');
          }
          onSave();
          onClose();
        } catch (error) {
          console.error('Error saving category:', error);
          toast.error(`Error: ${error.message}`);
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
            tags: frontmatter.tags?.map(tag => tag.trim().replace(/\s+/g, '-')) || prev.tags,
            description: markdownBody
          }));
      
          setInputType('editor');
        };
      
        reader.readAsText(file);
      };
      
    
    return (
      <Modal 
          isOpen 
          onClose={onClose}  
          size="5xl" 
          backdrop="blur" 
          placement="center"
          classNames={{
            base: "mx-4", 
            wrapper: "md:p-4",
          }}
        >
        <ModalContent>
          <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                {category ? 'Edit Category' : 'Create Category'}
              </ModalHeader>
              <ModalBody className="gap-4">
                <ScrollShadow hideScrollBar className="w-auto md:w-full md:h-full h-[400px]">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <Select
                          label="Icon"
                          selectedKeys={formData.icon ? [formData.icon] : []}
                          onChange={(e) => {
                            const icon = e.target.value;
                            setFormData((prev) => ({ ...prev, icon }));
                          }}
                          className="w-full md:w-24 p-0"
                          style={{ textAlign: 'center', gap: '0px' }}
                        >
                          {[
                            '', '📚', '💼', '🛠️', '💡', '🎓',
                            '🖥️', '📱', '📊', '📈', '🌍',
                            '🎨', '🎮', '🏆', '🔒', '💻',
                            '🔑', '💎', '🖋️', '📅', '✏️',
                            '🔧', '🔨', '📖', '🖌️', '💡',
                            '🎧', '🎤', '🎬', '📸', '🎥'
                          ].map((icon) => (
                            <SelectItem key={icon} textValue={icon}>
                              {icon}
                            </SelectItem>
                          ))}
                        </Select>
                        <Input
                            label="Category Name"
                            value={formData.name}
                            onChange={(e) => {
                              const nameValue = e.target.value;
                              const formattedTag = nameValue.trim().replace(/\s+/g, '-').toLowerCase();
                              setFormData(prev => ({
                                ...prev,
                                name: nameValue,
                                tags: prev.parentId ? prev.tags : [formattedTag]
                              }));
                            }}
                            isRequired
                            isInvalid={!formData.name.trim()}
                            errorMessage={!formData.name.trim() && " Category Name is required"}
                            className="w-full md:w-[600px]"
                          />

                         <Select
                            label="Parent Category"
                            selectedKeys={formData.parentId ? [formData.parentId.toString()] : []}
                            onChange={(e) => {
                              const selected = e.target.value;
                              const selectedCategory = categories.find(cat => cat.id === parseInt(selected));

                              if (selected === 'none') {
                                setFormData(prev => ({
                                  ...prev,
                                  parentId: null,
                                  tags: [prev.name.trim().replace(/\s+/g, '-').toLowerCase()]
                                }));
                                setIsTagsDisabled(false);
                              } else {
                                setFormData(prev => ({
                                  ...prev,
                                  parentId: parseInt(selected),
                                  tags: [selectedCategory?.name.trim().replace(/\s+/g, '-').toLowerCase() || '']
                                }));
                                setIsTagsDisabled(true);
                              }
                            }}
                            className="w-full md:w-56"
                            placeholder="Select parent category"
                          >
                            <SelectItem key="none">None</SelectItem>
                            {categories.map(cat => (
                              <SelectItem key={cat.id.toString()}>
                                {cat.name}
                              </SelectItem>
                            ))}
                          </Select>

                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Input
                          label="Author"
                          value={formData.author}
                          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                          fullWidth
                          className="w-full"
                          isRequired
                        />
                      <Input
                          label="Tags (comma-separated)"
                          value={formData.tags.join(', ')}
                          isDisabled={isTagsDisabled}
                          onChange={(e) => {
                            if (!isTagsDisabled) {
                              setFormData({
                                ...formData,
                                tags: e.target.value
                                  .split(',')
                                  .map(t => t.trim().replace(/\s+/g, '-'))
                                  .filter(Boolean)
                              });
                            }
                          }}
                          className="w-full"
                        />

                      <div className="flex gap-4">
                      <Select
                        selectedKeys={formData.visibility ? [formData.visibility] : []}
                        onChange={(e) => setFormData((prev) => ({ ...prev, visibility: e.target.value }))}
                        className="w-full md:w-40"
                        >
                      <SelectItem key="public">Public 🌐</SelectItem>
                      <SelectItem key="private">Private 🔒</SelectItem>
                      </Select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <RadioGroup
                        label={
                          <div className="flex items-center gap-2">
                            <span>Description Type</span>
                            <Popover placement="top">
                              <PopoverTrigger>
                                <button className="text-red-500 hover:text-gray-700 transition-colors">
                                  <ShieldQuestion/>
                                </button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[400px]">
                                <div className="px-1 py-2 space-y-3">
                                  <div className="flex gap-2 pb-2">
                                    <button
                                      onClick={() => setActiveTab('blocks')}
                                      className={`px-3 py-1 text-sm ${
                                        activeTab === 'blocks' 
                                          ? 'border-gradient text-white'
                                          : 'text-gray-500 hover:border-gradient'
                                      }`}
                                    >
                                      Blocks Guide
                                    </button>
                                    <button
                                      onClick={() => setActiveTab('formatting')}
                                      className={`px-3 py-1 text-sm ${
                                        activeTab === 'formatting'
                                          ? 'border-gradient text-white'
                                          : 'text-gray-500 hover:border-gradient'
                                      }`}
                                    >
                                      Text Formatting
                                    </button>
                                  </div>

                                  {activeTab === 'blocks' ? (
                                    <div className="space-y-3">
                                      <div className="text-small font-bold">Custom Blocks Guide</div>                                    
                                        <div className="bg-green-50 p-2 rounded-md border border-green-200">
                                          <div className="flex items-start gap-2">
                                             <Check className="w-4 h-4 mt-0.5 text-green-600"/>
                                            <div className="text-tiny text-green-800">
                                              <code>:::tip</code>
                                              <div className="ml-4 mt-1">You can make this homepage available to everyone...</div>
                                              <code>:::</code>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="bg-amber-50 p-2 rounded-md border border-amber-200">
                                          <div className="flex items-start gap-2">
                                            <ShieldAlert className="w-4 h-4 mt-0.5 text-amber-600"/>                                          
                                            <div className="text-tiny text-amber-800">
                                              <code>:::warning</code>
                                              <div className="ml-4 mt-1">To complete these steps, you <strong>must</strong> be...</div>
                                              <code>:::</code>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                  ) : (
                                    <div className="space-y-3">
                                      <div className="text-small font-bold">Text Formatting Help</div>
                                      <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-md border border-gray-200 dark:border-gray-700 transition-colors">
                                        <div className="grid grid-cols-2 gap-4 text-tiny dark:text-gray-300">
                                          <div className="space-y-2">
                                            <div className="font-medium dark:text-gray-200">Bold Text</div>
                                            <code className="dark:bg-gray-700/50 dark:text-gray-300 dark:border-gray-600">
                                              **bold text**
                                            </code>
                                            <div>Renders as: <strong className="dark:text-gray-100">bold text</strong></div>
                                          </div>
                                          
                                          <div className="space-y-2">
                                            <div className="font-medium dark:text-gray-200">Italic Text</div>
                                            <code className="dark:bg-gray-700/50 dark:text-gray-300 dark:border-gray-600">
                                              *italic text*
                                            </code>
                                            <div>Renders as: <em className="dark:text-gray-100">italic text</em></div>
                                          </div>
                                          
                                          <div className="space-y-2">
                                            <div className="font-medium dark:text-gray-200">Combined</div>
                                            <code className="dark:bg-gray-700/50 dark:text-gray-300 dark:border-gray-600">
                                              _**bold italic**_
                                            </code>
                                            <div>Renders as: <em><strong className="dark:text-gray-100">bold italic</strong></em></div>
                                          </div>
                                          
                                          <div className="space-y-2">
                                            <div className="font-medium dark:text-gray-200">Code</div>
                                            <code className="dark:bg-gray-700/50 dark:text-gray-300 dark:border-gray-600">
                                              `inline code`
                                            </code>
                                            <div>Renders as: <code className="dark:bg-gray-700/50 dark:text-gray-300 dark:border-gray-600">
                                              inline code
                                            </code></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                        }
                        value={inputType}
                        onValueChange={(value) => setInputType(value as 'editor' | 'upload')}
                        orientation="horizontal"
                        className="flex flex-col md:flex-row gap-4 mb-4"
                        >
                        <Radio value="editor">Write Content</Radio>
                        <Radio value="upload">Upload File</Radio>
                      </RadioGroup>

                      {inputType === 'editor' ? (
                        <MDEditor
                          value={formData.description}
                          onChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              description: value || '',
                            }))
                          }
                          preview="live"
                          height={300}
                          data-color-mode={theme}
                          className="max-h-[50vh] md:max-h-none" 
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
                              setInputType('editor');
                            }
                          }}
                          className="w-full"
                          description="Upload a .md file to import content"
                        />
                      )}
                    </div>
                  </div>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter className="flex flex-col md:flex-row gap-2">
                <Button 
                color="danger" 
                variant="light" 
                onPress={onClose}
                className="w-full md:w-auto"
                >
                  Cancel
                </Button>
                <Button           
                    className='border-gradient text-white w-full md:w-auto' 
                   type="submit" >
                  Save
                </Button>
              </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    );
  };

  export default CategoryForm;
