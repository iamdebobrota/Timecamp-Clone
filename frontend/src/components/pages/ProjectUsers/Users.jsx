import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../ProjectUsers/users.module.css"
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const [user,setUser] = useState("")

  const userid = JSON.parse(localStorage.getItem("userid"))

  useEffect(()=>{
    findUser(userid);
    if(!userid){
      navigate('/auth/login')
    }
  },[userid])
  const findUser =()=>{
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
      console.log(loggedInUser)
      let email = loggedInUser.email
      let emailName = email.split("@")
      emailName = emailName[0]
      setUser(emailName)
  }

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
        <input
            name="password"
            type="string"
            className="form-control"
            placeholder="Search users"
          />
        </div>
      </div>


      <div  className={styles.userHeaderWrapperBelow} id="users-alert" role="alert">
        <div className={styles.userHeaderWrapperFirst} >
            <div>
            GROUPS/USERS {" "}
            <span><i className="fa-solid fa-angle-down"></i></span>
            </div>
        </div>

        <div className={styles.userHeaderWrapperSecond}>
            <div>
                EXPAND ALL  {" "}
              <span><i className="fa-solid fa-angle-down"></i></span>
            </div>
            <div>
                EXTERNAL ID {" "}
                <span><i className="fa-solid fa-angle-down"></i></span>
            </div>
            <div>
                INVOLVED IN {" "}
                <span><i className="fa-solid fa-angle-down"></i></span>
            </div>
        </div>

        <div className={styles.userHeaderWrapperThird} >
            <div>
                ROLE{" "}
                <span><i className="fa-solid fa-angle-down"></i></span>
            </div>    
        </div>

      </div>

      <div className={styles.usersDataDiv}>
          <div style={{width:'100%'}}>
              <div className={styles.userHeaderWrapperInUsersData} id="users-alert" role="alert">
                <div style={{marginLeft:'2rem'}} className={styles.userHeaderWrapperFirstInUsersData} >

                    <div style={{padding: '0.5rem 0',fontSize:'14px' }}>
                        <input type="checkbox" style={{marginRight: '1rem'}} />
                    </div>


                    <div style={{padding: '0.5rem 0',fontSize:'14px' }}>
                        <span style={{fontWeight:'550'}}>People ( 1 user )</span>
                    </div>

                      <div>
                          <button className={styles.mailBtn}>
                          <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                      </div>

                      <div>
                          <button className={styles.mailBtn}>
                          <i className="fa-solid fa-plus"></i>
                          </button>
                      </div>
                  </div>

                  <div className={styles.userHeaderWrapperSecond}>
                      {" "}
                  </div>

              </div>


          </div>


          <div>
          <div  className={styles.userHeaderWrapperInUsersData} id="users-alert" role="alert">
                <div style={{marginLeft:'4.5rem'}}  className={styles.userHeaderWrapperFirstInUsersData} >
                      
                    <div style={{padding: '0.5rem 0',fontSize:'14px' }}>
                        <input type="checkbox" style={{marginRight: '1rem'}} />
                    </div>

                     <div>
                          <button style={{border:'none'}} className={styles.mailBtn}>
                            <i className="fa-regular fa-user"></i>
                          </button>
                      </div>

                    <div style={{padding: '0.5rem 0',fontSize:'14px' }}>
                        <span style={{fontWeight:'550'}}>{user}</span>
                    </div>

                      <div>
                          <button className={styles.mailBtn}>
                          <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                      </div>

                      <div>
                          <button className={styles.mailBtn}>
                          <i className="fa-solid fa-plus"></i>
                          </button>
                      </div>
                  </div>

                  <div className={styles.userHeaderWrapperSecond}>
                      {" "}
                  </div>

              </div>

          </div>
      </div>
      
    </div>
  );
};

export default Users;
