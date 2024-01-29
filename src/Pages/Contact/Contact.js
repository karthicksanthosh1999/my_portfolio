import React, { useState } from 'react'
import icon1 from '../../Assets/svgs/icon1.svg'
import icon2 from '../../Assets/svgs/icon2.svg'
import icon3 from '../../Assets/svgs/icon3.svg'
import icon4 from '../../Assets/svgs/icon4.svg'
import icon5 from '../../Assets/svgs/icon5.svg'
import icon6 from '../../Assets/svgs/icon6.svg'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast';
import './contact.scss'
import { Link } from 'react-router-dom'


const Contact = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })

  const handleChange= (e) =>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const userId = 'Rs3TZYidnKaXXyrpf';
      const serviceId = 'service_lw27t98';
      const templateId = 'template_5zgcgpe';
      emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        toast.success('Email send successfully');
        console.log('Email sent successfully:', response);
        setFormData({
          name:"",
          email:"",
          subject:"",
          message:""
        })
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }


  return (
    <div className='contact'>
      <div className='contact-header' id='contact'>
        <p>CONTACT</p>
      </div>
     <div className='contact-container'>
      <div className='contact-first'>
        <div>
          <p className='form-header'>Just Say Hello</p>
        </div>
        <div>
          <form className='contact-form' onSubmit={handleSubmit}>
            <input type='text' name='name' value={formData.name}  onChange={handleChange} placeholder='Your Name'/>
            <input type='text'  name='email' value={formData.email} onChange={handleChange} placeholder='Your Email'/>
            <input type='text' name='subject' value={formData.subject}  onChange={handleChange} placeholder='Your Subject'/>
            <textarea cols={30} rows={10}  name='message' value={formData.message} onChange={handleChange} placeholder='Your Message'/>
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
      </div>
      <div className='contact-second'>
        <div>
          <p className='form-header'>Contact Info</p>
        </div>
        <div className='address-container'>
          <div className='icon-container'>
            <div className='icons'>
              <img src={icon3} alt='icon'/>
              <div>
                <h4>Email</h4>
                <p>karthick.santhosh1999@gmail.com</p>
              </div>
            </div>
            <div className='icons'>
              <img src={icon2} alt='icon'/>
              <div>
                <h4>Phone</h4>
                <p>+91 8220942384</p>
              </div>
            </div>
            <div className='icons'>
              
                <img src={icon1} alt='icon'/>
              <div>
                <h4>Address</h4>
                <p>Thirupparnkundrum, Madurai, Tamil Nadu - 625 005</p>
              </div>
            </div>
            <div className='icons'>
              <div className='social-container'>
                <p className='social-txt'>Visite my social profile and get connected</p>
                <div className='sosical-icon-container'>
                <a href='https://www.linkedin.com/in/karthick-santhosh-278678241/' target='_blank'>
                  <img src={icon4} alt='icon'/>
                </a>
                <a href='https://www.facebook.com/joshap.karthick/' target='_blank'>
                  <img src={icon5} alt='icon'/>
                </a>
                <a href='https://www.instagram.com/joseph__karthick/' target='_blank'>
                  <img src={icon6} alt='icon'/>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 

    </div>
  )
}

export default Contact