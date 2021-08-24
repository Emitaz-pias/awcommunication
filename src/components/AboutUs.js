import React from "react";
import image1 from "../img/aboutUs/About Us Images.png";
import image2 from "../img/aboutUs/2nd image foraboout us page.png";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="headingDiv mt-3">
        <h1 className="text-center text-secondary">About AWC</h1>
        <h3 className="text-center text-primary">
          Our organization really focuses on individuals and their tech gadgets.
          <br />
          This is the explanation our clients precedes whatever else.
        </h3>
        <div className="d-flex row flex-wrap-reverse mt-5 pb-5 justify-content-center align-items-center text-secondary">
          <p style={{ fontSize: "1.2em" }} className="me-4 col-md-6">
            AWC was begun in 1976 to offer normalized at this point reasonable
            fix administration for cell phones and tablets. Today AWC is
            continuously turning into UKbiggest and most trusted cell phone and
            tablet administration organization. Our organization really focuses
            on individuals and their tech gadgets. This is the explanation our
            clients precedes whatever else. Our plan to fix you advanced cell
            screen and the cell phones that will not begin. We Use Genuine Parts
            to Fix your Device Low Pricing and Faster Repair Services We offer
            wide scope of administrations LCD Replacement, Charging Ports, Home
            Button, Volumes Buttons, Battery Replacement and Water Damage. we
            fix a gigantic scope of gadgets from iPhone, iPad, Samsung, Xiomi,
            HTC, Sony, Motorola, Google Nexus and some more. Regardless the
            shortcoming is the odds are we can fix it for you. Speedy and
            Affordable Smartphone Repairing Services Our point is to offer
            exceptional administrations directly to your home or to your office
            to lead fix works or investigate your PDAs. As far as we might be
            concerned, the maintenance work isn't just about discovering the
            deficiency and fixing it, it is about quality parts that are made to
            keep going long. We ensure that every one of the parts utilized for
            fixing are fresh out of the box new and of the greatest quality.
          </p>
          <img
            className="ms-2 col-md-5 img-fluid"
            src={image1}
            alt="mobile reapir"
          />
        </div>
        <div className="d-flex row mt-5 pb-5 justify-content-center align-items-center text-secondary">
          <img
            className="me-4 col-md-5 img-fluid"
            src={image2}
            alt="mobile reapir"
          />
          <p style={{ fontSize: "1.3em" }} className="ms-2 col-md-6">
            Electronics Repair And Beyond WE’RE THE ULTIMATE DESTINATION FOR ALL
            THINGS MOBILE. With a wide range of services and multiple locations,
            we have established ourselves as an industry leader and a
            one-stop-shop for all of your mobile needs. Not only do we provide
            electronics repair for nearly any device, but we also offer
            upgrades, trade-ins, NanoRez Liquid Repellent, protection plans,
            top-notch accessories, and more! Our electronics repairs are quick
            and convenient. We provide affordable and competitive pricing.
            Prevent future incidents with a dip in our NanoRez Liquid Repellent
            machine. Extend the life of your electronics with our protection
            plans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
