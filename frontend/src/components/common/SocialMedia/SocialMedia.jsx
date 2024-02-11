import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import style from './SocialMedia.module.scss'

const SocialMedia = () => {
  return (
    <div
      className={`${style.SocialMedia} d-flex justify-content-between w-50 mt-4`}>
      <a href=''>
        <FaFacebook className={style.icon} />
      </a>
      <a href=''>
        <FaTwitter className={style.icon} />
      </a>
      <a href=''>
        <FaInstagram className={style.icon} />
      </a>
      <a href=''>
        <FaYoutube className={style.icon} />
      </a>
    </div>
  )
}

export default SocialMedia
