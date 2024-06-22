import React, { useState } from 'react';
import './BudgetTracker.css';

const BudgetTracker = () => {
  const [amountReceived, setAmountReceived] = useState('');
  const [amountSpent, setAmountSpent] = useState('');
  const [amountGoingToSpend, setAmountGoingToSpend] = useState('');

  const calculateAmountHaving = () => {
    const received = parseFloat(amountReceived) || 0;
    const spent = parseFloat(amountSpent) || 0;
    const goingToSpend = parseFloat(amountGoingToSpend) || 0;
    return received - spent - goingToSpend;
  };

  const amountHaving = calculateAmountHaving();

  const stats = [
    { label: 'Total Amount Received', value: `$${amountReceived || '0'}`, color: 'bg-green-100 text-green-700' },
    { label: 'Total Amount Spent', value: `$${amountSpent || '0'}`, color: 'bg-red-100 text-red-700' },
    { label: 'Amount Going to Spend', value: `$${amountGoingToSpend || '0'}`, color: 'bg-yellow-100 text-yellow-700' },
    { label: 'Current Balance', value: `$${amountHaving}`, color: 'bg-blue-100 text-blue-700' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="bg-white rounded-xl p-12 max-w-5xl w-full">
        <h1 className="text-5xl font-extrabold mb-4 text-center text-gray-900 animated-heading">Budget Tracker</h1>
        <p className="text-xl text-center text-gray-600 mb-12 italic">
          "The way to get started is to quit talking and begin doing." 
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-16 text-center mb-16">
          <div className="mx-auto flex flex-col gap-y-6 items-center">
            <dt className="text-xl leading-7 text-gray-600">Amount Received</dt>
            <dd className="order-first text-5xl font-semibold tracking-tight text-green-600 animated-stat">
              {amountReceived || '--'}
            </dd>
            <input
              type="number"
              className="mt-4 p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-green-500"
              value={amountReceived}
              onChange={(e) => setAmountReceived(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>

          <div className="mx-auto flex flex-col gap-y-6 items-center">
            <dt className="text-xl leading-7 text-gray-600">Amount Spent</dt>
            <dd className="order-first text-5xl font-semibold tracking-tight text-red-600 animated-stat">
              {amountSpent || '--'}
            </dd>
            <input
              type="number"
              className="mt-4 p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-red-500"
              value={amountSpent}
              onChange={(e) => setAmountSpent(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>

          <div className="mx-auto flex flex-col gap-y-6 items-center">
            <dt className="text-xl leading-7 text-gray-600">Amount to Spend</dt>
            <dd className="order-first text-5xl font-semibold tracking-tight text-yellow-600 animated-stat">
              {amountGoingToSpend || '--'}
            </dd>
            <input
              type="number"
              className="mt-4 p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-yellow-500"
              value={amountGoingToSpend}
              onChange={(e) => setAmountGoingToSpend(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>

          <div className="mx-auto flex flex-col gap-y-6 items-center">
            <dt className="text-xl leading-7 text-gray-600">Amount Having</dt>
            <dd className="order-first text-5xl font-semibold tracking-tight text-blue-600 animated-stat">
              {amountHaving || '--'}
            </dd>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className={`rounded-lg p-6 ${stat.color} animated-stat`}>
              <dt className="text-lg leading-6 font-medium">{stat.label}</dt>
              <dd className="text-3xl font-semibold mt-2">{stat.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
