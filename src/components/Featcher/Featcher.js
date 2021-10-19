import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Feathar = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Card bg="Dark" text="Dark" className="mb-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card bg="Dark" text="Dark" className="mb-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card bg="Dark" text="Dark" className="mb-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card bg="Dark" text="Dark" className="mb-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feathar;
