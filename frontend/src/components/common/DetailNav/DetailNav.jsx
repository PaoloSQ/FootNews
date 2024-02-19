import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './DetailNav.module.scss'

const DetailNav = ({ sections, initialActiveSection, onSectionChange }) => {
  const [activeSection, setActiveSection] = useState(initialActiveSection)

  const handleClick = (section) => {
    setActiveSection(section)
    onSectionChange(section)
  }

  return (
    <Container className={`${styles.detailNav} mt-3 d-flex gap-5 text-center`}>
      <Row className='mx-5 gap-5'>
        {sections.map((section, index) => (
          <Col key={index}>
            <p
              className={`fs-5 m-0 pb-2 px-3 ${activeSection === section ? styles.active : ''}`}
              onClick={() => handleClick(section)}>
              {section}
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default DetailNav
