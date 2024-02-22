import React from 'react'
import { Container, Row, Col, Image, Badge } from 'react-bootstrap'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import styles from './Transferencia.module.scss'

const Transferencia = ({
  fecha,
  tipo,
  dinero,
  equipoOrigen,
  equipoDestino,
  jugador,
}) => {
  return (
    <Container className={`${styles.transferencia} my-3`}>
      <Row className='text-center py-3'>
        <h3 className={`${styles.nombreJugador} mb-0`}>{jugador.nombre}</h3>
      </Row>
      <Row className='border-top border-bottom py-5 px-4 text-center'>
        <Col
          md={4}
          className='d-flex flex-column gap-2 align-items-center justify-content-center'>
          <Image
            className={styles.logoEquipo}
            src={equipoOrigen.logo}
            alt={equipoOrigen.nombre}
          />
          <span className={styles.nombreEquipo}>{equipoOrigen.nombre}</span>
        </Col>
        <Col md={4} className='d-flex flex-column justify-content-center'>
          <Row>
            <FaArrowLeftLong className={styles.arrowLeft} />
          </Row>
          <Row>
            <FaArrowRightLong className={styles.arrowRight} />
          </Row>
        </Col>
        <Col
          md={4}
          className='d-flex flex-column gap-2 align-items-center justify-content-center'>
          <Image
            className={styles.logoEquipo}
            src={equipoDestino.logo}
            alt={equipoDestino.nombre}
          />
          <span className={styles.nombreEquipo}>{equipoDestino.nombre}</span>
        </Col>
      </Row>
      <Row className='d-flex align-items-center justify-content-between p-4'>
        <Col md={2} className='text-end'>
          {dinero && (
            <span className={`${styles.valorDinero} fs-4 font-weight-bold`}>
              {dinero}
            </span>
          )}
        </Col>
        <Col md={4}>
          <Badge className={`${styles.fecha} fs-5`}>{fecha}</Badge>
        </Col>
        <Col md={4}>
          <Badge className={`${styles.tipo} fs-5`} bg='success'>
            {tipo}
          </Badge>
        </Col>
      </Row>
    </Container>
  )
}

export default Transferencia
