import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import styles from './Equipo.module.scss'

const Equipo = ({ nombre, marcador, logo }) => {
  return (
    <Container
      xs={6}
      className={`${styles.equipoContainer} d-flex justify-content-between align-items-center `}>
      <Image src={logo} className={`${styles.equipoImage}`} roundedCircle />
      <p className='fs-5 text-center m-0'>{nombre}</p>
      <p className='fs-2 text-center m-0'>{marcador}</p>
    </Container>
  )
}

export default Equipo
