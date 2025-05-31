import OrderItem from './OrderItem'
import { useOrdersQuery } from '../redux/apiSlice'
import '../styles/Heading.css';
import { Spinner,Alert } from 'react-bootstrap';
const OrderPage = () => {
  const {data,isLoading,error}=useOrdersQuery();
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

    <div>
    <h3 className='text-center m-4 font'>My Orders</h3>
  
    {
      data.map((item,index)=><OrderItem key={index} item={item}/>)
    }
    </div>
  )
}

export default OrderPage