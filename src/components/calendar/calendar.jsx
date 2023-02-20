import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './calendar.css';
import Time from './time.jsx'

function MyCalendar() {
 
const [date, setDate] = useState(new Date());
const [showTime, setShowTime] = useState(false) 

console.log(showTime)

 return (
 <div className='app'>
   
   <div>
    <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
   </div>
  
   {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
          ) : (
   <p>
      <span>Default selected date:</span>{date.toDateString()}
   </p> 
          )
   }
   <Time showTime={showTime} date={date}/>

 </div>
  )
}

export default MyCalendar;