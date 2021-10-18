import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="p-5 bg-light">
      <Container>
        <div className="w-50 mx-auto">
          <Form className="border p-5 ">
          <h2 className="text-center mb-5">Login</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Type your Email"
            />
            <input
              type="text"
              className="form-control my-4"
              placeholder="Type your Password"
            />
            <Button type="submit" className="btn btn-primary w-100">
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
