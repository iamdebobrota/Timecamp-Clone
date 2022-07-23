import React from "react";
import styled from "styled-components";
import {Link, Outlet} from 'react-router-dom'
import style from '../Footer/footer.module.css'

const Outer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1000;
  box-shadow: -1px 4px 10px 0 rgb(0 0 0 / 10%);
`;
const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1rem;
`;
const CustomP = styled.p`
  padding: 15px 40px;
  color: #fff;
  font-weight: 700;
  border-radius: 26px;
  background-color: #f7b801;
  align-items: center;
  cursor: pointer;
margin-left: 12px;
  :hover {
    background-color: #dfa601;
  }
`;
const Middle = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 700;
  line-height: 1.5;
  color: #1b1b20;
  font: 16px "nunito sans", sans-serif;

  :hover {
    color: #dfa601;
  }
`;

const Spn = styled.span`
  height: 80%;
  background-color: #25cf60;
  width: 1px;
  margin-right:12px;
`;
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    cursor: pointer;
  }
`;

export const Header = () => {
  return (
    <Outer>
      <Wrapper>
        <ImgDiv>
        <Link to='/'>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
            alt=""
          />
          </Link>
        </ImgDiv>
        <Middle>
          <Link to="/features" className={style.hoverCom}>Features {" "}</Link>
          <P>Pricing</P>
          <P>Integrations</P>
          <P>Blog</P>
        </Middle>
        <Middle>
          <P>Book a Demo</P>
          <Spn></Spn>
          <Link to='/auth/login' className={style.hoverCom}>Sign In</Link>
          <CustomP>Go to App</CustomP>
        </Middle>
      </Wrapper>


      <Outlet/>


    </Outer>
  );
};