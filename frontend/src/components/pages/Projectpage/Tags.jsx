import React from "react";
import { useState } from "react";
import TimeHeader from "../TimeHeader/TimeHeader";
import style from "./project.module.css";
import Todo from "./Todo";


const Tags = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle]= useState(true);

  return (
    <div className={style.contatiner}>
      <div className={style.tags_main}>
        <TimeHeader heading={"Tags"} />
        <div className={style.tags}>
          <button className={style.tagbtn} onClick={()=>setToggle(!toggle)} >+Add tag list</button>
          {/* Tags */}
          <p className={style.tagpara}>
            Manage your tags, like list of customers or activities. All
            workspace members can assign tags to time entries, when they track
            time. Project managers can set lists of tags for projects. Reports
            can be filtered and grouped by tags.
          </p>

          <button className={style.showhidebtn}>
            {show ? "Show archived tags" : "Hide archived tags"}
          </button>
{/* ************* */}
            {
              toggle?<div><Todo/></div>: null
            }

            

            {/* *************** */}
          <hr className={style.hrtag} />
          <div className="dividerbtn">
            <button className={style.savebtn}>Save Setting</button>
            <button className={style.backbtn}>Back Addons list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;