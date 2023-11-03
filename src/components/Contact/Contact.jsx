import React from 'react';
import { useRef } from 'react';
import './contact.css';
import linked from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h7fun7t', 'template_62l49kd', form.current, 'fWabpkcyuK-ECk6RQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactForm'>
      <div>
            <form className='formElements' ref={form} onSubmit={sendEmail}>   
              <h2>Email Me!</h2>
              <p>Please fill out form to discuss any possible work opportunities.</p>
              <input className='email' autoComplete='off' type="email" name='email' placeholder='Email' />
              <input  className='name' autoComplete='off'  type="text" name='name' placeholder='Full Name' />      
              <textarea name="message" className='msg' cols="15" rows="5" placeholder='Please leave detailed message.'></textarea>       
              <button type='submit' value='send' className='formBtn'>Submit</button>
              <div className='links'>
                <a target="_blank" href="linkedin.com"><img className='linkImg'src={linked} alt="LinkedIn" /></a>
                <a target="_blank" href=""><img  className='gitImg'src={github} alt="LinkedIn" /></a>   
              </div>
            </form>  
      </div>
    </section>
  )
}

export default Contact;