import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

const FooterLinks = () => {
  return (
    <Container className='text-white'>
      <h5 className='mb-4'>Useful Links</h5>
      <ListGroup variant='flush'>
        <ListGroup.Item className='border-0 bg-transparent'>
          <a href='#' className='text-white'>
            Home
          </a>
        </ListGroup.Item>
        <ListGroup.Item className='border-0 bg-transparent'>
          <a href='#' className='text-white'>
            Partidos
          </a>
        </ListGroup.Item>
        <ListGroup.Item className='border-0 bg-transparent'>
          <a href='#' className='text-white'>
            Equipos
          </a>
        </ListGroup.Item>
        <ListGroup.Item className='border-0 bg-transparent'>
          <a href='#' className='text-white'>
            Competiciones
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  )
}

export default FooterLinks
