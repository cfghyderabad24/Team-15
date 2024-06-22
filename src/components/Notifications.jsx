import React from 'react';

function Notifications() {
  const notifications = [
    {
      projectId: '1235',
      ngoName: 'NGO A',
      description: 'Help build a community center.',
      deadline: '2024-07-01',
    },
    {
      projectId: '5678',
      ngoName: 'NGO B',
      description: 'Provide educational supplies.',
      deadline: '2024-07-15',
    },
    {
      projectId: '9101',
      ngoName: 'NGO C',
      description: 'Organize a health camp.',
      deadline: '2024-08-01',
    },
  ];

  return (
    <div className="min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-5">Notifications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Project ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">NGO Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Description</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.projectId} className="bg-white">
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{notification.projectId}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{notification.ngoName}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{notification.description}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{notification.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Notifications;
