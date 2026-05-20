import { Input, Textarea } from '@heroui/react';
import { ChevronDown, Trash2 } from 'lucide-react';
import React from 'react';
import ParameterSection from './ParameterSection';
import RequestBodySection from './RequestBodySection';
import ResponseSection from './ResponseSection';

const METHOD_STYLES: Record<string, string> = {
  GET:    'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400',
  POST:   'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400',
  PUT:    'bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400',
  PATCH:  'bg-yellow-50 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-400',
  DELETE: 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400',
};

const EndpointMethod = React.memo(({
  pathKey,
  method,
  details,
  onDelete,
  handleChange,
  isOpen,
  toggleOpen,
}: {
  pathKey: string;
  method: string;
  details: any;
  handleChange: (path: string[], value: any) => void;
  onDelete: () => void;
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
  const upper = method.toUpperCase();
  const styleClass = METHOD_STYLES[upper] || 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';

  return (
    <div>
      {/* Row */}
      <div
        className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
        onClick={toggleOpen}
      >
        <span
          className={`shrink-0 inline-flex items-center justify-center w-16 h-6 rounded text-[11px] font-bold font-mono tracking-wide ${styleClass}`}
        >
          {upper}
        </span>
        <span className="flex-1 text-sm text-gray-600 dark:text-gray-400 truncate">
          {details.summary || <span className="text-gray-400 dark:text-gray-600 italic">No summary</span>}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="p-1 rounded text-gray-400 hover:text-red-500 transition-colors shrink-0"
          title="Delete method"
        >
          <Trash2 size={13} />
        </button>
        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform duration-150 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Expanded edit form */}
      {isOpen && (
        <div
          className="px-4 pb-5 pt-1 space-y-4 border-t border-gray-100 dark:border-gray-800/60"
          onClick={(e) => e.stopPropagation()}
        >
          <Input
            size="sm"
            label="Summary"
            value={details.summary || ''}
            onChange={(e) => handleChange(['paths', pathKey, method, 'summary'], e.target.value)}
          />
          <Textarea
            size="sm"
            label="Description"
            minRows={3}
            value={details.description || ''}
            onChange={(e) => handleChange(['paths', pathKey, method, 'description'], e.target.value)}
          />

          {details.parameters?.length > 0 && (
            <ParameterSection
              parameters={details.parameters}
              path={['paths', pathKey, method, 'parameters']}
              handleChange={handleChange}
            />
          )}

          {details.requestBody && (
            <RequestBodySection
              requestBody={details.requestBody}
              path={['paths', pathKey, method, 'requestBody']}
              handleChange={handleChange}
            />
          )}

          {details.responses && (
            <ResponseSection
              responses={details.responses}
              path={['paths', pathKey, method, 'responses']}
              handleChange={handleChange}
            />
          )}
        </div>
      )}
    </div>
  );
});

export default EndpointMethod;
