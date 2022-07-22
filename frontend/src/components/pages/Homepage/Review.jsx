import React from "react";
import styled from "styled-components";
import { AiOutlineChrome } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";

import { GP, GreenBtn } from "./Fields";

const Head = styled.div`
  text-align: center;
  letter-spacing: 1px;
  & p {
    margin-top: 100px;
    font-size: 14px;
    color: #25cf60;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  & h2 {
    font-size: 36px;
    font-weight: 700;
    padding: 0 24%;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  gap: 12%;
  margin: 40px 0;
`;
const P = styled.p`
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 2px solid #25cf60;
`;
const Reviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  padding: 0 20px;
  margin-top: 80px;

  & > div {
    width: 22%;
    padding: 20px;
  }
`;

const Spl = styled.div`
  background-color: #f3f3f3;
  border-radius: 20px;
`;
const IMG = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 0;
  & img {
    width: 150px;
    height: 75px;
  }
`;

const Grey = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 80px 12%;
  text-align: left;
  & h1 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.1;
    font-family: lato, sans-serif;
    margin-top: 2rem;
  }
  & p {
    margin-top: 2rem;

    font-weight: 400;
    margin: 2rem 0;
    font-size: 18px;
  }
`;

const GreyText = styled.div`
  width: 43%;
`;
const GreyLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding: 30px 0;

  & div {
    background: #fff;
    width: 120px;
    height: 120px;
    border-radius: 31px;
    margin-bottom: 2rem;
    margin-left: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 4px 2px 16px 0 rgb(0 0 0 / 6%);

    & img{
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
`;

export const Review = () => {
  return (
    <div>
      <Head>
        <p>REVIEWS</p>
        <h2>
          Time tracking software for businesses across all industries and sizes
        </h2>
      </Head>
      <Heading>
        <P>Marketing agencies</P>
        <p>IT & Software houses</p>
        <p>Designers</p>
        <p>Accounting</p>
      </Heading>

      <Reviews>
        <div>
          <p>
            We've tried a lot of tools and the integration, flexibility and fast
            array of features that come with TimeCamp have really made this tool
            stand out and pay for itself. It connects to a number of tools we
            use like our in house project management tools, our client's project
            management tools and our accounting software.
          </p>
          <br />
          <p>
            <b>Jakes</b>
          </p>
        </div>
        <div>
          <p>
            The primary reason I chose TimeCamp was the direct
            timekeeping-to-invoicing function, which has been a tremendous
            timesaver. I love the way it shows me what I'm spending my time on
            even when I'm not logging billable hours.
          </p>
          <br />
          <p>
            <b>Kathryn</b>
          </p>
        </div>
        <Spl>
          <p>
            Great asset to managing our marketing agency. We love the ease it
            takes to input times. We never have to worry about time record
            keeping because TimeCamp does it so accurately. It makes creating
            our invoices at the end of each month so much easier.
          </p>
          <br />
          <p>
            Review from <b>GetApp.com</b>
          </p>
        </Spl>
        <div>
          <p>
            Our business problem was simple at any given time we have 20 or so
            contractors working on a handful of different projects and we needed
            to be scientific about knowing how many of whose hours were being
            spent on which project. TimeCamp solved this problem well and
            simply.
          </p>
          <br />
          <p>
            <b>Noah</b>
          </p>
        </div>
      </Reviews>

      <IMG>
        <img
          src="https://cdn-m.timecamp.com/img/greenbranding/features/crozdesk.png"
          alt=""
        />
        <img
          src="https://cdn-m.timecamp.com/img/greenbranding/features/capterra.png"
          alt=""
        />
        <img
          src="https://cdn-m.timecamp.com/img/greenbranding/features/crowd.png"
          alt=""
        />
        <img
          src="https://cdn-m.timecamp.com/img/greenbranding/features/get-app.png"
          alt=""
        />
      </IMG>

      <Grey>
        <GreyText>
          <GP>TIME TRACKING INTEGRATIONS</GP>
          <h1>
            Easy and quick integration with more than 100 apps and work tools
          </h1>
          <p>
            <b> TimeCamp works great</b> alongside with all of the most popular
            work management tools.
          </p>
          <p>
            Now, you can also <b> track time</b> directly from your go-to apps
            such as Trello or Asana thanks to our Chrome extension.
          </p>
          <GreenBtn href="">
            <AiOutlineChrome style={{ fontSize: "40px" }} />
            Track time in Chrome
          </GreenBtn>
          <p>
            Maintain your current workflow and <b>connect TimeCamp,</b> the best
            time tracking software, with your currently used apps.
          </p>
          <GP>
            Check integrations
            <HiArrowRight />
          </GP>
        </GreyText>
        <GreyLogo>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png"
              alt=""
            />
          </div>
        </GreyLogo>
      </Grey>
    </div>
  );
};
