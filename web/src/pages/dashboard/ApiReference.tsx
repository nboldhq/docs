import {
  Dropdown, DropdownItem, DropdownMenu, DropdownTrigger,
  Input, ScrollShadow, Spinner, Textarea, toast,
} from '@heroui/react';
import { ChevronDown, Pencil, Plus, Save, Search, Trash2, Upload, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import EndpointMethod from '../../components/ui/api-reference/EndpointMethod';
import EndpointModal from '../../components/ui/api-reference/EndpointModal';

type OpenApiSpec = {
  info: { title: string; description: string; summary?: string };
  'x-tagGroups'?: { name: string; tags: string[] }[];
  tags: { name: string; description: string }[];
  paths: {
    [path: string]: {
      [method: string]: {
        tags?: string[];
        summary?: string;
        description?: string;
        operationId?: string;
        deprecated?: boolean;
        security?: { [scheme: string]: string[] }[];
        parameters?: {
          name: string;
          in: 'path' | 'query' | 'header' | 'cookie';
          description?: string;
          required?: boolean;
          schema: Record<string, any>;
        }[];
        requestBody?: {
          description?: string;
          required?: boolean;
          content: { [contentType: string]: { schema: Record<string, any> } };
        };
        responses: {
          [statusCode: string]: {
            description: string;
            content?: { [contentType: string]: { schema: Record<string, any> } };
          };
        };
        [extension: `x-${string}`]: any;
      };
    };
  };
};

// ── Module-level sub-components ───────────────────────────────────────────────

const EditablePath = ({
  pathKey,
  onRename,
  onDelete,
}: {
  pathKey: string;
  onRename: (newKey: string) => void;
  onDelete: () => void;
}) => {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(pathKey);

  React.useEffect(() => { setVal(pathKey); }, [pathKey]);

  const commit = () => {
    if (val && val !== pathKey) onRename(val);
    else setVal(pathKey);
    setEditing(false);
  };

  return (
    <div className="flex items-center gap-2 flex-1 min-w-0">
      {editing ? (
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commit();
            if (e.key === 'Escape') { setVal(pathKey); setEditing(false); }
          }}
          className="flex-1 font-mono text-xs bg-transparent border-b border-[#fc035a]/50 focus:outline-none text-gray-700 dark:text-gray-300 min-w-0"
          autoFocus
        />
      ) : (
        <button
          className="flex items-center gap-1.5 group/path flex-1 min-w-0 text-left"
          onClick={() => setEditing(true)}
          title="Click to rename path"
        >
          <span className="font-mono text-xs text-gray-600 dark:text-gray-400 truncate">{pathKey}</span>
          <Pencil size={10} className="text-gray-400 opacity-0 group-hover/path:opacity-100 transition-opacity shrink-0" />
        </button>
      )}
      <button
        onClick={onDelete}
        className="p-1 rounded text-gray-400 hover:text-red-500 transition-colors shrink-0"
        title="Delete path"
      >
        <Trash2 size={13} />
      </button>
    </div>
  );
};

const EditableGroupName = ({
  group,
  index,
  handleChange,
}: {
  group: any;
  index: number;
  handleChange: (path: string[], value: any) => void;
}) => {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(group.name);

  React.useEffect(() => { setVal(group.name); }, [group.name]);

  const commit = () => {
    if (val !== group.name) handleChange(['x-tagGroups', index.toString(), 'name'], val);
    setEditing(false);
  };

  if (editing) {
    return (
      <Input
        size="sm"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') commit();
          if (e.key === 'Escape') { setVal(group.name); setEditing(false); }
        }}
        autoFocus
        className="flex-1 max-w-[220px]"
      />
    );
  }

  return (
    <button
      className="flex items-center gap-1.5 group/name flex-1"
      onClick={() => setEditing(true)}
      title="Click to rename"
    >
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{group.name}</span>
      <Pencil size={11} className="text-gray-400 opacity-0 group-hover/name:opacity-100 transition-opacity" />
    </button>
  );
};

