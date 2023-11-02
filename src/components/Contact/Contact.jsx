import React from 'react';
import './contact.css';
import linked from '../../assets/linkedin.png';
import github from '../../assets/github.png'

const Contact = () => {
  return (
    <section id='contactForm'>
        <div>
            <h2>Email Me!</h2>
            <form className='formElements' action="">   
             <p>Please fill out form to discuss any possible work opportunities.</p>
                <label for="email" required>Email</label>
                <input className='email' type="text" name='email' placeholder='Email' />
                <input  className='name' type="text" placeholder='Full Name' />
                
                <textarea name="message" className='msg' cols="15" rows="5" placeholder='Please leave detailed message.'></textarea>       
                <button className='formBtn'>Submit</button>
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