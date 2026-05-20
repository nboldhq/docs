import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import DashboardPage from './pages/dashboard/DashboardPage';
import DocsPage from './pages/docs/DocsPage';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/login/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import { ToastProvider } from '@heroui/react';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider placement="top-center"/>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/page-not-found" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<DocsPage />} />
          <Route
            path="/dashboard/*"
            element={
              <AuthProvider>
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              </AuthProvider>
            }
          />
        </Routes>
    </BrowserRouter>
  );
}

export default App;