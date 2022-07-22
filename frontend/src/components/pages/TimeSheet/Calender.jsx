import React,{ useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style.css";

export default function Form() {
  const [selectDate, setSelectDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");


  const onChange = (value) => {
    setSelectDate(value);
    var date = new Date(value),
      dayOfDate = ("0" + date.getDate()).slice(-2),
      month = ("0" + (date.getMonth() + 1)).slice(-2);
    setSelectedDate([dayOfDate, month, date.getFullYear()].join("-"));
  };
  return (
    <>
      <div className="container_calender_main">
        <div className="justify-content-center col-6">
      
            {/* <div className="form-floating mb-3"> */}
              <div className="react-calendar">
                <Calendar onClickDay={onChange} value={selectDate} required  className='calender_itself'/>
              </div>
            {/* </div> */}
        
          {/* <h5 className="card-title">Date : {selectedDate}</h5> */}

        </div>
      </div>
    </>
  );
}
