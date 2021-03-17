import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publicShableKey = 'pk_test_51IVrxAJeYmRMbC6T3xoYGlGTGBgrx0tmSOO15lafAw2SWWCVo8N90g8c7EFSfSOwXyOQPNlkIXVmO7bvPVb8Uma400HCOKNODe';

const onToken = token =>{
    console.log(token);
}
    return (
    <StripeCheckout 
    label='PAY NOW'
    name= 'CRWN CLOTHING Ltd'
    billingAddress
    shippingAddress
    image ='https://svgshare.com/i/CUz.svg/'
    description = {`Your Total is $${price}`}
    amount={priceForStripe}
    panelLabel = 'PAY NOW'
    token= {onToken}
    stripeKey= {publicShableKey}



    />
);
};
export default StripeCheckoutButton;