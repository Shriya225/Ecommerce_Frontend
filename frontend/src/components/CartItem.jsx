
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useDeleteFromCartMutation } from '../redux/apiSlice';
import { toast } from "react-toastify";
const CartItem = ({ item }) => {
  const [deleteCartItem]=useDeleteFromCartMutation();
  const handleClick=async()=>{
    try{
      const res=await deleteCartItem({"id":item?.id});
      toast.success("succesfully deleted");
    }
    catch(err)
    {
      toast.error("oops,couldn't delete");
    }
  }
  return (
    <div className="border-bottom py-3 container">
      <Row className="align-items-center">
        {/* Product Image */}
        {console.log(item)
        }
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
              <Button onClick={handleClick}
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