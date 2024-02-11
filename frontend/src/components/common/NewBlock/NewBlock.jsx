import React from 'react'
import { Card, Col } from 'react-bootstrap'
import style from './NewBlock.module.scss'

const NewBlock = ({ moreClasses, imageUrl, title, informant, date }) => {
  return (
    <Col xs={12} className={`${style.newBlock} ${moreClasses}`}>
      <Card className='bg-transparent border-0'>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <Card.Body className={`${style.description} d-flex flex-column`}>
          <div className={`${style.info} d-flex justify-content-between`}>
            <div>{informant}</div>
            <div>{date}</div>
          </div>
          <div className={style.text}>{title}</div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default NewBlock
