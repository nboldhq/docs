import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../components/layout/dashboard/DashboardLayout';
import Dashboard from './Dashboard';
import FilesPage from './FilesPage';
import StoragePage from './StoragePage';
import CategoryTree from '../../pages/dashboard/CategoryTree'
import NavigationTabs from './NavigationTabs';
import ApiReference from './ApiReference';
const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="file" element={<FilesPage />} />
        <Route path="storage" element={<StoragePage />} />
        <Route path="categorytree" element={<CategoryTree />} />
        <Route path="navigationtab" element={<NavigationTabs />} />
        <Route path="apireference" element={<ApiReference />} />

      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
