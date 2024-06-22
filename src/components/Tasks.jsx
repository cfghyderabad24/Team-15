import React, { useState } from 'react';

const Tasks = () => {
    const [showModal, setShowModal] = useState(false);
    const [actionType, setActionType] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);

    const notificationsData = [
        {
            id: 1,
            budget: '$10,000',
            description: 'Lorem ipsum dolor sit amet',
            status: 'Pending',
            docLinks: 'https://example.com/document1',
        },
        // Add more notification objects as needed
    ];

    const handleApprove = (project) => {
        setSelectedProject(project);
        setActionType('approve');
        setShowModal(true);
    };

    const handleReject = (project) => {
        setSelectedProject(project);
        setActionType('reject');
        setShowModal(true);
    };

    const handleConfirmAction = () => {
        // Handle your approve/reject logic here
        // For example:
        if (actionType === 'approve') {
            console.log(`Approving project ${selectedProject.id}`);
            // Perform approval action
        } else if (actionType === 'reject') {
            console.log(`Rejecting project ${selectedProject.id}`);
            // Perform rejection action
        }
        // Close modal after action
        setShowModal(false);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2">Project ID</th>
                            <th className="px-4 py-2">Budget</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Doc Links</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notificationsData.map((project) => (
                            <tr key={project.id}>
                                <td className="border px-4 py-2">{project.id}</td>
                                <td className="border px-4 py-2">{project.budget}</td>
                                <td className="border px-4 py-2">{project.description}</td>
                                <td className="border px-4 py-2">{project.status}</td>
                                <td className="border px-4 py-2">
                                    <a href={project.docLinks}>Document</a>
                                </td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => handleApprove(project)}
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleReject(project)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for confirmation */}
            {showModal && (
                <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-lg max-w-md">
                        <div className="text-xl font-bold mb-4">
                            Are you sure you want to {actionType === 'approve' ? 'approve' : 'reject'} project{' '}
                            {selectedProject && selectedProject.id}?
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmAction}
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-2"
                            >
                                {actionType === 'approve' ? 'Approve' : 'Reject'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tasks;
