import React from "react";

import "./SideNavbar.scss";

export default function SideNavbar() {
  return (
    <div>
      {/* <h1 className='first'> this is side bar</h1> */}

      <nav>
        <ul>
          <li className="dropdown">
            <a href="#">
              {" "}
              A <span>› </span>
            </a>
            {/*  */}
            <ul>
              {/*  */}
              <li className="dropdown_two">
                <a href="">
                  AB<span>›</span>
                </a>
                <ul>
                  <li>
                    <a href="#">lin1</a>
                  </li>
                  <li>
                    <a href="#">lin2</a>
                  </li>
                  <li>
                    <a href="#">lin3</a>
                  </li>
                </ul>
              </li>
              {/*  */}
              <li>
                <a href="">BC</a>
              </li>
              <li>
                <a href="">CD</a>
              </li>
              <li>
                <a href="">DE</a>
              </li>
            </ul>
            {/*  */}
          </li>
          <li>
            <a href="#">B</a>
          </li>
          <li>
            <a href="#">C</a>
          </li>
          <li className="dropdown">
            <a href="#">
              D <span>›</span>
            </a>
            {/*  */}
            <ul>
              <li>
                <a href="#">XYY</a>
              </li>
              <li>
                <a href="#">XYYY</a>
              </li>
              {/*  */}
              <li className="dropdown_two split">
                <a href="#">
                  XZZ<span>›</span>
                </a>
                <ul>
                  <li>
                    <a href="#">link 1</a>
                  </li>
                  <li>
                    <a href="#">link 1</a>
                  </li>
                  <li>
                    <a href="#">link 1</a>
                  </li>
                  <li>
                    <a href="#">link 1</a>
                  </li>
                </ul>
              </li>
              {/*  */}
              <li>
                <a href="#">XZZZ</a>
              </li>
            </ul>
            {/*  */}
          </li>
          <li>
            <a href="#">E</a>
          </li>
          <li>
            <a href="#">F</a>
          </li>
          <li>
            <a href="#">G</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
