import React from 'react'
import OrderItem from './OrderItem'
import { useOrdersQuery } from '../redux/apiSlice'

const OrderPage = () => {
  const {data,isLoading,error}=useOrdersQuery();
  if(isLoading){
      return <div>Loading...</div>
    }
    if(error){
        return <div>Error</div>
    }
  return (

    <div>
    <h3 className='text-center m-4'>My Orders</h3>
    {console.log(data)}
    {
      data.map((item,index)=><OrderItem key={index} item={item}/>)
    }
    </div>
  )
}

export default OrderPage