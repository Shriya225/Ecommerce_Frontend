import React from 'react'
import { Row, Col, Image, Button, Form } from 'react-bootstrap';
const OrderItem = ({item}) => {
  return (
   <div className="border-bottom py-3 container">

    {console.log(item)
    }
      <Row className="align-items-center">
        <Col xs={3} md={2}>
          <Image
            src={`http://localhost:8000${item?.product?.main_img}`}
            alt={item?.product?.name || 'Product Image'}
            fluid
            width={80}
            height={80}
            loading="lazy"
            className="border"
          />
        </Col>
        <Col xs={9} md={10}>
          <Row className="align-items-center">
            <Col md={5}>
              <h6 className="mb-1">{item?.product?.name}</h6>
              <div className='d-flex'>
              <p style={{"marginRight":"20px"}}>₹{item?.unit_price}</p>
              <p style={{"marginRight":"20px"}}>Quantity:{item?.quantity}</p>    
              <p>Size:{item?.size}</p>    
              </div>
            </Col>
            <Col md={2} className="text-md-center">
              <span className="d-md-none">Status: </span>{item?.status}
            </Col>
            <Col md={2} className="text-md-center">
            {item?.size?.name}
            </Col>

            <Col md={1} className="text-end">
            <button>Track Order</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default OrderItem