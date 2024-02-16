import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const CompetitionInfo = ({ image, competition, round }) => {
  return (
    <Container>
      <Row>
        <Col className=' bg-transparent border-0 d-flex align-items-center justify-content-between p-0 mb-3'>
          <Col className='d-flex text-center align-items-center'>
            <Image src={image} className='logo me-3' roundedCircle />
            <h2 className='mb-0'>{competition}</h2>
          </Col>
          <p className='fs-4 mb-0'>{round}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default CompetitionInfo
