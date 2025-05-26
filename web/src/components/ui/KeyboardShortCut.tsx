import React from 'react';

interface KeyboardShortcutProps {
  combo: string;
}
const ICON_MAP: Record<string, React.ReactNode> = {
    win: '⊞',
    windows: '⊞',
    command: '⌘',
    control: '⌃',
    shift: '⇧',
    alt: '⌥',
    option: '⌥',
    enter: '⏎',
    return: '⏎',
    backspace: '⌫',
    delete: '⌦',
    esc: '⎋',
    escape: '⎋',
    space: '␣',
    tab: '⇥',
    // no need to map '.' or ';' — they'll render literally
  };
  

export const KeyboardShortcut: React.FC<KeyboardShortcutProps> = ({ combo }) => {
  const parts = combo.split(/\s*\+\s*/);

  return (
    <span className="inline-flex items-center space-x-1">
      {parts.map((key, i) => {
        const lower = key.toLowerCase();
        const icon = ICON_MAP[lower];
        return (
          <kbd
            key={i}
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm px-2 py-1 border border-gray-300 dark:border-gray-600 rounded shadow-sm"
          >
            {icon ?? key}
          </kbd>
        );
      })}
    </span>
  );
};
