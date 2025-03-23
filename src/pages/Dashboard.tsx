
import { useAuthStore } from '@/store/auth';
import AdminDashboard from './dashboards/AdminDashboard';
import VendorDashboard from './dashboards/VendorDashboard';
import AffiliateDashboard from './dashboards/AffiliateDashboard';


const Dashboard = () => {
  const { user } = useAuthStore();

  if (!user) return null;

  const DashboardComponent = {
    admin: AdminDashboard,
    vendor: VendorDashboard,
    affiliate: AffiliateDashboard,
 
  }[user.role];

  return <DashboardComponent />;
};

export default Dashboard;