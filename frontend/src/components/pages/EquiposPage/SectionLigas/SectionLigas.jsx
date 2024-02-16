import React, { useState } from 'react'
import { Container, Col } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

import styles from './SectionLigas.module.scss'
import CompetitionInfo from '@common/CompetitionInfo/CompetitionInfo'
import NewAdove from '@common/NewAdove/NewAdove'
import NewsIcon from '@common/NewIcon/NewIcon'

const teams = [
  {
    logo: 'https://png2.cleanpng.com/sh/b4643277f450994513eb862e87e32d33/L0KzQYm3V8A3N6t1kJH0aYP2gLBuTf1idpRtfeV9ZYKwhbBwlPVlNZcye594bHSwhMPohvZwepUyf954comwd732kwkuaaQyTdQ8ZkPodoSAUshiO2UzS6UCOUS5RYa4VcMxQGg2TaUENEa8QnB3jvc=/kisspng-manchester-united-f-c-old-trafford-glory-glory-as-5b3f3ef3728a34.3379465515308715394692.png',
    name: 'Real Madrid',
    league: 'LaLiga',
  },
  {
    logo: 'https://png2.cleanpng.com/sh/b4643277f450994513eb862e87e32d33/L0KzQYm3V8A3N6t1kJH0aYP2gLBuTf1idpRtfeV9ZYKwhbBwlPVlNZcye594bHSwhMPohvZwepUyf954comwd732kwkuaaQyTdQ8ZkPodoSAUshiO2UzS6UCOUS5RYa4VcMxQGg2TaUENEa8QnB3jvc=/kisspng-manchester-united-f-c-old-trafford-glory-glory-as-5b3f3ef3728a34.3379465515308715394692.png',
    name: 'FC Barcelona',
    league: 'LaLiga',
  },
  {
    logo: 'https://png2.cleanpng.com/sh/b4643277f450994513eb862e87e32d33/L0KzQYm3V8A3N6t1kJH0aYP2gLBuTf1idpRtfeV9ZYKwhbBwlPVlNZcye594bHSwhMPohvZwepUyf954comwd732kwkuaaQyTdQ8ZkPodoSAUshiO2UzS6UCOUS5RYa4VcMxQGg2TaUENEa8QnB3jvc=/kisspng-manchester-united-f-c-old-trafford-glory-glory-as-5b3f3ef3728a34.3379465515308715394692.png',
    name: 'Atlético de Madrid',
    league: 'LaLiga',
  },
  {
    logo: 'https://png2.cleanpng.com/sh/b4643277f450994513eb862e87e32d33/L0KzQYm3V8A3N6t1kJH0aYP2gLBuTf1idpRtfeV9ZYKwhbBwlPVlNZcye594bHSwhMPohvZwepUyf954comwd732kwkuaaQyTdQ8ZkPodoSAUshiO2UzS6UCOUS5RYa4VcMxQGg2TaUENEa8QnB3jvc=/kisspng-manchester-united-f-c-old-trafford-glory-glory-as-5b3f3ef3728a34.3379465515308715394692.png',
    name: 'Manchester United',
    league: 'Premier League',
  },
  {
    logo: 'https://png2.cleanpng.com/sh/b4643277f450994513eb862e87e32d33/L0KzQYm3V8A3N6t1kJH0aYP2gLBuTf1idpRtfeV9ZYKwhbBwlPVlNZcye594bHSwhMPohvZwepUyf954comwd732kwkuaaQyTdQ8ZkPodoSAUshiO2UzS6UCOUS5RYa4VcMxQGg2TaUENEa8QnB3jvc=/kisspng-manchester-united-f-c-old-trafford-glory-glory-as-5b3f3ef3728a34.3379465515308715394692.png',
    name: 'Liverpool FC',
    league: 'Premier League',
  },
  {
    logo: 'https://png2.cleanpng.com/sh/b4643277f450994513eb862e87e32d33/L0KzQYm3V8A3N6t1kJH0aYP2gLBuTf1idpRtfeV9ZYKwhbBwlPVlNZcye594bHSwhMPohvZwepUyf954comwd732kwkuaaQyTdQ8ZkPodoSAUshiO2UzS6UCOUS5RYa4VcMxQGg2TaUENEa8QnB3jvc=/kisspng-manchester-united-f-c-old-trafford-glory-glory-as-5b3f3ef3728a34.3379465515308715394692.png',
    name: 'Manchester City',
    league: 'Premier League',
  },
]

const SectionEquipos = () => {
  return (
    <Container>
      <Container fluid className='d-flex flex-column h-100 gap-4 p-4 border'>
        <CompetitionInfo
          image='https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png'
          competition='Champions League'
        />

        <Container className={`${styles.Equipos} d-flex flex-wrap`}>
          <Col md={12} className={`d-flex flex-wrap p-4 gap-`}>
            {teams.map((team) => (
              <Col
                className={`${styles.equipoCol} p-2`}
                key={team.name}
                xs={12}
                md={6}
                lg={3}>
                <NewsIcon
                  imageUrl={team.logo}
                  text={team.name}
                  linkProps={{ href: `#${team.name.toLowerCase()}` }}
                />
              </Col>
            ))}
          </Col>

          {/* <Col md={4}>
            <NewAdove
              imageUrl='https://via.placeholder.com/100'
              title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
              description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?'
              informant='Informante'
              date='24/05/2023'
            />
          </Col> */}
        </Container>

        <Container className='mt-auto justify-content-center'>
          <a href='#' className='text-muted'>
            Ir a las clasificaciones <BsArrowRight />
          </a>
        </Container>
      </Container>
    </Container>
  )
}

export default SectionEquipos
