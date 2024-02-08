import React from 'react'
import style from './About.module.scss'
import SocialMedia from '../../../common/SocialMedia/SocialMedia'

const About = () => {
  return (
    <div className={style.About}>
      <h4>FootNews</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit vero
        quisquam ducimus rem consequuntur esse quibusdam. Soluta excepturi cum
        ratione
      </p>
      <SocialMedia />
    </div>
  )
}

export default About
