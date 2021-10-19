import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const Service = ({ service }) => {
  const history = useHistory();
  const deatilesHandeler = () => {
    history.push(`/service/${service.id}`);
  };
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={service.image} />
        <Card.Body>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text className="text-muted">
            {service.desc.slice(0, 100)}
          </Card.Text>
          <Button
            className="btn btn-outline-primary"
            onClick={deatilesHandeler}
          >
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
