import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id='contactForm'>
        <div>
            <h2>Email Me!</h2>
            <form className='formElements' action="">     
                <label for="email" required>Email</label>
                <input type="text" name='email' placeholder='Email' />
                <input type="text" placeholder='Full Name' />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className='formBtn'>Submit</button>
            </form>
         </div>
    </section>
  )
}

export default Contact;