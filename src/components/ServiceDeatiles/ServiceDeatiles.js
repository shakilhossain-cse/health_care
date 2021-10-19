import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

const ServiceDeatiles = () => {
  const { serviceId } = useParams();
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

  const history = useHistory()
  const cartHandeler = () => {
   history.push('/pharches')
  }
  return (
    <div className="bg-light py-4">
      <Container>
        <div className="my-3">
          <h3 className="py-5">{DisplayService.title}</h3>
          <Row>
            <Col md={6} xs={12}>
              <img src={DisplayService.image} alt="" />
            </Col>
            <Col md={6} xs={12}>
              <p>{DisplayService.desc}</p>
              <h5> Price : ${DisplayService.price}</h5>
              <Button className="btn btn-primary my-3" onClick={cartHandeler}>Add to Cart</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDeatiles;
