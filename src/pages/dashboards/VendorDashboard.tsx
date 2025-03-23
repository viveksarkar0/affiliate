import React, { useState } from 'react';
import StatCard from '@/components/StatCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plus, Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';


// Type Definitions
type Stat = {
  title: string;
  value: string;
  percentage: number;
};

type CampaignData = {
  name: string;
  clicks: number;
  conversions: number;
};

const data: CampaignData[] = [
  { name: 'Campaign 1', clicks: 400, conversions: 240 },
  { name: 'Campaign 2', clicks: 300, conversions: 139 },
  { name: 'Campaign 3', clicks: 200, conversions: 980 },
  { name: 'Campaign 4', clicks: 278, conversions: 390 },
  { name: 'Campaign 5', clicks: 189, conversions: 480 },
];

const VendorDashboard: React.FC = () => {
  const [showCreateCampaign, setShowCreateCampaign] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    status: 'active',
  });

  const stats: Stat[] = [
    { title: 'TOTAL REVENUE', value: '$52.4K', percentage: 12 },
    { title: 'ACTIVE CAMPAIGNS', value: '24', percentage: 8 },
    { title: 'TOTAL CLICKS', value: '12,342', percentage: 15 },
    { title: 'CONVERSION RATE', value: '3.2%', percentage: 5 },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Campaign Created:', formData);
    setShowCreateCampaign(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Vendor Dashboard</h1>
        <div className="flex space-x-2">
          <Button className="flex items-center" onClick={() => setShowCreateCampaign(true)}>
            <Plus className="w-4 h-4 mr-2" /> Create Campaign
          </Button>
          <Button variant="outline" className="flex items-center">
            <Settings className="w-4 h-4 mr-2" /> Settings
          </Button>
        </div>
      </div>

      {showCreateCampaign && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Create New Campaign</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <Button type="button" variant="outline" onClick={() => setShowCreateCampaign(false)}>
                  Cancel
                </Button>
                <Button type="submit">Create Campaign</Button>
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Campaign Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="clicks" fill="#4F46E5" />
              <Bar dataKey="conversions" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
