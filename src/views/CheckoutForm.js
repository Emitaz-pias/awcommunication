import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePayment from "./StripePayment";

const CheckoutForm = () => {
  const stripePromise = loadStripe(
    "pk_test_iONwyHcRVWakZiYUQOPzcA8d00C5WkKbt2"
  );
  return (
    <Elements stripe={stripePromise}>
      <StripePayment />
    </Elements>
  );
};

export default CheckoutForm;
