import React from 'react';
import { Card, Button } from 'react-bootstrap';
const ProductCard = ({img,title,price}) => {
  return (
    <div className="d-flex justify-content-center">
      <Card className="mb-4 product-card" style={{ width: '100%', maxWidth: '300px' }}> {/* Set max-width for responsiveness */}
       <div className="product-img-container">

        <Card.Img variant="top" src={`http://localhost:8000${img}`} className='product-img'
 />{console.log(img)}
        <Card.Body>
          <Card.Title style={{ textDecoration: 'none' }}>{title}</Card.Title>
          <Card.Text style={{ textDecoration: 'none' }}>
            {price}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
 </div>
      </Card>
    </div>
  );
};

export default React.memo(ProductCard);
