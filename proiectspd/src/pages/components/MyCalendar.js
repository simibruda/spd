import React,{useState , useEffect} from 'react'
import Calendar from 'react-calendar'; 
import './MyCalendar.css';
import 'react-calendar/dist/Calendar.css';

function MyCalendar({setDat}) {
    const [date, setDate] = useState(new Date());
   useEffect(() => {
    setDat(date.toDateString());
   });

    return (
     <div className="MyCalendar">
       <h1 className="header">React Calendar</h1>
       <div className="calendar-container">
         <Calendar onChange={setDate} value={date}/>
       </div>
       
     </div>
      )
    
    }

export default MyCalendar
