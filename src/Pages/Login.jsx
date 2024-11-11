import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const userName = "admin"
    const pass = "123"
    let navigate = useNavigate()
    let submit = (event) => {
      event.preventDefault();
      if (user === userName && password === pass) {
        navigate('/')
      } else {
        alert("incorrect password")
      }
    }
    return (
      <div className='loginpage'>
        <Container className="login w-25 border border-2 border-primary rounded rounded-3">
          <div className='d-flex justify-content-center my-3'>
            <h2>Login</h2>
          </div>
          <Form onSubmit={submit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" value={user} onChange={(e) => setUser(e.target.value)} />

              <Form.Text className="text-muted mb-3">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button variant="primary" type="submit" className='w-100 my-4'>
                Login
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    )
  }

export default Login
