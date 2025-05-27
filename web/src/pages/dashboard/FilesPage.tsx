import { useEffect, useState } from 'react';
import { Folder, ChevronDown, ChevronRight, FileText, Eye } from 'lucide-react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ScrollShadow
} from '@heroui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const FilePage = () => {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/categories`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  const groupByTags = (data) => {
    const folders = {};
    data.forEach((item) => {
      item.tags.forEach((tag) => {
        if (!folders[tag]) folders[tag] = [];
        folders[tag].push(item);
      });
    });
    return folders;
  };

const openFile = (file) => {
  setSelectedFile(file);
  setIsModalOpen(true);
};

  

  const folders = groupByTags(data);

  const toggleFolder = (tag) => {
    setExpanded((prev) => ({ ...prev, [tag]: !prev[tag] }));
  };

  return (
    <div className="p-6 mt-10 max-w-5xl mx-auto bg-gray-50 dark:bg-[#18181B] rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Files</h2>
    {Object.keys(folders).map((tag) => (
      <div key={tag} className="mb-4 mt-3">
        <div
          onClick={() => toggleFolder(tag)}
          className="flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded"
        >
          {expanded[tag] ? (
            <ChevronDown className="w-5 h-5 mr-2 text-gray-800 dark:text-white" />
          ) : (
            <ChevronRight className="w-5 h-5 mr-2 text-gray-800 dark:text-white" />
          )}
          <Folder className="w-5 h-5 mr-2 text-yellow-500" />
          <span className="font-semibold text-lg text-gray-900 dark:text-white">{tag}</span>
        </div>
  
        {expanded[tag] && (
          <div className="ml-8 mt-2">
            {folders[tag].map((file) => (
              <div
                key={file.id}
                className="flex items-start gap-2 p-2 mb-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FileText className="w-5 h-5 mt-1 text-blue-500" />
                <div className="flex-1">
                  <div className="font-medium text-gray-800 dark:text-white">{file.name}</div>
                  <div className="text-sm text-gray-600 line-clamp-3 dark:text-gray-400">
                    {file.description.slice(0, 200)}...
                  </div>
                  <div className="text-xs text-gray-400 mt-1 dark:text-gray-500">Author: {file.author}</div>
                </div>
                <button
                  className="ml-2 text-blue-500 dark:text-blue-400"
                  onClick={() => openFile(file)} 
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
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


  </div>
  
  
  );
};

export default FilePage;
