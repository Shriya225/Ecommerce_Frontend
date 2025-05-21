import React from 'react';
import { useSelector } from 'react-redux';

const CartTotal = () => {
  const total = useSelector((state) => state.cartTotal.value);
  const shippingFee = 80;
  const grandTotal = total + shippingFee;

  return (
    <div className="" style={{ maxWidth: '600px' }}>
      <h5 className="mb-4 border-bottom pb-2">CART <span className="fw-light">TOTALS</span></h5>
      <div className="d-flex justify-content-between mb-2">
        <span>Subtotal</span>
        <span>₹{total.toFixed(2)}</span>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <span>Shipping Fee</span>
        <span>₹{shippingFee.toFixed(2)}</span>
      </div>
      <div className="d-flex justify-content-between border-top pt-3 fw-bold">
        <span>Total</span>
        <span>₹{grandTotal.toFixed(2)}</span>
      </div>
      <button className="btn btn-dark w-100 mt-4">PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default CartTotal;
