
import { Search, Filter, ShoppingBag } from 'lucide-react';

const AffiliateMarketplace = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Premium Electronics Sale',
      vendor: 'Tech Solutions Inc.',
      category: 'Electronics',
      commission: '15%',
      price: '$199.99',
      description: 'Exclusive deals on premium electronics and gadgets.',
    },
    {
      id: 2,
      title: 'Fashion Collection 2024',
      vendor: 'Style Hub',
      category: 'Fashion',
      commission: '20%',
      price: '$89.99',
      description: 'Latest fashion trends and designer collections.',
    },
    {
      id: 3,
      title: 'Home Essentials Bundle',
      vendor: 'Home Comfort',
      category: 'Home & Living',
      commission: '12%',
      price: '$149.99',
      description: 'Essential home items at unbeatable prices.',
    },
  ];

  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-gray-900">Marketplace</h1>

      {/* Search and Filters */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search campaigns..."
          />
        </div>
        <div className="flex space-x-4">
          <select className="block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Living</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            More Filters
          </button>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{campaign.title}</h3>
                  <p className="text-sm text-gray-500">{campaign.vendor}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">{campaign.description}</p>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Category</span>
                  <span className="font-medium text-gray-900">{campaign.category}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-gray-500">Commission</span>
                  <span className="font-medium text-green-600">{campaign.commission}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-gray-500">Product Price</span>
                  <span className="font-medium text-gray-900">{campaign.price}</span>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Join Campaign
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateMarketplace;