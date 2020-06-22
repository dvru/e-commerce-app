import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GwwMjBWYwvGllFN10pDpjEESMW7YOIjrAwPaJpNdQFI20KMn5GimfTAqx8tXENDbyrpGHawRSvaJzHqA00O9rJC00ZUqVDkjI'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name='CleanClothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/MFB.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton