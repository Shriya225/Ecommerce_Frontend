import { Row, Col, Image, Button, Form } from 'react-bootstrap';
import parcel_icon from '../assets/parcel_icon.svg'
import { useState } from 'react';
import { useUpdateStatusMutation } from '../redux/apiSlice';
const OrderItem = ({ item }) => {
  const [value, setValue] = useState(item.status);
  const [updateStatus]=useUpdateStatusMutation();
  const handleChange=async(e)=>{
    const newValue=e.target.value;
    setValue(newValue);
    try{
        const res=await updateStatus({id:item.id,status:newValue});
      
        
    }
    catch(err){
      console.log("failed to update");
      
    }
  }
  return (
    <div>

      
      <div className="border-bottom py-3 container">
        <Row className="align-items-center">
          <Col xs={3} md={2}>
            <Image
              src={parcel_icon}
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
                <div className='d-flex flex-column'>
                  {item.items.map((txt) => <p style={{ "margin": "1.3px" }}>{txt}</p>)}
                  <h6 className="mb-1">{item.user}</h6>
                  <div className='d-flex flex-column' style={{ "margin": "2px" }}>
                    <div className="d-flex">
                      <span className="d-md">{item?.delivery_info?.street}, </span>
                      <span className="d-md">{item?.delivery_info?.city}, </span>
                    </div>

                    <div className="d-flex" style={{ "margin": "1px" }}>
                      <span className="d-md">{item?.delivery_info?.state}, </span>
                      <span className="d-md">{item?.delivery_info?.country}, </span>
                      <span className="d-md">{item?.delivery_info?.postal_code}, </span>

                    </div>

                  </div>


                </div>
              </Col>
              <Col md={2} className="text-md-center">
                <span className="d-md-none">Price: </span>₹{item?.total_price}
              </Col>
              <Col md={2} className="text-md-center">
                <div className='d-flex flex-column'>
                  <span className="d-md">Items:{item?.items?.length} </span>
                  <span className="d-md">Method:{item.payment_method}</span>
                  <span>Date: {new Date(item.created_at).toLocaleDateString()}</span>


                </div>
              </Col>
              {/* <Col md={2} className="text-md-center">
              <span className="d-md-none">Qty: </span>
              <Form.Control
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                onBlur={handleQuantityBlur}
                min={1}
              /> */}

              <Col md={2} className="text-end">
                <Form.Group controlId="exampleSelect">
                  <Form.Select value={value} onChange={handleChange}>
                    <option value="pending">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default OrderItem