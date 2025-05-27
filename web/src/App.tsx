import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './contexts/authConfig';
import WelcomePage from './pages/WelcomePage';
import DashboardPage from './pages/dashboard/DashboardPage';
import DocsPage from './pages/docs/DocsPage';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/login/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import { ToastProvider } from '@heroui/react';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider placement="top-center"/>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/login"
            element={
              <MsalProvider instance={msalInstance}>
                <LoginPage />
              </MsalProvider>
            }
          />
          <Route path="/docs/*" element={<DocsPage />} />

          <Route
            path="/dashboard/*"
            element={
              <MsalProvider instance={msalInstance}>
                <AuthProvider>
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                </AuthProvider>
              </MsalProvider>
            }
          />
        </Routes>
    </BrowserRouter>
  );
}

export default App;