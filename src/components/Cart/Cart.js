import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shippingCost = total / 10;
    const tax = (total + shippingCost) / 10;
    const orderTotal = total + shippingCost + tax;

    return (
        <div className="cart-section">
            <h2>Order Summary</h2>
            <h4>Items Ordered: {totalQuantity}</h4>
            <br />
            <p>Total: ${total.toFixed(2)}</p>
            <p>Shipping-Cost: ${shippingCost.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <hr />
            <p className="order-total">Order-total: ${orderTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;