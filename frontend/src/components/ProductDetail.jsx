import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useProductDetailQuery } from '../redux/homeApiSlice';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
const ProductDetail = () => {
    const [mainImgUrl,setMainImgUrl]=useState(null);
    const {id}=useParams();
    const {data,error,isLoading}=useProductDetailQuery(id);
    let product_imgs=data?.product_images;
    let image_url=data?.product_images[0]?.image_url
   useEffect(()=>{
    if(!isLoading&&!error){
      const main_img=product_imgs.filter(img=>img?.is_main===true); 
      if(main_img){
         setMainImgUrl(main_img[0]?.image_url); 
      }
    } 
   }
   ,[data])
    
  return (
    <div>ProductDetail
      <Container>
        <h1>{id}</h1>
        <Row>
          <Col md={6}>
          <Row style={{border:"2px solid red"}}>
         <Col style={{border:"2px solid red"}} md={3}>
          <p>hi</p>
          {!isLoading && !error && <div className='d-flex flex-column w-10 ' style={{border:"2px solid red"}}>
        {product_imgs.map(img=><button key={img.id} onClick={()=>{setMainImgUrl(img?.image_url)}}>
          <Image src={`${img?.image_url}`} alt="oops"/>
          </button>)}
        
        </div>}
         </Col>
         <Col style={{border:"2px solid red"}} md={9}>
          <p>hi</p>
          <Image src={`${mainImgUrl}`} alt="oops"/>
         </Col>

        </Row>
          </Col>
          <Col md={6}>
          hi
          </Col>
        </Row>
 
       
        
       
      </Container>
    </div>
  )
}

export default ProductDetail