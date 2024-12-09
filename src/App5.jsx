import React, { useState } from "react";

function App5() {
  const [events, setEvents] = useState({
    "2024-12-09": ["Meeting at 12 PM", "Lunch with team at 2 PM"],
    "2024-12-10": ["Project deadline", "Call with client"],
  });

  const [newEvent, setNewEvent] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const addEvent = () => {
    if (selectedDate && newEvent) {
      const updatedEvents = {
        ...events, 
        [selectedDate]: [...(events[selectedDate] || []), newEvent], 
      };
  
      setEvents(updatedEvents); 
      setNewEvent(""); 
    }
  };


  const renderCalendar = () => {
    const dates = Object.keys(events).sort();

    return dates.map((date) => (
      <div
        key={date}
        style={{
          margin: "10px 0",
          cursor: "pointer",
          border: date === selectedDate ? "2px solid blue" : "1px solid gray",
          padding: "5px",
        }}
        onClick={() => setSelectedDate(date)} 
      >
        <strong>{date}</strong>
        <ul>
          {events[date].map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div>
      <h2>My Calendar</h2>
      {renderCalendar()}

    
      {selectedDate && (
        <div style={{ marginTop: "20px" }}>
          <h3>Add Event for {selectedDate}</h3>
          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter event"
          />
          <button onClick={addEvent}>Add Event</button>
        </div>
      )}
      
    </div>
  );
}

export default App5;
