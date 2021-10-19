import React from "react";
import { Spinner } from "react-bootstrap";

import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children, ...rest }) => {
  const { User,IsLoading } = useAuth();
if (IsLoading) {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="secondary"></Spinner>
    </div>
  )
}
  return (
    <Route
    {...rest}
    render={({ location }) =>
    User.email ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
  );
};

export default PrivetRoute;
