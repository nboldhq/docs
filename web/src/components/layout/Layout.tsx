// src/components/Layout.tsx
import React from 'react';
import Footer from '../ui/footer';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="h-screen">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
