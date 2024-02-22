import React from 'react'
import { Container, Table } from 'react-bootstrap'
import styles from './SectionClasificacion.module.scss'
import EquipoClasificacion from './EquipoClasificacion/EquipoClasificacion'

const SectionClasificacion = ({ clasificacion }) => {
  return (
    <Container className={`${styles.sectionClasificacion} p-5`}>
      <h2>CLASIFICACIÓN</h2>
      <Table className='mt-4' striped bordered hover responsive variant='dark'>
        <thead className={styles.headerRow}>
          <tr>
            <th className={styles.headerItem}>Posición</th>
            <th className={styles.headerItem}>Equipo</th>
            <th className={styles.headerItem}>PJ</th>
            <th className={styles.headerItem}>V</th>
            <th className={styles.headerItem}>E</th>
            <th className={styles.headerItem}>D</th>
            <th className={styles.headerItem}>GF</th>
            <th className={styles.headerItem}>GC</th>
            <th className={styles.headerItem}>DG</th>
            <th className={styles.headerItem}>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {clasificacion.map((equipo) => (
            <tr key={equipo.team_id} className={styles.equipoRow}>
              <EquipoClasificacion equipo={equipo} />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default SectionClasificacion
