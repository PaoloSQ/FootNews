import React, { useState } from 'react'
import CustomButton from '@common/CustomButton/CustomButton'
import moment from 'moment'
import { Container } from 'react-bootstrap'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './DateCarousel.module.scss'

const DateCarousel = () => {
  const [currentDate, setCurrentDate] = useState(moment())

  const handlePreviousClick = () => {
    const newDate = moment(currentDate).subtract(3, 'days')
    setCurrentDate(newDate)
  }

  const handleNextClick = () => {
    const newDate = moment(currentDate).add(3, 'days')
    setCurrentDate(newDate)
  }

  const generateDates = () => {
    const startDate = moment(currentDate).subtract(1, 'days')
    const endDate = moment(startDate).add(2, 'days')
    const dates = [
      { date: startDate.format('DD/MM/YYYY') },
      { date: currentDate.format('DD/MM/YYYY') },
      { date: endDate.format('DD/MM/YYYY') },
    ]
    return dates
  }

  const dates = generateDates()

  return (
    <Container
      className={`${styles.dateCarousel} d-flex justify-content-between align-items-center my-4 mx-auto`}>
      <button
        className={`${styles.arrowButton} d-flex justify-content-center p-2`}
        onClick={handlePreviousClick}>
        <FaChevronLeft size={24} />
      </button>
      <div className='d-flex flex-wrap gap-4'>
        {dates.map((dateObj, index) => (
          <CustomButton
            key={index}
            url={`#`}
            text={dateObj.date}
            isActive={false}
          />
        ))}
      </div>
      <button
        className={`${styles.arrowButton} d-flex justify-content-center p-2`}
        onClick={handleNextClick}>
        <FaChevronRight size={24} />
      </button>
    </Container>
  )
}

export default DateCarousel
