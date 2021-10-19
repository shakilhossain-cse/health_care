import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams, useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

const Pharches = () => {
  const { serviceId } = useParams();
  const history = useHistory();
  const [ServiceDeatiles, setServiceDeatiles] = useState([]);
  const [DisplayService, setDisplayService] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/service.json")
      .then((res) => res.json())
      .then((data) => setServiceDeatiles(data));
  }, []);

  useEffect(() => {
    if (ServiceDeatiles.length) {
      const serviceData = ServiceDeatiles.find(
        (service) => service.id == serviceId
      );
      setDisplayService(serviceData);
    }
  }, [ServiceDeatiles]);

  const buyHandeler = () => {
    history.push("/congrets");
  };
  const { User } = useAuth();
  return (
    <div className="bg-light">
      <Container>
        <div className="py-5">
          <h1 className="border-bottom border-3 w-25 pb-2">Pharches Page</h1>

          <Row>
            <Col md={6} xs={12}>
              <Button className="w-100 bg-white border-0 p-3 my-3">
                Service Detiles
              </Button>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Service Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={DisplayService.title}
                    readOnly
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Service Detiles</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={DisplayService.desc}
                    readOnly
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Service Price </Form.Label>
                  <Form.Control
                    type="text"
                    value={DisplayService.price}
                    readOnly
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col md={6} xs={12}>
              <Button className="w-100 bg-white border-0 p-3 my-3">
                User Detiles
              </Button>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="email"
                    value={User.displayName}
                    readOnly
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" value={User.email} readOnly />
                </Form.Group>
              </Form>
            </Col>
            <Button className="btn btn-primary" onClick={buyHandeler}>
              Buy Now
            </Button>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Pharches;
