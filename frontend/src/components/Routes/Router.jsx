import React from 'react'
import { Header } from '../pages/Header/Header'
import Features from '../pages/Features/Features'
import Footer from '../pages/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Router = () => {
  return (
    <div>

        <Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/features' element={<Features/>}/>
</Routes>
        
        <Footer/>
    </div>

  )
}
  

export default Router