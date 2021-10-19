import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { loginUsingEmailPassword } = useFirebase();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const loginHandeler = e => {
    e.preventDefault();
    loginUsingEmailPassword(Email,Password)
  };
  return (
    <div className="p-5 bg-light">
      <Container>
        <div className="w-50 mx-auto">
          <form className="border p-5 " onSubmit={loginHandeler}>
            <h2 className="text-center mb-5 border-2 border-top border-bottom p-3">
              Login
            </h2>
            <div className="my-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                className="form-control my-2"
                placeholder="Type your Email"
                onBlur={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="my-4">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="text"
                className="form-control my-2"
                placeholder="Type your Password"
                onBlur={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between">
              <p>
                New To{" "}
                <Link to="/register" className="text-decoration-none">
                  {" "}
                  MedService?
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
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
