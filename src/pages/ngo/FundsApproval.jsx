import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const data = [
  { name: 'Approved', value: 60, status: 'approved' },
  { name: 'Not Approved', value: 20, status: 'denied' },
];

const getColor = (status) => {
  switch (status) {
    case 'approved':
      return '#4CAF50'; // Green
    case 'denied':
      return '#F44336'; // Red
    default:
      return '#000000'; // Black
  }
};

const FundsApproval = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Funds Approval Tracker</h2>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.status)} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default FundsApproval;
