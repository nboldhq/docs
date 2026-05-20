import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ICON_MAP, ICON_NAMES, IconName } from '../../utils/icon-map';
import { cn } from '../../utils/cn';

interface IconPickerProps {
  value: string;
  onChange: (name: string) => void;
}

const IconPicker: React.FC<IconPickerProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const SelectedIcon = value ? ICON_MAP[value as IconName] : null;

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 ml-0.5">
        Icon
      </label>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className={cn(
          'flex items-center justify-between gap-2 h-10 px-3 rounded-lg border text-sm transition-colors w-full',
          'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300',
          isOpen
            ? 'border-[#fc035a] dark:border-[#fc035a]'
            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
        )}
      >
        <span className="flex items-center gap-2 min-w-0">
          {SelectedIcon ? (
            <>
              <SelectedIcon size={14} className="shrink-0 text-gray-500 dark:text-gray-400" />
              <span className="text-sm truncate">{value}</span>
            </>
          ) : (
            <span className="text-gray-400 text-sm">No icon</span>
          )}
        </span>
        <ChevronDown
          size={13}
          className={cn(
            'shrink-0 text-gray-400 transition-transform duration-150',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 w-60 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl p-2.5">
          <button
            type="button"
            onClick={() => { onChange(''); setIsOpen(false); }}
            className={cn(
              'w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors mb-1.5',
              !value
                ? 'bg-[#fc035a]/8 text-[#fc035a] font-medium'
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
          >
            No icon
          </button>
          <div className="grid grid-cols-7 gap-0.5">
            {ICON_NAMES.map((name) => {
              const Icon = ICON_MAP[name];
              const isSelected = value === name;
              return (
                <button
                  key={name}
                  type="button"
                  title={name}
                  onClick={() => { onChange(name); setIsOpen(false); }}
                  className={cn(
                    'flex items-center justify-center w-8 h-8 rounded-lg transition-colors',
                    isSelected
                      ? 'bg-[#fc035a]/8 text-[#fc035a]'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  )}
                >
                  <Icon size={14} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default IconPicker;
