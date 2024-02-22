import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './SectionTransferencias.module.scss'
import Transferencia from '@common/Transferencia/Transferencia'

const SeccionTransferencias = ({ transferencias }) => {
  return (
    <Container className={`${styles.seccionTransferencias} p-5`}>
      <h2>TRANSFERENCIAS</h2>
      <Row className='d-flex my-4'>
        {transferencias.map((transferencia) => (
          <Col md={4} key={transferencia.fecha}>
            <Transferencia {...transferencia} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SeccionTransferencias
