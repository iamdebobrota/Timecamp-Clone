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

      <div  className={styles.userHeaderWrapper} id="users-alert" role="alert">
        <div className={styles.userHeaderWrapperFirst} >
            <div>
                <button className={styles.inviteBtn}>
                    <i className="fa-solid fa-plus"></i>
                    {"     "}<span>Invite people</span>
                </button>
            </div>

            <div>
                <button className={styles.createGrpBtn}>
                  <span>Create group</span>
                </button>
            </div>

            <div>
                <button className={styles.mailBtn}>
                    <i className="fa-regular fa-envelope"></i>
                </button>
            </div>

            <div style={{padding: '0.5rem 0',fontSize:'14px' }}>
                <span>1 / 100 Users</span>
            </div>

            <div style={{padding: '0.5rem 0',fontSize:'14px' }}>
                <a style={{textDecoration:'underline',color:'#646efb'}}>Change number of seats</a>
            </div>

        </div>

        <div className={styles.userHeaderWrapperSecond}>

        </div>
      </div>


      
    </div>
  );
};

export default Users;
