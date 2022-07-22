import React from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import "./SideNavbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineDashboard ,AiOutlinePieChart, AiOutlineApartment} from "react-icons/ai";
import { FaRegCalendarAlt,  FaRegMoneyBillAlt } from "react-icons/fa";

import { GrPieChart, GrPersonalComputer } from "react-icons/gr";
import { BsChevronRight , BsTags, BsPeople, BsBarChart,BsZoomIn} from "react-icons/bs";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoMdTime } from "react-icons/io";
import { BiBorderAll , BiPointer} from "react-icons/bi";
import { MdPeopleOutline,MdOutlineDone , MdOutlineAttachMoney} from "react-icons/md";
import { GoListUnordered } from "react-icons/go";
import { RiSignalTowerLine } from "react-icons/ri";
import { TbRocket,TbMicrophone2 } from "react-icons/tb";


// A <span>›> </span>

export default function SideNavbar() {
  return (
    <div>
      {/* <Link to='#' className='menu-bars'>hello</Link> */}
      <nav className="main-nav">
        <div className="logo-image">
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorLogo.svg"
            height={"50px"}
            alt="" className="logoimg"
          />
          <div className="closer">
            <AiOutlineLeft />
          </div>
          {/* <span  className="mainarrow">› </span> */}
        </div>

        <hr />
          {/* ///////////////// */}
        <div className="track">
        <p className="ana-para">TRACK</p>
          <ul>
            <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <IoMdTime />
                </span>{" "}
                <p>TimeSheet </p>
              </Link>
            </li>
          </ul>

        </div>
        {/* //////////////////// */}
        <hr />
{/*  dropdown */}
        <div className="analize">
          <p className="ana-para">ANALYZE</p>
          <ul>
            <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <AiOutlineDashboard />
                </span>{" "}
                <p>Dashboard </p>
              </Link> 
            </li>
            <li className="dashboard" id="clickhere">
              <Link to="#" className="dash">
                <span className="spanright">
                  {" "}
                  <GrPieChart />
                </span>{" "}
                <p>Reports </p>{" "}
                <span className="spanleftgr">
                  <BsChevronRight />
                </span>
              </Link>

              {/* start */}

              <ul className="dropdown_tow">
              <p className="ana-para"> TIME REPORTS </p>
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <BsBarChart />
                </span>{" "}
                <p>Summary </p>
              </Link>
              </li>
              {/* /1 */}
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <BsZoomIn />
                </span>{" "}
                <p>Detailed</p>
              </Link>
            </li>
            {/* 2 */}
            <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <FaRegCalendarAlt />
                </span>{" "}
                <p>By days  </p>
              </Link>
            </li>
            {/* 3 */}
            <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <BiBorderAll />
                </span>{" "}
                <p>Costom</p>
              </Link>
            </li>
            {/* 4 */}
              <hr />
            <p className="ana-para"> PEOPLE REPORTS </p>
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <MdPeopleOutline />
                </span>{" "}
                <p>People by tasks </p>
              </Link>
              </li>
              {/* 5 */}
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <MdPeopleOutline />
                </span>{" "}
                <p>People by tasks </p>
              </Link>
              </li>
              {/* 6 */}
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <MdPeopleOutline />
                </span>{" "}
                <p>People by days</p>
              </Link>
              </li>
              {/* 7 */}
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <MdPeopleOutline />
                </span>{" "}
                <p>People by projects</p>
              </Link>
              </li>
                  {/* budgeting reports 8 */}

                  <hr />
              <p className="ana-para"> BUDGETING REPORTS </p>
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <FaRegMoneyBillAlt />
                </span>{" "}
                <p>Billable,unbillable,invoiced</p>
              </Link>
              </li>
              {/* 9 */}
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <GoListUnordered />
                </span>{" "}
                <p>Estimates</p>
              </Link>
              </li>
              {/* 10 */}
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <MdOutlineAttachMoney />
                </span>{" "}
                <p>Revenues</p>
              </Link>
              </li>
              {/* 11 */}
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <MdOutlineAttachMoney />
                </span>{" "}
                <p>Costs</p>
              </Link>
              </li>
              {/* 12 */}
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <MdOutlineAttachMoney />
                </span>{" "}
                <p>Margin</p>
              </Link>
              </li>
              {/* 13 */}
              <hr />

              <p className="ana-para"> BUDGETING REPORTS </p>
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <AiOutlineDashboard />
                </span>{" "}
                <p>Real-time dashboard</p>
              </Link>
              </li>

              
              


              </ul>


              {/* end */}
            </li>


            <li className="dashboard" id='computer_t'>
              <Link to="#" className="dash">
                <span className="spanright">
                  <GrPersonalComputer />
                </span>{" "}
                <p> Computer Time </p>{" "}
                <span className="spanleft">
                  <BsChevronRight />
                </span>
              </Link>
              {/* second drop down******************************  */}
              <div className="computerdropdown">
              <ul>

              <p className="ana-para"> COMPUTER TIME REPORTS </p>
              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <TbMicrophone2 />
                </span>{" "}
                <p>Away time</p>
              </Link>
              </li>

              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <BiPointer />
                </span>{" "}
                <p>Activities</p>
              </Link>
              </li>


              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <AiOutlineApartment />
                </span>{" "}
                <p>Categories</p>
              </Link>
              </li>


              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <FaRegCalendarAlt />
                </span>{" "}
                <p>Timeline</p>
              </Link>
              </li>

              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <TbRocket />
                </span>{" "}
                <p>Goals</p>
              </Link>
              </li>


              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <RiSignalTowerLine />
                </span>{" "}
                <p>Efficiency</p>
              </Link>
              </li>

              <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <AiOutlinePieChart />
                </span>{" "}
                <p>User statistics</p>
              </Link>
              </li>
              </ul>
              </div> 


              {/* end second drop down  */}




            </li>
          </ul>
        </div>
        {/* dropdown */}
        <hr />

        <div className="manage">
          {/* /////////////////////////// */}
          <p className="ana-para">MANAGE</p>
          <ul>
            <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <VscFileSubmodule />
                </span>{" "}
                <p>Projects </p>
              </Link>
            </li>

            <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <BsTags />
                </span>{" "}
                <p>Tags </p>
              </Link>
            </li>
          
           
          </ul>

          {/* ///////////////////// */}
        </div>
        <hr />

        <div className="team">

        <p className="ana-para">TEAM</p>
          <ul>
            <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <BsPeople />
                </span>{" "}
                <p>Users </p>
              </Link>
            </li>
            <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <MdOutlineDone />
                </span>{" "}
                <p>Attandance </p>
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
}