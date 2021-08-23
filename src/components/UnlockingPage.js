import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./heades.css";
import "./unlockingpage.css";

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

const UnlockingPage = () => {
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
                  href="#deets"
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
      <div className="unlocking-page-container">
        <div className="page-header">
          <h6>Official SIM Unlock</h6>
          <h2>Price List</h2>
          <p>
            Preorder service unlock - includes eligibility check for your
            device.
          </p>
        </div>
        <div>
          <div className="row pt-4 pb-4">
            {simUnlockData.map((sim) => (
              <div className="col-md-3">
                <div className="unlocking-card">
                  <div className="card-image">
                    <img alt="" src={sim.img}></img>
                  </div>
                  <div className="card-content">
                    <h3>{sim.name}</h3>
                    <h6>(1-24 hours Unlock)</h6>
                    <p>
                      <i class="fa fa-check"></i> Pre-order your unlock for fast
                      delivery
                    </p>
                    <h5>From £19.99</h5>
                    <button>ORDER NOW</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockingPage;
