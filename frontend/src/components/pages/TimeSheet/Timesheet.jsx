import React, { useState } from 'react';
import {Form, val} from './Calender';
import style from './timesheet.module.css'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { BiCalendar } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';

// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./style.css";





const Timesheet = () => {

  // const [date, setDate] = useState(new Date())

const [show, setShow] = useState(false)

const current = new Date();
const date = current.getDay();
const mon=current.getMonth();
const year= current.getFullYear()

let array=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// setShow(false)
  const handleClick=()=>{
    show===false ? setShow(true) : setShow(false)
    
    // console.log(date);

   
  }

  let today=[]
  for(let i=0;i<array.length-1;i++){
    if(date===i){
      today.push(array[i]);
    }
  }
  // let today=[]
  for(let i=0;i<months.length-1;i++){
    if(mon===i){
      today.push(",",months[i]);
    }
  }

// let y= year
//   console.log(y);

  return (
    <div className={style.timesheet_main}>
  {/* <Form/> */}
  {
    show ? <Form/> : undefined
  }
 
<div className={style.timesheet}>
   <div className={style.left_div}>
      <GrFormPrevious className={style.prev_btn}/>
      <BiCalendar  className={style.cal_btn_1} onClick={()=> handleClick() } />
     {show ? < AiOutlineUp className={style.cal_btn} onClick={()=> handleClick() } /> : <AiOutlineDown  className={style.cal_btn} onClick={()=> handleClick() }/>
}  <GrFormNext className={style.next_btn}/>


   </div>
   <h1 className={style.date_year}>{[today," ", year]}</h1>


   </div>





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