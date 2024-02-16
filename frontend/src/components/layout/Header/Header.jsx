import React from 'react'
import { Navbar, Nav, Image, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar'
import styles from './Header.module.scss'
import NewList from '@common/NewList/NewList'
import NewIcon from '@common/NewIcon/NewIcon'

const Header = () => {
  return (
    <header className={`${styles.header} position-relative`}>
      <Container className={`${styles.navbarContainer} position-relative`}>
        <Navbar expand='lg' className={styles.customNavbar}>
          <Navbar.Brand as={Link} to='/' className={styles.navbarBrand}>
            <Image src='logo.png' id={styles.logo_img} fluid rounded />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/partidos' className={styles.navLink}>
                Partidos
              </Nav.Link>
              <Nav.Link as={Link} to='/equipos' className={styles.navLink}>
                Equipos
              </Nav.Link>
              <Nav.Link as={Link} to='/competencias' className={styles.navLink}>
                Competencias
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <SearchBar />
        </Navbar>
      </Container>
      <div
        className={`${styles.dropmenu} py-4 w-100 position-absolute top-100`}>
        <Container>
          <Row>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <Row className='d-flex flex-column gap-4'>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row className='d-flex flex-column gap-4'>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row className='d-flex flex-column gap-4'>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                    <Col md={6}>
                      <a href=''>
                        <NewIcon
                          imageUrl='https://via.placeholder.com/100'
                          text='Lorem ipsum.'
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              md={4}
              className='d-flex flex-column justify-content-center gap-4'>
              <Row>
                <NewList
                  imageUrl='https://via.placeholder.com/100'
                  informant='Informante'
                  date='24/05/2023'
                  text='Texto de la primera lista'
                />
              </Row>
              <Row>
                <NewList
                  imageUrl='https://via.placeholder.com/100'
                  informant='Informante'
                  date='24/05/2023'
                  text='Texto de la primera lista'
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Header
