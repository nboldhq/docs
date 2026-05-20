import { useState } from 'react';
import {
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  ScrollShadow,
  Select,
  SelectItem,
  SelectSection,
  Tab,
  Tabs,
  Textarea,
} from '@heroui/react';
import { Trash2, X } from 'lucide-react';

interface Schema {
  type: string;
  properties?: Record<string, any>;
  [key: string]: any;
}

interface Content {
  [key: string]: { schema: Schema };
}

interface Response {
  description: string;
  content: Content;
}

interface Parameter {
  name: string;
  in: 'query' | 'path' | 'header' | 'cookie';
  description: string;
  required: boolean;
  schema: Schema;
}

interface RequestBody {
  description: string;
  required: boolean;
  content: Content;
}

interface Endpoint {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  summary: string;
  description: string;
  includeParameters: boolean;
  parameters: Parameter[];
  includeRequestBody: boolean;
  requestBody: RequestBody;
  tags: string[];
  responses: Record<string, Response>;
}

interface JsonData {
  tags: { name: string }[];
  paths: Record<string, Record<string, any>>;
}

interface EndpointModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: (endpoint: Endpoint) => void;
  jsonData: JsonData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setJsonData: (data: any) => void;
}

const BLANK_ENDPOINT: Endpoint = {
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
    content: { 'application/json': { schema: { type: 'object', properties: {} } } },
  },
  tags: [],
  responses: {
    '200': {
      description: 'Successful response',
      content: { 'application/json': { schema: { type: 'object', properties: {} } } },
    },
  },
};

