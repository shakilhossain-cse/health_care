import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
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
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#service">Service</Nav.Link>
            <Nav.Link as={HashLink} to="/home#specialists">Specialists</Nav.Link>
            <Nav.Link as={HashLink} to="/home#specialists">Specialists</Nav.Link>
            <Nav.Link as={HashLink} to="/home#blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} className="btn btn-info text-white text-decoration-none px-5 mx-3" to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
