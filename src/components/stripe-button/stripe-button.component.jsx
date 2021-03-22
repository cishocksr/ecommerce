import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey =
    'pk_test_51HXju3GyAiu0swCiSMtb6JrVqAZTMQpPgap6yZ24e79Hl4y7DUdRXzKFOF78rjh7rabkApnB7ARvur2K4Xe7BN4700UuR4UPvJ';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='E Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $ ${price}`}
      amount={priceForStrip}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
