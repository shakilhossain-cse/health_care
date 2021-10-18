import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";

const Specialists = () => {
  const [Doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="mb-5" id="specialists">
      <Container>
        <div className="w-50 my-5 text-center mx-auto">
          <h1>Our Medical Specialists</h1>

          <p className="text-muted">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero at tempus, blandit posuere ligula varius congue cursus
            porta feugiat
          </p>
        </div>
        <div>
          <Row xs={2} md={4} className="g-4">
            {Doctors.map((doctor) => (
              <Doctor doctor={doctor} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Specialists;
