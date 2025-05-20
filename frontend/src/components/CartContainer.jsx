import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CartItem from './CartItem';
import { useCartQuery } from '../redux/apiSlice';

const CartContainer = () => {
  const { data, isLoading, error } = useCartQuery();
  const cartData = data?.data;

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-danger">Error loading cart</div>;

  return (
    <div className="p-3">
      <h2 className="text-center mb-4">Your Cart</h2>
      <ListGroup>
        {cartData?.map((cartItem,key) => (
          <CartItem key={key} item={cartItem} />
        ))}
      </ListGroup>
    </div>
  );
};

export default CartContainer;