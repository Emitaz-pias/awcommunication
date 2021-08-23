import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import "./heades.css";
import { Badge } from "react-bootstrap";
import MidNav from "./MidNav";

import Caouselmage from "./Caouselmage";

function Header(props) {
  const [gaming, setGaming] = useState([]);
  const [phone, setPhone] = useState([]);
  const [electronic, setElectronic] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((open) => !open);
  };
  useEffect(() => {
    // fethching electroins data..
    fetch("js/electronic.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setElectronic(distinctItem(data));
      });
    // loading gaming data
    fetch("js/gaming.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setGaming(distinctItem(data));
      });
    // loading phones data
    fetch("js/phone.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setPhone(distinctItem(data));
      });
  }, []);

  const distinctItem = (data) => {
    let __temp = [];
    // eslint-disable-next-line array-callback-return
    data.map((item) => {
      if (!__temp.includes(item.subCat)) {
        __temp.push(item.subCat);
      }
    });
    return __temp;
  };

  return (
    <>
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
              <nav className="responsive-search">
                <form
                  action=""
                  id="headersearch"
                  noValidate="novalidate"
                  method="get"
                  className="d-flex"
                >
                  <div style={{ width: "50vw" }}>
                    <input
                      name="s"
                      className="search-input"
                      autoComplete="off"
                      id="stext"
                      placeholder="Start a new search"
                      type="text"
                      maxLength={100}
                    />
                  </div>
                  <button
                    name="submit"
                    className="header-search-btn"
                    type="submit"
                  >
                    Search
                  </button>
                  <div className="searchright">
                    <button type="submit" style={{ opacity: 0 }}></button>
                  </div>
                </form>
              </nav>
              <Nav className="responsive-category">
                <Nav.Link
                  onClick={handleOpen}
                  style={{ color: "black" }}
                  className="custom-link"
                >
                  Find by Category
                  <i
                    style={{ marginLeft: "8px", fontSize: "18px" }}
                    class="fa fa-sort-down"
                  ></i>
                </Nav.Link>
                {open && (
                  <>
                    <NavDropdown
                      style={{
                        fontWeight: "500",
                        paddingLeft: "20px",
                      }}
                      title="Electronics"
                      id="collasible-nav-dropdown"
                      className="nav-dropdown"
                    >
                      <div
                        style={{
                          height: "180px",
                          overflowY: "scroll",
                        }}
                      >
                        {electronic.map((category) => (
                          <NavDropdown.Item
                            style={{ fontWeight: "500" }}
                            href={`/?subcat=${category}`}
                          >
                            {category}
                          </NavDropdown.Item>
                        ))}
                      </div>
                    </NavDropdown>
                    <NavDropdown
                      style={{ fontWeight: "500", paddingLeft: "20px" }}
                      title="Gaming"
                      id="collasible-nav-dropdown"
                    >
                      <div style={{ height: "180px", overflowY: "scroll" }}>
                        {gaming.map((category) => (
                          <NavDropdown.Item
                            style={{ fontWeight: "500" }}
                            href={`/?subcat=${category}`}
                          >
                            {category}
                          </NavDropdown.Item>
                        ))}
                      </div>
                    </NavDropdown>
                    <NavDropdown
                      style={{ fontWeight: "500", paddingLeft: "20px" }}
                      title="Phone"
                      id="collasible-nav-dropdown"
                    >
                      <div style={{ height: "180px", overflowY: "scroll" }}>
                        {phone.map((category) => (
                          <NavDropdown.Item
                            style={{ fontWeight: "500" }}
                            href={`/?subcat=${category}`}
                          >
                            {category}
                          </NavDropdown.Item>
                        ))}
                      </div>
                    </NavDropdown>
                  </>
                )}
              </Nav>
              <Nav className="me-auto">
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
              </Nav>
              <Nav className="">
                <Nav.Link href="/basket">
                  <div className="sopping-cart-wrapper">
                    <div className="shopping-cart">
                      <i className="fa fa-shopping-cart cart-icon"></i>
                      <span className="cart-badge">{props.cartItem}</span>
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
      <div>
        <MidNav></MidNav>
      </div>

      {/* slider section*/}
      <Caouselmage />
    </>
  );
}

export default Header;
