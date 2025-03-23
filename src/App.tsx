import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/auth/Login";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import CreateUpdateCampaign from "./pages/campaign/Campaign";
import AffiliateMarketplace from "./pages/marketplace/MarketPlace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/campaign"
          element={
            <DashboardLayout>
              <CreateUpdateCampaign />
            </DashboardLayout>
          }
        />
         <Route
          path="/marketplace"
          element={
            <DashboardLayout>
              <AffiliateMarketplace />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
