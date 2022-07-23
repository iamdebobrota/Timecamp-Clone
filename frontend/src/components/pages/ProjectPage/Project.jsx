import React, { useState } from "react";
import styled from "styled-components";
import { FiMinimize2 } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { MemoProject } from "./SingleProject";

const Wrapper = styled.div`
  width: 76%;
  display: flex;
  justufy-content: space-between;
  gap: 2%;
  padding: 40px 0 0 10px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Lato, Arial,
    sans-serif;
`;

const Left = styled.div`
  width: 53%;
`;
const Right = styled.div`
  width: 45%;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #3e3e3e;

  & > div {
    max-width: 150px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    padding: 9px 14px;
    line-height: 19px;

    box-shadow: 0 0 0 #e0e0e0;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #d6d6d6;
  }
  & input {
    width: 100%;
    background-color: #f8f8f8;

    :focus {
      outline: none;
      border: none;
    }
  }
`;

const RDiv = styled.div`
  border: 1px solid #d6d6d6;
  box-shadow: 0 0 0 #e0e0e0;
  margin-bottom: 15px;
  padding: 15px;
  min-height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #b6b6b6;
  margin-top: 5rem;
  width: 80%;
  margin-left: 1rem;
`;

export const Green = styled.div`
  color: #fff;
  background-color: #4bb063;
  border-color: #49ac61;
`;
const Indiv = styled.div`
  background-color: #f8f8f8;
`;

const TogDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #3e3e3e;
  margin-top: 2rem;

  & > div {
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    padding: 9px 14px;
    line-height: 19px;

    box-shadow: 0 0 0 #e0e0e0;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #d6d6d6;
  }

  & > div:first-child {
    width: 355px;

    & input {
      :focus {
        outline: none;
        border: none;
      }
    }
  }
`;

const LDiv = styled.div`
  border: 1px solid #d6d6d6;
  box-shadow: 0 0 0 #e0e0e0;
  margin-bottom: 15px;
  padding: 15px;
  min-height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #b6b6b6;
  margin-top: 2rem;
  font-size: 18px;
`;

 export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;

  & > div {
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    padding: 9px 14px;
    line-height: 19px;

    box-shadow: 0 0 0 #e0e0e0;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
  }
  :hover {
    background-color: #f8f8f8;
    border-left: 2px solid #4bb063;
  }
`;

export const ElDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 53%;
  border-color: #fff;
`;
const Outer = styled.div`
  border: 1px solid #d6d6d6;
  box-shadow: 0 0 0 #e0e0e0;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 5px;
`;
export const Project = () => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const [projects, setProjects] = useState([]);
  return (
    <Wrapper>
      <Left>
        <Top>
          <Indiv>
            <input type="text" placeholder="Search" />
          </Indiv>

          <Green onClick={() => setToggle(!toggle)}>
            <p>{toggle ? "Close" : "Add Project"}</p>
          </Green>

          <div>
            <select name="" id="" placeholder="Filter">
              <option hidden selected value>
                Filter
              </option>
              <option value="">All tasks</option>
              <option value="">My tasks</option>
            </select>
          </div>

          <div>
            <FiMinimize2 style={{ fontSize: "17px" }} />
          </div>
          <div>
            <p>Archieved</p>
          </div>
          <div>
            <BsThreeDots style={{ fontSize: "17px" }} />
          </div>
        </Top>

        {toggle && (
          <TogDiv>
            <div>
              <input
                type="text"
                placeholder="Enter new project or task"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </div>
            <Green
              onClick={() => {
                setProjects([...projects, text]);
                setText("");
              }}
            >
              <p>Create new project</p>
            </Green>
            <div onClick={() => setToggle(!toggle)}>
              <p>Cancel</p>
            </div>
          </TogDiv>
        )}

        {projects.length ? (
          <Outer>
            {projects.map((e) => (
              <MemoProject e={e}/>
            ))}
          </Outer>
        ) : (
          <LDiv>
            <p>
              <b>No Projects</b>
            </p>
          </LDiv>
        )}
      </Left>
      <Right>
        <RDiv>
          <p>Choose project or task to edit</p>
        </RDiv>
      </Right>
    </Wrapper>
  );
};
