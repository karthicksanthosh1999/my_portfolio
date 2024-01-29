import React from "react";
import "./resume.scss";

const Resume = () => {
  return (
    <div id="resume">

        <div>
            <h3 className='contact-header'>RESUME</h3>
        </div>

    <div className="resume">
        <div className="resume-1">
          <div class="container">
          <div class="timeline">
            <div class="timeline-container primary">
              <div class="timeline-icon">
                <i class="far fa-grin-wink"></i>
              </div>
              <div class="timeline-body">
                <h4 class="timeline-title">
                <span class="badge">B.E Mechanical Engineering</span> <br/>
                  <span className="year"><pre>2017 - 2021</pre></span>
                  <span className="college"><pre>Latha Mathavan <br/>Engineering college</pre></span>
                </h4>
                <p>
                 I completed the my Engineering four year Course.
                </p>
              
              </div>
            </div>
            <div class="timeline-container danger">
              <div class="timeline-icon">
                <i class="far fa-grin-hearts"></i>
              </div>
              <div class="timeline-body">
                <h4 class="timeline-title">
                <span class="badge">Automation Test Engineering</span> <br/>
                  <span className="year"><pre>2020 - 2021</pre></span>
                  <span className="college"><pre>Graspear Solution</pre></span>
                </h4>
                <p>
                  At Graspear Solution am working as a Mobile App Testing using Appium.
                </p>
              
              </div>
            </div>
            <div class="timeline-container success">
              <div class="timeline-icon">
                <i class="far fa-grin-tears"></i>
              </div>
              <div class="timeline-body">
                <h4 class="timeline-title">
                <span class="badge">Testing Support Engineering</span> <br/>
                  <span className="year"><pre>2021 - 2022</pre></span>
                  <span className="college"><pre>Inmakes Infotech</pre></span>
                </h4>
                <p>
                  As a support engineer. I was teaching about testing for interns.
                </p>
              
              </div>
            </div>

          </div>
        </div>
        </div>
        <div className="resume-2">
        <div class="container">
          <div class="timeline">
            <div class="timeline-container primary">
              <div class="timeline-icon">
                <i class="far fa-grin-wink"></i>
              </div>
              <div class="timeline-body">
                <h4 class="timeline-title">
                <span class="badge">MERN Stack Developer Course</span> <br/>
                  <span className="year"><pre>3 Months</pre></span>
                  <span className="college"><pre>Livewire</pre></span>
                </h4>
                <p>
                 I completed the MERN Stack Development at Livewire. Done few projects using MERN.
                </p>
              
              </div>
            </div>
            <div class="timeline-container danger">
              <div class="timeline-icon">
                <i class="far fa-grin-hearts"></i>
              </div>
              <div class="timeline-body">
                <h4 class="timeline-title">
                <span class="badge">Software Engineer Internship</span> <br/>
                  <span className="year"><pre>2 Months</pre></span>
                  <span className="college"><pre>Wizinoa</pre></span>
                </h4>
                <p>
                  I successfully complete the two month Internship at Wizinoa.
                </p>
              
              </div>
            </div>
            <div class="timeline-container success">
              <div class="timeline-icon">
                <i class="far fa-grin-tears"></i>
              </div>
              <div class="timeline-body">
                <h4 class="timeline-title">
                <span class="badge">Junior Developer</span> <br/>
                  <span className="year"><pre>2023 - Current</pre></span>
                  <span className="college"><pre>Wizinoa</pre></span>
                </h4>
                <p>
                  Now am working as a Junior Software Enginee. Working in live projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
      


    </div>
  );
};

export default Resume;
