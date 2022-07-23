import React from 'react'
import TimeHeader from '../TimeHeader/TimeHeader'
import style from './project.module.css'

const Tags = () => {
  return (
    <div className={style.tags_main}>
        <TimeHeader heading={'Tags'}/>
            <div className={style.tags}>
                Tags
                
            </div>
    </div>
  )
}

export default Tags