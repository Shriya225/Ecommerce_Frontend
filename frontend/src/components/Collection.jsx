import React from 'react'
import CardContainer from './CardContainer'
import { useAllCollectionQuery } from '../redux/homeApiSlice'
import './Heading.css';
const Collection = () => {
    const {data,error,isLoading}=useAllCollectionQuery();
    console.log(data);
    
  return (
    <div>
        <h2 className='font' style={{"margin":"35px"}}>ALL COLLECTIONS</h2>
        {(!isLoading && <CardContainer data={data["results"]}/>)}
        
    </div>
  )
}

export default Collection