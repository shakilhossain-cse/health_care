import React from "react";
import { Card, Col } from "react-bootstrap";

const Doctor = ({ doctor }) => {
  return (
    <div className="my-5">
      <Col>
        <Card className="border-0 rounded-5">
          <Card.Img variant="top" src={doctor.image} />
          <div className="py-3">
            <Card.Title>{doctor.name}</Card.Title>
            <p className="text-primary">{doctor.title}</p>
            <Card.Text className="text-muted">{doctor.desc}</Card.Text>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
