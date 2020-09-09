import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HIfiBLLkjw8IZYGiixih8R5ApYJ8gEmeB3olB1MAi35G2d436YUSVEY2Oo58njnWd3nRMXO0nniPvPy8bCahb3H00fxpiIN9q";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
    // will go to backend later
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
