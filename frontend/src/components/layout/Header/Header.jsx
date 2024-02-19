// Header.jsx
import React, { useState } from 'react'
import { Navbar, Nav, Image, Container } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Search from './Search/Search'
import styles from './Header.module.scss'
import DropMenu from './DropMenu/DropMenu'
import 'animate.css'

const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  const openSearch = () => {
    setIsOpenSearch(true)
  }

  const closeSearch = () => {
    setIsOpenSearch(false)
  }

  const [isOpen, setIsOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState(null)

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false)
    }, 500)
    setHoverTimeout(timeout)
  }

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.navbarContainer}>
          <Navbar expand='lg' className={styles.customNavbar}>
            <Navbar.Brand as={Link} to='/' className={styles.navbarBrand}>
              <Image
                src={`${import.meta.env.VITE_HOST_URL}/logo.png`}
                id={styles.logo_img}
                fluid
                rounded
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link as={Link} to='/partidos' className={styles.navLink}>
                  Partidos
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={styles.navLink}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  Equipos
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={styles.navLink}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  Competencias
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <BsSearch
              className={`${styles.btnSearch} ${isOpenSearch ? 'animate__animated animate__fadeIn' : ''}`}
              onClick={openSearch}
            />
          </Navbar>
        </Container>
      </header>
      <DropMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Search isOpen={isOpenSearch} closeSearch={closeSearch} />
    </>
  )
}

export default Header
