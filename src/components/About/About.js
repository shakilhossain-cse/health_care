import React from "react";
import { Col, Container, Row ,Card } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Row>
        <div className="my-5 bg-light">
          <Container>
            <Col>
              <Card className="border-0 rounded-5 bg-light py-4">
                <Card.Img
                  variant="top"
                  src="https://jthemes.net/themes/html/medservices/files/images/doctor-1.jpg"
                  className="w-50"
                />
                <div className="py-3">
                  <Card.Title>Dr Jakkash Ali (Founder)</Card.Title>
                  <p className="text-primary">PSD IN UK</p>
                  <Card.Text className="text-muted">
                    Donec vel sapien augue integer turpis cursus porta, mauris
                    sed augue luctus magna dolor luctus ipsum neque
                    Donec vel sapien augue integer turpis cursus porta, mauris
                    sed augue luctus magna dolor luctus ipsum neque
                  </Card.Text>
                </div>
              </Card>
            </Col>
          </Container>
        </div>
      </Row>
    </div>
  );
};

export default About;
