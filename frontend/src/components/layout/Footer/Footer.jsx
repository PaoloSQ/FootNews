import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Footer.module.scss' // Estilos personalizados

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}></div>
      </Container>
    </footer>
  )
}

export default Footer
