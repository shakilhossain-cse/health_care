import React from "react";
import { Card, Col } from "react-bootstrap";

const Care = (props) => {
  return (
    <Col>
      <Card className="border-0 rounded">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="text-primary">{props.title}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Care;
