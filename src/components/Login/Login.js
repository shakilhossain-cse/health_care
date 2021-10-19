import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const location = useLocation();
  const { loginUsingEmailPassword, loginUsingGoogle } = useFirebase();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory();
  const url = location.state?.from || "/home";
  const loginHandeler = (e) => {
    e.preventDefault();
    loginUsingEmailPassword(Email, Password).then((result) => {
      history.push(url);
    });
  };
  const googleLogin = () => {
    loginUsingGoogle()
      .then((result) => {
        history.push(url);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <br />
            <p className="text-center my-2">Or</p>

            <Button className="btn btn-danger w-100" onClick={googleLogin}>
              Log In With Google
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
