import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../ProjectUsers/users.module.css"
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const [user,setUser] = useState("")
  const [newUserForm, setNewUserForm] = useState(false)
  const [addUser,setAddUser] = useState({})
  const [data,setData] = useState([]);

  const userid = JSON.parse(localStorage.getItem("userid"))
  // console.log(userid)

  useEffect(()=>{
    findUser();
    getUsers();
    if(!userid){
      navigate('/auth/login')
    }
  },[userid])


  const findUser =()=>{
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
      console.log('loggedInUser: ', loggedInUser);
      // console.log(loggedInUser)
      let email = loggedInUser.email
      let emailName = email.split("@")
      emailName = emailName[0]
      setUser(emailName)
  }


  const addNewUsers=()=>{
    setNewUserForm(!newUserForm)
  }

  const getUsers = () => {
    fetch(`https://timecampclone.herokuapp.com/projectusers/${userid}/projectusers`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log('res in getUsers: ', res);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setAddUser({
      ...addUser,
      [name]: value,
    });
  };

  // console.log('data',data)

  const handleAddUser = (e) => {
    e.preventDefault();
    let payload = JSON.stringify(addUser);
    console.log('addUser: ', addUser);
    fetch(`https://timecampclone.herokuapp.com/projectusers/${userid}/projectusers`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res: ", res);
        getUsers();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteUser=()=>{
    
  }

  return (
    <div className={styles.parentUsersDiv} >
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
                        <span style={{fontWeight:'550'}}>People ( {data.length+1} users )</span>
                    </div>

                      <div>
                          <button  className={styles.mailBtn}>
                          <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                      </div>

                      <div>
                          <button onClick={addNewUsers} className={styles.mailBtn}>
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
                          <button  className={styles.mailBtn}>
                          <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                      </div>

                      <div>
                          <button className={styles.mailBtn}>
                          <i className="fa-regular fa-trash-can"></i>
                          </button>
                      </div>
                  </div>

                  <div className={styles.userHeaderWrapperSecond}>
                      {" "}
                  </div>

              </div>
              { newUserForm && 
                <div className={styles.addNewUsersDiv}>
                    <div className={styles.inviteUsersHeadingDiv}>
                        <div className={styles.inviteName} >Invite Users</div>
                        <div style={{cursor: 'pointer'}}><i onClick={()=> setNewUserForm(!newUserForm)}  style={{fontSize:'30px'}} className="fa-solid fa-xmark"></i></div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div style={{fontSize:'16px',fontWeight:'600'}}  >Each person's email address:</div>
                    <div className={styles.inviteUsersHeadingDiv}>
                      <span>Each person will receive an email with their login information and a link to your account</span>
                      <span>{"    "}</span>
                      <span>Guest</span>
                    </div>

                    <div style={{ marginTop:'10px'}} className="input-group mb-3">
                      <span className="input-group-text">1</span>
                      <input name="email" onChange={handleChange} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                      <span className="input-group-text">
                        <input type="checkbox" />
                      </span>
                    </div>

                    <div style={{fontSize:'16px',fontWeight:'600'}}>Project assignment:</div>
                    <div style={{marginTop:'5px'}}>
                        <button className={styles.inviteBtn}>
                            <span>Add project</span>
                        </button>
                    </div>
                    <div style={{marginTop:'15px'}}>
                      <input type="checkbox" />
                      <span>{" "}</span>
                      <span style={{marginLeft:'15px'}}>Add new users to all projects</span>
                    </div>

                    <div style={{fontSize:'16px',fontWeight:'600', marginTop:'15px'}}  >Which user group should they belong to?</div>
                    <select defaultValue="people" className="form-select" aria-label="Default select example">
                      <option>People</option>
                    </select>
                    <div style={{fontSize:'16px',fontWeight:'600', marginTop:'15px'}}  >Which superpowers, if any, should they have?</div>
                    
                    <div style={{marginTop:'15px'}}>
                      <input type="checkbox" />
                      <span>{" "}</span>
                      <span style={{marginLeft:'15px'}}>Can manage all invoices, rates, projects (Time Tracking Administrator)</span>
                    </div>
                    <div style={{marginTop:'15px'}}>
                      <input type="checkbox" />
                      <span>{" "}</span>
                      <span style={{marginLeft:'15px'}}>Can manage all invoices, rates</span>
                    </div>
                    <div style={{marginTop:'15px'}}>
                      <input type="checkbox" />
                      <span>{" "}</span>
                      <span style={{marginLeft:'15px'}}>Can create new projects</span>
                    </div>

                    <div className={styles.inviteUsersHeadingDiv}>
                        <div >Invite users by link</div>
                        <div >Invite multiple users at once</div>
                        <div>
                            <button onClick={()=> setNewUserForm(!newUserForm)} className={styles.createGrpBtn}>
                              <span>Cancel</span>
                            </button>
                        </div>
                        <div>
                            <button onClick={handleAddUser} className={styles.inviteBtn}>
                                <i className="fa-solid fa-plus"></i>
                                {"     "}<span>Invite users</span>
                            </button>
                        </div>
                    </div>

                </div>
              }

              { data.map((el,index)=>{
                return(
                      <div key={index} className={styles.userHeaderWrapperInUsersData} id="users-alert" role="alert">
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
                                    <span style={{fontWeight:'550'}}>{el.email}</span>
                                </div>

                                  <div>
                                      <button className={styles.mailBtn}>
                                      <i className="fa-regular fa-pen-to-square"></i>
                                      </button>
                                  </div>

                                  <div>
                                      <button onClick={handleDeleteUser} className={styles.mailBtn}>
                                      <i className="fa-regular fa-trash-can"></i>
                                      </button>
                                  </div>
                              </div>

                              <div className={styles.userHeaderWrapperSecond}>
                                  {" "}
                              </div>

                        </div>
                )
              })
              
              
              
              }

          </div>
      </div>
      {/* usersData div ended */}

      <div className={styles.bultEditMainDiv} >
        <div className={styles.bulkEditFirst} >
             <button className={styles.createGrpBtn}>
                    <span>Bulk Edit</span>{"     "}
                    <i className="fa-solid fa-angle-down"></i>
              </button>

              <button style={{marginLeft:'2rem'}} className={styles.inviteBtn}>
                    <span >Apply</span>
              </button>
        </div>
        <div className={styles.bulkEditSecond}>
          <input type="checkbox" />{" "}
          <span>Hide disabled users from lists in reports</span>
        </div>
      </div>
      
    </div>
  );
};

export default Users;
