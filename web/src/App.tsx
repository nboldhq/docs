import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import DashboardPage from './pages/dashboard/DashboardPage';
import DocsPage from './pages/docs/DocsPage';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/login/LoginPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
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
