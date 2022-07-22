import React from 'react'
import { Header } from '../pages/Header/Header'
import Features from '../pages/Features/Features'
import Footer from '../pages/Footer/Footer';
import { Route,Routes } from "react-router-dom" ;

import Home from '../pages/Home/Home';
import SideNavbar from '../pages/SideNav/SideNavbar';
import Timesheet from '../pages/TimeSheet/Timesheet';
import Dasboard from '../pages/Dasboard/Dasboard';

const Router = () => {
  return (
    <div>

        <Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/features' element={<Features/>}/>



  <Route path='/sidenav' element={<SideNavbar/>}>
<Route path='timesheet' element={<Timesheet/>}/>

<Route path='deshboard' element={<Dasboard/>}/>


  </Route>
</Routes>
        
<Footer/> 
       
{/* 
<Switch>
        <Route path="/" exact>
          <Header />
          <Home />
          <Footer />
        </Route>
</Switch> */}

    </div>

  )
}
  

export default Router