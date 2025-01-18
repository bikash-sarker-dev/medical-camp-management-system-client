import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import HeaderDashboard from "../../sharedashboard/HeaderDashboard";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_PUBLISH_KEY}`);
const Payment = () => {
  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  return (
    <div>
      <HeaderDashboard title={"Payment method"} />
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
