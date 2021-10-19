import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Feathar = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Card bg="Dark" text="Dark" className="mb-2">
             
              <Card.Body>
               <p>100% Secqure</p>
               
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card bg="Dark" text="Dark" className="mb-2">
             
              <Card.Body>
               <p>24h Support</p>
               
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card bg="Dark" text="Dark" className="mb-2">
             
              <Card.Body>
                <p>Exclent Service</p>
               
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card bg="Dark" text="Dark" className="mb-2">
             
              <Card.Body>
                <p>Fast Service</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feathar;
