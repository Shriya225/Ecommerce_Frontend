import React from 'react';
import { Card, Button } from 'react-bootstrap';


const ProductCard = ({img,title,price}) => {
  return (
    
    <div className="d-flex justify-content-center">
      <Card className="mb-4" style={{ width: '100%', maxWidth: '300px' }}> {/* Set max-width for responsiveness */}
        <Card.Img variant="top" src={`http://localhost:8000${img}`}
 />{console.log(img)}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
