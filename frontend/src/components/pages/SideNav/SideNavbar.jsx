import React from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import "./SideNavbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineDashboard } from "react-icons/ai";
import { FaRegCalendarAlt, FaSearchPlus } from "react-icons/fa";

import { GrPieChart, GrPersonalComputer } from "react-icons/gr";
import { BsChevronRight , BsTags, BsPeople, BsBarChart} from "react-icons/bs";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoMdTime } from "react-icons/io";
import { BiBorderAll } from "react-icons/bi";

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
              {/* start */}
              <ul className="dropdown_tow">
              <p className="ana-para"> Time Reports </p>
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
                  <FaSearchPlus />
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


              </ul>


              {/* end */}
            </li>
            <li className="dashboard">
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
            </li>
            <li className="dashboard">
              <Link to="#" className="dash">
                <span className="spanright">
                  <GrPersonalComputer />
                </span>{" "}
                <p> Computer Time </p>{" "}
                <span className="spanleft">
                  <BsChevronRight />
                </span>
              </Link>
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
          </ul>
          
        </div>
      </nav>
    </div>
  );
}