import React from 'react'
import TimeHeader from '../TimeHeader/TimeHeader'
import style from './user.module.css'

const Userpage = () => {
  return (
    <div className={style.userpage}>
      <TimeHeader heading={'Userpage'}/>
      <div className={style.user_main}>

      Userpage
      </div>
      
      </div>
  )
}

export default Userpage