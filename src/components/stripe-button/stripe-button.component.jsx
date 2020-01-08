import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_y3aii32EoSbN1oKmGf7JQYiK00rq2fTWN5';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful')
    }

    return (
        <StripeCheckout 
            label='Pay now'
            name='SPINNING Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;