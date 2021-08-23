import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./heades.css";
import "./repair.css";

const simUnlockData = [
  {
    id: 1,
    name: "EE UK",
    img: "../../img/unlocking-images/EE.png",
  },
  {
    id: 2,
    name: "Vodafone UK",
    img: "../../img/unlocking-images/Vodafone.png",
  },
  {
    id: 3,
    name: "O2 UK",
    img: "../../img/unlocking-images/O2.png",
  },
  {
    id: 4,
    name: "Tmobile UK",
    img: "../../img/unlocking-images/Tmobile.png",
  },
  {
    id: 5,
    name: "Orange UK",
    img: "../../img/unlocking-images/Orange.png",
  },
  {
    id: 6,
    name: "Three UK",
    img: "../../img/unlocking-images/Three.png",
  },
  {
    id: 7,
    name: "goffgaff UK",
    img: "../../img/unlocking-images/giffgaff.png",
  },
  {
    id: 8,
    name: "Tesco Mobile",
    img: "../../img/unlocking-images/Tesco.png",
  },
  {
    id: 9,
    name: "Virgin Mobile",
    img: "../../img/unlocking-images/Virgin.png",
  },
  {
    id: 10,
    name: "Asda Mobile",
    img: "../../img/unlocking-images/Asda.png",
  },
  {
    id: 11,
    name: "Sky Mobile",
    img: "../../img/unlocking-images/Sky.png",
  },
  {
    id: 12,
    name: "Carphone Warehouse",
    img: "../../img/unlocking-images/Cable.png",
  },
  {
    id: 13,
    name: "Talk Mobile",
    img: "../../img/unlocking-images/Talk.png",
  },
  {
    id: 14,
    name: "Cable and Wireless",
    img: "../../img/unlocking-images/Cable.png",
  },
  {
    id: 15,
    name: "The Phone House",
    img: "../../img/unlocking-images/PhoneHouse.png",
  },
  {
    id: 16,
    name: "Teleware",
    img: "../../img/unlocking-images/Teleware.png",
  },
  {
    id: 17,
    name: "M Com",
    img: "../../img/unlocking-images/MCom.png",
  },
  {
    id: 18,
    name: "Manx Telecom",
    img: "../../img/unlocking-images/Manx.png",
  },
  {
    id: 19,
    name: "Jersey Telecom",
    img: "../../img/unlocking-images/Jersey.png",
  },
  {
    id: 20,
    name: "Cloud 9",
    img: "../../img/unlocking-images/Cloud.png",
  },
  {
    id: 21,
    name: "EMEA",
    img: "../../img/unlocking-images/EMEA.png",
  },
];

