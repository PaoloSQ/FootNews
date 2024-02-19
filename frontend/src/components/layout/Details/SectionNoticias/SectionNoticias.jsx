import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import NewAdove from '@common/NewAdove/NewAdove'
import NewBlock from '@common/NewBlock/NewBlock'
import NewList from '@common/NewList/NewList'

import styles from './SectionNoticias.module.scss'

const SectionNoticias = ({ noticias }) => {
  return (
    <Container className='p-5 '>
      <h3>NOTICIAS</h3>
      <Container className='mt-5 d-flex flex-column gap-5'>
        <Row className={`${styles.rowPrincipal}`}>
          <Col>
            <NewAdove {...noticias[0]} />
          </Col>
        </Row>
        <Row className={`${styles.rowSecundaria}`}>
          {noticias.slice(1, 3).map((noticia, index) => (
            <Col key={index}>
              <NewBlock {...noticia} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={8}>
            <Row>
              {noticias.slice(3, 6).map((noticia, index) => (
                <Col key={index}>
                  <NewBlock {...noticia} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4} className='d-flex flex-column gap-4'>
            {noticias.slice(6, 9).map((noticia, index) => (
              <Row key={index}>
                <NewList {...noticia} />
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default SectionNoticias
