import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CartItem from './CartItem';
import { useCartQuery } from '../redux/apiSlice';
import { setCartTotal } from '../redux/cartTotalSlice';
import { setCartCount } from '../redux/cartCountSlice';
import { useDispatch } from 'react-redux';
import CartTotal from './CartTotal';
import { useEffect } from 'react';
const CartContainer = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useCartQuery();
  const cartData = data?.data;
  


useEffect(() => {
  if (cartData) {
    const count = cartData.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    dispatch(setCartCount(count));

    const total = cartData.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    dispatch(setCartTotal(total));
  }
}, [cartData, dispatch]);

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-danger">Error loading cart</div>;

  return (
    <div className="p-3">
      <h2 className="text-center mb-4">Your Cart</h2>
      <ListGroup>
        {cartData?.map((cartItem, key) => (
          <CartItem key={key} item={cartItem} />
        ))}
      </ListGroup>
      <br />
      <br />
      <br />
      <div className="d-flex flex-row-reverse flex-wrap gap-3">
        <div className="col-lg-6 col-md-8 col-12">
          <CartTotal />
        </div>
      </div>
      <br /><br />


    </div>



  );
};

export default CartContainer;