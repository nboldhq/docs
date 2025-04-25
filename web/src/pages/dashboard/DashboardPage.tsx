import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../components/layout/dashboard/DashboardLayout';
import Categories from './Categories';
import Dashboard from './Dashboard'; // ✅ this should be your renamed dashboard component
import FilesPage from './FilesPage';

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="categories" element={<Categories />} />
        <Route path="filepage" element={<FilesPage />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
