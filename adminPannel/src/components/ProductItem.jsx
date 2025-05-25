
import { Row, Col, Image, Button, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
const ProductItem = ({item}) => {
  return (
    <div>

       {console.log(item)
       }
       
        <div className="border-bottom py-3 container">
      <Row className="align-items-center">
        <Col xs={3} md={2}>
          <Image
            src={`http://localhost:8000${item?.main_img}`}
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
              <h6 className="mb-1">{item.name}</h6>
            </Col>
            <Col md={2} className="text-md-center">
              <span className="d-md-none">Price: </span>₹{item?.price}
            </Col>
            <Col md={2} className="text-md-center">
              <span className="d-md-none">Size: </span>{item?.cateogry}
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
            
            <Col md={1} className="text-end">
              <Button
              onClick={()=>{toast.error("Feature is disabled in demo")}}
                variant="link"
                className="text-danger p-0"
                aria-label="Remove item"
              >
                <FaTrash size={18} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default ProductItem

