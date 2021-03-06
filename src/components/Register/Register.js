import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
  const { createAccountByEmail } = useFirebase();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();
    createAccountByEmail(Name,Email, Password);
  };
  return (
    <div className="p-5 bg-light">
      <Container>
        <div className="w-50 mx-auto">
          <form className="border p-5 " onSubmit={submitHandeler}>
            <h2 className="text-center mb-5 border-2 border-top border-bottom p-3">
              Register
            </h2>
            <div className="my-2">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="form-control my-2"
                placeholder="Type your Name"
                onBlur={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="my-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control my-2"
                placeholder="Type your Email"
                onBlur={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="my-4">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control my-2"
                placeholder="Type your Password"
                onBlur={(e) => setPassword(e.target.value)}
                required
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
              Register
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
