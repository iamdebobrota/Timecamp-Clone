import React, { useState } from 'react';
import {Form, val} from './Calender';
import style from './timesheet.module.css'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { BiCalendar } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import { FiRefreshCcw, FiEdit } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./style.css";





const Timesheet = () => {

  const [user, setuser] = useState(false)

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
  }
  let today=[]
  for(let i=0;i<array.length-1;i++){
    if(date===i){
      today.push(array[i]);
    }
  }
  for(let i=0;i<months.length-1;i++){
    if(mon===i){
      today.push(",",months[i]);
    }
  }
  

const userClick=()=>{
  !user?
  setuser(true) : setuser(false)
}


  return (
    <div className={style.t_main}>
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
<div className={`${style.refresh} ${style.user}`} 
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