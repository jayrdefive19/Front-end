import { useParams } from 'react-router-dom';

import React, { useState } from 'react';
import DashboardUser from '../components/profilecontents/dashboard';

function PracticeApp() {
  const [schedule, setSchedule] = useState([]);
  const {tab} = useParams();

  const addToSchedule = (event) => {
    setSchedule([...schedule, event]);
  };

  return (
    <div>
      <h2>My Schedule</h2>
      <ul>
        {schedule.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>

      <br />
      <h3>Add Event</h3>
      <input type="text" placeholder="Event name" id="event" />
      <br />
      <button onClick={() => addToSchedule(document.getElementById('event').value)}>
        Add
      </button>
      <div>
        {tab === 'hehe' && <DashboardUser/>}
        {tab === 'heher' && 'not available'}
      </div>
    </div>
  );
}




export default PracticeApp;

