import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewAdove from '@common/NewAdove/NewAdove'
import NewIcon from '@common/NewIcon/NewIcon'

const CompetitionSection = () => {
  return (
    <Container className='competition_section py-4'>
      <Row className='flex-wrap'>
        <Col xs={12} md={8} className='d-flex flex-column'>
          <Row>
            <Col>
              <h3 className='pb-3'>Competiciones</h3>
            </Col>
          </Row>
          <Row className='flex-grow-1'>
            <Col className='d-flex'>
              <NewAdove
                imageUrl='https://via.placeholder.com/100'
                title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?'
                informant='Informante'
                date='24/05/2023'
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className='pt-4'>
          <div className='competitionsContainer mt-md-4 pb-4'>
            <h3>Torneos</h3>
            <Container fluid className='pt-4'>
              <Row className='mb-3'>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='ligasContainer pb-4'>
            <h3>Ligas</h3>
            <Container fluid className='pt-4'>
              <Row className='mb-3'>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
                <Col>
                  <NewIcon
                    imageUrl='https://via.placeholder.com/100'
                    text='Lorem ipsum.'
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CompetitionSection
