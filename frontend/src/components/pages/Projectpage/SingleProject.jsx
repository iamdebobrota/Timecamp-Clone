import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaDotCircle, FaPlay } from "react-icons/fa";
import { GrPieChart } from "react-icons/gr";
import { ElDiv, Green, Row } from "./ProjectPage";

const SingleProject = ({ e }) => {
  return (
    <Row>
      <ElDiv>
        <FaDotCircle
          style={{
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
              Math.random() * 255
            })`,
          }}
        />
        <p>{e}</p>
      </ElDiv>
      <Green>
        <p>Add task</p>
      </Green>
      <div style={{ border: "1px solid #d6d6d6" }}>
        <GrPieChart style={{ fontSize: "17px" }} />
      </div>
      <div style={{ border: "1px solid #d6d6d6" }}>
        <BsThreeDots style={{ fontSize: "17px" }} />
      </div>
      <Green>
        <FaPlay style={{ fontSize: "17px" }} />
      </Green>
    </Row>
  );
};

export default SingleProject;

export const MemoProject = React.memo(SingleProject)