import React from 'react';
import './Heading.css';

import CardContainer from './CardContainer';
const LatestCollection = ({data,heading,title}) => {
    console.log(`data in ${heading} colletion is...`,data);
    console.log(Array.isArray(data));
    
    return (
        <div style={{"margin":"50px"}}>
            <h2 className='font'>{heading}</h2>
            <p className='font'>{title}</p>
            <CardContainer data={data}/>
        </div>
    );
}

export default LatestCollection;
