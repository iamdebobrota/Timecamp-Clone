import React from 'react'
import { Header } from '../pages/Header/Header'
import Features from '../pages/Features/Features'
import Footer from '../pages/Footer/Footer'
import { Route, Routes, Switch } from 'react-router-dom';
import  { Homepage } from '../pages/HomePage/Homepage';
import SideNavbar from '../pages/SideNav/SideNavbar';
import Timesheet from '../pages/TimeSheet/Timesheet';
import Dashboard from '../pages/Dashboard/Dashboard';
import Userpage from '../pages/UserPage/Userpage';

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
<Route path='users' element={<Userpage/>} />
 
 
  </Route>

  {/* </Switch> */}


</Routes>
        
        {/* <Footer/> */}
    </div>

  )
}
  

export default Router