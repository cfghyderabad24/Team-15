import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const FundsApproval = () => {
  const [approvedBudget, setApprovedBudget] = useState(0);
  const [notApprovedBudget, setNotApprovedBudget] = useState(0);

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/viewprojects');
      if (response.ok) {
        const projects = await response.json();
        const approvedBudget = projects
          .filter(project => project.isApproved)
          .reduce((acc, project) => acc + project.budget, 0);
        const notApprovedBudget = projects
          .filter(project => !project.isApproved)
          .reduce((acc, project) => acc + project.budget, 0);
        setApprovedBudget(approvedBudget);
        setNotApprovedBudget(notApprovedBudget);
      } else {
        console.error('Failed to fetch projects');
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const data = [
    { name: 'Approved', value: approvedBudget, status: 'approved' },
    { name: 'Not Approved', value: notApprovedBudget, status: 'denied' },
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
