import React, { useEffect, useState } from 'react';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState('');
    const [daysInMonth, setDaysInMonth] = useState(31);
    const [startDayOfWeek, setStartDayOfWeek] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const currentDate = new Date();
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const month = monthNames[currentDate.getMonth()];
        const year = currentDate.getFullYear();

        setCurrentMonth(`${month} ${year}`);
        setDaysInMonth(new Date(year, currentDate.getMonth() + 1, 0).getDate());
        setStartDayOfWeek(new Date(year, currentDate.getMonth(), 1).getDay());
    }, []);

    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    const emptyCells = Array.from({ length: startDayOfWeek }, (_, index) => index);

    const handleDateClick = (day) => {
        setSelectedDate(day);
        setShowModal(true);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">{currentMonth}</h1>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2">Sun</th>
                            <th className="px-4 py-2">Mon</th>
                            <th className="px-4 py-2">Tue</th>
                            <th className="px-4 py-2">Wed</th>
                            <th className="px-4 py-2">Thu</th>
                            <th className="px-4 py-2">Fri</th>
                            <th className="px-4 py-2">Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emptyCells.length > 0 && (
                            <tr>
                                {emptyCells.map((cell, index) => (
                                    <td key={index} className="border px-4 py-2"></td>
                                ))}
                                {days.slice(0, 7 - startDayOfWeek).map((day) => (
                                    <td
                                        key={day}
                                        className="border px-4 py-2 cursor-pointer hover:bg-gray-200"
                                        onClick={() => handleDateClick(day)}
                                    >
                                        {day}
                                    </td>
                                ))}
                            </tr>
                        )}

                        {Array.from({ length: Math.ceil((daysInMonth - (7 - startDayOfWeek)) / 7) }, (_, weekIndex) => (
                            <tr key={weekIndex}>
                                {Array.from({ length: 7 }, (_, dayIndex) => {
                                    const dayNumber = 7 * weekIndex + dayIndex + 1 + (7 - startDayOfWeek);
                                    return dayNumber <= daysInMonth ? (
                                        <td
                                            key={dayNumber}
                                            className="border px-4 py-2 cursor-pointer hover:bg-gray-200"
                                            onClick={() => handleDateClick(dayNumber)}
                                        >
                                            {dayNumber}
                                        </td>
                                    ) : (
                                        <td key={`empty-${dayIndex}`} className="border px-4 py-2"></td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Notifications for {currentMonth} {selectedDate}</h2>
                        <p>No notifications for this date.</p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
