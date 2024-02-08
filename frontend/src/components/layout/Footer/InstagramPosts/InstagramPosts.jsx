import React from 'react'
import styles from './InstagramPosts.module.scss'
import InstagramPost from './InstagramPost/InstagramPost'

const InstagramPosts = () => {
  return (
    <div className={styles.InstagramPosts}>
      <h5>Follow on Instagram</h5>
      <div className={styles.instagramFeed}>
        <InstagramPost imageUrl='https://via.placeholder.com/100' altText='' />
        <InstagramPost imageUrl='https://via.placeholder.com/100' altText='' />
        <InstagramPost imageUrl='https://via.placeholder.com/100' altText='' />
        <InstagramPost imageUrl='https://via.placeholder.com/100' altText='' />
        <InstagramPost imageUrl='https://via.placeholder.com/100' altText='' />
      </div>
    </div>
  )
}

export default InstagramPosts
