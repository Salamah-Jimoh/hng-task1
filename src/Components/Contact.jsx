import React from 'react'
import Footer from './Footer'
const Contact = () => {
  let name ='Salamah'
  var onClick=()=>{
    var message =document.getElementById('message')
    var error = document.getElementById('error')
    if(message.value ==='') {
      message.style.border='1px solid red';
      error.style.display='block'
    }
  }
  return (
    <div class='contact'>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me anything you have in mind</p>
      <form action="" className="form-container">
        <div className="names">
          <div className="first-name">
           <label htmlFor="first-name">First name</label>
           <input type="text" name='first-name'id='first_name' placeholder='Enter your first name'/>
          </div>
          <div className="last-name">
           <label htmlFor="last-name">last name</label>
           <input type="text" name='last-name' id='last_name' placeholder='Enter your last name'/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='yourname@email.com' required/>
        </div>
        <div className="message">
          <label htmlFor="Message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
          <div className="error" id='error'>Pls enter a message</div>
        </div>
        <div className="check">
        <input type="checkbox" name="consent" />
        <p>You agree to providing your data to {name} who may contact you</p>
        </div>
        <button id='btn__submit' onClick={onClick}>Send Message</button>
      </form>
      <Footer/>
    </div>
    
  )
}

export default Contact
