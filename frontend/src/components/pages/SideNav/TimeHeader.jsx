import React from 'react'

import "./Timeheader.scss";
import { Link } from 'react-router-dom';
import { FaHourglassStart , FaBullhorn} from 'react-icons/fa';
import { IoSettingsOutline , IoPersonCircle} from "react-icons/io5";
import { BsQuestionCircle , BsChat, BsBook} from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GoCreditCard,GoGift } from "react-icons/go";
import { ImInfo } from "react-icons/im";
import { BiHeart } from "react-icons/bi";




function TimeHeader() {
  return (
    <div>
        <header className='header' >

        <div className="center">
            <div className='icons'><FaHourglassStart/></div>


            <b className='bold'>10 Days </b> <p className='para1'> left in your Pro trial</p>
            <Link to="#" className='subscribebtn'>Subscribe to Pro</Link>{" "}
            <Link className="bookdemo" to="#">Book a Demo</Link>

        </div>
     
       

        </header>
        <hr />

        <div className="secondheader">
           <p className='btime'>Timesheet</p>
           <ul className='right-icons'>
                <li className="setting"><IoSettingsOutline/>
                {/* dropdown start */}
                <ul className='firstdropdwon'>
                <li> <Link className='bellowsetting' to="#"><IoSettingsOutline/><p className='ptag'>Setting</p></Link></li>
                <li > <Link className='integration' to="#"><div className='first'><IoSettingsOutline/></div> <div className='second'> <span><IoSettingsOutline/></span> <span><IoSettingsOutline/></span></div><p className='ptag'>Integration</p></Link></li>
                <li> <Link className='bellowsetting' to="#"><GoCreditCard/><p className='ptag'>Billing</p></Link></li>
             
                </ul>
                </li>

                {/* second dropdown  */}
                <li className="questionmarks"><BsQuestionCircle/>
                   <ul className='secondDropdown'>
                   <p className='suportpara'>SUPPORT</p>
                   <li> <Link className='support' to="#"><ImInfo/><p className='ptag'>Help</p></Link></li>
                   <li> <Link className='support' to="#"><BsBook/><p className='ptag'>Knowledge base</p></Link></li>
                   <li> <Link className='support' to="#"><BsChat/><p className='ptag'>Send feedback</p></Link></li>
                   <li> <Link className='support' to="#"><BiHeart/><p className='ptag'>Become a Partner</p></Link></li>
                   <hr />
                   <p className='prodpara'>PRODUCT UPDATES</p>
                   <li> <Link className='support' to="#"><GoGift/><p className='ptag'>What's new</p></Link></li>
                   <li> <Link className='support' to="#"><FaBullhorn/><p className='ptag'>Suggest a feature</p></Link></li>
                   </ul>
                
                </li>
                <div className="user"><FaRegUser/></div>
                {/* <div className='plus'>+</div> */}
                
           </ul>
           <div className='plus'>+</div>
                <div className="contact"><IoPersonCircle/></div>


        </div>
        <hr />

    </div>
  )
}






















export default TimeHeader