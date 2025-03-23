import { useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { Button } from '@/components/ui/Button';

interface CampaignData {
  id: number;
  name: string;
  status: "active" | "paused" | "inactive";
  clicks: number;
  conversions: number;
  revenue: number;
  progress: number;
  startDate?: string;
  endDate?: string;
}

const Campaign = () => {
  const initialCampaigns: CampaignData[] = [
    { id: 1, name: "Campaign 1", status: "active", clicks: 1000, conversions: 100, revenue: 500, progress: 50 },
    { id: 2, name: "Campaign 2", status: "paused", clicks: 500, conversions: 50, revenue: 250, progress: 25 },
    { id: 3, name: "Campaign 3", status: "inactive", clicks: 200, conversions: 20, revenue: 100, progress: 10 },
  ];

  const [campaigns, setCampaigns] = useState<CampaignData[]>(initialCampaigns);
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<CampaignData>>({});

  const handleCreateCampaign = () => {
    setFormData({ name: "", startDate: "", endDate: "", status: "active" });
    setSelectedCampaign(null);
    setIsModalOpen(true);
  };

  const handleEditCampaign = (campaign: CampaignData) => {
    setFormData({ ...campaign });
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCampaign) {
      setCampaigns(campaigns.map((c) => (c.id === selectedCampaign.id ? { ...c, ...formData } : c)));
    } else {
      const newCampaign: CampaignData = { 
        id: Date.now(), 
        name: formData.name || "Untitled Campaign", 
        status: formData.status || "active", 
        clicks: 0, 
        conversions: 0, 
        revenue: 0, 
        progress: 0, 
        startDate: formData.startDate, 
        endDate: formData.endDate 
      };
      setCampaigns([...campaigns, newCampaign]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">All Campaigns</h2>
        <Button onClick={handleCreateCampaign} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create Campaign
        </Button>
      </div>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 border">Name</th>
            <th className="py-3 px-4 border">Status</th>
            <th className="py-3 px-4 border">Clicks</th>
            <th className="py-3 px-4 border">Conversions</th>
            <th className="py-3 px-4 border">Revenue</th>
            <th className="py-3 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4">{campaign.name}</td>
              <td className="py-3 px-4">{campaign.status}</td>
              <td className="py-3 px-4">{campaign.clicks}</td>
              <td className="py-3 px-4">{campaign.conversions}</td>
              <td className="py-3 px-4">${campaign.revenue}</td>
              <td className="py-3 px-4 flex space-x-2">
                <button onClick={() => handleEditCampaign(campaign)} className="text-blue-600">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{selectedCampaign ? "Edit Campaign" : "Create Campaign"}</h3>
              <button onClick={() => setIsModalOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" value={formData.name || ""} onChange={handleInputChange} className="w-full p-2 border rounded" placeholder="Campaign Name" required />
              <select name="status" value={formData.status || "active"} onChange={handleInputChange} className="w-full p-2 border rounded">
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="inactive">Inactive</option>
              </select>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
                {selectedCampaign ? "Update" : "Create"} Campaign
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaign;
