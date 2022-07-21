import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: hidden;
  font-weight: 300;
  position: relative;
  font-family: nunito sans, sans-serif;
  background-color: #fff;
  color: #1b1b20;
  line-height: 1.5;
  text-align: left;
  background-image: url("https://cdn-m.timecamp.com/img/backgroundTop.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 6rem 0;
`;

const RowContainer = styled.div`
  width: 75%;
  margin: auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  padding: 3rem;
  border-radius: 6px;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.9);
  flex: 0 0 50%;
  max-width: 50%;

  & h1 {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.1;
    width: 93%;
    margin-right: auto;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  & h2 {
    font-weight: 700;
    color: #1b1b20;
    font-size: 52px;
    line-height: 1.1;
    width: 93%;
    margin-right: auto;
    margin-bottom: 0.5rem;
    margin-top: 20px;
  }
  & ul {
    padding: 1rem;
    margin-bottom: 2rem;
    margin-top: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  white-space: nowrap;
  text-align: center;
  & button {
    padding: 15px 40px;
    width: 200px;
    background-color: #25cf60;
    border-radius: 26px;
    padding: 15px 40px;
    color: #fff;
    font-weight: 700;
    border: none;
    white-space: nowrap;
    text-align: center;

    :hover {
      background-color: #1da44c;
    }
  }

  & span {
    display: block;
    font-size: 16px;
    font-weight: 300;
    padding: 15px;
    white-space: nowrap;
    text-align: center;
  }
`;
const Right = styled.div`
  margin-top: 17rem;
  margin-bottom: 3rem;
  left: 10rem;
  animation: fade 3s ease-out;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Homo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.9);
  position: relative;
  top: -2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    border-radius: 100%;
    width: 70px;
    height: 70px;
    vertical-align: middle;
    border-style: none;
    aspect-ratio: auto 70 / 70;
  }
`;

const HomoHeader = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  margin-top: 0;
  padding: 0 2rem;
`;

const HomoPara = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-top: 0;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;
const Logo = styled.img`
  width: 20%;
  margin-bottom: 3rem;
  vertical-align: middle;
  border-style: none;
  aspect-ratio: auto 91 / 21;
  height: 21px;
`;

export const Homepage = () => {
  return (
    <div>
      <Container>
        <RowContainer>
          <Left>
            <h1>Free time tracking software</h1>
            <h2>
              Happy to see you again! <br /> Book TimeCamp set-up call
            </h2>
            <ul>
              <li>✓ Showing how TimeCamp works in 15 minutes</li>
              <li>✓ Best practices from 5000+ implementations</li>
              <li>✓ Help with dedicated setup</li>
            </ul>
            <BtnDiv>
              <button>Book a demo</button>
              <span>or</span>
              <button>Go to App</button>
            </BtnDiv>
          </Left>
          <Right>
            <Homo>
              <img src="https://cdn-m.timecamp.com/img/person.jpg" alt="" />
            </Homo>
            <HomoHeader>
              Adam Wagner, Co-owner and Chief Strategy Officer
            </HomoHeader>
            <HomoPara>
              „TimeCamp proved to be an essential management tool that gives us
              clear insight into a project’s efficiency and helps to avoid an
              overblown workload for our team.”
            </HomoPara>
            <Logo
              src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
              alt=""
            />
          </Right>
        </RowContainer>
      </Container>
    </div>
  );
};
