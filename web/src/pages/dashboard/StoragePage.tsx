import React, { useEffect, useState } from 'react';
import {
  Folder,
  FileText,
  Upload,
  FolderPlus,
  Eye
} from 'lucide-react';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ScrollShadow, ModalFooter, Input } from '@heroui/react';
import { DndContext, closestCenter, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { format } from 'date-fns'; 
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'file';
  size?: string;
  modifiedAt: Date;
  path: string[];
  description?: string;
  children?: FileItem[]; // Add children for folders
}


interface CategoryApiResponse {
  id: number;
  name: string;
  description: string;
  icon: string;
  parentId: number;
  author: string;
  tags: string[];
  visibility: string;
  status: string;
}

const FilesPage = () => {
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showNewFolderModal, setShowNewFolderModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [items, setItems] = useState<FileItem[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/categories`)
        .then((res) => res.json())
        .then((data: CategoryApiResponse[]) => {
          const idToCategory = new Map<number, CategoryApiResponse>();
          data.forEach((category) => idToCategory.set(category.id, category));
    
          const mappedItems: FileItem[] = data.map((category) => {
            const path: string[] = [];
            let current = category;
          
            while (current.parentId !== 0 && idToCategory.has(current.parentId)) {
              const parent = idToCategory.get(current.parentId)!;
              path.unshift(parent.name);
              current = parent;
            }
          
            return {
              id: category.id.toString(),
              name: category.name,
              description: category.description,
              type: category.parentId ? 'file' : 'folder', 
              parentId: category.parentId ? category.parentId.toString() : null,
              modifiedAt: new Date(),
              path: path,
            };
          });
          
    
          setItems(mappedItems);
        })
        .catch((err) => console.error('Error fetching data:', err));
    }, []);

    const getFileIcon = (type: string) => {
      switch (type) {
        case 'folder':
          return <Folder className="w-6 h-6 text-[#c1124a]" />;
        default:
          return <FileText className="w-6 h-6 text-gray-500" />;
      }
    };

    const getVisibleItems = () => {
      return items.filter(item =>
        item.path.length === currentPath.length && 
        item.path.every((p, index) => p === currentPath[index]) 
      );
    };

    useEffect(() => {
      console.log('Current Path:', currentPath); 
      console.log('Visible Items:', getVisibleItems()); 
    }, [currentPath]);

    const handleItemClick = (item: FileItem) => {
      if (item.type === 'folder') {
        setCurrentPath([...currentPath, item.name]); 
      } else {
        setSelectedFile(item); 
        setIsModalOpen(true);
      }
    };
     

    const handlePathClick = (index: number) => {
      setCurrentPath(currentPath.slice(0, index + 1));
    };

    const handleCreateFolder = () => {
      if (newFolderName.trim()) {
        const newFolder: FileItem = {
          id: Date.now().toString(),
          name: newFolderName,
          type: 'folder',
          modifiedAt: new Date(),
          path: currentPath, 
          description: '',
        };
    
        setItems(prevItems => [...prevItems, newFolder]);
        setShowNewFolderModal(false); 
        setNewFolderName(''); 
      }
    };
    

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const newFile: FileItem = {
          id: Date.now().toString(), 
          name: file.name,
          type: 'file',
          size: (file.size / 1024).toFixed(2) + ' KB',
          modifiedAt: new Date(),
          path: currentPath, 
          description: '', 
        };
    
        setItems(prevItems => [...prevItems, newFile]);
      }
    };
    

    const handleUploadClick = () => {
      const fileInput = document.getElementById('file-upload-input') as HTMLInputElement;
      fileInput.click(); 
    };

    const openFile = (file: FileItem) => {
        setSelectedFile(file);
        setIsModalOpen(true);
    };
    const getGroupedItems = () => {
      return items.filter(item =>
        item.path.length === currentPath.length &&
        item.path.every((p, index) => p === currentPath[index])
      );
    };
    

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Storage</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            variant={viewMode === 'grid' ? 'solid' : 'ghost'}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </Button>
          <Button
            size="sm"
            variant={viewMode === 'list' ? 'solid' : 'ghost'}
            onClick={() => setViewMode('list')}
          >
            List
          </Button>
        </div>
      </div>
      <div className="bg-white dark:bg-[#18181B] rounded-2xl shadow-md mb-6">
        <div className="p-4">
          <nav className="flex items-center text-sm space-x-2" aria-label="Breadcrumb">
            <button
              onClick={() => setCurrentPath([])}
              className="text-[#c1124a] hover:underline font-medium"
            >
              Docs
            </button>
            {currentPath.map((path, index) => (
              <React.Fragment key={index}>
                <span className="text-gray-400">/</span>
                <button
                  onClick={() => handlePathClick(index)}
                  className="text-[#c1124a] hover:underline font-medium"
                >
                  {path}
                </button>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
      <DndContext sensors={sensors} collisionDetection={closestCenter}>
        <SortableContext items={getVisibleItems().map(item => item.id)} strategy={rectSortingStrategy}>
          <div className={viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
            : 'divide-y dark:divide-gray-700'}>
           {getGroupedItems().map((item) => (
              <div key={item.id}>
                <div
                  onClick={() => handleItemClick(item)}
                  className={`group relative cursor-pointer transition-all p-4 ${
                    viewMode === 'grid'
                      ? 'border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                      : 'flex items-center space-x-4 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3 w-full">
                    {getFileIcon(item.type)}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.size && `${item.size} • `}
                        {format(item.modifiedAt, 'MMM d, yyyy')}
                      </p>
                    </div>
                      {item.type === 'file' && (
                        <button
                          className="ml-auto text-[#c1124a]"
                          onClick={(e) => {
                            e.stopPropagation();
                            openFile(item);
                          }}
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      )}

                  </div>
                </div>
                {item.type === 'folder' && item.children && (
                  <div className="ml-8 mt-2 space-y-2">
                    {item.children.map(child => (
                      <div
                        key={child.id}
                        onClick={() => handleItemClick(child)}
                        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md"
                      >
                        {getFileIcon(child.type)}
                        <div>
                          <p className="text-sm font-medium text-gray-800 dark:text-white">{child.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {child.size && `${child.size} • `}
                            {format(child.modifiedAt, 'MMM d, yyyy')}
                          </p>
                        </div>
                        <button
                          className="ml-auto text-[#c1124a]"
                          onClick={(e) => {
                            e.stopPropagation();
                            openFile(child);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <Modal size="4xl" className='h-[710px]' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          <ModalHeader>{selectedFile?.name}</ModalHeader>
          <ModalBody>
            {selectedFile?.description ? (
              <ScrollShadow hideScrollBar className="w-full h-[550px]">
                <div className="prose dark:prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedFile.description}
                  </ReactMarkdown>
                </div>
              </ScrollShadow>
            ) : (
              <p>No description available.</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
          isOpen={showNewFolderModal}
          onClose={() => setShowNewFolderModal(false)} 
        >
          <ModalContent>
            <ModalHeader>Create New Folder</ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  placeholder="Enter folder name"
                  className="w-full p-2"
                />
              </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowNewFolderModal(false)}>Cancel</Button>
              <Button onClick={handleCreateFolder} className='border-gradient text-white'>Create Folder</Button>
            </ModalFooter>
          </ModalContent>
      </Modal>
    </div>
  );
};

export default FilesPage;
