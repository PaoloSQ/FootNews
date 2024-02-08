import React from 'react'
import style from './InstagramPost.module.scss'

const InstagramPost = ({ imageUrl, altText }) => {
  return (
    <div className={style.instagramPost}>
      <img src={imageUrl} alt={altText} />
    </div>
  )
}

export default InstagramPost
