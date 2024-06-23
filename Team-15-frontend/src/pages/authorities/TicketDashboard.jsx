import React, { useState, useEffect } from 'react';

const TicketDashboard = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/tickets');
            if (response.ok) {
                const data = await response.json();
                setTickets(data);
            } else {
                console.error('Failed to fetch tickets');
            }
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Tickets Dashboard</h1>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Raised By</th>
                            <th className="px-4 py-2">Assigned To</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Escalation Level</th>
                            <th className="px-4 py-2">Upload Time</th>
                            <th className="px-4 py-2">Solved Time</th>
                            <th className="px-4 py-2">Deadline Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) => (
                            <tr key={ticket.id}>
                                <td className="border px-4 py-2">{ticket.id}</td>
                                <td className="border px-4 py-2">{ticket.raised_by}</td>
                                <td className="border px-4 py-2">{ticket.assigned_to}</td>
                                <td className="border px-4 py-2">{ticket.desc}</td>
                                <td className="border px-4 py-2">{ticket.escalation_level}</td>
                                <td className="border px-4 py-2">{ticket.upload_time}</td>
                                <td className="border px-4 py-2">{ticket.solved_time}</td>
                                <td className="border px-4 py-2">{ticket.deadline_time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TicketDashboard;
