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
  const [allCheckTask,setAllCheckTask]=useState(0);
  const [allTask,setAllTask]=useState(0);
  useEffect(()=>{
    fetch('/take_tasks', {
     method: 'post',
     headers: {'Content-Type': 'application/json'}
   }).then(response=>response.json()).then(data=>{
data.forEach(element => {
  setAllTask(prev=>prev+1);
  if(element.checked===1){
    setAllCheckTask(prev=>prev+1);
    
  }   
    });
    
   })   
   },[]);
  
  return (
    <div>
      <Calendar onChange={setDate} value={date}/>
     <h1 className='left-writing'>All tasks</h1>
      <div className='chart-left'>
          <MyChart doneTask={allCheckTask}
          inProgress={Math.abs(allTask-allCheckTask)}
          />
          </div>
        <div className='TheListDB'>
          <div className='intemListDB'>
            <DashboardList 
            todos={datelist}
            setCountDates={setCountDates}
            setAllDates={setAllDates}/>
          </div >
          </div>
         
      
          
     <h1 className='rigth-writing'>Tasks {date.toDateString()}</h1>
     <br />
      <div className='chart-right'>
     
          <MyChart doneTask={countDates}
          inProgress={Math.abs(allDates-countDates)}
          />
         
      </div>
      
   
    </div>
  )
}

export default Dashboard
