import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./layout.css";

const MidNav = () => {
  const [gaming, setGaming] = useState([]);
  const [phone, setPhone] = useState([]);
  const [electronic, setElectronic] = useState([]);
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    fetch("js/electronic.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setElectronic(distinctItem(data));
      });

    fetch("js/gaming.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setGaming(distinctItem(data));
      });

    fetch("js/phone.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setPhone(distinctItem(data));
      });
    fetch("js/laptops.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setLaptops(distinctItem(data));
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
    <div className="responsive-midnav">
      <div className="category-search-nav">
        <Navbar
          style={{
            backgroundColor: "#1053A2",
            paddingLeft: "28px",
            paddingRight: "28px",
          }}
          collapseOnSelect
          expand="lg"
          variant="dark"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
              <button name="submit" className="header-search-btn" type="submit">
                Search
              </button>
              <div className="searchright">
                <button type="submit" style={{ opacity: 0 }}></button>
              </div>
            </form>
            <Nav className="">
              <NavDropdown
                style={{
                  fontWeight: "500",
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
                style={{ fontWeight: "500" }}
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
                style={{ fontWeight: "500" }}
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default MidNav;
