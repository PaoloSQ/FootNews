import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <main>
        <Container fluid className='login-page my-5'>
          <Row className='justify-content-center align-items-center h-100'>
            <Col md={6} lg={4}>
              <div className={`${styles.loginForm} login-form rounded p-5`}>
                <h2 className='text-center mb-4'>Iniciar Sesión</h2>
                <Form
                  className='d-flex flex-column gap-4'
                  onSubmit={handleSubmit}>
                  <Form.Group
                    className='d-flex flex-column gap-2'
                    controlId='formBasicEmail'>
                    <Form.Label className='fs-5'>Correo Electrónico</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Ingresa tu correo electrónico'
                    />
                  </Form.Group>
                  <Form.Group
                    className='d-flex flex-column gap-2'
                    controlId='formBasicPassword'>
                    <Form.Label className='fs-5'>Contraseña</Form.Label>
                    <Form.Control type='password' placeholder='Contraseña' />
                  </Form.Group>
                  <Button
                    variant='outline-danger'
                    type='submit'
                    className='w-100 my-3'>
                    Iniciar Sesión
                  </Button>
                  <div className='text-center'>
                    <p>
                      ¿No tienes una cuenta?{' '}
                      <Link to='/register'>
                        <strong>Regístrate</strong>
                      </Link>
                    </p>
                    <p>
                      ¿Olvidaste tu contraseña?{' '}
                      <Link to='/restablecer-contraseña'>
                        <strong>Restablecer</strong>
                      </Link>
                    </p>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default LoginPage