export default function EndpointModal({
  isOpen,
  onClose,
  onCreate,
  jsonData,
  setJsonData,
}: EndpointModalProps) {
  const [endpoint, setEndpoint] = useState<Endpoint>(BLANK_ENDPOINT);

  const reset = () => setEndpoint(BLANK_ENDPOINT);

  const handleCreate = () => {
    if (!endpoint.path || !endpoint.method) return;
    const payload: any = {
      summary: endpoint.summary,
      description: endpoint.description,
      tags: endpoint.tags,
      responses: endpoint.responses,
    };
    if (endpoint.includeParameters && endpoint.parameters.length) {
      payload.parameters = endpoint.parameters;
    }
    if (endpoint.includeRequestBody) {
      payload.requestBody = endpoint.requestBody;
    }
    const p = endpoint.path.startsWith('/') ? endpoint.path : `/${endpoint.path}`;
    setJsonData({
      ...jsonData,
      paths: {
        ...jsonData.paths,
        [p]: {
          ...(jsonData.paths[p] || {}),
          [endpoint.method.toLowerCase()]: payload,
        },
      },
    });
    onCreate?.(endpoint);
    reset();
    onClose();
  };

  const handleClose = () => { reset(); onClose(); };

  const addParameter = () =>
    setEndpoint((prev) => ({
      ...prev,
      parameters: [
        ...prev.parameters,
        { name: '', in: 'query', description: '', required: false, schema: { type: 'string' } },
      ],
    }));

  const removeParameter = (i: number) =>
    setEndpoint((prev) => ({
      ...prev,
      parameters: prev.parameters.filter((_, idx) => idx !== i),
    }));

  const updateParam = (i: number, field: keyof Parameter, value: any) =>
    setEndpoint((prev) => {
      const updated = [...prev.parameters];
      updated[i] = { ...updated[i], [field]: value };
      return { ...prev, parameters: updated };
    });

  const addResponse = () => {
    const code = String(Object.keys(endpoint.responses).length + 200);
    setEndpoint((prev) => ({
      ...prev,
      responses: {
        ...prev.responses,
        [code]: {
          description: '',
          content: { 'application/json': { schema: { type: 'object', properties: {} } } },
        },
      },
    }));
  };

  const removeResponse = (code: string) =>
    setEndpoint((prev) => {
      const updated = { ...prev.responses };
      delete updated[code];
      return { ...prev, responses: updated };
    });

  return (
    <Drawer isOpen={isOpen} placement="right" size="2xl" onClose={handleClose} hideCloseButton>
      <DrawerContent>
        <DrawerHeader className="flex items-start justify-between border-b border-gray-200 dark:border-gray-800 px-6 py-4 shrink-0">
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">New endpoint</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Define the path, method, and details.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X size={16} />
          </button>
        </DrawerHeader>

        <DrawerBody className="px-6 py-5 overflow-y-auto no-scrollbar">
          <Tabs aria-label="Endpoint config" variant="underlined" color="danger">
            {/* General */}
            <Tab key="general" title="General">
              <div className="space-y-4 mt-4">
                <div className="flex gap-3">
                  <Select
                    label="Method"
                    size="sm"
                    className="w-32 shrink-0"
                    selectedKeys={new Set([endpoint.method])}
                    onSelectionChange={(keys) =>
                      setEndpoint((prev) => ({
                        ...prev,
                        method: Array.from(keys)[0] as Endpoint['method'],
                      }))
                    }
                  >
                    <SelectSection title="HTTP Methods">
                      {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map((m) => (
                        <SelectItem key={m}>{m}</SelectItem>
                      ))}
                    </SelectSection>
                  </Select>
                  <Input
                    label="Path"
                    size="sm"
                    placeholder="/example/path"
                    value={endpoint.path}
                    onChange={(e) => setEndpoint((prev) => ({ ...prev, path: e.target.value }))}
                    isRequired
                    className="flex-1"
                  />
                </div>

                <Select
                  label="Tags"
                  size="sm"
                  selectionMode="multiple"
                  selectedKeys={new Set(endpoint.tags)}
                  onSelectionChange={(keys) =>
                    setEndpoint((prev) => ({ ...prev, tags: Array.from(keys) as string[] }))
                  }
                >
                  {(jsonData.tags || []).map((tag) => (
                    <SelectItem key={tag.name}>{tag.name}</SelectItem>
                  ))}
                </Select>

                <Input
                  label="Summary"
                  size="sm"
                  value={endpoint.summary}
                  onChange={(e) => setEndpoint((prev) => ({ ...prev, summary: e.target.value }))}
                />
                <Textarea
                  label="Description"
                  size="sm"
                  minRows={3}
                  value={endpoint.description}
                  onChange={(e) => setEndpoint((prev) => ({ ...prev, description: e.target.value }))}
                />
              </div>
            </Tab>

            {/* Parameters */}
            <Tab key="parameters" title="Parameters">
              <div className="space-y-4 mt-4">
                <Checkbox
                  isSelected={endpoint.includeParameters}
                  onValueChange={(v) => setEndpoint((prev) => ({ ...prev, includeParameters: v }))}
                  size="sm"
                >
                  Include parameters
                </Checkbox>

                {endpoint.includeParameters && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Parameters</span>
                      <button
                        onClick={addParameter}
                        className="text-xs font-medium text-[#fc035a] hover:text-[#d9024e] transition-colors"
                      >
                        + Add
                      </button>
                    </div>
                    <div className="space-y-3">
                      {endpoint.parameters.map((param, i) => (
                        <div key={i} className="space-y-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                          <div className="flex gap-3">
                            <Input
                              size="sm"
                              label="Name"
                              value={param.name}
                              onChange={(e) => updateParam(i, 'name', e.target.value)}
                              className="flex-1"
                            />
                            <div className="w-28 shrink-0">
                              <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-0.5">Location</label>
                              <select
                                className="w-full h-9 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 focus:outline-none focus:ring-1 focus:ring-[#fc035a]/30"
                                value={param.in}
                                onChange={(e) => updateParam(i, 'in', e.target.value as Parameter['in'])}
                              >
                                {['path', 'query', 'header', 'cookie'].map((loc) => (
                                  <option key={loc} value={loc}>{loc}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <Textarea
                            size="sm"
                            label="Description"
                            minRows={2}
                            value={param.description}
                            onChange={(e) => updateParam(i, 'description', e.target.value)}
                          />
                          <div className="flex items-center justify-between">
                            <Checkbox
                              size="sm"
                              isSelected={param.required}
                              onValueChange={(v) => updateParam(i, 'required', v)}
                            >
                              Required
                            </Checkbox>
                            <button
                              onClick={() => removeParameter(i)}
                              className="p-1 rounded text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </Tab>

            {/* Request Body */}
            <Tab key="requestBody" title="Request Body">
              <div className="space-y-4 mt-4">
                <Checkbox
                  isSelected={endpoint.includeRequestBody}
                  onValueChange={(v) => setEndpoint((prev) => ({ ...prev, includeRequestBody: v }))}
                  size="sm"
                >
                  Include request body
                </Checkbox>

                {endpoint.includeRequestBody && (
                  <div className="space-y-4 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                    <Textarea
                      size="sm"
                      label="Description"
                      minRows={2}
                      value={endpoint.requestBody.description}
                      onChange={(e) =>
                        setEndpoint((prev) => ({
                          ...prev,
                          requestBody: { ...prev.requestBody, description: e.target.value },
                        }))
                      }
                    />
                    <Checkbox
                      size="sm"
                      isSelected={endpoint.requestBody.required}
                      onValueChange={(v) =>
                        setEndpoint((prev) => ({
                          ...prev,
                          requestBody: { ...prev.requestBody, required: v },
                        }))
                      }
                    >
                      Required
                    </Checkbox>
                    <Textarea
                      label="JSON Schema"
                      size="sm"
                      minRows={8}
                      className="font-mono text-xs"
                      defaultValue={JSON.stringify(
                        endpoint.requestBody.content['application/json'].schema,
                        null,
                        2,
                      )}
                      onBlur={(e) => {
                        try {
                          const schema = JSON.parse(e.target.value);
                          setEndpoint((prev) => ({
                            ...prev,
                            requestBody: {
                              ...prev.requestBody,
                              content: { 'application/json': { schema } },
                            },
                          }));
                        } catch {
                          // keep existing schema if JSON is invalid
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            </Tab>

            {/* Responses */}
            <Tab key="responses" title="Responses">
              <div className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Responses</span>
                  <button
                    onClick={addResponse}
                    className="text-xs font-medium text-[#fc035a] hover:text-[#d9024e] transition-colors"
                  >
                    + Add response
                  </button>
                </div>

                <ScrollShadow hideScrollBar className="max-h-[520px] space-y-3 pr-1">
                  {Object.entries(endpoint.responses).map(([code, resp]) => (
                    <div key={code} className="space-y-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex gap-3">
                        <Input
                          size="sm"
                          label="Status code"
                          className="w-28 shrink-0"
                          value={code}
                          onChange={(e) => {
                            const newCode = e.target.value;
                            setEndpoint((prev) => {
                              const updated = { ...prev.responses };
                              delete updated[code];
                              updated[newCode] = resp;
                              return { ...prev, responses: updated };
                            });
                          }}
                        />
                        <Input
                          size="sm"
                          label="Description"
                          className="flex-1"
                          value={resp.description}
                          onChange={(e) =>
                            setEndpoint((prev) => ({
                              ...prev,
                              responses: {
                                ...prev.responses,
                                [code]: { ...resp, description: e.target.value },
                              },
                            }))
                          }
                        />
                      </div>
                      {Object.entries(resp.content || {}).map(([ct, val]) => (
                        <div key={ct} className="space-y-2">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 font-mono">{ct}</span>
                          <Textarea
                            size="sm"
                            label="Schema"
                            minRows={4}
                            className="font-mono text-xs"
                            defaultValue={JSON.stringify(val.schema, null, 2)}
                            onBlur={(e) => {
                              try {
                                const schema = JSON.parse(e.target.value);
                                setEndpoint((prev) => ({
                                  ...prev,
                                  responses: {
                                    ...prev.responses,
                                    [code]: {
                                      description: resp.description,
                                      content: { [ct]: { schema } },
                                    },
                                  },
                                }));
                              } catch {
                                // keep existing if JSON is invalid
                              }
                            }}
                          />
                        </div>
                      ))}
                      <div className="flex justify-end">
                        <button
                          onClick={() => removeResponse(code)}
                          className="p-1 rounded text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </ScrollShadow>
              </div>
            </Tab>
          </Tabs>
        </DrawerBody>

        <DrawerFooter className="border-t border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-end gap-3 shrink-0">
          <Button variant="flat" color="default" onPress={handleClose} className="text-sm font-medium">
            Cancel
          </Button>
          <Button
            onPress={handleCreate}
            isDisabled={!endpoint.path || !endpoint.method}
            className="bg-[#fc035a] text-white hover:bg-[#d9024e] text-sm font-medium px-5"
          >
            Create endpoint
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
