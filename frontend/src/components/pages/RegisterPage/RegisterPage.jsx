import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'
import styles from './RegisterPage.module.scss'

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes manejar la lógica de registro
  }

  return (
    <>
      <Header />
      <main>
        <Container fluid className='register-page my-5'>
          <Row className='justify-content-center align-items-center h-100'>
            <Col md={6} lg={4}>
              <div
                className={`${styles.registerForm} register-form rounded p-5`}>
                <h2 className='text-center mb-4'>Crear una cuenta</h2>
                <Form className='gap-4' onSubmit={handleSubmit}>
                  <Row className='mb-3'>
                    <Col xs={12}>
                      <Form.Label className='fs-5'>Nombre</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Ingresa tu nombre'
                      />
                    </Col>
                  </Row>
                  <Row className='mb-3'>
                    <Col xs={12}>
                      <Form.Label className='fs-5'>
                        Correo Electrónico
                      </Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Ingresa tu correo electrónico'
                      />
                    </Col>
                  </Row>
                  <Row className='mb-3'>
                    <Col xs={12}>
                      <Form.Label className='fs-5'>Contraseña</Form.Label>
                      <Form.Control type='password' placeholder='Contraseña' />
                    </Col>
                  </Row>
                  <Row className='mb-3'>
                    <Col xs={12}>
                      <Form.Label className='fs-5'>
                        Confirmar Contraseña
                      </Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Confirma tu contraseña'
                      />
                    </Col>
                  </Row>
                  <Row className='mb-3'>
                    <Col xs={12} md={6}>
                      <Form.Label className='fs-5'>País</Form.Label>
                      <Form.Control type='text' placeholder='Ingresa tu país' />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label className='fs-5'>Teléfono</Form.Label>
                      <Form.Control
                        type='tel'
                        placeholder='Ingresa tu teléfono'
                      />
                    </Col>
                  </Row>
                  <Button
                    variant='outline-danger'
                    type='submit'
                    className='w-100 my-3'>
                    Registrarse
                  </Button>
                  <div className='text-center'>
                    <p>
                      ¿Ya tienes una cuenta?{' '}
                      <Link to='/loginPage'>
                        <strong>Inicia Sesión</strong>
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

export default RegisterPage
