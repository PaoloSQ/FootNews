import React from 'react'
import About from './About/About'
import Links from './FooterLinks/FooterLinks'
import LatestNews from './LatestNews/LatestNews'
import InstagramPosts from './InstagramPosts/InstagramPosts'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <About />
        <Links />
        <LatestNews />
        <InstagramPosts />
      </div>
      <div className={style.footer2}>
        <div className={style.footer2Container}>
          <p>
            <span>Privacy Policy</span> | <span>Terms & Conditions</span>
          </p>
          <p>All copyright (C) 2024 Reservad</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
