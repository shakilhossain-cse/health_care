import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, facebook } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="py-5">
      <Container>
        <div className="border-bottom">
          <Row>
            <Col xs={12} md={5}>
              <div>
                <img
                  src="https://jthemes.net/themes/html/medservices/files/images/logo.png"
                  height="35"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                <p className="py-3 text-muted text-xs">
                  Aliquam orci nullam tempor sapien gravida donec an enim ipsum
                  porta justo velna auctor congue magna laoreet augue sapien
                  gravida at purus euismod
                </p>

                <div className="mt-4">
                  <div className="p-1 d-inline-block text-white bg-primary text-bold me-2">
                    Facebook
                  </div>
                  <div className="p-1 d-inline-block text-white bg-danger me-2 text-bold">
                    Google
                  </div>
                  <div className="p-1 d-inline-block text-white bg-info text-bold">
                    Twitter
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <Row>
                <Col xs={12} md={4}>
                  <div>
                    <h5>Our Location</h5>
                    <div className="my-4">
                      <p className="text-muted">
                        121 King Street, Melbourne, Victoria 3000 Australia
                      </p>
                      <p className="text-muted">
                        {" "}
                        E:{" "}
                        <span className="fw-bold text-black">
                          hello@yourdomain.com
                        </span>
                        <br />
                        P: +12 9 8765 4321
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div>
                    <h5>About Clinic</h5>
                    <div className="my-4 text-xs">
                      <p className="text-muted mb-1">About</p>
                      <p className="text-muted mb-1">Clinic</p>
                      <p className="text-muted mb-1">Careers</p>
                      <p className="text-muted mb-1">Press & Media</p>
                      <p className="text-muted mb-1">Our Blog</p>
                      <p className="text-muted mb-1">Advertising</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div>
                    <h5>Discover</h5>
                    <div className="my-4">
                      <p className="text-muted mb-1">Help Center</p>
                      <p className="text-muted mb-1">Life Chatting</p>
                      <p className="text-muted mb-1">Terms & Privacy</p>
                      <p className="text-muted mb-1">FAQs</p>
                      <p className="text-muted mb-1">Our Blog</p>
                      <p className="text-muted mb-1">Site Map</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="py-5">
          <p>
            © 2019 <span className="fw-bold text-black">MedService</span>. All
            Rights Reserved
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
