import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Pitching() {
  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [desc, setDesc] = useState('');
  const [budget, setBudget] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      project_id: projectId,
      project_name: projectName,
      desc: desc,
      budget: budget,
      created_date: createdDate,
      delivery_date: deliveryDate,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/ngo/createproject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Project created successfully!');
        console.log('Response Data:', data);
        // Optionally, reset the form
        setProjectId('');
        setProjectName('');
        setDesc('');
        setBudget('');
        setCreatedDate('');
        setDeliveryDate('');
      } else {
        const errorData = await response.json();
        console.error('Error Data:', errorData);
        toast.error('Failed to create project. Please try again.');
      }
    } catch (error) {
      console.error('Network Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-semibold text-gray-900">Create Project</h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="project-id" className="block text-sm font-medium leading-6 text-gray-900">
                  Project ID
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="project-id"
                    id="project-id"
                    value={projectId}
                    onChange={(e) => setProjectId(e.target.value)}
                    className="block flex-1 rounded-md shadow-sm border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Project ID"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="project-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Project Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="project-name"
                    id="project-name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="block flex-1 rounded-md shadow-sm border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Project Name"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="desc"
                    name="desc"
                    rows={3}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Write a detailed description of the project."
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="budget" className="block text-sm font-medium leading-6 text-gray-900">
                  Budget
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="budget"
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Total Budget"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="created-date" className="block text-sm font-medium leading-6 text-gray-900">
                  Created Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="created-date"
                    id="created-date"
                    value={createdDate}
                    onChange={(e) => setCreatedDate(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="delivery-date" className="block text-sm font-medium leading-6 text-gray-900">
                  Delivery Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="delivery-date"
                    id="delivery-date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
