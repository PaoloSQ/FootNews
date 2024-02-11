import React from 'react'
import { Image, Col } from 'react-bootstrap'
import style from './NewIcon.module.scss'

const NewsIcon = ({ moreClasses, imageUrl, text }) => {
  return (
    <Col xs={12} className={`${style.newIcon} ${moreClasses} text-center`}>
      <a
        href='#'
        className={`font-weight-bold d-flex justify-content-center align-items-center gap-4 ${style.link}`}>
        <Image
          src={imageUrl}
          alt={text}
          fluid
          roundedCircle
          className={style.image}
        />
        {text}
      </a>
    </Col>
  )
}

export default NewsIcon
