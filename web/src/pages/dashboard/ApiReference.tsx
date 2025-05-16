import { addToast, Button, Card, Chip, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, ScrollShadow, Textarea } from '@heroui/react';
import { Pencil, PlusIcon, Search, Trash2, TrashIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import EndpointMethod from '../../components/ui/api-reference/EndpointMethod';
import EndpointModal from '../../components/ui/api-reference/EndpointModal';

type OpenApiSpec = {
  info: {
    title: string;
    description: string;
    summary?: string;
  };
  "x-tagGroups"?: {
    name: string;
    tags: string[];
  }[];
  tags: {
    name: string;
    description: string;
  }[];
  paths: {
    [path: string]: {
      [method: string]: {
        tags?: string[];
        summary?: string;
        description?: string;
        operationId?: string;
        deprecated?: boolean;
        security?: {
          [scheme: string]: string[];
        }[];
        parameters?: {
          name: string;
          in: "path" | "query" | "header" | "cookie";
          description?: string;
          required?: boolean;
          schema: Record<string, any>;
        }[];
        requestBody?: {
          description?: string;
          required?: boolean;
          content: {
            [contentType: string]: {
              schema: Record<string, any>;
            };
          };
        };
        responses: {
          [statusCode: string]: {
            description: string;
            content?: {
              [contentType: string]: {
                schema: Record<string, any>;
              };
            };
          };
        };
        [extension: `x-${string}`]: any;
      };
    };
  };
};

const ApiReference: React.FC = () => {
  const [jsonData, setJsonData] = useState<OpenApiSpec | null>(null);
  const [filename, setFilename] = useState<string>('openapi.json');
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [openMethods, setOpenMethods] = useState<Set<string>>(() => new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);
  const [newGroupAdded, setNewGroupAdded] = useState(false);
  
  const fetchRemoteSpec = async () => {
    try {
      const response = await fetch('https://skan-dev.nbold.dev/api/spec');
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      const data: OpenApiSpec = await response.json();
      console.log('Fetched x-tagGroups:', data['x-tagGroups']);
  
      // Ensure x-tagGroups is an array
      if (!data['x-tagGroups'] || !Array.isArray(data['x-tagGroups'])) {
        console.warn('x-tagGroups is missing or not an array, initializing as empty array');
        data['x-tagGroups'] = [];
      }
  
      setJsonData(data);
      setFilename('Remote OpenAPI Spec');
    } catch (error) {
      console.error('Error fetching remote spec:', error);
      alert(`Error fetching remote spec: ${error.message}`);
    }
  };

  const toggleMethod = (pathKey: string, method: string) => {
    const key = `${pathKey}-${method}`;
    setOpenMethods(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return new Set(next);
    });
    
  };
  
  React.useEffect(() => {
    fetchRemoteSpec();
  }, []);

  const handleChange = (path: string[], value: any) => {
    if (!jsonData) return;
  
    const newData = { ...jsonData };
    let current: any = newData;
  
    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      const existingValue = current[key];
  
      if (Array.isArray(existingValue)) {
        current[key] = [...existingValue];
      } else if (typeof existingValue === 'object' && existingValue !== null) {
        current[key] = { ...existingValue };
      } else {
        current[key] = {};
      }
  
      current = current[key];
    }
  
    const lastKey = path[path.length - 1];
    current[lastKey] = value;
    setJsonData(newData);
  };
  
  const handleSave = async () => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
        signal: controller.signal
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Display success toast
      addToast({
        title: 'Save Successful',
        description: 'Your changes have been saved.',
        status: 'success',
        color:'success',
        duration: 5000,
        classNames:'mt-10',
        isClosable: true,
      });
    } catch (error) {
      console.error('Save failed:', error);

      // Display error toast
      addToast({
        title: 'Save Failed',
        description: 'An error occurred while saving your changes.',
        color:'danger',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleAddTag = () => {
    const newTag = { name: 'New Tag', description: '' };
    const updatedTags = [...(jsonData?.tags || []), newTag];
    setJsonData({ ...jsonData, tags: updatedTags });
    setSelectedTabIndex(updatedTags.length - 1);
  };

  const handleDeleteTag = (index: number) => {
    if (!jsonData) return;
    const updatedTags = [...jsonData.tags];
    updatedTags.splice(index, 1);
    setJsonData({ ...jsonData, tags: updatedTags });
    if (selectedTabIndex >= updatedTags.length) {
      setSelectedTabIndex(updatedTags.length - 1);
    }
  };

  const handleTagChange = (index: number, field: string, value: string) => {
    if (!jsonData) return;
    const updatedTags = [...jsonData.tags];
    updatedTags[index] = { ...updatedTags[index], [field]: value };
    setJsonData({ ...jsonData, tags: updatedTags });
  };
  
  const deleteEndpointMethod = (pathKey: string, method: string) => {
    if (!jsonData) return;
    
    const updatedPaths = { ...jsonData.paths };
    if (updatedPaths[pathKey]) {
      // Create new object to maintain immutability
      updatedPaths[pathKey] = { ...updatedPaths[pathKey] };
      delete updatedPaths[pathKey][method];
      
      if (Object.keys(updatedPaths[pathKey]).length === 0) {
        delete updatedPaths[pathKey];
      }
    }
    
    setJsonData({ ...jsonData, paths: updatedPaths });
  };
  
  const deleteEntireEndpoint = (pathKey: string) => {
    if (!jsonData) return;
    
    const updatedPaths = { ...jsonData.paths };
    delete updatedPaths[pathKey];
    setJsonData({ ...jsonData, paths: updatedPaths });
  };

  const EditableGroupInput = ({ group, index }: { group: any; index: number }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [tempValue, setTempValue] = useState(group.name); 
  
    useEffect(() => {
      setTempValue(group.name); 
    }, [group.name]);
  
    return (
      <div className="flex-1 relative">
        <Input
          label="Name Groupe"
          type="text"
          isDisabled={!isEditable}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={() => {
            
            if (tempValue !== group.name) {
              handleChange(['x-tagGroups', index.toString(), 'name'], tempValue);
            }
          }}
        />
        <Button
          isIconOnly
          variant="light"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent"
          onPress={() => setIsEditable(!isEditable)}
        >
          {isEditable ? (
             <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
             className="lucide lucide-pencil-off-icon lucide-pencil-off text-gray-400 w-4 h-4 shrink-0"
           >
            <path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" />
            <path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
            <path d="m15 5 4 4" />
            <path d="m2 2 20 20" />
          </svg>
          ) : (
            <Pencil className="text-gray-400 w-4 h-4 shrink-0" />
          )}
        </Button>
      </div>
    );
  };
  
  const TagGroupItem = ({ group, index, availableTags, onDeleteGroup }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); 
    useEffect(() => {
      if (newGroupAdded && scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        setNewGroupAdded(false);
      }
    }, [jsonData['x-tagGroups'], newGroupAdded]);
  
    const filteredTags = availableTags.filter((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="relative my-5">
        <div className="flex items-center justify-between gap-2">
          <EditableGroupInput group={group} index={index} />
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => onDeleteGroup(index)}
            title="Delete Group"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
  
        <div className="flex flex-wrap gap-2 py-2 my-2">
          {group.tags.map((tag, tagIndex) => (
            <Chip
              key={tagIndex}
              color="danger"
              onClose={() => {
                const updatedTags = group.tags.filter((_, i) => i !== tagIndex);
                handleChange(['x-tagGroups', index.toString(), 'tags'], updatedTags);
              }}
            >
              {tag}
            </Chip>
          ))}
          <Dropdown>
            <DropdownTrigger>
              <Chip
                color="primary"
                variant="faded"
                className="cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                + Add Tag
              </Chip>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              variant='light'
            >
              <DropdownItem
                key="search-and-tags"
                isReadOnly 
                className="p-0"
                variant='light' 
              >
                <div className="flex flex-col gap-2 p-2">
                  {/* Search Bar */}
                  <Input
                    placeholder="Search tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                    size="sm"
                  />
                  {/* Tag List */}
                  <ScrollShadow hideScrollBar className='flex flex-col gap-1 max-h-48'>
                    {filteredTags.length > 0 ? (
                      filteredTags.map((tagName) => (
                        <div
                          key={tagName}
                          className="px-2 py-1 text-sm hover:text-danger dark:hover:text-white  cursor-pointer rounded"
                          onClick={() => {
                            const updatedTags = [...group.tags, tagName];
                            handleChange(['x-tagGroups', index.toString(), 'tags'], updatedTags);
                            setShowDropdown(false);
                            setSearchQuery('');
                          }}
                        >
                          {tagName}
                        </div>
                      ))
                    ) : (
                      <div className="px-2 py-1 text-sm text-gray-500">
                        No tags match your search.
                      </div>
                    )}
                   </ScrollShadow>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Divider/>
      </div>
    );
  };

  const renamePathKey = (oldKey: string, newKey: string) => {
    if (!jsonData || !jsonData.paths[oldKey] || newKey === oldKey) return;
  
    const updatedPaths = { ...jsonData.paths };
  
    // Avoid overwriting an existing key
    if (updatedPaths[newKey]) {
      alert('Path already exists');
      return;
    }
  
    updatedPaths[newKey] = updatedPaths[oldKey];
    delete updatedPaths[oldKey];
  
    setJsonData({
      ...jsonData,
      paths: updatedPaths,
    });
  };
 
  return (
    <div className="p-8 w-full mx-auto space-y-5"> 
      <h2 className="text-2xl font-bold">OpenAPI Editor</h2>      
      {/*<Input type="file" accept=".json" onChange={handleFileUpload} />*/}

      {jsonData && (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5"> 
              {/* LEFT COLUMN */}
                <div className="space-y-5">
                    {/* General Information */}
                    <Card className="p-5 space-y-4">
                    <h3 className="text-xl font-semibold">General Information</h3>
                    <Input
                        label="Title"
                        type="text"
                        value={jsonData.info.title}
                        onChange={(e) => handleChange(['info', 'title'], e.target.value)}
                    />
                    <Textarea
                        label="Description"
                        className="w-full"
                        rows={4}
                        value={jsonData.info.description}
                        onChange={(e) => handleChange(['info', 'description'], e.target.value)}
                    />
                    </Card>
                    {/* Groupes de Tags */}
                    <Card className="p-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">Group of Tags</h3>
                          <Button
                            size="sm"
                            onClick={() => {
                              const newGroup = {
                                name: `Group ${jsonData['x-tagGroups'].length + 1}`,
                                tags: [],
                              };
                              handleChange(['x-tagGroups'], [...jsonData['x-tagGroups'], newGroup]);
                              setNewGroupAdded(true);
                            }}
                            className="border-gradient rounded-full text-white h-8 px-4"
                          >
                            + Add Group
                          </Button>
                      </div>
                      <ScrollShadow hideScrollBar className="w-auto h-[500px]" ref={scrollContainerRef}>
                        {jsonData['x-tagGroups']?.length > 0 ? (
                          jsonData['x-tagGroups'].map((group, index) => {
                            const availableTags =
                              jsonData.tags?.filter((t) => !group.tags.includes(t.name)).map((t) => t.name) || [];

                            const handleDeleteGroup = (groupIndex) => {
                              const updatedGroups = jsonData['x-tagGroups'].filter((_, i) => i !== groupIndex);
                              handleChange(['x-tagGroups'], updatedGroups);
                            };

                            return (
                              <TagGroupItem
                                key={index}
                                group={group}
                                index={index}
                                availableTags={availableTags}
                                onDeleteGroup={handleDeleteGroup}
                              />
                            );
                          })
                        ) : (
                          <div className="p-4 text-gray-500 text-center">No tag groups available.</div>
                        )}
                      </ScrollShadow>

                    </Card>
                    {/* Liste des Tags */}
                    <Card className="p-5 space-y-4">
                        <h3 className="text-xl font-semibold mb-4">Tags Management</h3>
                          <div className="relative">
                              {/* Tabs Container */}
                              <ScrollShadow
                                hideScrollBar
                                className="overflow-x-auto pr-[140px] mr-[145px] min-w-[37rem] max-w-[42rem] pb-2"
                                orientation="horizontal"
                              >
                                  <div className="flex min-w-max space-x-2">
                                      {jsonData.tags?.map((tag, index) => (
                                          <div
                                          key={index}
                                          role="tab"
                                          className={`relative flex items-center px-4 py-2 cursor-pointer transition-all ${
                                              selectedTabIndex === index 
                                              ? 'border-gradient text-white shadow-md'
                                              : 'dark:bg-[#3f3f46] bg-gray-100 dark:text-white hover:bg-gray-200 rounded-2xl'
                                          }`}
                                          onClick={() => setSelectedTabIndex(index)}
                                          >
                                          <span className="mr-2">{tag.name}</span>
                                          <button
                                              className={`opacity-70 hover:opacity-100 transition-opacity ${
                                              selectedTabIndex === index ? 'text-white' : 'text-gray-500'
                                              }`}
                                              onClick={(e) => {
                                              e.stopPropagation();
                                              handleDeleteTag(index);
                                              }}
                                              aria-label={`Delete ${tag.name}`}
                                          >
                                              ×
                                          </button>
                                          </div>
                                      ))}
                                  </div>
                              </ScrollShadow>
                                <div className="absolute top-0 right-0 h-full flex items-center pr-4 pointer-events-none">
                                  <Button
                                    className="pointer-events-auto px-4 py-2 text-danger mb-2 dark:text-danger rounded-2xl shadow-sm transition-colors min-w-[120px]"
                                    onClick={handleAddTag}
                                    color="danger"
                                    variant="flat"
                                  >
                                    + Add Tag
                                  </Button>
                                </div>
                          </div>
                          <Divider/>
                          {/* Empty State */}
                          {!jsonData.tags?.length && (
                              <div className="p-4 text-gray-500 text-center">
                              No tags available. Click "Add Tag" to create one.
                              </div>
                          )}
                          {/* Tag Content */}
                          {jsonData.tags?.[selectedTabIndex] && (
                              <div className="p-4 space-y-4">
                              <Input
                                  label="Tag Name"
                                  value={jsonData.tags[selectedTabIndex].name}
                                  className="py-2"
                                  onChange={(e) =>
                                  handleTagChange(selectedTabIndex, 'name', e.target.value)
                                  }
                                  placeholder="Enter tag name"
                              />
                              
                              <Textarea
                                  label="Description"
                                  value={jsonData.tags[selectedTabIndex].description}
                                  className="py-2"
                                  onChange={(e) =>
                                  handleTagChange(selectedTabIndex, 'description', e.target.value)
                                  }
                                  placeholder="Add tag description"
                                  rows={3}
                              />
                              </div>
                          )}
                    </Card>
                </div>
              {/* RIGHT COLUMN */}
              <div className="space-y-5">
                 <div className="p-1 space-y-4"> 
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="text-xl font-semibold whitespace-nowrap">Endpoints</h3>           
                        <div className="flex-1 max-w-md">
                          <Input
                            label="Search"
                            size="sm"
                            radius="full"
                            className="h-8" 
                            classNames={{
                              inputWrapper: [
                                "pl-8 pr-3", 
                                "h-8", 
                                "min-w-[150px]", 
                                "hover:bg-default-100",
                                "group-data-[focus=true]:bg-default-100"
                              ],
                              input: "text-sm",
                              label: "hidden"
                            }}
                            startContent={
                              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                            }
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                        <Button 
                          size="sm"
                          className="border-gradient rounded-full text-white h-8 px-4" 
                          startContent={<PlusIcon className="w-4 h-4 focus-visible:none" />}
                          onClick={() => setIsModalOpen(true)}
                        >
                          <span className="hidden md:inline">Add Endpoint</span>
                          <span className="md:hidden">Add</span>
                        </Button>
                    </div>
                    <Divider className="my-5" />
                      <ScrollShadow hideScrollBar className="w-auto h-[1150px] space-y-5">
                      {Object.entries(jsonData.paths)
                        .filter(([pathKey]) => 
                          pathKey.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map(([pathKey, methods]) => {
                          const firstMethod = Object.values(methods)[0];
                            const primaryTag = firstMethod?.tags?.[0] || 'Untagged';
                            const summary = firstMethod?.summary;
                            const tagDetails = jsonData.tags?.find((t: any) => t.name === primaryTag);
                          return (
                            <Card key={pathKey} className="p-5 space-y-4"> 
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                  <strong className="text-lg font-semibold">
                                  {tagDetails?.name || primaryTag}
                                  </strong>
                                  <span className="text-sm text-default-500 font-mono" title={pathKey}>
                                    {summary}
                                  </span>
                                </div>
                                <div className="flex gap-2">
                                  <TrashIcon
                                    className="w-5 h-5 text-gray-500 hover:text-red-600 cursor-pointer"
                                    onClick={() => deleteEntireEndpoint(pathKey)}
                                  />
                                </div>
                              </div>

                              <div className="space-y-4"> 
                              {Object.entries(methods)
                              .filter(([methodName]) => 
                                !methodName.startsWith('x-') && 
                                ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(methodName.toUpperCase())
                              )
                              .map(([method, details]) => (
                                   <EndpointMethod
                                  key={method}
                                  pathKey={pathKey}
                                  method={method}
                                  details={details}
                                  handleChange={handleChange}
                                  onDelete={() => deleteEndpointMethod(pathKey, method)}
                                  isOpen={openMethods.has(`${pathKey}-${method}`)}
                                  toggleOpen={() => toggleMethod(pathKey, method)} 
                                  renamePathKey={renamePathKey}
                                />
                                ))}
                              </div>
                            </Card>
                             );
                          })}

                      </ScrollShadow>
                 </div>
              </div>
            </div>
            <div className="text-right mt-6">
            <Button className="border-gradient text-white" onClick={handleSave}>
                Save
            </Button>
            </div>
            {isModalOpen && (
              <EndpointModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={(newEndpoint) => {
                }}
                jsonData={jsonData}
                setJsonData={setJsonData}
              />
            )}

        </>
      )}
    </div>
  );
};

export default ApiReference;
