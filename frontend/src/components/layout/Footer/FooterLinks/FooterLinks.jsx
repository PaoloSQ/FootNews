import React from 'react'
import style from './FooterLinks.module.scss'

const FooterLinks = () => {
  return (
    <div className={style.FooterLinks}>
      <h5>Useful Links</h5>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Partidos</a>
        </li>
        <li>
          <a href='#'>Equipos</a>
        </li>
        <li>
          <a href='#'>Competiciones</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterLinks
