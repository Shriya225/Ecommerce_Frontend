import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/ProductCard.css';
const ProductCard = ({img,title,price}) => {
  return (
    <div className="d-flex justify-content-center">
      <Card className="mb-4 product-card" style={{ width: '100%', maxWidth: '300px' }}>
       <div className="product-img-container">

        <Card.Img variant="top" src={img} className='product-img'
 />
        <Card.Body>
          <Card.Title style={{ textDecoration: 'none' }}>{title}</Card.Title>
          <Card.Text style={{ textDecoration: 'none' }}>
            {price}
          </Card.Text>
        </Card.Body>
 </div>
      </Card>
    </div>
  );
};

export default React.memo(ProductCard);
