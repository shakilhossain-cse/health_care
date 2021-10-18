import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel className="mb-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jthemes.net/themes/html/medservices/files/images/slider/slide-1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jthemes.net/themes/html/medservices/files/images/slider/slide-2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jthemes.net/themes/html/medservices/files/images/slider/slide-3.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
