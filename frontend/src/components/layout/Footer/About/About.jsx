import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SocialMedia from '../../../common/SocialMedia/SocialMedia'
import style from './About.module.scss'

const About = () => {
  return (
    <Container className={style.About}>
      <Row>
        <Col>
          <Row>
            <Col>
              <h4 className='mb-4'>FootNews</h4>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                vero quisquam ducimus rem consequuntur esse quibusdam. Soluta
                excepturi cum ratione
              </p>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <SocialMedia />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default About
