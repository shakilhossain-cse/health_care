import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = ({service}) => {
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={service.image}
        />
        <Card.Body>
          <Card.Title>{ service.title}</Card.Title>
          <Card.Text className="text-muted">
          {service.desc.slice(0,100)}
          </Card.Text>
          <Button className="btn btn-outline-primary">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
