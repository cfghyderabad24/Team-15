import React from 'react';

function ProjectBudgetDistribution() {
  const projects = [
    {
      projectId: '1234',
      projectName: 'Community Center',
      allocatedBudget: 10000,
      spentBudget: 5000,
      remainingBudget: 5000,
    },
    {
      projectId: '5678',
      projectName: 'Educational Supplies',
      allocatedBudget: 20000,
      spentBudget: 15000,
      remainingBudget: 5000,
    },
    {
      projectId: '9101',
      projectName: 'Health Camp',
      allocatedBudget: 15000,
      spentBudget: 7000,
      remainingBudget: 8000,
    },
  ];

  return (
    <div className="min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-5">Project Budget Distribution</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Project ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Project Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Allocated Budget</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Spent Budget</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Remaining Budget</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.projectId} className="bg-white">
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{project.projectId}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{project.projectName}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{`$${project.allocatedBudget.toLocaleString()}`}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{`$${project.spentBudget.toLocaleString()}`}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{`$${project.remainingBudget.toLocaleString()}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectBudgetDistribution;
