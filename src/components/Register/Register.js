import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="p-5 bg-light">
        <Container>
          <div className="w-50 mx-auto">
            <Form className="border p-5 ">
              <h2 className="text-center mb-5 border-2 border-top border-bottom p-3">
               Register
              </h2>
              <div className="my-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  className="form-control my-2"
                  placeholder="Type your Email"
                />
              </div>
              <div className="my-4">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="text"
                  className="form-control my-2"
                  placeholder="Type your Password"
                />
              </div>
              <div className="d-flex justify-content-between">
                <p>
                 
                  <Link to="/login" className="text-decoration-none">
             Already Have a Account??
                  </Link>
                </p>
                <p>
                  Forger Password{" "}
                  <Link to="/register" className="text-decoration-none">
                    Click here
                  </Link>
                </p>
              </div>
              <Button type="submit" className="btn btn-primary mt-4 w-100">
                Login
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    )
}

export default Register
