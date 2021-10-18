import React from "react";
import Service from "../Service/Service";

const Services = () => {
  return (
    <div className="my-5 bg-light" id="service">
      <div className="text-center py-5">
        <h1 className="my-3">Choose Services</h1>
        <p className="w-50 mx-auto text-muted">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero at tempus, blandit posuere ligula varius congue cursus porta
          feugiat
              </p>
             <Service/>
      </div>
    </div>
  );
};

export default Services;
