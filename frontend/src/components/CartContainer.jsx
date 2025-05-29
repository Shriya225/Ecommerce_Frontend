import '../styles/Heading.css';
import { ListGroup,Spinner,Alert } from 'react-bootstrap';
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

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="error-alert">
        Something went wrong.
      </Alert>
    );
  }


  return (
    <div className="p-3 font">
       <h3 className='text-center m-4 font'>Your Cart</h3>
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
          <CartTotal text={'PROCEED TO CHECKOUT'}/>
        </div>
      </div>
      <br /><br />
    </div>



  );
};

export default CartContainer;