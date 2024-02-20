import React from 'react'
import styles from './Transferencia.module.scss'
import { formatDate } from '@utils/helpers'

const Transferencia = ({
  fecha,
  tipo,
  dinero,
  equipoOrigen,
  equipoDestino,
  jugador,
}) => {
  return (
    <article className={styles.transferencia}>
      <div className={styles.cabecera}>
        <h3 className={styles.fecha}>{formatDate(fecha)}</h3>
        <h4 className={styles.tipo}>{tipo}</h4>
      </div>
      <div className={styles.cuerpo}>
        <div className={styles.equipoOrigen}>
          <img
            className={styles.logoEquipo}
            src={equipoOrigen.logo}
            alt={equipoOrigen.nombre}
          />
          <span className={styles.nombreEquipo}>{equipoOrigen.nombre}</span>
        </div>
        <div className={styles.jugador}>
          <span className={styles.nombreJugador}>{jugador.nombre}</span>
        </div>
        <div className={styles.equipoDestino}>
          <img
            className={styles.logoEquipo}
            src={equipoDestino.logo}
            alt={equipoDestino.nombre}
          />
          <span className={styles.nombreEquipo}>{equipoDestino.nombre}</span>
        </div>
      </div>
      {dinero && (
        <div className={styles.dinero}>
          <span className={styles.valorDinero}>{dinero}</span>
        </div>
      )}
    </article>
  )
}

export default Transferencia
