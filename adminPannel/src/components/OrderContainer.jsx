import React from 'react'
import { useOrdersListQuery } from '../redux/apiSlice'
import OrderItem from './OrderItem';
import { Alert,Spinner,Container } from "react-bootstrap";
const OrderContainer = () => {
  const {data,isLoading,error}=useOrdersListQuery();
     if(isLoading){
          return   <Container className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
      }
      if(error){
          return <Alert variant="danger">
          <strong>Error:</strong> {error?.message || 'Something went wrong.'}
        </Alert>
      }
  return (
    <div>
        {console.log(data)
        }
        {
          data.map((ele,index)=><OrderItem key={index} item={ele}/>)
        }
    </div>
  )
}

export default OrderContainer