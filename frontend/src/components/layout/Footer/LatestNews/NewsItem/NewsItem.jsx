import React from 'react'
import style from './NewsItem.module.scss'

const NewsItem = ({ imageUrl, altText, content }) => {
  return (
    <div className={style.NewsItem}>
      <img src={imageUrl} alt={altText} />
      <p>{content}</p>
    </div>
  )
}

export default NewsItem
