import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { User, logout } = useAuth();
  return (
    <Navbar bg="white" sticky="top" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://jthemes.net/themes/html/medservices/files/images/logo.png"
            height="35"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#service">
              Service
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#specialists">
              Specialists
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            
            {User.email && <Nav.Link>Hello {User.displayName}</Nav.Link>}
            {!User.email ? (
              <Nav.Link
                as={Link}
                className="btn btn-primary text-white text-decoration-none px-5 mx-3"
                to="/login"
              >
                Login
              </Nav.Link>
            ) : (
              ""
            )}

            {User.email && (
              <Nav.Link
                className="btn btn-primary text-white text-decoration-none px-5 mx-3 "
                onClick={() => logout()}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    
    </Navbar>
  );
};

export default Header;