const TagGroupItem = ({
  group,
  index,
  availableTags,
  onDelete,
  handleChange,
}: {
  group: any;
  index: number;
  availableTags: string[];
  onDelete: (i: number) => void;
  handleChange: (path: string[], value: any) => void;
}) => {
  const [tagSearch, setTagSearch] = useState('');
  const filtered = availableTags.filter((t) => t.toLowerCase().includes(tagSearch.toLowerCase()));

  return (
    <div className="py-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
      <div className="flex items-center gap-2 mb-2.5">
        <EditableGroupName group={group} index={index} handleChange={handleChange} />
        <button
          onClick={() => onDelete(index)}
          className="p-1 rounded text-gray-400 hover:text-red-500 transition-colors"
          title="Delete group"
        >
          <Trash2 size={13} />
        </button>
      </div>
      <div className="flex flex-wrap gap-1.5 items-center">
        {group.tags.map((tag: string, ti: number) => (
          <span
            key={ti}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          >
            {tag}
            <button
              onClick={() =>
                handleChange(
                  ['x-tagGroups', index.toString(), 'tags'],
                  group.tags.filter((_: any, i: number) => i !== ti),
                )
              }
              className="text-gray-400 hover:text-red-500 transition-colors leading-none"
            >
              <X size={9} />
            </button>
          </span>
        ))}
        {availableTags.length > 0 && (
          <Dropdown>
            <DropdownTrigger>
              <button className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-xs font-medium text-[#fc035a] bg-[#fc035a]/8 hover:bg-[#fc035a]/12 transition-colors">
                <Plus size={10} /> Add
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Add tag to group" variant="light">
              <DropdownItem key="inner" isReadOnly className="p-0">
                <div className="p-2 space-y-1.5 min-w-[160px]">
                  <Input
                    size="sm"
                    placeholder="Search..."
                    value={tagSearch}
                    onChange={(e) => setTagSearch(e.target.value)}
                  />
                  <ScrollShadow hideScrollBar className="max-h-36 space-y-0.5">
                    {filtered.length ? (
                      filtered.map((t) => (
                        <div
                          key={t}
                          className="px-2 py-1.5 text-sm rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          onClick={() => {
                            handleChange(['x-tagGroups', index.toString(), 'tags'], [...group.tags, t]);
                            setTagSearch('');
                          }}
                        >
                          {t}
                        </div>
                      ))
                    ) : (
                      <p className="px-2 py-1.5 text-xs text-gray-400">No tags available</p>
                    )}
                  </ScrollShadow>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────

const ApiReference: React.FC = () => {
  const [jsonData, setJsonData] = useState<OpenApiSpec | null>(null);
  const [selectedTagIndex, setSelectedTagIndex] = useState<number>(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const [openMethods, setOpenMethods] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchRemoteSpec = async () => {
    try {
      const res = await fetch('/api/spec');
      if (!res.ok) throw new Error(`${res.status}`);
      const data: OpenApiSpec = await res.json();
      if (!Array.isArray(data['x-tagGroups'])) data['x-tagGroups'] = [];
      setJsonData(data);
    } catch {
      // spec may not be configured yet
    }
  };

  React.useEffect(() => { fetchRemoteSpec(); }, []);

  const handleChange = (path: string[], value: any) => {
    if (!jsonData) return;
    const newData = { ...jsonData };
    let current: any = newData;
    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      const existing = current[key];
      current[key] = Array.isArray(existing)
        ? [...existing]
        : typeof existing === 'object' && existing !== null
        ? { ...existing }
        : {};
      current = current[key];
    }
    current[path[path.length - 1]] = value;
    setJsonData(newData);
  };

  const handleSave = async () => {
    try {
      const controller = new AbortController();
      const tid = setTimeout(() => controller.abort(), 15000);
      const res = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
        signal: controller.signal,
      });
      clearTimeout(tid);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      toast.success('Spec saved successfully');
    } catch {
      toast.error('Failed to save spec');
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    setIsLoading(true);
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const result = await res.json();
      if (res.ok) {
        toast.success('File uploaded successfully');
        await fetchRemoteSpec();
      } else {
        toast.error(result.error || 'Upload failed');
      }
    } catch (err: any) {
      toast.error(err?.message || 'Upload failed');
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleAddTag = () => {
    const updated = [...(jsonData?.tags || []), { name: 'New Tag', description: '' }];
    setJsonData({ ...jsonData!, tags: updated });
    setSelectedTagIndex(updated.length - 1);
  };

  const handleDeleteTag = (index: number) => {
    if (!jsonData) return;
    const updated = jsonData.tags.filter((_, i) => i !== index);
    setJsonData({ ...jsonData, tags: updated });
    setSelectedTagIndex((prev) => (prev >= updated.length ? updated.length - 1 : prev));
  };

  const handleTagChange = (index: number, field: string, value: string) => {
    if (!jsonData) return;
    const updated = [...jsonData.tags];
    updated[index] = { ...updated[index], [field]: value };
    setJsonData({ ...jsonData, tags: updated });
  };

  const deleteEndpointMethod = (pathKey: string, method: string) => {
    if (!jsonData) return;
    const paths = { ...jsonData.paths, [pathKey]: { ...jsonData.paths[pathKey] } };
    delete paths[pathKey][method];
    if (!Object.keys(paths[pathKey]).length) delete paths[pathKey];
    setJsonData({ ...jsonData, paths });
  };

  const deleteEntireEndpoint = (pathKey: string) => {
    if (!jsonData) return;
    const paths = { ...jsonData.paths };
    delete paths[pathKey];
    setJsonData({ ...jsonData, paths });
  };

  const renamePathKey = (oldKey: string, newKey: string) => {
    if (!jsonData || !jsonData.paths[oldKey] || newKey === oldKey) return;
    if (jsonData.paths[newKey]) {
      toast.error('A path with this name already exists');
      return;
    }
    const paths = { ...jsonData.paths };
    paths[newKey] = paths[oldKey];
    delete paths[oldKey];
    setJsonData({ ...jsonData, paths });
  };

  const toggleMethod = (pathKey: string, method: string) => {
    const key = `${pathKey}-${method}`;
    setOpenMethods((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const filteredPaths = jsonData?.paths
    ? Object.entries(jsonData.paths).filter(([p]) =>
        p.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  return (
    <div className="p-6 pb-16">
      {/* Page header */}
      <div className="flex items-start justify-between mb-7">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">API Specification</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Edit and publish your OpenAPI 3.x spec
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            className="hidden"
            onChange={handleFileUpload}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 h-8 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Upload size={14} /> Import JSON
          </button>
          {jsonData && (
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-3 h-8 rounded-lg text-sm font-medium bg-[#fc035a] text-white hover:bg-[#d9024e] transition-colors"
            >
              <Save size={14} /> Save spec
            </button>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-24">
          <Spinner style={{ color: '#fc035a' }} size="lg" />
        </div>
      ) : !jsonData ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
            <Upload size={22} className="text-gray-400" />
          </div>
          <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-1">No spec loaded</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            Import an OpenAPI JSON file to get started
          </p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-4 h-9 rounded-lg text-sm font-medium bg-[#fc035a] text-white hover:bg-[#d9024e] transition-colors"
          >
            <Upload size={14} /> Import JSON
          </button>
        </div>
      ) : (
        <div className="flex flex-col xl:flex-row gap-8">

          {/* Left: Metadata */}
          <div className="w-full xl:w-[360px] shrink-0 space-y-6">

            {/* General Info */}
            <section>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                General Info
              </p>
              <div className="space-y-3">
                <Input
                  label="API title"
                  size="sm"
                  value={jsonData.info?.title || ''}
                  onChange={(e) => handleChange(['info', 'title'], e.target.value)}
                />
                <Textarea
                  label="Description"
                  size="sm"
                  minRows={3}
                  value={jsonData.info?.description || ''}
                  onChange={(e) => handleChange(['info', 'description'], e.target.value)}
                />
              </div>
            </section>

            <div className="border-t border-gray-100 dark:border-gray-800" />

            {/* Tags */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Tags
                </p>
                <button
                  onClick={handleAddTag}
                  className="flex items-center gap-1 text-xs font-medium text-[#fc035a] hover:text-[#d9024e] transition-colors"
                >
                  <Plus size={12} /> Add tag
                </button>
              </div>
              {!jsonData.tags?.length ? (
                <p className="text-xs text-gray-400 py-1">No tags defined yet.</p>
              ) : (
                <div className="space-y-0.5">
                  {jsonData.tags.map((tag, i) => (
                    <div key={i}>
                      <div
                        className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-colors group ${
                          selectedTagIndex === i
                            ? 'bg-[#fc035a]/6 text-[#fc035a]'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800/60 text-gray-700 dark:text-gray-300'
                        }`}
                        onClick={() => setSelectedTagIndex(selectedTagIndex === i ? -1 : i)}
                      >
                        <span className="flex-1 text-sm font-medium truncate">
                          {tag.name || 'Unnamed tag'}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDeleteTag(i); }}
                          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all p-0.5 rounded"
                        >
                          <X size={12} />
                        </button>
                        <ChevronDown
                          size={12}
                          className={`text-gray-400 transition-transform shrink-0 ${
                            selectedTagIndex === i ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      {selectedTagIndex === i && (
                        <div className="mx-2 mb-2 space-y-2 pt-1">
                          <Input
                            size="sm"
                            label="Name"
                            value={tag.name}
                            onChange={(e) => handleTagChange(i, 'name', e.target.value)}
                          />
                          <Textarea
                            size="sm"
                            label="Description"
                            minRows={2}
                            value={tag.description}
                            onChange={(e) => handleTagChange(i, 'description', e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            <div className="border-t border-gray-100 dark:border-gray-800" />

            {/* Tag Groups */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Tag Groups
                </p>
                <button
                  onClick={() => {
                    const groups = jsonData['x-tagGroups'] || [];
                    handleChange(['x-tagGroups'], [
                      ...groups,
                      { name: `Group ${groups.length + 1}`, tags: [] },
                    ]);
                  }}
                  className="flex items-center gap-1 text-xs font-medium text-[#fc035a] hover:text-[#d9024e] transition-colors"
                >
                  <Plus size={12} /> Add group
                </button>
              </div>
              {!jsonData['x-tagGroups']?.length ? (
                <p className="text-xs text-gray-400 py-1">No tag groups defined.</p>
              ) : (
                jsonData['x-tagGroups'].map((group, i) => {
                  const available = (jsonData.tags || [])
                    .filter((t) => !group.tags.includes(t.name))
                    .map((t) => t.name);
                  return (
                    <TagGroupItem
                      key={i}
                      group={group}
                      index={i}
                      availableTags={available}
                      onDelete={(gi) =>
                        handleChange(
                          ['x-tagGroups'],
                          (jsonData['x-tagGroups'] || []).filter((_, idx) => idx !== gi),
                        )
                      }
                      handleChange={handleChange}
                    />
                  );
                })
              )}
            </section>
          </div>

          {/* Right: Endpoints */}
          <div className="flex-1 min-w-0">
            {/* Endpoints header */}
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 shrink-0">
                Endpoints
              </p>
              <span className="text-xs text-gray-400 tabular-nums">
                ({jsonData.paths ? Object.keys(jsonData.paths).length : 0})
              </span>
              <div className="flex-1" />
              <div className="relative">
                <Search
                  size={13}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search paths..."
                  className="pl-8 pr-3 h-8 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#fc035a]/30 focus:border-[#fc035a]/40 transition-all w-44"
                />
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-1.5 px-3 h-8 rounded-lg text-sm font-medium bg-[#fc035a] text-white hover:bg-[#d9024e] transition-colors shrink-0"
              >
                <Plus size={14} /> Add endpoint
              </button>
            </div>

            {!filteredPaths.length ? (
              <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {searchQuery ? 'No paths match your search' : 'No endpoints defined yet'}
                </p>
                {!searchQuery && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-sm text-[#fc035a] hover:text-[#d9024e] mt-2 transition-colors"
                  >
                    Add your first endpoint
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredPaths.map(([pathKey, methods]) => (
                  <div
                    key={pathKey}
                    className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden"
                  >
                    {/* Path header */}
                    <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 dark:bg-gray-800/40 border-b border-gray-100 dark:border-gray-800">
                      <EditablePath
                        pathKey={pathKey}
                        onRename={(newKey) => renamePathKey(pathKey, newKey)}
                        onDelete={() => deleteEntireEndpoint(pathKey)}
                      />
                    </div>

                    {/* Methods */}
                    <div className="divide-y divide-gray-100 dark:divide-gray-800/60">
                      {Object.entries(methods)
                        .filter(
                          ([m]) =>
                            !m.startsWith('x-') &&
                            ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(m.toUpperCase()),
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
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {isModalOpen && (
        <EndpointModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          jsonData={jsonData!}
          setJsonData={setJsonData}
        />
      )}
    </div>
  );
};

export default ApiReference;
