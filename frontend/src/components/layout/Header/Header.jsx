import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar'
import styles from './Header.module.scss' // Estilos personalizados

const Header = () => {
  return (
    <Navbar expand='lg' className={styles.customNavbar}>
      <Navbar.Brand href='/' className={styles.navbarBrand}>
        Logo Inicio{/* logo inicio */}
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
  )
}

export default Header
