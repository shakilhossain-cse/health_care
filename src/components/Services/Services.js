import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5 bg-light" id="service">
      <div className="text-center py-5">
        <h1 className="my-3">Choose Services</h1>
        <p className="w-50 mx-auto text-muted">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero at tempus, blandit posuere ligula varius congue cursus porta
          feugiat
        </p>
        <div className="my-5">
          <Container>
            <Row xs={1} md={3} className="g-4">
              {
                Services.map(service =>  <Service service={service} key={service.id} />)
              }
             
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Services;
