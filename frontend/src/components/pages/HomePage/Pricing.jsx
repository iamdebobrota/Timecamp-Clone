import React from "react";
import styled from "styled-components";

const Top = styled.div`
  margin-top: 10rem;
  font-family: lato, sans-serif;

  & h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.1;
  }
`;

const HeadP = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #25cf60;
  line-height: 26px;
  margin-bottom: 2rem;
`;

const GP = styled.p`
  font-size: 18px;
  margin: auto;
  padding: 20px 0;
  color: #767676;
  line-height: 26px;
  width: 35%;
`;

const CustomFlex = styled.div`
  width: 380px;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 26px;
  cursor: pointer;
  //   border: 1px solid red;
  margin-bottom: 50px;
`;

const GreenBack = styled.p`
  height: 50px;
  width: 195px;
  top: 0;
  left: 0;
  background-color: #25cf60;
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
const WhiteBack = styled.p`
  height: 50px;
  width: 195px;
  color: #b7b7b7;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  & h1 {
    font-size: 24px;
  }
  
`;

const WhiteDiv = styled.div`
  width: 23%;
  text-align: center;
  padding: 10px 20px 20px;
  border-radius: 26px;
  text-align: left;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: #767676;
`;

const GreenDiv = styled.div`
  width: 23%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-align: center;
  padding: 10px 20px 20px;
  background: #25cf60;
  border-radius: 26px;
  text-align: left;
  color: #fff;
`;
const GrHd = styled.p`
  font-size: 10px;
  text-align: center;
  color: #25cf60;
  font-family: lato, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
`;
const WhHd = styled.p`
  font-size: 10px;
  text-align: center;
  color: #fff;
  font-family: lato, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
`;
const GB = styled.p`
  display: flex;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: fit-content;
  background-color: #25cf60;
  border-radius: 26px;
  padding: 15px 40px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: #1da44c;
  }
`;
const WB = styled.p`
  display: flex;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: fit-content;
  background-color: #fff;
  border-radius: 26px;
  padding: 15px 40px;
  color: #25cf60;
  font-weight: 700;
  cursor: pointer;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  justify-content: space-between;
  border-bottom: 1px solid #25cf60;
  height: 100px;
  padding-bottom: 15px;
  margin-bottom: 25px;

  & > div > p {
    color: #767676;

  }
`;

const YImg = styled.div`
width: 1140px;
height: 401px;
margin: auto;
margin-top: 100px;
& img{
  width: 100%;
}
`
export const Pricing = () => {
  return (
    <div>
      <Top>
        <HeadP>PRICING</HeadP>
        <h2>Your time cost more</h2>
        <GP>
          Use free forever plan or subscribe to a paid plan to get more
          features!
        </GP>
        <CustomFlex>
          <GreenBack>Annually 10% discount</GreenBack>
          <WhiteBack>Monthly</WhiteBack>
        </CustomFlex>
      </Top>

      <Card>
        <WhiteDiv>
          <CardTop>
            <GrHd> &nbsp; </GrHd>
            <div>
              <h1 style={{ color: "#25cf60" }}>Free</h1>
              <p>Free forever plan</p>
            </div>
          </CardTop>

          <div>
            <p>Measure on which activities you spend time while working</p>
            <GB>Join for free</GB>
            <ul>
              <li>Unlimited users</li>
              <li>
                <b>Unlimited Projects & tasks</b>
              </li>
              <li>Desktop & Mobile app</li>
            </ul>
          </div>
        </WhiteDiv>

        <WhiteDiv>
          <CardTop>
            <GrHd> Basic </GrHd>

            <div>
              <h1>$ 6.3</h1>
              <p>user/mo</p>
            </div>
          </CardTop>

          <div>
            <p>Be more transparent and gain customers' trust</p>
            <GB>Start for free trial</GB>
            <ul>
              <li>Time rounding</li>
              <li>Custom report</li>
              <li>Hide time from users</li>
              <li>Management roles</li>
              <li>Team productivity tracking</li>
              <li>XLS reports export</li>
              <li>Unlimited integrations</li>
              <li>Billable time & budgeting</li>
            </ul>
          </div>
        </WhiteDiv>

        <GreenDiv>
          <CardTop>
            <WhHd> PRO </WhHd>
            <div>
              <h1>$ 9</h1>
              <p>user/mo</p>
            </div>
          </CardTop>

          <div>
            <p>Get full control over your business</p>
            <WB>Start your free trial</WB>
            <ul>
              <li>Custom user roles</li>
              <li>Billing rates</li>
              <li>Invoicing</li>
              <li>Timesheet approvals</li>
              <li>Screenshots</li>
              <li>SSO login</li>
              <li>2-factor authentication</li>
            </ul>
          </div>
        </GreenDiv>

        <WhiteDiv>
          <CardTop>
            <GrHd> ENTERPRISE</GrHd>
            <div>
              <h1>Let's discuss</h1>
            </div>
          </CardTop>

          <div>
            <p>Customize TimeCamp to your custom needs</p>
            <GB>Contact us</GB>
            <ul>
              <li>Personalized training</li>
              <li>Private cloud implementation</li>
              <li>Self hosted server</li>
            </ul>
          </div>
        </WhiteDiv>
      </Card>
      <YImg>
        <img src="https://www.linkpicture.com/q/Screenshot-2022-07-23-025701.png" alt="" />
      </YImg>
    </div>
  );
};
