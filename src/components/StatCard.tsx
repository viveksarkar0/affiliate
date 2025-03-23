import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  percentage: number;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, percentage, color = 'blue' }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-500">{title}</h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className={`px-2.5 py-1.5 rounded-full bg-green-100 text-green-800 text-sm font-medium`}>
          {percentage}% ↑
        </div>
      </div>
    </div>
  );
}

export default StatCard;