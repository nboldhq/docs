import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Chip,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  Select,
  SelectItem,
  SelectSection,
  Tab,
  Tabs,
  Textarea
} from "@heroui/react";
import { Trash2 } from 'lucide-react';

export default function EndpointModal({
  isOpen,
  onClose,
  onCreate,
  jsonData,
  setJsonData
}) {
  const [newEndpoint, setNewEndpoint] = useState({
    path: '',
    method: 'GET',
    summary: '',
    description: '',
    includeParameters: false,
    parameters: [],
    includeRequestBody: false,
    requestBody: {
      description: '',
      required: false,
      content: {
        'application/json': { schema: { type: 'object', properties: {} } }
      }
    },
    tags: [] as string[],
    responses: {
      "200": {
        description: "Successful response",
        content: {
          'application/json': { schema: { type: 'object', properties: {} } }
        }
      }
    }
  });

  const handleAddParameter = () => {
    setNewEndpoint(prev => ({
      ...prev,
      parameters: [...prev.parameters, {
        name: '',
        in: 'query',
        description: '',
        required: false,
        schema: { type: 'string' }
      }]
    }));
  };

  const handleAddResponse = () => {
    const newCode = Object.keys(newEndpoint.responses).length + 200;
    setNewEndpoint(prev => ({
      ...prev,
      responses: {
        ...prev.responses,
        [newCode]: {
          description: '',
          content: {
            'application/json': {
              schema: { type: 'object', properties: {} }
            }
          }
        }
      }
    }));
  };

  const handleCreate = () => {
    if (!newEndpoint.path || !newEndpoint.method) return;
    const endpoint: any = {
      summary: newEndpoint.summary,
      description: newEndpoint.description,
      tags: newEndpoint.tags,
      responses: newEndpoint.responses
    };
    if (newEndpoint.includeParameters && newEndpoint.parameters.length) {
      endpoint.parameters = newEndpoint.parameters;
    }
    if (newEndpoint.includeRequestBody) {
      endpoint.requestBody = newEndpoint.requestBody;
    }
    const updated = { ...jsonData };
    const p = newEndpoint.path.startsWith('/') ? newEndpoint.path : `/${newEndpoint.path}`;
    updated.paths = {
      ...updated.paths,
      [p]: {
        ...(updated.paths[p] || {}),
        [newEndpoint.method.toLowerCase()]: endpoint
      }
    };
    setJsonData(updated);
    onCreate && onCreate(newEndpoint);
    onClose();
    // reset
    setNewEndpoint({
      path: '', method: 'GET', summary: '', description: '',
      includeParameters: false, parameters: [], includeRequestBody: false,
      requestBody: { description: '', required: false, content: { 'application/json': { schema: { type: 'object', properties: {} } } } },
      tags: [], responses: { "200": { description: "Successful response", content: { 'application/json': { schema: { type: 'object', properties: {} } } } } }
    });
  };

  return (
    <Modal
    isOpen={isOpen}
    onClose={onClose}
    size="5xl" 
    >
    <ModalContent className="min-h-[69vh] max-h-[69vh] overflow-hidden rounded-lg">
        <ModalHeader>Create New Endpoint</ModalHeader>
            <ModalBody className="overflow-y-auto max-h-[calc(95vh-10rem)] px-6">
                <Tabs aria-label="Endpoint configuration">
                    <Tab key="general" title="General">
                        <div className="space-y-6 mt-4">
                            <Input label="Endpoint Path" placeholder="/example/path"
                            value={newEndpoint.path}
                            onChange={e => setNewEndpoint(prev => ({ ...prev, path: e.target.value }))}
                            isRequired
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Select
                                    label="HTTP Method"
                                    className="w-full"
                                    isRequired
                                    selectedKeys={new Set([newEndpoint.method])}
                                    onSelectionChange={(keys) => 
                                        setNewEndpoint(prev => ({ 
                                        ...prev, 
                                        method: Array.from(keys)[0] 
                                        }))
                                    }
                                    >
                                    <SelectSection title="HTTP Methods">
                                        {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map(m => (
                                        <SelectItem key={m} value={m}>
                                            {m}
                                        </SelectItem>
                                        ))}
                                    </SelectSection>
                                </Select>
                            </div>
                            <div>
                                <Select
                                label="Tags"
                                selectionMode="single"
                                isRequired
                                selectedKeys={newEndpoint.tags}
                                onSelectionChange={keys => setNewEndpoint(prev => ({ ...prev, tags: Array.from(keys) as string[] }))}
                                >
                                {jsonData.tags?.map((tag: any) => (
                                    <SelectItem key={tag.name} value={tag.name}>{tag.name}</SelectItem>
                                ))}
                                </Select>
                            </div>
                            </div>
                            <Input
                            label="Summary"
                            value={newEndpoint.summary}
                            onChange={e => setNewEndpoint(prev => ({ ...prev, summary: e.target.value }))}
                            />
                            <Textarea
                            label="Description"
                            rows={3}
                            value={newEndpoint.description}
                            onChange={e => setNewEndpoint(prev => ({ ...prev, description: e.target.value }))}
                            />
                        </div>
                    </Tab>
                    <Tab key="responses" title="Responses">
                        {/* Responses Section */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-semibold">Responses</h4>
                                <Button color="danger" variant="flat" size="sm" onClick={handleAddResponse}>Add Response</Button>
                            </div>
                            <ScrollShadow hideScrollBar className='w-auto h-[450px]'>
                                {Object.entries(newEndpoint.responses).map(([code, resp]) => (
                                <div key={code} className="space-y-3 p-4 border mb-3 rounded-md">
                                    <div className="flex gap-4">
                                    <Input label="Status Code" className="w-28"
                                        value={code}
                                        onChange={e => {
                                        const updated = { ...newEndpoint.responses };
                                        delete updated[code];
                                        updated[e.target.value] = resp;
                                        setNewEndpoint(prev => ({ ...prev, responses: updated }));
                                        }}
                                    />
                                    <Input label="Description" className="flex-1"
                                        value={resp.description}
                                        onChange={e =>
                                        setNewEndpoint(prev => ({
                                            ...prev,
                                            responses: {
                                            ...prev.responses,
                                            [code]: {
                                                ...resp,
                                                description: e.target.value
                                            }
                                            }
                                        }))
                                        }
                                    />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Content Types</label>
                                            {Object.entries(resp.content || {}).map(([ct, val]) => (
                                                <div key={ct} className="space-y-2">
                                                <Chip variant="flat" className="bg-success-200 text-gray-600">{ct}</Chip>
                                                <Textarea
                                                    label="Schema"
                                                    minRows={4}
                                                    className="font-mono text-sm"
                                                    value={JSON.stringify(val.schema, null, 2)}
                                                    onChange={e => {
                                                    try {
                                                        const sc = JSON.parse(e.target.value);
                                                        setNewEndpoint(prev => ({
                                                        ...prev,
                                                        responses: {
                                                            ...prev.responses,
                                                            [code]: {
                                                            description: resp.description,
                                                            content: {
                                                                [ct]: { schema: sc }
                                                            }
                                                            }
                                                        }
                                                        }));
                                                    } catch {}
                                                    }}
                                                />
                                                </div>
                                            ))}
                                            <div className="flex justify-end">
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    onClick={() => {
                                                        const updated = { ...newEndpoint.responses };
                                                        delete updated[code];
                                                        setNewEndpoint(prev => ({ ...prev, responses: updated }));
                                                    }}
                                                >
                                                    <Trash2 className='hover:danger' size={16} />
                                                </Button>
                                            </div>
                                    </div>
                                </div>
                                ))}
                            </ScrollShadow>
                        </div>
                    </Tab>
                    <Tab key="parameters" title="Parameters">
                        <div className="space-y-4 mt-4">
                            <Checkbox
                            isSelected={newEndpoint.includeParameters}
                            onValueChange={v => setNewEndpoint(prev => ({ ...prev, includeParameters: v }))}
                            >
                            Include Parameters
                            </Checkbox>
                            {newEndpoint.includeParameters && (
                            <>
                                <div className="flex justify-between items-center">
                                <h4 className="font-semibold">Parameters</h4>
                                <Button size="sm" onClick={handleAddParameter}>Add Parameter</Button>
                                </div>
                                <ScrollShadow hideScrollBar className='w-auto h-auto max-h-[450px]' >
                                                {newEndpoint.parameters.map((param, index) => (
                                                    <div key={index} className="space-y-3 border p-4 rounded mb-3 ">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <Input
                                                                label="Name"
                                                                value={param.name}
                                                                onChange={(e) => {
                                                                const newParams = [...newEndpoint.parameters];
                                                                newParams[index].name = e.target.value;
                                                                setNewEndpoint(prev => ({ ...prev, parameters: newParams }));
                                                                }}
                                                            />
                                                            <div>
                                                                <label className="block text-sm font-medium mb-1">Location</label>
                                                                <select
                                                                className="w-full p-2 border rounded"
                                                                value={param.in}
                                                                onChange={(e) => {
                                                                    const newParams = [...newEndpoint.parameters];
                                                                    newParams[index].in = e.target.value;
                                                                    setNewEndpoint(prev => ({ ...prev, parameters: newParams }));
                                                                }}
                                                                >
                                                                {['path', 'query', 'header', 'cookie'].map(location => (
                                                                    <option key={location} value={location}>{location}</option>
                                                                ))}
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <Textarea
                                                        label="Description"
                                                        value={param.description}
                                                        onChange={(e) => {
                                                            const newParams = [...newEndpoint.parameters];
                                                            newParams[index].description = e.target.value;
                                                            setNewEndpoint(prev => ({ ...prev, parameters: newParams }));
                                                        }}
                                                        />

                                                        <Checkbox
                                                        isSelected={param.required}
                                                        onValueChange={(value) => {
                                                            const newParams = [...newEndpoint.parameters];
                                                            newParams[index].required = value;
                                                            setNewEndpoint(prev => ({ ...prev, parameters: newParams }));
                                                        }}
                                                        >
                                                        Required
                                                        </Checkbox>
                                                        <div className="flex justify-end">
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                onClick={() => {
                                                                const newParams = [...newEndpoint.parameters];
                                                                newParams.splice(index, 1);
                                                                setNewEndpoint(prev => ({ ...prev, parameters: newParams }));
                                                                }}
                                                            >
                                                                <Trash2 className='hover:danger' size={16} />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                </ScrollShadow>
                            </>
                            )}
                        </div>
                    </Tab>
                    <Tab key="requestBody" title="Request Body">
                        <div className="space-y-4 mt-4">
                            <Checkbox
                                isSelected={newEndpoint.includeRequestBody}
                                onValueChange={v => setNewEndpoint(prev => ({ ...prev, includeRequestBody: v }))}
                            >
                                Include Request Body
                            </Checkbox>
                            {newEndpoint.includeRequestBody && (
                                <div className="space-y-4 border p-4 rounded">
                                    <h4 className="font-semibold">Request Body</h4>
                                    <Textarea
                                        label="Description"
                                        value={newEndpoint.requestBody.description}
                                        onChange={e => setNewEndpoint(prev => ({
                                            ...prev,
                                            requestBody: {
                                                ...prev.requestBody,
                                                description: e.target.value
                                            }
                                        }))}
                                    />
                                    <Checkbox
                                        isSelected={newEndpoint.requestBody.required}
                                        onValueChange={val => setNewEndpoint(prev => ({
                                            ...prev,
                                            requestBody: {
                                                ...prev.requestBody,
                                                required: val
                                            }
                                        }))}
                                    >
                                        Required
                                    </Checkbox>
                                    
                                    {/* Add JSON Schema Editor */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">JSON Schema</label>
                                        <Textarea
                                            label="Schema"
                                            minRows={8}
                                            className="font-mono text-sm"
                                            value={JSON.stringify(
                                                newEndpoint.requestBody.content['application/json'].schema, 
                                                null, 
                                                2
                                            )}
                                            onChange={e => {
                                                try {
                                                    const parsedSchema = JSON.parse(e.target.value);
                                                    setNewEndpoint(prev => ({
                                                        ...prev,
                                                        requestBody: {
                                                            ...prev.requestBody,
                                                            content: {
                                                                'application/json': {
                                                                    schema: parsedSchema
                                                                }
                                                            }
                                                        }
                                                    }));
                                                } catch (error) {
                                                }
                                            }}
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() =>
                                                setNewEndpoint(prev => ({ ...prev, includeRequestBody: false }))
                                            }
                                        >
                                            <Trash2 className='hover:danger' size={16} />
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Tab>
                </Tabs>
            </ModalBody>
            <ModalFooter>
            <Button color="danger" variant="light" onClick={onClose}>Cancel</Button>
            <Button className='border-gradient text-white' onClick={handleCreate}>Create Endpoint</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  );
}
