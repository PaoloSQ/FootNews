// Header.jsx

import React from 'react'
import { Navbar, Nav, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar'
import styles from './Header.module.scss'
import DropMenu from './DropMenu/DropMenu'

const Header = () => {
  return (
    <>
      <header className={`${styles.header}`}>
        <Container className={styles.navbarContainer}>
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
                <Nav.Link as={Link} className={styles.navLink}>
                  Equipos
                </Nav.Link>
                <Nav.Link as={Link} className={styles.navLink}>
                  Competencias
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <SearchBar />
          </Navbar>
        </Container>
      </header>
      <DropMenu />
    </>
  )
}

export default Header
