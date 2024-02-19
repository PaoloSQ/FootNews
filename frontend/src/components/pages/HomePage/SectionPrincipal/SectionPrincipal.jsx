import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewAdove from '@common/NewAdove/NewAdove'
import NewList from '@common/NewList/NewList'

const SectionPrincipal = () => {
  return (
    <Container className='principal_section pt-4 pb-4'>
      <Row className='justify-content-between'>
        <Col className='d-flex'>
          <NewAdove
            imageUrl='https://via.placeholder.com/100'
            title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?'
            informant='Informante'
            date='24/05/2023'
          />
        </Col>
        <Col xs={12} md={4} className='mt-4 mt-md-0'>
          <div className='whats_new_container'>
            <h3 className='mb-4'>What's New</h3>
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              title='Lorem ipsum dolor sit amet adipisicing elit. Temporibus'
            />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              title='Lorem ipsum dolor sit amet adipisicing elit. Temporibus'
            />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              title='Lorem ipsum dolor sit amet adipisicing elit. Temporibus'
            />
            <NewList
              imageUrl='https://via.placeholder.com/100'
              informant='Informante'
              date='24/05/2023'
              title='Lorem ipsum dolor sit amet adipisicing elit. Temporibus'
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SectionPrincipal
