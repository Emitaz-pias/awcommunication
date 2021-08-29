import "./../scss/App.scss";

import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Home from "./Home";
import Product from "./Product";
import Basket from "./Basket";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiesPolicy from "./CookiesPolicy";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UnlockingPage from "../components/UnlockingPage";
import RepairService from "../components/RepairService";
import AboutUs from "../components/AboutUs";
import { createContext, useState } from "react";
import Dashboard from "../components/Dashboard";

export const usersContext = createContext();

function App() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderdProducts, setOrderdProducts] = useState([]);
  return (
    <usersContext.Provider
      value={{
        payment: [paymentSuccess, setPaymentSuccess],
        orderedPd: [orderdProducts, setOrderdProducts],
      }}
    >
      <Router>
        <Switch>
          <Route path="/product">
            <Layout>
              <Product />
            </Layout>
          </Route>
          <Route path="/term">
            <Layout>
              <TermsAndConditions />
            </Layout>
          </Route>
          <Route path="/privacy">
            <Layout>
              <PrivacyPolicy />
            </Layout>
          </Route>
          <Route path="/cookies">
            <Layout>
              <CookiesPolicy />
            </Layout>
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/unlocking">
            <UnlockingPage></UnlockingPage>
          </Route>
          <Route path="/repair-service">
            <RepairService></RepairService>
          </Route>
          <Route path="/about-us">
            <Layout>
              <AboutUs />
            </Layout>
          </Route>
          <Route path="/dashboardOwnerHafizVai">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </usersContext.Provider>
  );
}

export default App;
