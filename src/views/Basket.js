import React, { useState, useEffect, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./../scss/Basket.scss";
import "../components/heades.css";
import StripePayment from "../components/Stripe/StripePayment";
import { usersContext } from "./App";

function Basket(props) {
  const [TDATA, setTDATA] = useState({
    buy: [],
    saved: [],
    products: [],
  });
  const { payment } = useContext(usersContext);
  const [paymentSuccess, setPaymentSuccess] = payment;
  useEffect(() => {
    let D = getDataFromLocal();

    fetch("js/electronic.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data1) {
        fetch("js/tablets.json")
          .then(function (r1) {
            return r1.json();
          })
          .then(function (data0) {
            fetch("js/laptops.json")
              .then(function (r0) {
                return r0.json();
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
                        updateBuy(D.buy, [
                          ...data0,
                          ...data1,
                          ...data,
                          ...data2,
                          ...data3,
                        ]);
                        updateSave(D.saved, [
                          ...data0,
                          ...data1,
                          ...data,
                          ...data2,
                          ...data3,
                        ]);
                        setTDATA({
                          ...TDATA,
                          ...D,
                          products: [
                            ...data0,
                            ...data1,
                            ...data,
                            ...data2,
                            ...data3,
                          ],
                        });
                      });
                  });
              });
          });
      });
  }, []);

  const getDataFromLocal = () => {
    return {
      buy: localStorage.getItem("buy")
        ? localStorage.getItem("buy").split(",")
        : [],
      saved: localStorage.getItem("saved")
        ? localStorage.getItem("saved").split(",")
        : [],
    };
  };

  useEffect(() => {
    updateBuy(TDATA.buy, TDATA.products);
  }, [TDATA.buy]);

  const [buyObj, setBuyObj] = useState([]);

  function updateBuy(D, T) {
    let H = D.map((save) => {
      return T.find((P, index) => {
        if (P.id === save) {
          return P;
        }
      });
    });
    setBuyObj(H);
  }

  useEffect(() => {
    if (paymentSuccess === true) {
      setBuyObj([{}]);
    }
  }, [paymentSuccess]);
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

  const saveProduct = (e) => {
    if (!TDATA.saved.includes(e.target.getAttribute("productid"))) {
      localStorage.setItem("saved", [
        ...TDATA.saved,
        e.target.getAttribute("productid"),
      ]);
      setTDATA({
        ...TDATA,
        saved: [...TDATA.saved, e.target.getAttribute("productid")],
      });
    } else {
      let index = TDATA.saved.indexOf(e.target.getAttribute("productid"));
      if (index > -1) {
        TDATA.saved.splice(index, 1);
      }
      localStorage.setItem("saved", [...TDATA.saved]);
      setTDATA({
        ...TDATA,
        saved: [...TDATA.saved],
      });
    }
  };

  const buyProduct = (e) => {
    if (TDATA.buy.includes(e.target.getAttribute("productid"))) {
      let index = TDATA.buy.indexOf(e.target.getAttribute("productid"));
      if (index > -1) {
        TDATA.buy.splice(index, 1);
      }
      localStorage.setItem("buy", [...TDATA.buy]);
      setTDATA({
        ...TDATA,
        buy: [...TDATA.buy],
      });
    }
  };
  // remove item from local storage after payment
  if (paymentSuccess === true) {
    localStorage.removeItem("buy");
  }

  const [SC, setSC] = useState(11.7);
  const [ST, setST] = useState();

  useEffect(() => {
    let subtotal = 0;
    buyObj.map((B) => {
      subtotal += parseFloat(B.price);
    });
    setST(subtotal);
  }, [buyObj]);
  const productPrice = Math.round(ST + SC);
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
                  href="#deets"
                >
                  Repair
                </Nav.Link>
              </Nav>
              <Nav className="">
                <Nav.Link href="/basket">
                  <div className="sopping-cart-wrapper">
                    <div className="shopping-cart">
                      <i className="fa fa-shopping-cart cart-icon"></i>
                      <span className="cart-badge">{TDATA.buy.length}</span>
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
      {paymentSuccess ? (
        <div className="container">
          <h1 className="text-success">
            Congratulations your order submitted successfully!
          </h1>
          <a
            style={{
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "1.5em",
              color: "green",
            }}
            href="/"
          >
            Go Home to shop more
          </a>
        </div>
      ) : (
        <div className="__Basket">
          <div className="checkout-wrap">
            <div className>
              <div className="checkout-wrap">
                <div className="custm_container custm_containerpadfix">
                  <div className="ckoutflt-Left">
                    <h3 className="checkout_title marBot15">
                      <span className="checkouttitleIcon" /> Items you are
                      buying{" "}
                    </h3>
                    <div className="savedeletmsg" />
                    <div className="savedeletmsg" />
                    <div className="no-item-Div" style={{ display: "none" }}>
                      <p className="no-item-txt">
                        <span className="no-item-Icn" />
                        <span>Item(s) not available!</span>
                        <a href="/#" style={{ cursor: "pointer" }}>
                          <span className="item-remove-Icn" /> Remove All
                        </a>
                        <a
                          href="/#"
                          style={{ cursor: "pointer" }}
                          className="no-item-heart-icn"
                        >
                          <span className="heart-Icn" /> Save for Later
                        </a>
                      </p>
                      <p className="item-txt">
                        Sorry, some item(s) in your basket are not available.
                        Please remove them or save them for later to proceed.
                      </p>
                    </div>
                    <div className="no-item-Div" style={{ display: "none" }}>
                      <p className="item-txt">Items Removed</p>
                    </div>
                    {/**/}
                    {/**/}
                    <div className="clickAndCollect chktableout">
                      <table width="100%" cellPadding={0} cellSpacing={0}>
                        <tbody>
                          <tr>
                            <th width="34%" align="left">
                              Product Name{" "}
                            </th>
                            <th width="11%" align>
                              Quantity{" "}
                            </th>
                            <th width="14%" align>
                              Unit Price{" "}
                            </th>
                            <th width="10%" align>
                              Subtotal{" "}
                            </th>
                            <th width="14%" align>
                              Delivery Method{" "}
                            </th>
                          </tr>
                          {/**/}
                          <tr>
                            <td colSpan={5} className="forDelivery">
                              For Delivery {/**/}
                              {/**/}
                            </td>
                          </tr>
                          {buyObj.map((data) => {
                            return (
                              <>
                                <tr className>
                                  <td>
                                    <a
                                      href={`/product?id=${data.id}`}
                                      className
                                    >
                                      {data.name}
                                    </a>
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        color: "rgb(119, 119, 119)",
                                      }}
                                    >
                                      {data.supCat} {data.subCat}
                                    </p>
                                    <div>
                                      <a
                                        href="/#"
                                        style={{ cursor: "pointer" }}
                                        className="removeCls"
                                        onClick={buyProduct}
                                        productid={data.id}
                                      >
                                        {`${
                                          TDATA.buy.includes(data.id)
                                            ? "Remove"
                                            : ""
                                        }`}
                                      </a>
                                      <a
                                        href="/#"
                                        style={{ cursor: "pointer" }}
                                        className="save-later-txt-chk"
                                        onClick={saveProduct}
                                        productid={data.id}
                                      >
                                        <span className="chkheartIcon" />{" "}
                                        {`${
                                          TDATA.saved.includes(data.id)
                                            ? "Un Save"
                                            : "Save for Later"
                                        }`}
                                      </a>
                                    </div>
                                  </td>
                                  <td className="txtcenter">
                                    <select>
                                      <option value={1}>1</option>
                                      <option value={2}>2</option>
                                    </select>
                                  </td>
                                  <td className="txtcenter">£ {data.price}</td>
                                  <td className="txtcenter">£ {data.price}</td>
                                  {/**/}
                                  {/**/}
                                  <td className="txtcenter" style={{}}>
                                    <label
                                      className="delivery-method"
                                      style={{}}
                                    >
                                      <p>
                                        Delivery<span>FREE</span>
                                      </p>
                                      <input
                                        type="radio"
                                        name="sappixr64gprunlb1"
                                        defaultValue={1}
                                      />
                                      <span className="radiomark" />
                                    </label>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    <StripePayment
                      product={{ price: productPrice, product: buyObj }}
                    />
                    <div />
                  </div>
                  <div className="ckoutflt-Right">
                    <div className="leftTextCls">
                      <label>Subtotal</label>
                      <span>£{Math.round(ST)}</span>
                    </div>
                    <div className="dividersolid" />
                    <div className="leftTextCls">
                      <label>Shipping Cost</label>
                      <span>£{SC}</span>
                    </div>
                    <div className="dividerimg" />
                    <div className="leftTextCls">
                      <label className="redcolorbigFont">GRAND TOTAL</label>
                      <span className="redcolorbigFont">
                        £{Math.round(SC + ST)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Basket;
