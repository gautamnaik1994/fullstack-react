import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payments = () => (
  <StripeCheckout
    name="Emaily"
    description="$5 for 5 email surveys"
    amount={500}
    token={token => console.log('Token', token)}
    stripeKey={STRIPE_KEY}
  >
    <button className="btn">Buy Credits </button>
  </StripeCheckout>
);

export default Payments;
