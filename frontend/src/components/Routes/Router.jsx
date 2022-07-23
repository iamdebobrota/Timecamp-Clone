import React from 'react'
import { Header } from '../pages/Header/Header'
import Features from '../pages/Features/Features'
import Footer from '../pages/Footer/Footer'
import { Route, Routes, Switch } from 'react-router-dom';
import  { Homepage } from '../pages/HomePage/Homepage';
import SideNavbar from '../pages/SideNav/SideNavbar';
import Timesheet from '../pages/TimeSheet/Timesheet';

const Router = () => {
  return (
    <div>

        {/* <Header/> */}
<Routes>
  <Route path='/' element={<Homepage/>} />
  <Route path='/features' element={<Features/>}/>
  {/* <Switch> */}
  <Route exact path='/signin' >
    {/* <SideNavbar/> */}
  {/* <Timesheet/> */}
{/* <Route path='/timesheet' element={<Timesheet/>} /> */}
  </Route>

  {/* </Switch> */}


</Routes>
        
        {/* <Footer/> */}
    </div>

  )
}
  

export default Router