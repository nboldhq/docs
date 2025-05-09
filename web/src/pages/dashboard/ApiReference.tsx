// File: ApiReference.tsx
import { Button, Card, Checkbox, Chip, Divider, Input, ScrollShadow, Textarea } from '@heroui/react';
import { ChevronDown, Pencil, PencilIcon, PlusIcon, Search, TrashIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

  type OpenApiSpec = {
    info: {
      title: string;
      description: string;
      summary?: string;
    };
    "x-tagGroups": {
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
            schema: Record<string, any>; // dynamic schema
          }[];
          requestBody?: {
            description?: string;
            required?: boolean;
            content: {
              [contentType: string]: {
                schema: Record<string, any>; // dynamic schema
              };
            };
          };
          responses: {
            [statusCode: string]: {
              description: string;
              content?: {
                [contentType: string]: {
                  schema: Record<string, any>; // dynamic schema
                };
              };
            };
          };
          [extension: `x-${string}`]: any; // custom extensions
        };
      };
    };
  };

const ApiReference: React.FC = () => {
  const [jsonData, setJsonData] = useState<OpenApiSpec | null>(null);
  const [filename, setFilename] = useState<string>('openapi.json');
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) throw new Error('Upload failed');
      
      const dataResponse = await fetch('/api/spec');
      const json = await dataResponse.json();
      setJsonData(json);
      setFilename(file.name);
    } catch (error) {
      alert(error.message || 'Error uploading file');
    }
  };

  const fetchRemoteSpec = async () => {
    try {
      const response = await fetch('https://skan-dev.nbold.dev/api/spec');
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      const data: OpenApiSpec = await response.json();
      setJsonData(data);
      setFilename('Remote OpenAPI Spec');
    } catch (error) {
      alert(`Error fetching remote spec: ${error.message}`);
    }
  };
  
  React.useEffect(() => {
    fetchRemoteSpec();
  }, []);

  const handleChange = (path: string[], value: any) => {
    if (!jsonData) return;
  
    const newData = { ...jsonData };
    let current: any = newData;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    current[path[path.length - 1]] = value;
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
    
        // Handle response
        } catch (error) {
        console.error('Save failed:', error);
        }
    };

  const methodBgClasses: Record<string, string> = {
    GET: 'bg-blue-500',
    POST: 'bg-green-500',
    PUT:'bg-orange-500',
    PATCH: 'bg-yellow-500',
    DELETE: 'bg-red-500',
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
  
  const EditableGroupInput = ({ group, index }: { group: any; index: number }) => {
    const [isEditable, setIsEditable] = useState(false);

    return (
      <div className="flex-1 relative">
        <Input
          label="Name Groupe"
          type="text"
          isDisabled={!isEditable}
          value={group.name}
          onChange={(e) =>
            handleChange(['x-tagGroups', index.toString(), 'name'], e.target.value)
          }
        />
        <Button
          isIconOnly
          variant="light"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent"
          onPress={() => setIsEditable(!isEditable)}
        >
          {isEditable ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pencil-off-icon lucide-pencil-off text-gray-400 w-4 h-4 shrink-0"><path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"/><path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"/><path d="m15 5 4 4"/><path d="m2 2 20 20"/></svg> 
          ) : (
            <Pencil className="text-gray-400 w-4 h-4 shrink-0" />
          )}
        </Button>
      </div>
    );
  };

  const SchemaField = ({ schema, path }: { schema: Record<string, any>, path: string[] }) => {
    const [textValue, setTextValue] = useState(JSON.stringify(schema, null, 2));
    
    useEffect(() => {
      // Update textarea content if schema prop changes from outside
      setTextValue(JSON.stringify(schema, null, 2));
    }, [schema]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setTextValue(value);

      try {
        const parsed = JSON.parse(value);
        // If you want to sync back to parent component:
        handleChange(parsed); // You need to define and pass this function as a prop
      } catch (err) {
        // Optional: handle invalid JSON feedback
        console.error("Invalid JSON");
      }
    };

    return (
      <div className="mt-4">
        <Textarea
          label="Full Schema JSON"
          minRows={20}
          className="w-full font-mono"
          value={textValue}
          onChange={handleChange}
        />
      </div>
    );
  };

  const ResponseSection = ({ responses, path }: { responses: any, path: string[] }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div className="border border-gray-400 rounded-lg mt-4">
        <div className="flex items-center justify-between p-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className="font-semibold">Responses</span>
          <ChevronDown className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        {isOpen && (
          <div className="p-4 space-y-4">
            {Object.entries(responses).map(([statusCode, response]: [string, any]) => (
              <div key={statusCode} className="">
                <div className="flex items-center gap-2 mb-4">
                  <Chip className={statusCode.startsWith('2') ? 'bg-success-500' : 'bg-warning-500'}>{statusCode}</Chip>
                  <Input
                    label="Description"
                    value={response.description}
                    onChange={(e) => handleChange([...path, statusCode, 'description'], e.target.value)}
                  />
                </div>
                {response.content && Object.entries(response.content).map(([contentType, content]: [string, any]) => (
                  <div key={contentType} className="mt-2 space-y-3">
                    <Chip variant="flat" className="bg-success-200 text-gray-600">{contentType}</Chip>
                    {content.schema && (
                      <SchemaField 
                        schema={content.schema} 
                        path={[...path, statusCode, 'content', contentType, 'schema']}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const ParameterSection = ({ parameters, path }: { parameters: any[], path: string[] }) => {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
      <div className="border border-gray-400 rounded-lg ">
        <div className="flex items-center justify-between p-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className="font-semibold">Parameters</span>
          <ChevronDown className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        
        {isOpen && (
          <div className="p-4 space-y-4">
            {parameters.map((param, index) => (
              <div key={index} className="space-y-2">
                <div className="flex gap-4 items-center">
                  <Chip className='bg-primary-500 text-white' variant="flat">{param.in}</Chip>
                  <Input 
                    label="Name"
                    value={param.name}
                    onChange={(e) => handleChange([...path, index.toString(), 'name'], e.target.value)}
                  />
                  <Checkbox
                    isSelected={param.required || false}
                    onValueChange={(value) => handleChange([...path, index.toString(), 'required'], value)}
                  >
                    Required
                  </Checkbox>
                </div>
                <Textarea
                  label="Description"
                  value={param.description || ''}
                  onChange={(e) => handleChange([...path, index.toString(), 'description'], e.target.value)}
                />
                <div className="">
                  <SchemaField 
                    schema={param.schema} 
                    path={[...path, index.toString(), 'schema']}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const RequestBodySection = ({ requestBody, path }: { requestBody: any, path: string[] }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div className="border border-gray-400 rounded-lg mt-4">
        <div className="flex items-center justify-between p-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className="font-semibold">Request Body</span>
          <ChevronDown className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        {isOpen && requestBody.content && (
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <Input
                label="Description"
                value={requestBody.description || ''}
                onChange={(e) => handleChange([...path, 'description'], e.target.value)}
              />
              <Checkbox
                    isSelected={requestBody.required || false}
                    onValueChange={(value) => handleChange([...path, 'required'], value)}
              >
              Required
              </Checkbox>
            </div>

            {Object.entries(requestBody.content).map(([contentType, content]: [string, any]) => (
              <div key={contentType} className="space-y-3">
                <Chip variant="flat" className="bg-success-200 text-gray-600">{contentType}</Chip>
                {content.schema && (
                  <SchemaField 
                    schema={content.schema} 
                    path={[...path, 'content', contentType, 'schema']}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const EndpointMethod = ({ 
    pathKey,
    method,
    details,
    handleChange 
  }: {
    pathKey: string;
    method: string;
    details: any;
    handleChange: (path: string[], value: any) => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);  
    return (
      <div key={method} className=" rounded-lg hover:border-[#3f3f46]">
        <div 
          className="flex items-center justify-between p-3 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            <Chip
              variant="shadow"
              size="lg"
              className={`text-white px-3 py-1 rounded-sm text-sm font-semibold w-20 justify-center ${
                methodBgClasses[method.toUpperCase()] || 'bg-gray-500'
              }`}
            >
              {method.toUpperCase()}
            </Chip>
            <span className="text-sm font-mono dark:text-white">
              {pathKey|| 'No summary available'}
            </span>
          </div>
          <ChevronDown 
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>

        {isOpen && (
          <div className="p-4">
            <div className="space-y-4">
              <Input
                label="Summary"
                value={details.summary || ''}
                onChange={(e) =>
                  handleChange(['paths', pathKey, method, 'summary'], e.target.value)
                }
                className="font-mono text-sm"
              />
              
              <Textarea
                label="Description"
                value={details.description || ''}
                onChange={(e) =>
                  handleChange(['paths', pathKey, method, 'description'], e.target.value)
                }
                className="font-mono text-sm"
                rows={4}
              />

              {details.parameters?.length > 0 && (
                <ParameterSection 
                  parameters={details.parameters} 
                  path={['paths', pathKey, method, 'parameters']}
                />
              )}

              {details.requestBody && (
              <RequestBodySection 
                requestBody={details.requestBody} 
                path={['paths', pathKey, method, 'requestBody']}
              />
              )}

              {details.responses && (
                <ResponseSection 
                  responses={details.responses} 
                  path={['paths', pathKey, method, 'responses']}
                />
              )}

            </div>
          </div>
        )}
      </div>
    );

  };

  const TagGroupItem = ({ group, index, availableTags }: { 
    group: any, 
    index: number, 
    availableTags: string[] 
  }) => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    return (
      <div className="relative">
        <div className="flex items-center gap-2">
          <EditableGroupInput group={group} index={index} />
        </div>
        
        <div className="flex flex-wrap gap-2 py-2">
          {group.tags.map((tag: string, tagIndex: number) => (
            <Chip
              key={tagIndex}
              color="danger"
              onClose={() => {
                const updatedTags = group.tags.filter((_: any, i: number) => i !== tagIndex);
                handleChange(['x-tagGroups', index.toString(), 'tags'], updatedTags);
              }}
            >
              {tag}
            </Chip>
          ))}
          
          <Chip
            color="primary"
            variant="faded"
            className="cursor-pointer w-"
            onClick={() => setShowDropdown(!showDropdown)}
          >
             + Add Tag
          </Chip>
        </div>
  
        {showDropdown && availableTags.length > 0 && (
          <div className="absolute z-10 mt-1 w-48 bg-white dark:bg-default-100 border rounded-lg shadow-lg">
            <div className="p-2 space-y-1">
              <ScrollShadow hideScrollBar className='w-56 h-56'>
                {availableTags.map((tagName) => (
                  <div
                    key={tagName}
                    className="px-3 py-1 text-sm hover:bg-default-100 cursor-pointer rounded"
                    onClick={() => {
                      const updatedTags = [...group.tags, tagName];
                      handleChange(['x-tagGroups', index.toString(), 'tags'], updatedTags);
                      setShowDropdown(false);
                    }}
                  >
                    {tagName}
                  </div>
                ))}
              </ScrollShadow>

            </div>
          </div>
        )}
        
        <Divider className="my-4" />
      </div>
    );
  };
  return (
    <div className="p-8 w-full mx-auto space-y-5"> 
      <h2 className="text-2xl font-bold">OpenAPI JSON Editor</h2>
      {/*<Input type="file" accept=".json" onChange={handleFileUpload} />*/}
      {jsonData && (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5"> 
              {/* LEFT COLUMN */}
              <div className="space-y-5">
                  {/* Informations générales */}
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
                    <h3 className="text-xl font-semibold">Group of Tags</h3>
                    <ScrollShadow hideScrollBar className="w-auto h-[500px]">
                        {jsonData['x-tagGroups']?.map((group, index) => {
                          const availableTags = jsonData.tags
                            ?.filter((t: any) => !group.tags.includes(t.name))
                            .map((t: any) => t.name) || [];

                          return (
                            <TagGroupItem
                              key={index}
                              group={group}
                              index={index}
                              availableTags={availableTags}
                            />
                          );
                        })}
                      </ScrollShadow>
                  </Card>
                  {/* Liste des Tags */}
                  <Card className="p-5 space-y-4">
                      <h3 className="text-xl font-semibold mb-4">Tags Management</h3>
                      
                      {/* Tabs Container */}
                      <ScrollShadow hideScrollBar className="max-w-[5600px] h-auto" orientation="horizontal">

                              <div className="flex min-w-max space-x-2">
                                  {jsonData.tags?.map((tag, index) => (
                                      <div
                                      key={index}
                                      role="tab"
                                      className={`relative flex items-center px-4 py-2  cursor-pointer transition-all ${
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
                              {/* Add Tag Button */}
                              <Button
                                  className="px-4 py-2   text-white rounded-2xl shadow-sm transition-colors min-w-[120px]"
                                  onClick={handleAddTag}
                                  color='danger'
                                  variant="flat"
                              >
                                  + Add Tag
                              </Button>
                              </div>
                        
                      </ScrollShadow>

                      {/* Empty State */}
                      {!jsonData.tags?.length && (
                          <div className="p-4 text-gray-500 text-center">
                          No tags available. Click "Add Tag" to create one.
                          </div>
                      )}

                      {/* Tag Content */}
                      {jsonData.tags?.[selectedTabIndex] && (
                          <div className="p-4 space-y-4 border-t border-gray-100">
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
              <div className="space-y-5"> {/* Changed to space-y-5 */}
                 <div className="p-1 space-y-4"> {/* Added p-5 and space-y-4 */}
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="text-xl font-semibold whitespace-nowrap">Endpoints</h3>
              
                      <div className="flex-1 max-w-md">
                        <Input
                          label="Search"
                          size="sm"
                          radius="full"
                          className="h-8" // Match button height
                          classNames={{
                            inputWrapper: [
                              "pl-8 pr-3", 
                              "h-8", // Explicit height matching
                              "min-w-[150px]", // Minimum width
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
                        className="border-gradient rounded-full text-white h-8 px-4" // Explicit height
                        startContent={<PlusIcon className="w-4 h-4" />}
                        onClick={() => {/* Add your endpoint creation logic here */}}
                      >
                        <span className="hidden md:inline">Add Endpoint</span>
                        <span className="md:hidden">Add</span> {/* Shorter text on mobile */}
                      </Button>
                    </div>
                    <Divider className="my-5" />
                    <ScrollShadow hideScrollBar className="w-auto h-[1100px] space-y-5">
                      {Object.entries(jsonData.paths)
                        .filter(([pathKey]) => 
                          pathKey.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map(([pathKey, methods]) => {
                          // Get the first method's first tag
                          const firstMethod = Object.values(methods)[0];
                          const primaryTag = firstMethod?.tags?.[0] || 'Untagged';
                          const summary = firstMethod?.summary;
                          
                          // Find tag details from global tags list
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
                                  <PencilIcon 
                                    className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer"
                                    onClick={() => {/* edit path logic */}}
                                  />
                                  <TrashIcon
                                    className="w-5 h-5 text-gray-500 hover:text-red-600 cursor-pointer"
                                    onClick={() => {/* delete path logic */}}
                                  />
                                </div>
                              </div>

                              <div className="space-y-4"> 
                                {Object.entries(methods).map(([method, details]) => (
                                  <EndpointMethod
                                    key={method}
                                    pathKey={pathKey}
                                    method={method}
                                    details={details}
                                    handleChange={handleChange}
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
                Save JSON
            </Button>
            </div>
        </>
      )}
    </div>
  );
};

export default ApiReference;
