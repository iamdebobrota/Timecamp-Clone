import React from 'react'
import { Header } from '../pages/Header/Header'
import Features from '../pages/Features/Features'
import Footer from '../pages/Footer/Footer'
import { Route, Routes, Switch } from 'react-router-dom';
import  { Homepage } from '../pages/HomePage/Homepage';
import SideNavbar from '../pages/SideNav/SideNavbar';
import Timesheet from '../pages/TimeSheet/Timesheet';
import Dashboard from '../pages/Dashboard/Dashboard';
import Users from '../pages/UserPage/Userpage';
import ProjectPage from '../pages/Projectpage/ProjectPage';
import Tags from '../pages/Projectpage/Tags';

const Router = () => {
  return (
    <div>

        {/* <Header/> */}
<Routes>
  <Route path='/' element={<Homepage/>} />
  <Route path='/features' element={<Features/>}/>
  {/* <Switch> */}
  <Route path='/app' element={<SideNavbar/>}>
    {/* <SideNavbar/> */}
  {/* <Timesheet/> */}
<Route path='' element={<Timesheet/>} />
<Route path='deshboard' element={<Dashboard/>} />
<Route path='users' element={<Users/>} />
<Route path='projects' element={<ProjectPage/>} />
<Route path='tags' element={<Tags/>} />
 
 
  </Route>

  {/* </Switch> */}


</Routes>
        
        {/* <Footer/> */}
    </div>

  )
}
  

export default Router