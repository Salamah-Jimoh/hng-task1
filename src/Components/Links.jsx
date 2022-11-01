import React from 'react'
import Slack from './assets/slack.svg'
import Github from './assets/github.png'
const Links = () => {
  return (
    <div className='links'> 
        <a className="btn" href="https://twitter.com/salamah_jimoh">Twitter Link</a>
        <a className="btn" href="https://training.zuri.team/"  id='btn__zuri'>Zuri Team</a>
        <a className="btn" id='books'
        href="http://books.zuri.team">Books
        <p>Read from our library of exclusive books</p>
      </a>
      <a className="btn" id='book__python'
        href="https://books.zuri.team/python-for-beginners?ref_id=<Salamah>,"  >Python
        <p>Get unlimited access to Python books</p>
      </a>
      <a className="btn"
        href="https://background.zuri.team"  id='pitch'>Guidance?
        <p>We run a background check for codes by offering reviews, mentorships and guidance</p>
      </a>
      <a className="btn"
        href="https://books.zuri.team/design-rules"  id='book__design'>Free Book?
        <p>Be among the lucky people that take home this amazing book for free!</p>
      </a>
      <div className="socials">
        <a href=""><img src={Slack} alt="Slack icon" /></a>
        <a href=""><img src={Github} alt="Github icon" /></a>
   </div>   
    </div>
  )
}

export default Links
