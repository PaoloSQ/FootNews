import React from 'react'
import { Col, Card } from 'react-bootstrap'
import style from './NewList.module.scss'

const NewList = ({ moreClasses, imageUrl, informant, date, text }) => {
  return (
    <Col xs={12} className={`${style.newList} ${moreClasses}`}>
      <Card className='d-flex flex-row gap-4 bg-transparent border-0'>
        <a href='' className={style.img_a}>
          <div
            className={style.img_div}
            style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </a>
        <Card.Body className='d-flex flex-column p-0 justify-content-center'>
          <div className={style.text}>
            <a href=''>{text}</a>
          </div>
          <div className={`${style.info} d-flex justify-content-between mt-3`}>
            <div>{informant}</div>
            <div>{date}</div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default NewList
