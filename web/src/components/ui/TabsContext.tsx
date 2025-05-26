import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  route: string;
}

interface TabsContextType {
  tabs: Tab[];
  addTab: (label: string, route: string) => void;
  removeTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const TabsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: '1', label: 'Administrator Guide', route: '/docs-overview' },
    { id: '2', label: 'Catalog Manager Guide', route: '/docs/quick-start' },
    { id: '3', label: 'API Reference', route: '/docs/api/rest' },
    { id: '4', label: 'No-Code', route: '/docs/no-code' },
  ]);

  const addTab = (label: string, route: string) => {
    const newTab: Tab = {
      id: Date.now().toString(),
      label,
      route,
    };
    setTabs((prev) => [...prev, newTab]);
  };

  const removeTab = (id: string) => {
    setTabs((prev) => prev.filter((tab) => tab.id !== id));
  };

  return (
    <TabsContext.Provider value={{ tabs, addTab, removeTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};