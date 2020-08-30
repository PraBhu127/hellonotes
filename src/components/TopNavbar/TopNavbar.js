import React, { useState } from "react";
import "./TopNavbar.css";
import { HiMail } from "react-icons/hi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiCrossedBones } from "react-icons/gi";

const TopNavbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="top-bg">
        <h3>
          <a
            href="mailto:helloprogrammers360@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Any Queries ? Maile here..."
          >
            <HiMail />
            helloprogrammers360@gmail.com
          </a>
        </h3>
        <h3>
          <a
            href="helloprogrammer.com"
            target="_blank"
            title="Visit our parent website here"
          >
            Hello Programmers
          </a>
        </h3>
      </div>
      <div className="top-navbar">
        <nav>
          <div className="nav-brand">Hello Notes</div>
          <div className="nav-toggle" onClick={handleToggle}>
            {toggle ? <GiCrossedBones /> : <AiOutlineMenuUnfold />}
          </div>
          <div className={toggle ? "nav-item nav-active" : "nav-item"}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TopNavbar;
