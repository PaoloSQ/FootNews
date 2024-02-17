import React from 'react'
import { Container } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import styles from './SearchInput.module.scss'

const SearchInput = ({ onChange, value, placeholder }) => {
  return (
    <Container
      className={`${styles.searchContainer} px-0 position-sticky top-0 left-0 `}>
      <div
        className={`${styles.searchInput} px-5 d-flex align-items-center justify-content-center`}>
        <BsSearch className='me-2' />
        <input
          className='w-100 px-4 py-3 fs-5 bg-transparent border-0 text-light'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      <hr className='my-0 w-100' />
    </Container>
  )
}

export default SearchInput
