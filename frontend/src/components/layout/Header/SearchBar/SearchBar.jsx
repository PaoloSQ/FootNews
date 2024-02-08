import React from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs' // Icono de búsqueda de react-icons

const SearchBar = () => {
  return (
    <Form>
      <InputGroup>
        <FormControl
          type='text'
          placeholder='Buscar...'
          aria-label='Buscar'
          aria-describedby='basic-addon2'
        />
        <Button variant='primary' id='button-addon2'>
          <BsSearch />
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBar
