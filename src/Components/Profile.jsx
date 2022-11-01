import React from 'react'
import profileImg from './assets/image.jpg'
import Share from './assets/Icon.png'
import ShareMobile from './assets/share-mobile.png'
const Profile = () => {
  return (
      <div className="profile-main">
      <img src={Share} alt="Share icon" className='profile-share'/>
      <img src={ShareMobile} alt="Share icon" className='profile-share-mobile'/>
        <img src={profileImg} alt="profile-pic" id='profile__img' className='profile-img' />
        <p id ='twitter'>salamah_jimoh</p>
        <p id ='slack' className='hide'>Salamah</p>
      </div>
  )
}

export default Profile
