import React from 'react';
import bio from '../../Assets/bio.png'
import './about.scss'

const About = () => {
  return (
    <div className='about' id='about'>
        <div>
            <h3 className='contact-header'>ABOUT ME</h3>
        </div>
        <div className='about-container'>
            <div className='about-first'>
                <img src={bio} alt='bio'/>
            </div>
            <div className='about-details'>
                <h2>Hi there! I'm Karhtick.S</h2>
                <h4>Software Engineer</h4>
                {/* <p>I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and otivate people to respond to messages, with a view to making a favorable impact.</p> */}

                <div className='about-section'>
                        <div className='about-key'>
                            <p>DOB</p>
                            <p>Phone</p>
                            <p>Email</p>
                            <p>From</p>
                            <p>Language</p>
                            <p>Qualification</p>
                        </div>
                        <div className='about-center'>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                        </div>
                        <div className='about-value'>
                            <p>Dec 23,1999</p>
                            <p>+91 8220942384</p>
                            <p>karthick.santhosh1999@gmail.com</p>
                            <p>Madurai, Tamil Nadu</p>
                            <p>Tamil, English, Malayalam</p>
                            <p>BE (Mechanical)</p>
                        </div>
                </div>

                <div className='about-btn'>
                    <a href='#'>Download CV</a>
                </div>
            </div>
        </div> 
        
    </div>
  )
}

export default About