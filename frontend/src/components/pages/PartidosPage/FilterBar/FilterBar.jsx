import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import DateCarousel from './DataCarousel/DataCarousel'
import FilterButtons from './FilterButtons/FilterButtons'
import styles from './FilterBar.module.scss'

const FilterBar = () => {
  return (
    <Container className={`${styles.filterBar} p-4`}>
      <Row>
        <Col md={8}>
          <div className='date-carousel'>
            <h2 className={`title ${styles.title}`}>
              Mes del calendario: Febrero
            </h2>
            <DateCarousel />
          </div>
        </Col>
        <Col md={4}>
          <div className='filter-buttons'>
            <h2 className={`title ${styles.title}`}>
              Filtrar por tipo de partido
            </h2>
            <FilterButtons />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default FilterBar
