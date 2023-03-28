import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {

    // const cart = props.cart;
    // const {cart} = props;

    console.log(cart);

    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
        // console.log(total);
    }

    // tax amnt
    const tax = (total*7)/100;
    // as total is changing , tax is also changing...


    const grandtotal = total + totalShipping + tax;

    return (
        <div className="order-details">
            {/* className working even if not imported... */}
             <h4>order Summary = </h4>
            <p>selected items-{cart.length} </p>
            <p>Total Price- $ {total}</p>
            <p>Total Shipping- $ {totalShipping}</p>
            <p>Tax- $ {tax} </p>
            <h5>Grand Total - {grandtotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;