import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import style from './SocialMedia.module.scss'

const SocialMedia = () => {
  return (
    <div className={style.SocialMedia}>
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
      <FaYoutube />
    </div>
  )
}

export default SocialMedia
