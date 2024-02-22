import React from 'react'
import styles from './EquipoClasificacion.module.scss'

const EquipoClasificacion = ({ equipo }) => {
  return (
    <>
      <td className={styles.equipoColumn}>
        <strong>{equipo.rank}</strong>
      </td>
      <td className={`${styles.equipoColumn} px-3 py-2 gap-2`}>
        <img
          src={equipo.logo}
          alt={equipo.teamName}
          className={`${styles.logo} m-2`}
        />
        <span>{equipo.teamName}</span>
      </td>
      <td className={styles.equipoColumn}>{equipo.all.matchsPlayed}</td>
      <td className={styles.equipoColumn}>{equipo.all.win}</td>
      <td className={styles.equipoColumn}>{equipo.all.draw}</td>
      <td className={styles.equipoColumn}>{equipo.all.lose}</td>
      <td className={styles.equipoColumn}>{equipo.all.goalsFor}</td>
      <td className={styles.equipoColumn}>{equipo.all.goalsAgainst}</td>
      <td className={styles.equipoColumn}>{equipo.goalsDiff}</td>
      <td className={styles.equipoColumn}>{equipo.points}</td>
    </>
  )
}

export default EquipoClasificacion
