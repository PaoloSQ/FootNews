// SectionPlantilla.js
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import JugadorCard from '@common/JugadorCard/JugadorCard'

const SectionPlantilla = ({ jugadores }) => {
  const jugadoresPorPosicion = jugadores.reduce((acc, jugador) => {
    const posicion = jugador.position.toLowerCase()
    acc[posicion] = acc[posicion] || []
    acc[posicion].push(jugador)
    return acc
  }, {})

  return (
    <Container className='p-5 position-relative'>
      <h2>PLANTILLA</h2>
      {Object.entries(jugadoresPorPosicion).map(([posicion, jugadores]) => (
        <Row key={posicion}>
          <h3 className='mt-5 mb-4 fs-2'>{posicion.toUpperCase()}</h3>
          {jugadores.slice(0, 4).map((jugador, index) => {
            const colKey = `jugadores-col-${index}`
            return (
              <Col md={3} key={colKey}>
                <JugadorCard
                  nombre={jugador.name}
                  imagenJugador={jugador.photo}
                  numero={jugador.number}
                />
              </Col>
            )
          })}
        </Row>
      ))}
    </Container>
  )
}

export default SectionPlantilla
