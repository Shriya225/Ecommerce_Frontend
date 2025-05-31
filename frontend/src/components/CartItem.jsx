import { useState ,useEffect} from 'react';
import { Row, Col, Image, Button, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useDeleteFromCartMutation, useUpdateCartMutation } from '../redux/apiSlice';
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const [deleteCartItem] = useDeleteFromCartMutation();
  const [updateQuantity] = useUpdateCartMutation();
const [quantity, setQuantity] = useState(item?.quantity || 1);

useEffect(() => {
  setQuantity(item?.quantity || 1);
}, [item?.quantity]);

  const handleDelete = async () => {
    try {
      await deleteCartItem({ id: item?.id }).unwrap();
      toast.success("Successfully deleted");
    } catch (err) {
      toast.error("couldn't delete");
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleQuantityBlur = async () => {
    if (quantity !== item?.quantity) {
      try {
        await updateQuantity({ id: item?.id, quantity }).unwrap();
      } catch (err) {
        toast.error("Failed to update quantity");
      }
    }
  };

  return (
    <div className="border-bottom py-3 container">
      <Row className="align-items-center">
        <Col xs={3} md={2}>
          <Image
            src={item?.product?.main_img}
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
            </Col>
            <Col md={2} className="text-md-center">
              <span className="d-md-none">Price: </span>₹{item?.product?.price}
            </Col>
            <Col md={2} className="text-md-center">
              <span className="d-md-none">Size: </span>{item?.size?.name}
            </Col>
            <Col md={2} className="text-md-center">
              <span className="d-md-none">Qty: </span>
              <Form.Control
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                onBlur={handleQuantityBlur}
                min={1}
              />
            </Col>
            <Col md={1} className="text-end">
              <Button
                onClick={handleDelete}
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
