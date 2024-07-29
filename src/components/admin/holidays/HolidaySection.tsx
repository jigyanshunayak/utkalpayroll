import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for React Calendar

type CalendarTileProperties = {
  date: Date;
  view: string;
};

const HolidaySection: React.FC = () => {
  const [date, setDate] = useState<CalendarProps['value']>(new Date());

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    setDate(value);
  };

  return (
    <section className="h-screen p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Holiday</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Holiday</button>
      </div>
      <div className="flex justify-end space-x-4 mb-4">
        <button className="bg-gray-200 px-3 py-1 rounded">Month</button>
        <button className="bg-gray-200 px-3 py-1 rounded">Week</button>
        <button className="bg-gray-200 px-3 py-1 rounded">Day</button>
        <button className="bg-gray-200 px-3 py-1 rounded">Agenda</button>
      </div>
      <div className="flex-grow bg-white p-4 rounded shadow">
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={({ date, view }: CalendarTileProperties) => {
            if (view === 'month' && date.getDay() === 0) {
              return 'bg-gray-200';
            }
            return '';
          }}
        />
      </div>
    </section>
  );
};

export default HolidaySection;
