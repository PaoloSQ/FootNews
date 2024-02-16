import React from 'react'
import { Card, Col } from 'react-bootstrap'
import style from './NewBlock.module.scss'

const NewBlock = ({ moreClasses, imageUrl, title, informant, date }) => {
  return (
    <Col xs={12} className={`${style.newBlock} ${moreClasses}`}>
      <Card className='bg-transparent border-0'>
        <a href='' className={style.img_a}>
          <div
            className={style.img_div}
            style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </a>
        <Card.Body className={`${style.description} d-flex flex-column`}>
          <div className={`${style.info} d-flex justify-content-between`}>
            <div>{informant}</div>
            <div>{date}</div>
          </div>
          <div className={style.text}>
            <a href=''>{title}</a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default NewBlock
