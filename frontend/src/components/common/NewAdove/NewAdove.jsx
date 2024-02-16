import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './NewAdove.module.scss'

const NewAdove = ({
  moreClasses,
  imageUrl,
  title,
  description,
  informant,
  date,
}) => {
  return (
    <Col xs={12} className={`d-flex h-100 ${style.newAdove} ${moreClasses}`}>
      <a
        href='#'
        className={`d-flex w-100 ${style.img_div}`}
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <div
          className={`${style.description} p-5 d-flex flex-column justify-content-end w-100`}>
          <h4 className='mb-4'>{title}</h4>
          <p>{description}</p>
          <div
            className={`${style.info} d-flex justify-content-between align-items-center pt-2`}>
            <div>{informant}</div>
            <div>{date}</div>
          </div>
        </div>
      </a>
    </Col>
  )
}

export default NewAdove
