import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []); // Fetch projects when the component mounts

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/viewprojects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data); // Update state with project data
      } else {
        console.error('Failed to fetch projects');
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // Filter projects by approval status
  const approvedProjects = projects.filter(project => project.isApproved);
  const notApprovedProjects = projects.filter(project => !project.isApproved);

  return (
    <div className="min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-5">Projects</h1>

      {/* Approved Projects */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Approved Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {approvedProjects.map(project => (
            <div key={project.project_id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">{project.project_name}</h3>
              <p className="text-sm">{project.desc}</p>
              <p className="text-sm">Budget: ${project.budget}</p>
              <p className="text-sm">Created Date: {new Date(project.created_date).toLocaleDateString()}</p>
              <p className="text-sm">Delivery Date: {new Date(project.delivery_date).toLocaleDateString()}</p>
              <p className="text-sm">Status: Approved</p>
            </div>
          ))}
        </div>
      </div>

      {/* Not Approved Projects */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Not Approved Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {notApprovedProjects.map(project => (
            <div key={project.project_id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">{project.project_name}</h3>
              <p className="text-sm">{project.desc}</p>
              <p className="text-sm">Budget: ${project.budget}</p>
              <p className="text-sm">Created Date: {new Date(project.created_date).toLocaleDateString()}</p>
              <p className="text-sm">Delivery Date: {new Date(project.delivery_date).toLocaleDateString()}</p>
              <p className="text-sm">Status: Not Approved</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
