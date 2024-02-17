import React, { useState, useEffect } from 'react'
import { Row, Container } from 'react-bootstrap'
import SearchInput from './SearchInput/SearchInput'
import SearchResults from './SearchResults/SearchResults'
import styles from './Search.module.scss'

const Search = ({ isOpen, closeSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState({})

  const Array1 = [
    {
      result: 'Camiseta roja de hombre',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Zapatillas deportivas blancas',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Silla de escritorio ergonómica',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Teléfono móvil Samsung Galaxy S23',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Libro "El principito"',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
  ]

  const Array2 = [
    {
      result: 'Curso online de desarrollo web',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Receta de pizza casera',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Tutorial de maquillaje natural',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Guía de viaje a Roma',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Canción "Despacito" de Luis Fonsi',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
  ]

  const Array3 = [
    {
      result: 'Película "El Padrino"',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Serie "Juego de Tronos"',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Videojuego "Grand Theft Auto V"',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Cuadro "La Gioconda" de Leonardo da Vinci',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
    {
      result: 'Monumento "La Torre Eiffel"',
      imageUrl:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte054a6498283e7a1/61e08c79b7869656aa8ff1cd/GettyImages-1362593682.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    },
  ]

  useEffect(() => {
    const handleSearch = (query) => {
      const resultsArray1 = Array1.filter((result) =>
        result.result.toLowerCase().includes(query.toLowerCase()),
      ).slice(0, 3)
      const resultsArray2 = Array2.filter((result) =>
        result.result.toLowerCase().includes(query.toLowerCase()),
      ).slice(0, 3)
      const resultsArray3 = Array3.filter((result) =>
        result.result.toLowerCase().includes(query.toLowerCase()),
      ).slice(0, 3)

      const combinedResults = {
        section1: resultsArray1,
        section2: resultsArray2,
        section3: resultsArray3,
      }

      setSearchResults(combinedResults)
    }

    handleSearch(searchQuery)
  }, [searchQuery])

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div
      className={`${isOpen ? 'd-flex' : 'd-none'} ${styles.search} position-fixed top-0 d-flex`}
      onClick={closeSearch}>
      <div
        className={`${isOpen ? 'animate__animated animate__zoomIn d-flex' : 'd-none'} ${styles.searchContainer} flex-column align-items-center pb-4 position-relative w-50 mx-auto mt-5`}
        onClick={(event) => event.stopPropagation()}>
        <Row className='w-100 position-relative align-items-center justify-content-center'>
          <SearchInput
            value={searchQuery}
            onChange={handleInputChange}
            placeholder='Buscar...'
          />
          <Container>
            {Object.values(searchResults).some(
              (section) => section.length > 0,
            ) && <SearchResults sections={Object.values(searchResults)} />}
          </Container>
        </Row>
      </div>
    </div>
  )
}

export default Search
