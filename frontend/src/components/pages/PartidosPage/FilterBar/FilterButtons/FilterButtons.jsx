import React from 'react'
import CustomButton from '@common/CustomButton/CustomButton'
import { Container } from 'react-bootstrap'
import styles from './FilterButtons.module.scss'

const FilterButtons = () => {
  return (
    <Container
      className={`d-flex my-4 gap-3 align-items-center justify-content-center ${styles.filterButtons}`}>
      <CustomButton url='#' text='Todos' isActive={true} />
      <CustomButton url='#' text='En Directo' isActive={false} />
      <CustomButton url='#' text='Seguidos' isActive={false} />
    </Container>
  )
}

export default FilterButtons
