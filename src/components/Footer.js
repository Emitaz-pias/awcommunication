import React from "react";
import "./../scss/Footer.scss";
import "./footer.css";

function Footer(props) {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div className="footer-container">
        <div className="footer-logo-container">
          <img
            style={{ width: "200px", zIndex: "1" }}
            alt=""
            src="../../img/logo2.png"
          ></img>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="footer-menu-container">
              <div>
                <h5 className="menu-heading">CATEGORIES</h5>
                <ul>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/#"
                    >
                      SMARTPHONES
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/#"
                    >
                      TABLETS
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/#"
                    >
                      LAPTOPS
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/#"
                    >
                      REPAIR
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/#"
                    >
                      UNLOCK
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/#"
                    >
                      PART
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/#"
                    >
                      ACCESSORIES
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-menu-container">
              <div>
                <h5 className="menu-heading">PAGES</h5>
                <ul>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/about-us"
                    >
                      ABOUT US
                    </a>
                  </li>

                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/#"
                    >
                      TRACK ORDER
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/#"
                    >
                      WISHLIST
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="/#"
                    >
                      MY ACCOUNT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-menu-container">
              <div>
                <h5 className="menu-heading">LEGAL</h5>
                <ul>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="cookies"
                    >
                      Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href="term"
                    >
                      TERMS & CONDITIONS
                    </a>
                  </li>
                  <li>
                    <a
                      href="privacy"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      PRIVACY POLICY
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="__Footer">
        <footer className="uk-footer">
          <div className="footerArea clsRepairFooter">
            <ul className="policyLinks">
              <li>
                <a href="term" className>
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="privacy" className>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="cookies" className>
                  Cookies Policy
                </a>
              </li>
              {/**/}
            </ul>
            <div style={{}} id="payformcontainer">
              <a href="#">
                <ul>
                  <li className="paypal" style={{}} id="paypal" />
                  <li className="mastercard" style={{}} id="mastercard" />
                  <li className="visa" style={{}} id="visa" />
                  <li className="americanExpress" style={{}} />
                  <li
                    className="ideal"
                    style={{ display: "none" }}
                    id="ideal"
                  />
                  <li
                    className="discover_us"
                    style={{ display: "none" }}
                    id="ideal"
                  />
                  <li
                    className="jcb_us"
                    style={{ display: "none" }}
                    id="ideal"
                  />
                  <li className="dotpay" style={{ display: "none" }} />
                  <li
                    className="przelewy"
                    style={{ display: "none" }}
                    id="przelewy"
                  />
                  <li className="apple-pay-li" style={{ display: "none" }}>
                    <img src="/images/logos/apple-pay.svg" />
                  </li>
                </ul>
              </a>
            </div>
            <div className="footerMobileLink" align="center">
              <a style={{ cursor: "pointer" }} id="mobileLnk">
                <i
                  style={{ fontSize: "18px", color: "white" }}
                  class="fa fa-phone mr-2"
                ></i>
                (029) 2021 7561
              </a>
              <br></br>
              <a style={{ cursor: "pointer" }} id="mobileLnk">
                <i
                  style={{ fontSize: "18px", color: "white" }}
                  class="fa fa-envelope mr-2"
                ></i>
                info@technoglobe.co.uk
              </a>
            </div>
            <div className="copyrightText">
              <span>
                © 2021 Techno Globe
                {"    "} by {"   "}
                <b>
                  <a href="https://clicktaketech.com">ClickTake Technologies</a>
                </b>
              </span>
              <div> </div>
            </div>
            <div className="clear">&nbsp;</div>
          </div>
          <a
            className="back-to-top"
            onClick={topFunction}
            id="backToTop"
            style={{ display: "block" }}
          >
            &nbsp;
          </a>
        </footer>
      </div>
    </>
  );
}

export default Footer;
