import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();
const StripePayment = ({ product }) => {
  console.log(product.price);
  async function handleToken(token, adress) {
    const response = await axios.post("http://localhost:8080/checkout", {
      token,
      adress,
      product,
    });
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast(
        "Congratulations.. Your payment is successful! Check email for details",
        { type: "success" }
      );
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
        billingAddress
        shippingAddress
      />
    </div>
  );
};

export default StripePayment;
