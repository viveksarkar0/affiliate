
import { motion } from 'framer-motion';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

const AdminDashboard = () => {
  const stats = [
    { title: 'BALANCE', value: '$124.2M', percentage: 100 },
    { title: 'SALES', value: '$2.5M', percentage: 100 },
    { title: 'ACTIONS', value: '51 / $389', percentage: 100 },
    { title: 'CLICKS', value: '2043 / $11.8k', percentage: 100 },
  ];

  const protectionSettings = [
    { title: 'Prevent Affiliate Self Fraud', enabled: true },
    { title: 'Enable Localhost Protection', enabled: true },
    { title: 'Enable Click Protection', enabled: true },
    { title: 'Enable Action Protection', enabled: true },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-medium text-blue-600">{stat.title}</h3>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
              <div className="mt-2 flex items-center">
                <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                  {stat.percentage}% ↑
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-medium">Vendor Store Sales:</span>
            <span className="text-2xl font-bold">{formatCurrency(120500000)}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              100% ↑
            </span>
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Protection Settings</h2>
            <div className="space-y-4">
              {protectionSettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{setting.title}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Status:</span>
                    <Switch checked={setting.enabled} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6 bg-green-600 text-white">
            <h2 className="text-xl font-semibold mb-4">System Fraud Protection Risk Assessment</h2>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span>System Protected:</span>
                <span className="text-2xl font-bold">100%</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="fixed bottom-0 left-64 right-0 bg-gray-100 border-t border-gray-200 p-4"
      >
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Last Update: 12:37:45 PM</span>
            <span>Session Timeout: 00:24:36</span>
          </div>
          <span>Version: 11.0.0.0</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;