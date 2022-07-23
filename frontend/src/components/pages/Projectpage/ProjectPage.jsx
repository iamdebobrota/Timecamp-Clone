import React from 'react'
import TimeHeader from '../TimeHeader/TimeHeader'
import style from './project.module.css'

const ProjectPage = () => {
  return (
<div className={style.project_main}>
    <TimeHeader heading={'Projects'}/>
    <div className={style.project}>
      ProjectPage
      </div>

    </div>
  )
}

export default ProjectPage