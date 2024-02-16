// DropMenu.jsx

import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewIcon from '@common/NewIcon/NewIcon'
import NewList from '@common/NewList/NewList'
import styles from './DropMenu.module.scss'

const DropMenu = () => {
  // Controlamos la visibilidad del menú desplegable con useState
  const [isVisible, setIsVisible] = useState(false)

  const handleMouseEnter = () => setIsVisible(true)
  const handleMouseLeave = () => setIsVisible(false)

  return (
    <div
      className={`${styles.dropmenu} py-4 w-100`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={4}>
                <Row className='d-flex flex-column gap-4'>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row className='d-flex flex-column gap-4'>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row className='d-flex flex-column gap-4'>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                  <Col md={6}>
                    <a href=''>
                      <NewIcon
                        imageUrl='https://via.placeholder.com/100'
                        text='Lorem ipsum.'
                      />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            md={4}
            className='d-flex flex-column justify-content-center gap-4'>
            <Row>
              <NewList
                imageUrl='https://via.placeholder.com/100'
                informant='Informante'
                date='24/05/2023'
                text='Texto de la primera lista'
              />
            </Row>
            <Row>
              <NewList
                imageUrl='https://via.placeholder.com/100'
                informant='Informante'
                date='24/05/2023'
                text='Texto de la primera lista'
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DropMenu
