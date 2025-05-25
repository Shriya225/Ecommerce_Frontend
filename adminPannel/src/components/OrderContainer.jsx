import React from 'react'
import { useOrdersListQuery } from '../redux/apiSlice'
import OrderItem from './OrderItem';

const OrderContainer = () => {
  const {data,isLoading,error}=useOrdersListQuery();
  if(isLoading){
    return <>Loading...</>
  }
  if(error){
    return <>error...</>
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