import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

const time = ['08:00','09:00','10:00','13:00','14:00','15:00']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 <div>
 <div className="times d-flex justify-content-start">
   {time.map(times => {
    return (
    <div className=''>
      <button className='btn btn-dark' onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}
 </div>
 <div>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </div>
 </div>
  )
}

export default Times;