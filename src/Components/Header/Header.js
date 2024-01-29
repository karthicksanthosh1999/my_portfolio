import React, { useState } from "react";
import bar from "../../Assets/svgs/bar.svg";
import phone from "../../Assets/svgs/phone-solid.svg";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            {/* Your logo or brand */}
            <a href="/">Logo</a>
          </div>
          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#skills">Skils</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="phone">
                  <img src={phone} alt="phone"/>
                <a href="#" style={{color:"#fec544", padding:"0xp 10px 0px 10px"}}>
                 +91 8220942384</a>
              </li>
            </ul>
          </div>
          <div className="navbar-toggle" onClick={toggleNavbar}>
            {/* Your hamburger menu icon */}
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
