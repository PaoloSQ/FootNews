import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewAdove from '@common/NewAdove/NewAdove'
import styles from './SectionNew.module.scss'

const SectionNew = () => {
  return (
    <Container className={`${styles.sectionNew} d-flex py-4`}>
      <NewAdove
        imageUrl='https://via.placeholder.com/100'
        title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?'
        informant='Informante'
        date='24/05/2023'
      />
    </Container>
  )
}

export default SectionNew
