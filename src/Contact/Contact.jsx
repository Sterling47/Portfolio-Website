import React, { useRef, useState } from 'react';
import linked from '../assets/linkedin.png';
import github from '../assets/github.png';
import emailjs from '@emailjs/browser';
import { BackgroundGradient } from '../UI/background-gradient';

const Contact = () => {
  
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const LinkedIn = 'https://www.linkedin.com/in/adam-konber';
  const gitLink ='https://github.com/Sterling47?tab=repositories'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y0h64j5', 'template_62l49kd', form.current, 'fWabpkcyuK-ECk6RQ')
      .then((result) => {
          console.log(result.text);
          setFormSubmitted(true);
      }, (error) => {
          console.log(error);
      });
  };

  const resetForm = () => { setFormSubmitted(false); };

  return (
    <div className="flex justify-center  items-center h-[100vh] w-[90%]">
      {/* <BackgroundGradient className="rounded-[22px] p-4 grid place-items-center bg-white dark:bg-zinc-900"> */}
      
      <div id='contactForm' className='flex justify-center  items-center w-[75%] h-[65%] bg-shadowGray hover:shadow-gradient backdrop-blur-[98px] rounded-xl text-center'>
        {!formSubmitted ? (
            <form className='flex justify-around items-center flex-col w-[90%] h-[90%] m-[1rem]' ref={form} aria-required onSubmit={sendEmail}>   
              <h2 className='text-transparent font-bold text-2xl bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 mb-4'>Email Me!</h2>
              <p className='text-white'>Please fill out form to discuss any possible work opportunities.</p>
              <input className='rounded-sm bg-white m-2 border-none w-[75%]' autoComplete='off' required type="text" name='name' placeholder='Full Name' />      
              <input className='rounded-sm bg-white m-2 border-none w-[75%]' autoComplete='off' required type="email" name='email' placeholder='Email' />
              <textarea name="message" className='rounded-sm bg-white m-2 border-none w-[75%]' required cols="15" rows="5" 
                placeholder='Please a leave detailed message.'>
              </textarea>       
              <button type='submit' value='send' className='bg-white text-black py-3 px-14 m-4 rounded-md hover:scale-110 hover:animate-moveUp hover:bg-gradient-to-r from-lime-200 via-green-400 to-emerald-600 '>Submit</button>
              <div className='flex justify-around items-center'>
                <a target="_blank" href={LinkedIn}><img className='w-12 h-12 m-6 rounded-md hover:scale-110' src={linked} alt="LinkedIn" /></a>
                <a target="_blank" href={gitLink}><img  className='w-12 h-12 m-6 bg-white rounded-md hover:scale-110' src={github} alt="GitHub" /></a>   
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
      {/* </BackgroundGradient> */}
    </div>
  )
}

export default Contact;