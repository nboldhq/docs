// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import DashboardPage from './pages/dashboard/DashboardPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import DocsPage from './pages/docs/DocsPage';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/docs/*"
            element={
                <DocsPage />
            }
          />
          <Route
            path="/dashboard/*"
            element={
                <DashboardPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
