import React, { useState } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const localizer = momentLocalizer(moment);

const courts = [
  { id: 1, title: "Court 1" },
  { id: 2, title: "Court 2" },
  { id: 3, title: "Court 3" },
  { id: 4, title: "Court 4" },
  { id: 5, title: "Court 5" },
  { id: 6, title: "Court 6" },
];

const BigCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Handle selecting a time slot
  const handleSelectSlot = ({ start, end, resourceId }) => {
    const title = prompt("Enter Event Title:");
    if (title) {
      setEvents([...events, { id: events.length + 1, title, start, end, resourceId }]);
    }
  };

  // Handle clicking on an event (delete option)
  const handleSelectEvent = (event) => {
    if (window.confirm(`Delete event: ${event.title}?`)) {
      setEvents(events.filter((e) => e.id !== event.id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Date Picker Section */}
      <div className="mb-6 text-center flex justify-center items-center gap-4">
        <label className="text-lg font-semibold text-gray-700">Select Date:</label>
        <div className="relative">
          <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="py-2 px-4 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            dateFormat="MMMM d, yyyy"
          />
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          views={[Views.DAY, Views.WEEK]}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          defaultView={Views.DAY}
          date={selectedDate}
          onNavigate={(date) => setSelectedDate(date)}
          resources={courts}
          resourceIdAccessor="id"
          resourceTitleAccessor="title"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default BigCalendar;
