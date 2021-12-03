import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51K2STkDSXTyomDCtmXhqzamUye2C6OatYx1GylQ8KrkBTyDvmFLIOQbFunLOHSU5o7zLz3MRz7h1krvE9I5RvxBm00Fi9xTG99';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='e-shopping-mall'
      billingAddress
      shippingAddress
      image='/images/payment.png'
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
