import React from "react";
import { FaApple, FaDownload, FaUbuntu, FaWindows } from "react-icons/fa";
import styled from "styled-components";
import TimeHeader from "../TimeHeader/TimeHeader";



const Wrap = styled.div`

  margin-left:300px;

`
const Wrapper = styled.div`
  width: 80%;
  margin-left:0px;
  margin-top: 80px;
  text-align: left;
  padding: 0 7%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Lato, Arial,
    sans-serif;
  width: 48%;

  & h3 {
    font-weight: 500;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 1.1;
    color: #2e2e2e;
  }

  & p {
    font-size: 14px;
    color: #444444;
    margin-bottom: 10px;
    line-height: 1;
  }
  & span {
    color: blue;
  }
`;
const Right = styled.div`
  width: 48%;
`;

const ImDiv = styled.div`
  background-color: #ebf5fb;
  border-color: transparent;
  color: #37566b;
  border-radius: 8px;
  padding: 15px;
  margin-top: 3rem;

  & img {
    margin-bottom: 15px;
  }
  & p {
    color: #37566b;
  }
`;
const GrBtDIv = styled.div`
  color: #fff;
  background-color: #4bb063;
  border-color: #49ac61;
  box-shadow: 0 0 0 #e0e0e0;
  padding: 9px 16px;
  font-size: 14px;
  line-height: 1.33;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
const OSD = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizzing: border-box;
  font-size: 14px;
  color: #999999;
  width: 70%;
  margin: auto;
  margin-top: 2rem;

  & div{
    cursor: pointer;
    :hover {
        color: #000;
      }
  }
`;

 const Dashboard = () => {
  return (
    <Wrap>
      <TimeHeader heading={'Dashboard'}/>
    <Wrapper>
      <Left>
        <h3>TimeCamp - Desktop Application</h3>
        <h3>Computer Usage Statistics</h3>
        <p>TimeCamp can track applications and sites you are actively using.</p>
        <p>» comprehensive reports about your time usage</p>
        <p>» track time spend on applications</p>
        <p>» track time spend on websites</p>
        <h3>Simple Time Tracking</h3>
        <p>Most simple time tracking application right from your desktop.</p>
        <p>» projects and tasks</p>
        <p>» effortless time tracking</p>
        <p>» automatic stopwatch</p>
        <h3>Effortless & Automatic</h3>
        <p>
          TimeCamp captures your time automatically, so you don't need to.
          <span>Windows</span> (v. 1.7.2.0), <span>Mac</span> (v. 1.7.2.0),{" "}
          <span>Ubuntu 64-bit</span> (v. 1.7.2.0)
        </p>
        <p>» idle time detection</p>
        <p>» works offline</p>
        <p>» lightweight app - 7 MB</p>
      </Left>

      <Right>
        <ImDiv>
          <img
            src="https://cdn.timecamp.com/res/css/dashboard/timesheet-activities.1658489934.png"
            alt=""
          />
          <p>
            By default all above features are activated. If you have any privacy
            concerns you can easily change desktop app behaviour by going to{" "}
            <b>Settings Add-ons Desktop App Settings page.</b>
          </p>
        </ImDiv>
        <GrBtDIv>
          <FaDownload style={{ fontSize: "16px" }} />
          <p>Download TimeCamp</p>
        </GrBtDIv>
        <OSD>
          <div>
            <FaWindows style={{ fontSize: "40px" }} />
            <p>Windows</p>
          </div>
          <div>
            <FaApple style={{ fontSize: "40px" }} />
            <p>macOS</p>
          </div>
          <div>
            <FaUbuntu style={{ fontSize: "40px" }} />
            <p>Ubuntu</p>
          </div>
        </OSD>
      </Right>
    </Wrapper>
    </Wrap>
  );
};


export default Dashboard;