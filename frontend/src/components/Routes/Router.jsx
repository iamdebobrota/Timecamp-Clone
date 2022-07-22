import React from 'react'
import { Header } from '../pages/Header/Header'
import Features from '../pages/Features/Features'
import Footer from '../pages/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import  { Homepage } from '../pages/HomePage/Homepage';
import SideNavbar from '../pages/SideNav/SideNavbar';

const Router = () => {
  return (
    <div>

        {/* <Header/> */}
<Routes>
  <Route path='/' element={<Homepage/>} />
  <Route path='/features' element={<Features/>}/>
  <Route path='/timesheet' element={<SideNavbar/>}/>
</Routes>
        
        {/* <Footer/> */}
    </div>

  )
}
  

export default Router