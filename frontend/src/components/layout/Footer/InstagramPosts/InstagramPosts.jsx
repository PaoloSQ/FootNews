import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import InstagramPost from './InstagramPost/InstagramPost'
import style from './InstagramPosts.module.scss'

const InstagramPosts = () => {
  return (
    <Container className='text-white'>
      <h5 className='mb-4'>Follow on Instagram</h5>
      <Row className={style.instagramRow}>
        <Col md={4} className={style.instagramCol}>
          <InstagramPost
            imageUrl='https://via.placeholder.com/100'
            altText=''
          />
        </Col>
        <Col md={4} className={style.instagramCol}>
          <InstagramPost
            imageUrl='https://via.placeholder.com/100'
            altText=''
          />
        </Col>
        <Col md={4} className={style.instagramCol}>
          <InstagramPost
            imageUrl='https://via.placeholder.com/100'
            altText=''
          />
        </Col>
        <Col md={4} className={style.instagramCol}>
          <InstagramPost
            imageUrl='https://via.placeholder.com/100'
            altText=''
          />
        </Col>
        <Col md={4} className={style.instagramCol}>
          <InstagramPost
            imageUrl='https://via.placeholder.com/100'
            altText=''
          />
        </Col>
        <Col md={4} className={style.instagramCol}>
          <InstagramPost
            imageUrl='https://via.placeholder.com/100'
            altText=''
          />
        </Col>
        <Col md={4} className={style.instagramCol}>
          <InstagramPost
            imageUrl='https://via.placeholder.com/100'
            altText=''
          />
        </Col>
        <Col md={4} className={style.instagramCol}>
          <InstagramPost
            imageUrl='https://via.placeholder.com/100'
            altText=''
          />
        </Col>
        <Col md={4} className={style.instagramCol}>
          <InstagramPost
            imageUrl='https://via.placeholder.com/100'
            altText=''
          />
        </Col>
      </Row>
    </Container>
  )
}

export default InstagramPosts
