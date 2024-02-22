import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './JugadorCard.module.scss'

const JugadorCard = ({ nombre, imagenJugador, numero }) => {
  return (
    <Container className={`${styles.jugadorCard} h-100`}>
      <Row
        className={`${styles.imageContainer} d-flex align-items-center justify-content-center`}>
        <img
          className={styles.imagenJugador}
          src={imagenJugador}
          alt={nombre + '-Imagen'}
        />
      </Row>
      <Row className='h-100 d-flex align-items-center justify-content-center'>
        <h3 className={`${styles.nombreJugador} py-3 m-0 text-center`}>
          {(numero != null ? '#' + numero : '') + ' ' + nombre}
        </h3>
      </Row>
    </Container>
  )
}

export default JugadorCard
