import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './FooterNew.module.scss'

const FooterNew = ({ imageUrl, altText, content }) => {
  return (
    <Container
      className={`${style.FooterNew} d-flex align-items-center justify-content-center`}>
      <Row>
        <Col xs={12} md={4}>
          <a href=''>
            <img
              src={imageUrl}
              alt={altText}
              className='w-100 h-auto rounded'
            />
          </a>
        </Col>
        <Col
          xs={12}
          md={8}
          className='d-flex align-items-center justify-content-center'>
          <a>{content}</a>
        </Col>
      </Row>
    </Container>
  )
}

export default FooterNew
