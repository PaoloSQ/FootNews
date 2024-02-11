import React from 'react'
import style from './InstagramPost.module.scss'

const InstagramPost = ({ imageUrl, altText }) => {
  return (
    <div className={style.instagramPost}>
      <a href='#'>
        <img src={imageUrl} alt={altText} className='rounded' />
      </a>
    </div>
  )
}

export default InstagramPost
