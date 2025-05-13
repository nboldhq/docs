import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import DashboardPage from './pages/dashboard/DashboardPage';
import DocsPage from './pages/docs/DocsPage';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/login/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import { ToastProvider } from '@heroui/react';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastProvider placement='top-center'/>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/docs/*" element={<DocsPage />} />
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
