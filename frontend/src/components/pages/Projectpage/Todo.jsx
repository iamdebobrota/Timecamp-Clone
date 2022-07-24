import React from "react";
import style from "./project.module.css";
import ShowTodo from "./ShowTodo";
import { useState } from "react";
export default function Todo() {
  const [task, setTask] = useState("Enter your task");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = task;
    setData([...data, newData]);
    setTask("");
  };

  return (
    <div>
      {/* ************* */}
      <div className="todo">
        <form onSubmit={handleSubmit} style={{display:"flex"}}>
          <input
            className={style.intputtag}
            placeholder="New list name"
            type="text"
            name=""
            id=""
            value={task}
            onChange={handleChange}
          />
          <div>
            <button type="submit" className={style.addtodobtn}>
              Add
            </button>
          </div>
        </form>

        {data.map((item, index) => {
          return (
            <div>
              <ShowTodo key={index} id={index} newTask={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
