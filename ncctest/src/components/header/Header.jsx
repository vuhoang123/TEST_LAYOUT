import React from "react";
import { AiOutlineBars } from "react-icons/ai";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header_content">
          <div className="logo">
            <h4>LOGO</h4>
          </div>
          <div className="navBar">
            <a className="nav_item">WORK</a>
            <a className="nav_item">SERVICES</a>
            <a className="nav_item">CONTACT</a>
          </div>
          <div className="navBar_Toggle">
            <a className="toggle">
              <AiOutlineBars />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
