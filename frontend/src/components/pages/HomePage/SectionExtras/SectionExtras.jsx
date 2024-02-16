import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewBlock from '@common/NewBlock/NewBlock'
import NewList from '@common/NewList/NewList'
import style from './SectionExtras.module.scss'

const SectionExtras = () => {
  return (
    <section className={`${style.sectionExtras} py-4`}>
      <Container>
        <Row>
          <Col>
            <h3 className='mb-4'>Extras</h3>
          </Col>
        </Row>
        <Row className={style.extrasContainer}>
          <Col md={4} className='mb-4'>
            <h4 className={style.title}>Entrevistas</h4>
            <NewBlock
              imageUrl='https://via.placeholder.com/300'
              title='Título de la Entrevista'
              informant='Informante'
              date='24/05/2023'
              moreClasses='mb-4'
            />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              text='Texto de la primera lista'
            />
            <hr className='my-4' />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              text='Texto de la segunda lista'
            />
            <hr className='my-4' />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              text='Texto de la tercera lista'
            />
          </Col>
          <Col md={4} className='mb-4'>
            <h4 className={style.title}>Curiosidades</h4>
            <NewBlock
              imageUrl='https://via.placeholder.com/300'
              title='Título de la Curiosidad'
              informant='Informante'
              date='24/05/2023'
              moreClasses='mb-4'
            />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              text='Texto de la primera lista'
            />
            <hr className='my-4' />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              text='Texto de la segunda lista'
            />
            <hr className='my-4' />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              text='Texto de la tercera lista'
            />
          </Col>
          <Col md={4} className='mb-4'>
            <h4 className={style.title}>Extras</h4>
            <NewBlock
              imageUrl='https://via.placeholder.com/300'
              title='Título del Extra'
              informant='Informante'
              date='24/05/2023'
              moreClasses='mb-4'
            />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              text='Texto de la primera lista'
            />
            <hr className='my-4' />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              text='Texto de la segunda lista'
            />
            <hr className='my-4' />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              text='Texto de la tercera lista'
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionExtras
