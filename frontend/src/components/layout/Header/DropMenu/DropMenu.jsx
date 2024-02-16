// DropMenu.jsx
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewIcon from '@common/NewIcon/NewIcon'
import NewList from '@common/NewList/NewList'
import styles from './DropMenu.module.scss'

const DropMenu = ({ isOpen, setIsOpen }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState(null)

  const handleMouseEnter = () => {
    setIsHovering(true)
    clearTimeout(hoverTimeout)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsHovering(false)
      setIsOpen(false)
    }, 500)
    setHoverTimeout(timeout)
  }

  return (
    <div
      className={`${styles.dropmenu} py-4 ${isOpen || isHovering ? styles.open : ''}`}
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
