import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewBlock from '@common/NewBlock/NewBlock'
import style from './SectionTransferencias.module.scss'

const TransferSection = () => {
  return (
    <section className={`${style.transferSection} py-4`}>
      <Container>
        <h3>Transfer Market</h3>
        <Row className={style.transferContainer}>
          <Col>
            <NewBlock
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus'
            />
          </Col>
          <Col>
            <NewBlock
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus'
            />
          </Col>
          <Col>
            <NewBlock
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus'
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TransferSection
