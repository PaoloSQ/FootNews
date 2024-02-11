import React from 'react'
import { Col, Card } from 'react-bootstrap'
import style from './NewList.module.scss'

const NewList = ({ moreClasses, imageUrl, informant, date, text }) => {
  return (
    <Col xs={12} className={`${style.newList} ${moreClasses}`}>
      <Card className='d-flex flex-row gap-4 bg-transparent border-0'>
        <div
          className={style.image}
          style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <Card.Body className='d-flex flex-column p-0 justify-content-center'>
          <div className={style.text}>{text}</div>
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
