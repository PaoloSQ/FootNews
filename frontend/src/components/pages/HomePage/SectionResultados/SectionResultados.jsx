import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewBlock from '@common/NewBlock/NewBlock'
import style from './SectionResultados.module.scss'

const SectionResultados = () => {
  return (
    <section className={`${style.sectionResultados} py-4`}>
      <Container>
        <h3 className='mb-4'>Resultados</h3>
        <Row className={style.resultadosContainer}>
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

export default SectionResultados
