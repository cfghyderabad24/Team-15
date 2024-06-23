import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line
} from 'recharts';

function Homecheck() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className="overflow-y-auto p-5 text-white h-screen">
      <div className="flex justify-between mb-5">
        <h3 className="text-lg font-bold">DASHBOARD</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
        <div className="bg-blue-700 text-white rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-base">PRODUCTS</h3>
            <BsFillArchiveFill className="text-xl" />
          </div>
          <h1 className="text-3xl font-bold">300</h1>
        </div>
        <div className="bg-orange-700 text-white rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-base">CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="text-xl" />
          </div>
          <h1 className="text-3xl font-bold">12</h1>
        </div>
        <div className="bg-green-700 text-white rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-base">CUSTOMERS</h3>
            <BsPeopleFill className="text-xl" />
          </div>
          <h1 className="text-3xl font-bold">33</h1>
        </div>
        <div className="bg-red-700 text-white rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-base">ALERTS</h3>
            <BsFillBellFill className="text-xl" />
          </div>
          <h1 className="text-3xl font-bold">42</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Homecheck;
