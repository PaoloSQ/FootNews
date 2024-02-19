import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import styles from './DetailBanner.module.scss'

const DetailBanner = ({ detailName, imageURL }) => {
  return (
    <div className={`${styles.detailBanner} py-5`}>
      <Container className='px-5 d-flex align-items-center justify-content-center'>
        <Col md={2}>
          <Row>
            <Image className={`${styles.Image}`} src={imageURL} />
          </Row>
        </Col>
        <Col md={10}>
          <Row>
            <h1>{detailName}</h1>
          </Row>
        </Col>
      </Container>
    </div>
  )
}

export default DetailBanner
