
import StatCard from '@/components/StatCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ExternalLink, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';


const data = [
  { name: 'Mon', earnings: 400 },
  { name: 'Tue', earnings: 300 },
  { name: 'Wed', earnings: 200 },
  { name: 'Thu', earnings: 278 },
  { name: 'Fri', earnings: 189 },
  { name: 'Sat', earnings: 239 },
  { name: 'Sun', earnings: 349 },
];

const AffiliateDashboard = () => {
  const stats = [
    { title: 'TOTAL EARNINGS', value: '$3,240', percentage: 12 },
    { title: 'ACTIVE LINKS', value: '24', percentage: 8 },
    { title: 'TOTAL CLICKS', value: '1,342', percentage: 15 },
    { title: 'CONVERSION RATE', value: '2.8%', percentage: 5 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Affiliate Dashboard</h1>
        <div className="flex space-x-2">
          <Button className="flex items-center">
            <Search className="w-4 h-4 mr-2" /> Browse Campaigns
          </Button>
          <Button variant="outline">
            Request Payout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Earnings Overview</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="earnings" stroke="#4F46E5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Top Performing Links</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">Summer Fashion Collection</h3>
                    <div className="flex items-center mt-1">
                      <ExternalLink className="w-4 h-4 text-gray-400 mr-2" />
                      <p className="text-sm text-gray-500 truncate">
                        https://example.com/ref/summer-fashion
                      </p>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-medium text-green-600">$234</p>
                    <p className="text-sm text-gray-500">342 clicks</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Payouts</h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Mar 15, 2024
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    $1,234.56
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDashboard;