import React from 'react'
import p_img9 from '../assets/p_img9.png';
import p_img8 from '../assets/p_img8.png';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';


const CardContainer = ({data}) => {
  return (
      
      <Container>
                <Row 
                    className="justify-content-center g-4" // Centers cards and adds gap between them
                >
                    {data.map((product)=>{ return <Col key={product.id} md={3} sm={6} xs={12} >
                        <ProductCard title={product["name"]} price={product["price"]} img={product["main_image"]}/>
                       
                    </Col>
                    
                })}
                   
                </Row>
             
            </Container>
   
  )
}

export default CardContainer