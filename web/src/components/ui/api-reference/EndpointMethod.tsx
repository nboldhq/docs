import { Button, Chip, Input, Textarea } from "@heroui/react";
import { ChevronDown, Pencil, TrashIcon } from "lucide-react";
import React, { useState } from "react";
import ParameterSection from "./ParameterSection";
import RequestBodySection from "./RequestBodySection";
import ResponseSection from "./ResponseSection";

const methodBgClasses: Record<string, string> = {
  GET: 'bg-blue-500',
  POST: 'bg-green-500',
  PUT: 'bg-orange-500',
  PATCH: 'bg-yellow-500',
  DELETE: 'bg-red-500',
};

const EndpointMethod = React.memo(({ 
  pathKey,
  method,
  details,
  onDelete,
  handleChange,
  isOpen,
  renamePathKey,
  toggleOpen
}: {
  pathKey: string;
  method: string;
  details: any;
  handleChange: (path: string[], value: any) => void;
  onDelete: () => void;
  renamePathKey :(oldKey: string, newKey: string) => void;
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const [isEditingPath, setIsEditingPath] = useState(false);
  const [editedPath, setEditedPath] = useState(pathKey);

  

  return (
    <div className="rounded-lg hover:border-[#3f3f46]">
      <div className="flex items-center justify-between p-3">
        <div 
          className="flex items-center gap-3 flex-grow cursor-pointer min-w-0"
          onClick={toggleOpen}
        >

          {/* Fixed width method chip */}
          <div className="w-20 flex-shrink-0">
            <Chip
              variant="shadow"
              className={`text-white px-3 py-1 rounded-sm text-sm font-semibold 
                justify-center truncate font-mono ${methodBgClasses[method.toUpperCase()] || 'bg-gray-500'}`}
              style={{ boxSizing: 'border-box' }}
            >
              {method.toUpperCase()}
            </Chip>
          </div>

          {/* Path with hover trash icon */}
          <div className="group relative flex-1 min-w-0">
            <div className="flex items-center justify-between min-w-0 gap-">
                {isEditingPath ? (
                <Input
                    className="font-mono text-sm pr-10 "
                    value={editedPath}
                    onChange={(e) => setEditedPath(e.target.value)}
                    onBlur={() => {
                      if (editedPath !== pathKey) {
                        renamePathKey(pathKey, editedPath);
                      }
                      setIsEditingPath(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        if (editedPath !== pathKey) {
                          renamePathKey(pathKey, editedPath);
                        }
                        setIsEditingPath(false);
                      }
                    }}
                    
                />
                ) : (
                <span className="text-sm font-mono dark:text-white whitespace-normal break-words pr-6 truncate">
                    {editedPath}
                </span>
                )}
                
                <div className="absolute right-0 ml-3 flex gap-2">
                <Pencil 
                    className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer 
                            opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                    e.stopPropagation();
                    setIsEditingPath(true);
                    }}
                />
                <TrashIcon
                    className="w-4 h-4 text-red-500 hover:text-red-700 cursor-pointer 
                            opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                    }}
                />
                </div>
            </div>
          </div>
        </div>

        {/* Expand/collapse button */}
        <div className="flex items-center gap-2 ml-2 flex-shrink-0">
          <Button
            isIconOnly
            variant="light"
            className="text-current"
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen();
            }}
          >
            <ChevronDown 
              className={`w-5 h-5 transform transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </Button>
        </div>
      </div>

      {isOpen && (
        <div 
          className="p-4"
          onClick={handleWrapperClick}
        >
          <div className="space-y-4">
            {/* Summary Input */}
            <div onClick={handleWrapperClick}>
              <Input
                label="Summary"
                value={details.summary || ''}
                onChange={(e) => {
                  handleChange(['paths', pathKey, method, 'summary'], e.target.value);
                }}
              />
            </div>
            
            {/* Description Textarea */}
            <div onClick={handleWrapperClick}>
              <Textarea
                label="Description"
                value={details.description || ''}
                onChange={(e) => {
                  handleChange(['paths', pathKey, method, 'description'], e.target.value);
                }}
                rows={4}
              />
            </div>

            {/* Nested Sections */}
            {details.parameters?.length > 0 && (
              <div onClick={handleWrapperClick}>
                <ParameterSection 
                  parameters={details.parameters} 
                  path={['paths', pathKey, method, 'parameters']}
                  handleChange={handleChange}
                />
              </div>
            )}

            {details.requestBody && (
              <div onClick={handleWrapperClick}>
                <RequestBodySection 
                  requestBody={details.requestBody} 
                  path={['paths', pathKey, method, 'requestBody']}
                  handleChange={handleChange}
                />
              </div>
            )}

            {details.responses && (
              <div onClick={handleWrapperClick}>
                <ResponseSection 
                  responses={details.responses} 
                  path={['paths', pathKey, method, 'responses']}
                  handleChange={handleChange}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

export default EndpointMethod;