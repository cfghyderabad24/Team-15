import React, { useState, useEffect } from 'react';

const Tasks = () => {
    const [showModal, setShowModal] = useState(false);
    const [actionType, setActionType] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);
    const [notificationsData, setNotificationsData] = useState([]);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/notifications');
            if (response.ok) {
                const data = await response.json();
                const notificationsWithProjects = data.notifications.map(notification => {
                    const project = data.projects.find(project => project.project_id === notification.project_id);
                    return {
                        ...notification,
                        project_id: project ? project.project_id : '',
                        description: project ? project.desc : '',
                        budget: project ? project.budget : '',
                    };
                });

                // Filter out entries where admin_access is true (approved)
                const filteredNotifications = notificationsWithProjects.filter(notification => !notification.admin_access);

                setNotificationsData(filteredNotifications);
            } else {
                console.error('Failed to fetch notifications');
            }
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    const handleApprove = (projectId) => {
        setSelectedProject(projectId);
        setActionType('approve');
        setShowModal(true);
    };

    const handleReject = (projectId) => {
        setSelectedProject(projectId);
        setActionType('reject');
        setShowModal(true);
    };

    const handleConfirmAction = async () => {
        const requestData = {
            project_id: selectedProject,
            action: actionType === 'approve' ? 'approve' : 'reject',
        };

        try {
            const response = await fetch(actionType === 'approve' ? `http://127.0.0.1:8000/notifications/${selectedProject}/edit` : `http://127.0.0.1:8000/notifications/${selectedProject}/edit1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                console.log(`${actionType === 'approve' ? 'Approved' : 'Rejected'} project ${selectedProject}`);
                fetchNotifications();
            } else {
                console.error('Failed to process notification');
            }
        } catch (error) {
            console.error('Error processing notification:', error);
        }

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
                            <th className="px-4 py-2">Admin Access</th>
                            <th className="px-4 py-2">Higher Access</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notificationsData.map((project) => (
                            <tr key={project.project_id}>
                                <td className="border px-4 py-2">{project.project_id}</td>
                                <td className="border px-4 py-2">{project.budget}</td>
                                <td className="border px-4 py-2">{project.description}</td>
                                <td className="border px-4 py-2">{project.admin_access ? 'Yes' : 'No'}</td>
                                <td className="border px-4 py-2">{project.higher_access ? 'Yes' : 'No'}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => handleApprove(project.project_id)}
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                        style={{ minWidth: '80px' }}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleReject(project.project_id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
                                        style={{ minWidth: '80px' }}
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-lg max-w-md">
                        <div className="text-xl font-bold mb-4">
                            Are you sure you want to {actionType === 'approve' ? 'approve' : 'reject'} project{' '}
                            {selectedProject}?
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
                                style={{ minWidth: '80px' }}
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
