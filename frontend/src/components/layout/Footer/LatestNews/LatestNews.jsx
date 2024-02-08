import React from 'react'
import NewsItem from './NewsItem/NewsItem'
import style from './LatestNews.module.scss'

const LatestNews = () => {
  return (
    <div className={style.LastestNews}>
      <h5>Lastest News</h5>
      <NewsItem
        imageUrl='https://via.placeholder.com/150'
        altText='News 1'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, veniam!'
      />
      <NewsItem
        imageUrl='https://via.placeholder.com/150'
        altText='News 2'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, veniam!'
      />
      <NewsItem
        imageUrl='https://via.placeholder.com/150'
        altText='News 3'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, veniam!'
      />
    </div>
  )
}

export default LatestNews
