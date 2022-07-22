import React from 'react';
import Form from './Calender';
import Cal from './Calender';
import style from './timesheet.module.css'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { BiCalendar } from 'react-icons/bi';
const Timesheet = () => {
  return (
    <div className={style.timesheet_main}>
  {/* <Form/> */}
   <hr />

   <div className={style.left_div}>
<GrFormPrevious className={style.prev_btn}/>

<BiCalendar className={style.cal_btn}/>
<GrFormNext className={style.next_btn}/>

   </div>
   
    </div>
  )
}

export default Timesheet