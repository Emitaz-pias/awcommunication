import React from "react";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../img/slider-image/slider1.jpeg";
import image2 from "../img/slider-image/slider2.jpeg";
import image3 from "../img/slider-image/slider3.jpeg";
import image4 from "../img/slider-image/slider4.jpeg";
import image5 from "../img/slider-image/slider5.jpeg";
import image6 from "../img/slider-image/slider6.jpeg";
import image7 from "../img/slider-image/slider7.jpeg";
import image8 from "../img/slider-image/slider8.jpeg";
import image9 from "../img/slider-image/slider9.jpeg";
import image10 from "../img/slider-image/slider10.jpeg";
import image11 from "../img/slider-image/slider11.jpeg";
import image12 from "../img/slider-image/slider12.jpeg";
import image13 from "../img/slider-image/slider13.jpeg";
import image14 from "../img/slider-image/slider14.jpeg";
import image15 from "../img/slider-image/slider15.jpeg";
import image16 from "../img/slider-image/slider16.jpeg";
import image17 from "../img/slider-image/slider17.jpeg";
import image18 from "../img/slider-image/slider18.jpeg";
import image19 from "../img/slider-image/slider19.jpeg";
import image20 from "../img/slider-image/slider20.jpeg";
import image21 from "../img/slider-image/slider21.jpeg";
import image22 from "../img/slider-image/slider22.jpeg";
import image23 from "../img/slider-image/slider23.jpeg";
import image24 from "../img/slider-image/slider24.jpeg";
import image25 from "../img/slider-image/slider25.jpeg";
import image26 from "../img/slider-image/slider26.jpeg";
import image27 from "../img/slider-image/slider27.jpeg";
import image28 from "../img/slider-image/slider28.jpeg";
import image29 from "../img/slider-image/slider29.jpeg";
import image30 from "../img/slider-image/slider30.jpeg";
import image31 from "../img/slider-image/slider31.jpeg";
import image34 from "../img/slider-image/slider34.jpeg";
import image35 from "../img/slider-image/slider35.jpeg";
import image36 from "../img/slider-image/slider36.jpeg";
import image37 from "../img/slider-image/slider37.jpeg";
import image40 from "../img/slider-image/slider40.jpeg";

const sliderImageArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image34,
  image35,
  image36,
  image37,
  image40,
];

const Caouselmage = () => {
  return (
    <>
      <div className="banner-slider-container">
        <div className="banner-slider">
          <Carousel interval={2000} fade={true} controls={false}>
            {sliderImageArray.map((image) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                  />
                  ;
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Caouselmage;
