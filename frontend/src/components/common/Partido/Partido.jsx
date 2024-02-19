import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import Equipo from '../Equipo/Equipo'

const Partido = ({ equipoLocal, equipoVisitante, estadoPartido }) => {
  return (
    <Container className='d-flex border p-0'>
      <Col
        className='d-flex flex-column justify-content-center align-items-center border-end'
        md={8}>
        <Row className='d-flex w-100 py-3 px-2'>
          <Equipo {...equipoLocal} />
        </Row>
        <hr className='m-0 w-75' />
        <Row className='d-flex w-100 py-3 px-2'>
          <Equipo {...equipoVisitante} />
        </Row>
      </Col>
      <Col className='d-flex align-items-center justify-content-center' md={4}>
        <Badge bg='transparent' className='fs-5 mb-0'>
          {estadoPartido}
        </Badge>
      </Col>
    </Container>
  )
}

export default Partido
