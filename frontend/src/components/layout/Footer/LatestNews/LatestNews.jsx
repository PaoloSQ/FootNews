import React from 'react'
import { Container, Row } from 'react-bootstrap'
import FooterNew from './FooterNew/FooterNew'

const LatestNews = () => {
  return (
    <Container className='text-white'>
      <h5 className='mb-4'>Lastest News</h5>
      <Row className='mb-3'>
        <FooterNew
          imageUrl='https://via.placeholder.com/150'
          altText='News 1'
          content='Lorem ipsum dolor sit amet consectetur'
        />
      </Row>
      <Row className='mb-3'>
        <FooterNew
          imageUrl='https://via.placeholder.com/150'
          altText='News 2'
          content='Lorem ipsum dolor sit amet consectetur'
        />
      </Row>
      <Row className='mb-3'>
        <FooterNew
          imageUrl='https://via.placeholder.com/150'
          altText='News 3'
          content='Lorem ipsum dolor sit amet consectetur'
        />
      </Row>
    </Container>
  )
}

export default LatestNews
