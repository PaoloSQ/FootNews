import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import About from './About/About'
import Links from './FooterLinks/FooterLinks'
import LatestNews from './LatestNews/LatestNews'
import InstagramPosts from './InstagramPosts/InstagramPosts'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={`${style.footer} pt-4`}>
      <Container className='py-4'>
        <Row className='justify-content-between g-0'>
          <Col md={3}>
            <About />
          </Col>
          <Col md={2}>
            <Links />
          </Col>
          <Col md={3}>
            <LatestNews />
          </Col>
          <Col md={3}>
            <InstagramPosts />
          </Col>
        </Row>
      </Container>
      <div className={`${style.footer2} pt-4`}>
        <Container>
          <Row className='justify-content-between align-items-center'>
            <Col md={8}>
              <p>
                <span>Privacy Policy</span> | <span>Terms & Conditions</span>
              </p>
            </Col>
            <Col md={4}>
              <p className='text-end'>All copyright (C) 2024 Reservad</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
