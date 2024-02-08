import React from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs' // Icono de búsqueda de react-icons
import style from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <Form>
      <InputGroup>
        <FormControl
          type='text'
          placeholder='Buscar...'
          aria-label='Buscar'
          aria-describedby='basic-addon2'
          className={style.input_search}
        />
        <Button id='btn_search' className={style.btn_search}>
          <BsSearch />
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBar
