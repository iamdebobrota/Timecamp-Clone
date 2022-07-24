import React from 'react'

function ShowTodo(props) {
  return (
    <div>
        
        <div style={{
            height:"70px",
            width:"276px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius:"10px",
            marginRight:"100px",
            marginTop:"8px",
            
            
        }}><p style={{
            padding:"8px 14px 8px 14px"
        }}>{props.newTask}</p></div>

    </div>
  )
}

export default ShowTodo