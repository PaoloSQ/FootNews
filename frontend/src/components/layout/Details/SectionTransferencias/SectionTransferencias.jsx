import React, { useState, useEffect } from 'react'
import styles from './SectionTransferencias.module.scss'
import Transferencia from '@common/Transferencia/Transferencia'

const dataTransferencias = [
  {
    fecha: '2023-08-01',
    tipo: 'Traspaso',
    dinero: '€50M',
    equipoOrigen: {
      id: 33,
      nombre: 'Manchester United',
      logo: 'https://media.api-sports.io/football/teams/33.png',
    },
    equipoDestino: {
      id: 45,
      nombre: 'Everton',
      logo: 'https://media.api-sports.io/football/teams/45.png',
    },
    jugador: {
      id: 50773,
      nombre: 'W. Rooney',
    },
  },
]

const SeccionTransferencias = () => {
  const [transferencias, setTransferencias] = useState([])

  useEffect(() => {
    const sortedTransferencias = dataTransferencias.sort((a, b) => {
      return new Date(a.fecha) - new Date(b.fecha)
    })

    setTransferencias(sortedTransferencias)
  }, [])

  return (
    <section className={styles.seccionTransferencias}>
      <h2>Transferencias</h2>
      {transferencias.map((transferencia) => (
        <Transferencia key={transferencia.fecha} {...transferencia} />
      ))}
    </section>
  )
}

export default SeccionTransferencias
