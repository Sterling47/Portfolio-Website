import React, { useRef, useState } from 'react';
import './contact.css';
import linked from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
 
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h7fun7t', 'template_62l49kd', form.current, 'fWabpkcyuK-ECk6RQ')
      .then((result) => {
          console.log(result.text);
          setFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  const resetForm = () => { setFormSubmitted(false); };

  return (
    <section id='contactForm'>
      <div>
        {!formSubmitted ? (
            <form className='formElements' ref={form} aria-required onSubmit={sendEmail}>   
              <h2>Email Me!</h2>
              <p>Please fill out form to discuss any possible work opportunities.</p>
              <input className='name' autoComplete='off' required type="text" name='name' placeholder='Full Name' />      
              <input className='email' autoComplete='off' required type="email" name='email' placeholder='Email' />
              <textarea name="message" className='msg' required cols="15" rows="5" 
                placeholder='Please a leave detailed message.'>
              </textarea>       
              <button type='submit' value='send' className='formBtn'>Submit</button>
              <div className='links'>
                <a target="_blank" href="linkedin.com"><img className='linkImg'src={linked} alt="LinkedIn" /></a>
                <a target="_blank" href=""><img  className='gitImg'src={github} alt="LinkedIn" /></a>   
              </div>
            </form> 
          ) : (
              <div>
                <p>Thank you for your interest!</p>
                <button onClick={resetForm} className='formBtn'>Inquire again!</button>
              </div>
          )
        }
      </div>
    </section>
  )
}

export default Contact;