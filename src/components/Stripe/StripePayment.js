import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usersContext } from "../../views/App";

toast.configure();

const StripePayment = ({ product }) => {
  const { payment, orderedPd } = useContext(usersContext);
  const [paymentSuccess, setPaymentSuccess] = payment;
  const [orderdProducts, setOrderdProducts] = orderedPd;

  async function handleToken(token, adress) {
    const response = await axios.post(
      "https://awc-server.herokuapp.com/checkout",

      {
        token,
        adress,
        product,
      }
    );

    const { status } = response.data[1];
    const orderedProductsPaid = response.data[2].orderedProduct.product;
    fetch("https://awc-server.herokuapp.com/sendOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderedProductsPaid),
    })
      .then((res) => res.json())
      .then((order) => order);

    console.log("order is boto,", orderedProductsPaid);
    // console.log("response is", response.data[2].orderedProduct.product);
    // console.log("paind pd is", orderedProductsPaid);
    // console.log("order pay after pd is", orderdProducts);

    if (status === "success") {
      toast(
        "Congratulations.. Your payment is successful! Check email for details",
        { type: "success" }
      );
      setPaymentSuccess(true);
    } else {
      toast(
        "Something went wrong.please try again later :( don't worry you won't be charged twice",
        { type: "error" }
      );
    }
  }
  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_iONwyHcRVWakZiYUQOPzcA8d00C5WkKbt2"
        token={handleToken}
        amount={product.price * 100}
        currency="GBP"
        billingAddress
        shippingAddress
      />
    </div>
  );
};

export default StripePayment;
