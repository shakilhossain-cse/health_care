import React from "react";
import {  Container, Row } from "react-bootstrap";
import Care from "../Care/Care";
import WorkTime from "../WorkTime/WorkTime";

const Cares = () => {
  return (
    <div className="py-5" id="service">
      <Container>
        <Row xs={1} md={3} className="g-4">
          <Care
            title="HIGHEST QUALITY CARE"
            img="https://jthemes.net/themes/html/medservices/files/images/quality_care_800x600.jpg"
          />
          <Care
            title="EMERGENCY DEPARTMENT"
            img="https://jthemes.net/themes/html/medservices/files/images/emergency_help_800x600.jpg"
          />
          <WorkTime/>
        </Row>
      </Container>
    </div>
  );
};

export default Cares;
