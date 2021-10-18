import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <div className="my-5">
          <Container>
          <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="https://jthemes.net/themes/html/medservices/files/images/blog/post-1-img.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text className="text-muted">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                        </Card.Text>
                        <Button className="btn btn-outline-info">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
     </Container>
    </div>
  );
};

export default Service;
