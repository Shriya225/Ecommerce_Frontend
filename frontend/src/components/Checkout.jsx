import { useForm } from 'react-hook-form';
import CartTotal from './CartTotal';
import { useNavigate } from 'react-router-dom';
import { usePlaceOrderMutation } from '../redux/apiSlice';
import { useDispatch } from 'react-redux';
import { setCartCount } from '../redux/cartCountSlice';
const Checkout = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const [placeOrder] = usePlaceOrderMutation();
    const onSubmit = async (data) => {
        console.log('Form Data:', data);
        try {

            const res = await placeOrder({ "delivery_data": data, "payment_method": "cod" });
            dispatch(setCartCount(0));
            console.log("success");
            navigate('/orders');
        }
        catch (err) {
            console.log("unable to place Order");
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
                            <button className="btn btn-dark w-100 mt-4" >PLACE ORDER</button>
                        </div>
                    </div>

                    {/* Right Side - Cart Total and Payment */}
                    <div className="w-50" style={{ "marginTop": "50px" }}>
                        <CartTotal text="PLACE ORDER" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
