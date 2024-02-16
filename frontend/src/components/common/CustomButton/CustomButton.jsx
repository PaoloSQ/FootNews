import React from 'react'
import styles from './CustomButton.module.scss'

const CustomButton = ({ url, text, isActive }) => {
  const btnClass = isActive ? 'active' : ''

  return (
    <a href={url} className={`${btnClass} ${styles.customBtn}`}>
      {text}
    </a>
  )
}

export default CustomButton
