import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css';

const Calender = () => {
  const [value, setValue] = useState(new Date());
  const importantDates = [
    new Date(2023, 5, 10),
    new Date(2023, 5, 15),
    new Date(2023, 5, 25),
  ];

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (importantDates.some(d => d.getTime() === date.getTime())) {
        return 'highlight';
      }
    }
    return null;
  };

  return (
    <div>
      <h2>Notification Calendar</h2>
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default Calender;