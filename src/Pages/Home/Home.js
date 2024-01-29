import React from "react";
import profile from "../../Assets/boy.png"
import { TypeAnimation } from 'react-type-animation';
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* First text divtions */}
      <div className="home-1">
          <p className="home-hello">Hello, I'm  <br/>
          <span className="home-name">Karthick.S</span><br/>
          <span className="hoem-josb">
              <TypeAnimation
          sequence={[
            'Full Stack Developer',
            1000,
            'Frontend Developer',
            1000,
            'Backend Developer',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
            </span>
          </p>
  
          <button className="home-btn"  type="button">
            <a href="#contact">
              Hire Me 
              </a> 
            </button>
       
      </div>
      {/* Second img divtions */}
      <div className="home-2">
          <img src={profile} alt="profile"/>
      </div>
    </div>
  );
};

export default Home;
