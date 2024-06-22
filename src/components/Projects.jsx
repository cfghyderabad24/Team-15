import React from 'react';

function Projects() {
  return (
    <div className="min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Ongoing Projects Board */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Ongoing</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-100 rounded">
              <h3 className="text-lg font-bold">Project A</h3>
              <p className="text-sm">Description of project A.</p>
            </div>
            <div className="p-4 bg-blue-100 rounded">
              <h3 className="text-lg font-bold">Project B</h3>
              <p className="text-sm">Description of project B.</p>
            </div>
          </div>
        </div>

        {/* Declined Projects Board */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Declined</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-100 rounded">
              <h3 className="text-lg font-bold">Project C</h3>
              <p className="text-sm">Description of project C.</p>
            </div>
            <div className="p-4 bg-red-100 rounded">
              <h3 className="text-lg font-bold">Project D</h3>
              <p className="text-sm">Description of project D.</p>
            </div>
          </div>
        </div>

        {/* History Projects Board */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">History</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-bold">Project E</h3>
              <p className="text-sm">Description of project E.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-bold">Project F</h3>
              <p className="text-sm">Description of project F.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
