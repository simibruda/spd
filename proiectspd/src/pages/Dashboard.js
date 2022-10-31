import React,{useState , useEffect} from 'react';
import Calendar from 'react-calendar'; 
import DashboardList from './components/DashboardList';
import MyChart from './components/MyChart';
import './components/TodoList.css';
import './Dashboard.css';

function Dashboard() {
 
  const [date, setDate] = useState(new Date());
  const [datelist, setDatelist]=useState([]); 
const [countDates,setCountDates]=useState(0);
const[allDates,setAllDates]=useState(0)
  const dbdate={dates: new Date(date).getFullYear() + "-" + ("0" + (new Date(date).getMonth() + 1)).slice(-2) + "-" + ("0" + new Date(date).getDate()).slice(-2)};

  useEffect(()=>{
    fetch('/take_tasks_by_date', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(dbdate)
    }).then(response=>response.json()).then(data=>{
      setDatelist(data);
    })
  
  },[date]);
  console.log(countDates);

  
  return (
    <div>
      <Calendar onChange={setDate} value={date}/>
        <div className='TheListDB'>
          <div className='intemListDB'>
            <DashboardList 
            todos={datelist}
            setCountDates={setCountDates}
            setAllDates={setAllDates}/>
          </div>
          <h1 style={{right:"200px"}}>Tasks {date.toDateString()}</h1>
      <div className='chartRight'>
        
          <MyChart doneTask={countDates}
          inProgress={Math.abs(allDates-countDates)}
          />
      </div>
    </div>
    </div>
  )
}

export default Dashboard
