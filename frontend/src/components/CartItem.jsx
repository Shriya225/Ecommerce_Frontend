
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ item }) => {
  return (
    <div className="border-bottom py-3 container">
      <Row className="align-items-center">
        {/* Product Image */}
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
        {/* Product Details */}
        <Col xs={9} md={10}>
          <Row className="align-items-center">
            <Col md={5}>
              <h6 className="mb-1">{item?.product?.name}</h6>
            </Col>
            <Col md={2} className="text-md-center">
              <span className="d-md-none">Price: </span>${item?.product?.price}
            </Col>
            <Col md={2} className="text-md-center">
              <span className="d-md-none">Size: </span>{item?.size?.name}
            </Col>
            <Col md={2} className="text-md-center">
              <span className="d-md-none">Qty: </span>{item?.quantity}
            </Col>
            <Col md={1} className="text-end">
              <Button
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
  );
};

export default CartItem;