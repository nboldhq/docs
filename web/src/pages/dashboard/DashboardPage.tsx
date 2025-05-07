import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../components/layout/dashboard/DashboardLayout';
import Categories from './Categories';
import Dashboard from './Dashboard'; // ✅ this should be your renamed dashboard component
import FilesPage from './FilesPage';
import StoragePage from './StoragePage';
import CategoryTree from '../../pages/dashboard/CategoryTree'
import NavigationTabs from './NavigationTabs';
const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="categories" element={<Categories />} />
        <Route path="file" element={<FilesPage />} />
        <Route path="storage" element={<StoragePage />} />
        <Route path="categorytree" element={<CategoryTree />} />
        <Route path="navigationtab" element={<NavigationTabs />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