const RepairService = () => {
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const buy = localStorage.getItem("buy")
      ? localStorage.getItem("buy").split(",")
      : [];
    setCartProduct(buy);
  }, []);

  return (
    <div>
      <div>
        <Navbar
          style={{ paddingBottom: "8px", backgroundColor: "#F0F8FF" }}
          collapseOnSelect
          expand="lg"
          // bg="light"
          variant="light"
          className="main-nav"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                style={{ width: "120px" }}
                src="../../brand-logo.png"
              ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  style={{ color: "black" }}
                  className="custom-link"
                  href="#deets"
                >
                  Customer Details
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  className="custom-link"
                  href="/unlocking"
                >
                  Unlocking
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  className="custom-link"
                  href="/repair-service"
                >
                  Repair
                </Nav.Link>
                <Nav.Link
                  style={{ color: "black" }}
                  className="custom-link"
                  href="/repair-service"
                >
                  Support
                </Nav.Link>
              </Nav>
              <Nav className="">
                <Nav.Link href="/basket">
                  <div className="sopping-cart-wrapper">
                    <div className="shopping-cart">
                      <i className="fa fa-shopping-cart cart-icon"></i>
                      <span className="cart-badge">{cartProduct.length}</span>
                    </div>
                  </div>
                </Nav.Link>
                <Nav.Link href="#deets">
                  <div className="avatar-container">
                    <i className="fa fa-user-circle avatar"></i>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="repair-page-container">
        <div>
          <div className="page-heading">
            <h6>We do care about your device </h6>
          </div>
          <div className="row">
            <div className="col-md-7">
              <h1>Overview</h1>
              <h5 className="overview-details">
                We believe that every device has a story with, it carries some
                memories. Regardless electronics devices are our day to day
                companion and helps us in many aspects of our lives.
              </h5>
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    {" "}
                    <i class="fa fa-check-square"></i> We repair device to fully
                    working order
                  </p>
                  <p>
                    {" "}
                    <i class="fa fa-check-square"></i> We offer warranty on all
                    repairs
                  </p>
                  <p>
                    {" "}
                    <i class="fa fa-check-square"></i> Express repair is our top
                    priority
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    {" "}
                    <i class="fa fa-check-square"></i> Our repair success rate
                    is very high
                  </p>
                  <p>
                    {" "}
                    <i class="fa fa-check-square"></i> We use top quality parts
                    for repair
                  </p>
                  <p>
                    <i class="fa fa-check-square"></i> Our technicians are best
                    in the field
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img
                alt=""
                style={{ width: "100%" }}
                src="../../img//repair/overview.jpg"
              ></img>
            </div>
          </div>
          <div className="repair-is-simple">
            <div className="repair-is-simple-heading"></div>
            <div className="row">
              <div className="col-md-4">
                <img
                  alt=""
                  style={{ width: "100%" }}
                  src="../../img/repair//mobile.png"
                ></img>
              </div>
              <div className="col-md-8">
                <div className="col-md-8"></div>
                <h6>Repair process is very simple</h6>
                <h1>Everything About Repair</h1>
                <div className="row mt-5">
                  <div className="col-md-4 mt-2">
                    <div className="card">
                      <img
                        style={{
                          height: "80px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        alt=""
                        src="../../img//repair/bookrepair.jpg"
                      ></img>
                      <h3>Book Repair</h3>
                      <p>Click to Book Repair</p>
                    </div>
                  </div>
                  {/* <div className="col-md-4 mt-2">
                    <div className="card">
                      <img
                        style={{
                          height: "80px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        alt=""
                        src="../../img/repair/trackrepair.png"
                      ></img>
                      <h3>Track Repair</h3>
                      <p>CTrack Repair Status</p>
                    </div>
                  </div> */}
                  {/* <div className="col-md-4 mt-2">
                    <div className="card">
                      <img
                        style={{
                          height: "80px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        alt=""
                        src="../../img/repair/how-work.png"
                      ></img>
                      <h3>How it Work</h3>
                      <p>Want to Know Process</p>
                    </div>
                  </div> */}
                  {/* <div className="col-md-6 mt-2">
                    <div className="card">
                      <img
                        style={{
                          height: "80px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        alt=""
                        src="../../img/repair/faq.png"
                      ></img>
                      <h3>FAQ's</h3>
                      <p>Have Some Questions</p>
                    </div>
                  </div> */}
                  {/* <div className="col-md-6 mt-2">
                    <div className="card">
                      <img
                        style={{
                          height: "80px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        alt=""
                        src="../../img/repair/store.png"
                      ></img>
                      <h3>Store Locator</h3>
                      <p>Find Closest Store</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="realtime-tracking">
            <div className="row">
              <div className="col-md-6">
                <img
                  style={{ width: "100%" }}
                  alt=""
                  src="../../img/repair/realtimetracking.jpg"
                ></img>
              </div>
              <div className="col-md-6 text-center">
                <h6>Reliable-Trustable-Responsive</h6>
                <h1>Realtime Tracking of our</h1>
                <h1> Repair</h1>
                {/* <button className="btn btn-secondary mt-5">
                  Track Your Device Repair
                </button> */}
              </div>
            </div>
          </div>
          <div className="apple-repair mt-5">
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  style={{
                    width: "50%",
                    borderRadius: "50%",
                  }}
                  alt=""
                  src="../../img/repair/i-phone-repair.jpg"
                ></img>
                <h5 className="p-3">Specialized Apple Repair</h5>
                <p className="p-3">
                  Our Technicians are professionally accredited for all apple
                  devices repair. iPhones, MacBook, iMac, Mac Pro, iWatch and
                  much more
                </p>
              </div>
              <div className="col-md-6">
                <img
                  alt=""
                  style={{ width: "100%" }}
                  src="../../img/repair/apple.jpg"
                ></img>
              </div>
            </div>
          </div>
          <div>
            {/* 

            <div className="row mt-5">
              <div
                style={{
                  backgroundImage: "url('../../img/repair/we-know-bg.jpg')",
                }}
                className="col-md-6 we-know-device-left"
              >
                <div>
                  <h1 className="bg-secondary text-white text-center">
                    WE KNOW DEVICES INSIDE{" "}
                  </h1>
                  <h1 className="bg-secondary text-white text-center">OUT</h1>
                </div>
              </div>
              <div className="col-md-6">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <h5>Check The Price</h5>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Check the readily available repair prices of many types
                        of fault.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <h5>Book Repair</h5>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        All you need is to book the repair by filling the right
                        detail in the form.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <h5>Send he Device</h5>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Send the device to us and leave the rest to us.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <h5>Confirm Repair</h5>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We will call you or email you to confirm the device
                        repair cost and booking details
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <h5>Pay & Receieve Ready Device</h5>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Device is ready to ship just pay the cost and wait for
                        the device to arrive.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairService;
