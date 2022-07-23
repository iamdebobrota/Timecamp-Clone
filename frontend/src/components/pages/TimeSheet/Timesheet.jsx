import React, { useState } from 'react';
import {Form, val} from './Calender';
import style from './timesheet.module.css'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { BiCalendar } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import { FiRefreshCcw, FiEdit } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import { BsThreeDotsVertical, BsFillStopFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaUserCircle, FaRegCopy, FaHistory } from 'react-icons/fa';
import { BsFillPlayFill, BsPlusLg, BsTags } from 'react-icons/bs';
import SetInterval_TitleChange from './SetInterval&TitleChange';

import { getTimeInString, getTimeInStringWithoutHr } from "./getTimeInString";
import TimeHeader from '../TimeHeader/TimeHeader';
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./style.css";





const Timesheet = () => {

  const [user, setuser] = useState(false)
const [show, setShow] = useState(false)
const [tabs, setTabs] = useState(false)
const [count, setCount] = useState(1)


const current = new Date();
const date = current.getDay();
const mon=current.getMonth();
const year= current.getFullYear()

let array=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// setShow(false)
  const handleClick=()=>{
    show===false ? setShow(true) : setShow(false)
    
  }
  let today=[]
  for(let i=0;i<array.length;i++){
    if(date===i){
      today.push(array[i]);
    }
  }
  for(let i=0;i<months.length-1;i++){
    if(mon===i){
      today.push(",",months[i]);
    }
  }
  
// console.log(today);

const userClick=()=>{
  !user?
  setuser(true) : setuser(false)
}

var todays = new Date(),

todays = todays.getHours() + ':' + todays.getMinutes();

// console.log(todays);





let time= ["1 am", "2 am","3 am","4 am","5 am","6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm","10 pm","11 pm"]

// TIMER APPY

let initial=0;
let end=200000;

const [isRunning, setIsRunning] = React.useState(false);
const [times, setTime] = React.useState(initial);
const [showTime, setShowTime]=useState([])
const timer = React.useRef();
const timeout = React.useRef();

const startTimerInterval = () => {
  if (isRunning) {
    return null;
  }
  timer.current = setInterval(() => {
    setTime((prev) => prev + 1);
    setIsRunning(true);
    setTabs(true)

  }, 1000);
  setCount(count+1)

 
};

if (isRunning && end == time) {
  clearInterval(timer.current);
}
const stopTimer = () => {
  setShowTime(times)
  clearInterval(timer.current);
  clearTimeout(timer.current)
  // setTime(0)
  setIsRunning(false);


  if(count%2===1){
    setShowTime([count+1])
    // console.log("HELLO",count);

  }

  // console.log("showTime", showTime);
};


// document.title = getTimeInString(time);
React.useEffect(() => {
  return () => stopTimer();
}, []);


const addmanually=()=>{
  getTimeInString(10000)
}

// 



// TIMER TABS FEATURS IMPLEMENTS
const [selectTask, setSelectTask]=useState(false)
const [inp, setInp]= useState('')
const selectTaskHandle=()=>{
  selectTask ? setSelectTask(false):  setSelectTask(true)
}

const inpHandle=(e)=>{
let inn= e.target.value
setInp(inn)
}
  // setSelectTask(false)
const handleDelete=()=>{
  setTabs(false)
}




  return (
    <div className={style.t_main} >
<TimeHeader/>


    <div className={style.timesheet_main}>
<div className={style.left}>
  <div className={style.cal}>
  {
    show ? <Form/> : undefined
  }
  </div>
 
 
<div className={style.timesheet}>
   <div className={style.left_div}>
      <GrFormPrevious className={style.prev_btn}/>
      <BiCalendar  className={style.cal_btn_1} 
      style={show ? {color:"green"} : {color:"grey"}}
      onClick={()=> handleClick() } />
     {show ? < AiOutlineUp className={style.cal_btn} 
      style={show ? {color:"green"} : {color:"grey"}}
     onClick={()=> handleClick() } /> : <AiOutlineDown  className={style.cal_btn} onClick={()=> handleClick() }/>
}  <GrFormNext className={style.next_btn}

/>


   </div>
   <h1 className={style.date_year}>{[today," ", year]}</h1>


   </div>
   </div>
{/* left end */}
<div className={style.right}>

<div className={style.day_cal}>
  <p>Day</p>
  <p>Calender</p>
</div>

<FiRefreshCcw  className={style.refresh}/>
<div className={`${style.refres} ${style.user}`} 
  onClick={()=> userClick() }
 style={user ? {color:"green", border:"1px solid green"} : {color:"grey"}}
 >
<FaRegUser className={style.user_logo}/>
<AiOutlineUp className={style.user_logo} />
</div>



<div className={style.bulkEdit}>
<FiEdit className={style.edit}/>
<p  className={style.edit1}>Bulk edit</p>
</div>

<BsThreeDotsVertical className={style.menu}/>


</div>
    </div>




    {
  user ? (
<div className={style.dropdown_main}>
<div className={style.userDorpdown}>
<input type="text"  placeholder='Seach...' />
<AiOutlineSearch className={style.AiOutlineSearch}/>
</div>
<p style={{ marginTop:"18px"}}>people</p>
<div style={{display:'flex', gap:"5px", marginTop:"12px"}}>
<FaUserCircle/>
<p style={{marginTop:"-4px", color:"grey"}}>debobrota - You</p>
</div>
</div>
  ) : undefined
}



<div className={style.task_project}>
<input type="text" placeholder='Select task and project'/>

<input type="text" placeholder='note'/>
<hr />

<div className={style.timer_show}>
{
  isRunning?
  // (getTimeInString(times))
  (getTimeInStringWithoutHr(times))
   : (
<button className={style.addManu} onClick={()=>addmanually}>Add manually</button>)

// {time}
}
</div>

{/* <button>START TIMER 
  <BsFillPlayFill className={style.start_Logo}/>
</button> */}

<button onClick={isRunning ? stopTimer : startTimerInterval} className={style.timer_btn}
 style={isRunning ? {backgroundColor:"red"} : {backgroundColor:"green"}}
>
        {isRunning ? "STOP TIMER" : "START TIMER" }
        {isRunning ? <BsFillStopFill  className={style.start_Logo} /> :  <BsFillPlayFill className={style.start_Logo} />  }

       
      </button>



</div>

{/* timer */}
<div className={style.timer}>
  {
    time.map((t)=>(
<div key={t}>
<div className={style.timer_P}>
  
{t}
<hr className={style.hr}/>
</div>
</div>
    ))
  }

</div>

{
  tabs ?  ( 
  <div className={`${style.dflex} ${style.timer_tab}`}>
            <div >
               <h3 className={style.task} 
               onClick={selectTaskHandle}>{inp.length>0 ? inp : "(select task)"} </h3>
    {selectTask ? <div className={style.hide_inp}>
      <input type="text" placeholder='Enter tasks name' 
       onChange={inpHandle}/>
       <p>Recent</p>
       <li>A</li>
    </div> : undefined}

                <div className={style.dflex}>
                      <BsTags/>
                      <p className={style.ftasak}>First select a task</p>
                </div>
          </div>
<div className={`${style.dflex} ${style.icons_hover}`}>
<BiCalendar  className={style.refresh}
      style={show ? {color:"green"} : {color:"grey"}}
      onClick={()=> handleClick() } />
<FaHistory  className={style.refresh}/>
<RiDeleteBin6Line  className={style.refresh} onClick={handleDelete}/>
</div>

          <input type="text"  placeholder='note' className={style.input} />
<div className={style.dis_flex}> 
          <p>{todays} 
          {
          today=== `11:59` ? "pm" : "am"
          }</p>
          <p>-</p>
          <p>{todays} 
          {
          today=== `11:59` ? "pm" : "am"
          }</p>
  </div>

      <p className={style.dis_flex}>{getTimeInStringWithoutHr(times)}</p>
              <button onClick={isRunning ? stopTimer : startTimerInterval} 
              className={style.pause_play}>
        {isRunning ? <BsFillStopFill  className={style.start_Logo} /> :  <BsFillPlayFill className={style.start_Logo} />  }

        </button>
</div> ) :
 (
  <div>
<img className={style.entri_Img} src="https://cdn.timecamp.com/res/css/images/timesheet-classic-empty-state.svg" alt="" />
<h1> No recent time entries </h1>
  <p>Seems like you haven’t tracked any time yet</p>
  </div>
)
}







<div className={style.plu_copy}>
<BsPlusLg className={style.plus} />
<FaRegCopy  className={style.copy}/>

<button className={style.show_more}>Show more days</button>
</div>


{/* <SetInterval_TitleChange init={0} end={100}/> */}


    </div>





  )
}

export default Timesheet










// import React,{ useState } from "react";


// function Form() {
//   const [selectDate, setSelectDate] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");


//   const onChange = (value) => {
//     setSelectDate(value);
//     var date = new Date(value),
//       dayOfDate = ("0" + date.getDate()).slice(-2),
//       month = ("0" + (date.getMonth() + 1)).slice(-2);
//     setSelectedDate([dayOfDate, month, date.getFullYear()].join("-"));
  
//   };


 
//   return (
//     <>
//       <div className="container_calender_main">
//         <div className="justify-content-center col-6">
      
//             {/* <div className="form-floating mb-3"> */}
//               <div className="react-calendar">
//                 <Calendar onClickDay={onChange} value={selectDate} required  className='calender_itself'/>
//               </div>
//             {/* </div> */}
        
//           {/* <h5 className="card-title">Date : {selectedDate}</h5> */}

//         </div>
//       </div>
//     </>
//   );
// }


// export default Form;