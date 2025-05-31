import { useForm } from 'react-hook-form';
import { useState } from 'react';
import CartTotal from './CartTotal';
import { useNavigate } from 'react-router-dom';
import { usePlaceOrderMutation } from '../redux/apiSlice';
import { useDispatch } from 'react-redux';
import { setCartCount } from '../redux/cartCountSlice';
import razorPay from '../assets/razorpay_logo.png'
const Checkout = () => {
    const dispatch = useDispatch();
    const [paymentMethod, setPaymentMethod] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },watch
    } = useForm();
    const navigate = useNavigate();
    const [placeOrder] = usePlaceOrderMutation();
 
    const onSubmit = async (data) => {
 
  try {
    const { payment_method, ...delivery_data } = data;

    const res = await placeOrder({
      delivery_data, // only delivery fields
      payment_method // separate field
    });

    dispatch(setCartCount(0));
    navigate('/orders');
  } catch (err) {
    console.log("Unable to place order", err);
  }
};


    return (
        <div className="container my-5" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex w-100 gap-5">
                    {/* Left Side - Delivery Information */}
                    <div className="w-50">
                        <h5 className="mb-4">
                            <strong>DELIVERY</strong> INFORMATION
                        </h5>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    {...register('first_name', { required: true })}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    {...register('last_name', { required: true })}
                                />
                            </div>
                            <div className="col-12">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    {...register('email_address', { required: true })}
                                />
                            </div>
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Street"
                                    {...register('street', { required: true })}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                    {...register('city', { required: true })}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="State"
                                    {...register('state', { required: true })}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Zipcode"
                                    {...register('postal_code', { required: true })}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Country"
                                    {...register('country', { required: true })}
                                />
                            </div>
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    {...register('phone_number', { required: true })}
                                />
                            </div>
                            <button className="btn btn-dark w-100 mt-4">PLACE ORDER</button>
                        </div>
                    </div>

                    {/* Right Side - Cart Total and Payment */}
                    <div className="w-50" style={{ "marginTop": "50px" }}>
                        <CartTotal text="PLACE ORDER" />
                        <br /><br />
                        <h5 className="mb-4 pb-2">PAYMENT <span className="fw-light">METHOD</span></h5>
<div className="row g-3">

  {/* Razorpay Button - Clickable but not selectable */}
  <div className="col-12 col-md-6">
    <div
      onClick={() => alert("💳 Razorpay integration is disabled in demo.")}
      className="w-100  px-4 py-3 border d-flex align-items-center gap-3 bg-white text-dark border-info cursor-pointer"
      style={{ transition: 'all 0.3s ease' }}
    >
      <img src={razorPay} alt="Razorpay" height="20" />
    
    </div>
  </div>

  {/* COD Option */}
  <div className="col-12 col-md-6">
    <label
      className={`w-100 px-4 py-3 border d-flex align-items-center gap-3 cursor-pointer 
        ${watch('payment_method') === 'cod' ? 'bg-success text-white border-success' : 'bg-white text-dark border-success'}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <input
        type="radio"
        value="cod"
        {...register('payment_method', { required: true })}
        className="d-none"
      />
      <span>Cash on Delivery</span>
    </label>
  </div>

  {/* Error Message */}
  {errors.payment_method && (
    <div className="col-12">
      <span className="text-danger ps-2">Please select a payment method</span>
    </div>
  )}
</div>



                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
