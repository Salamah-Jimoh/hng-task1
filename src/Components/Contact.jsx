import React from 'react'
import Footer from './Footer'
const Contact = () => {
  let name ='Salamah'
  var onSubmit=(e)=>{
    e.preventDefault();
    var message =document.getElementById('message')
    console.log(message.value)
    var error = document.getElementById('error')
    if(message.value ==="") {
     message.style.border='1px solid red'
     error.style.display='block'
    }
    return
  }
  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me anything you have in mind</p>
      <form action="" className="form-container" onSubmit={onSubmit}>
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
        <input type="submit" value="Send Message" class='button' id='btn__submit'  />
        {/*<input type='submit' class='button' id='btn__submit' value ='Send Message'/>*/}
      </form>
      <Footer/>
    </div>
    
  )
}

export default Contact
