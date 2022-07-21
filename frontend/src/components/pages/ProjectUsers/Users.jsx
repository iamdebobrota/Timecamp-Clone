import React from "react";
import styles from "../ProjectUsers/users.module.css"

const Users = () => {
  return (
    <div>
      <div>

      </div>
      <div  className={styles.usersAlertDiv} id="users-alert" role="alert">
      <i style={{fontSize:'26px', cursor: 'pointer'}} className="fa fa-user-plus" aria-hidden="true"></i>
      
        You can now invite guests like clients, vendors, or contractors. You can
        add them free of charge. {" "}
        <a className="track-click ng-scope">
          <b style={{cursor: 'pointer', color:"#6393f8", marginLeft:'-40px'}} className="ng-binding">Invite guest</b>
        </a>
      </div>


      
    </div>
  );
};

export default Users;
