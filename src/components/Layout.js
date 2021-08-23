import React, { useState, useEffect } from "react";
import "./../scss/Layout.scss";
import Information from "./Information";
import Header from "./Header";
import "./layout.css";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Button } from "bootstrap";
import MidNav from "./MidNav";

function Layout(props) {
  const [TDATA, setTDATA] = useState({
    buy: [],
    saved: [],
    blog: [],
    seller: [],
    products: [],
  });

  useEffect(() => {
    let D = getDataFromLocal();
    fetch("js/electronic.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        fetch("js/gaming.json")
          .then(function (r2) {
            return r2.json();
          })
          .then(function (data2) {
            fetch("js/phone.json")
              .then(function (r3) {
                return r3.json();
              })
              .then(function (data3) {
                updateSave(D.saved, [...data, ...data2, ...data3]);
                setTDATA({
                  ...TDATA,
                  ...D,
                  products: [...data, ...data2, ...data3],
                });
              });
          });
      });
  }, []);

  const value = { TDATA, setTDATA };

  const getDataFromLocal = () => {
    return {
      buy: localStorage.getItem("buy")
        ? localStorage.getItem("buy").split(",")
        : [],
      saved: localStorage.getItem("saved")
        ? localStorage.getItem("saved").split(",")
        : [],
      blog: localStorage.getItem("blog")
        ? localStorage.getItem("blog").split(",")
        : [],
      seller: localStorage.getItem("seller")
        ? localStorage.getItem("seller").split(",")
        : [],
    };
  };

  useEffect(() => {
    updateSave(TDATA.saved, TDATA.products);
  }, [TDATA.saved]);

  const [savedObj, setSavedObj] = useState([]);
  function updateSave(D, T) {
    let H = D.map((save) => {
      return T.find((P, index) => {
        if (P.id === save) {
          return P;
        }
      });
    });
    setSavedObj(H);
  }

  return (
    <>
      <Information.Provider value={value}>
        <Header cartItem={TDATA.buy.length}></Header>
        <div className="__Layout">
          <div className="mainPageArea">
            <div></div>
            <div className="page-container">{props.children}</div>
          </div>
        </div>
      </Information.Provider>
    </>
  );
}

export default Layout;
