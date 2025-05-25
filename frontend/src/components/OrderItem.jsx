import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const OrderItem = ({ item }) => {
  const formatDate = (dateString) => new Date(dateString).toDateString();

  return (
    <article
      className="border-bottom py-4 px- container"
      style={{ fontFamily: 'Arial, sans-serif' }}
      aria-label={`Order for ${item?.product?.name}`}
    >
      <Row className="align-items-center" role="group">
        {/* Product Image */}
        <Col xs={12} md={2} className="mb-3 mb-md-0">
          <Image
  src={`http://localhost:8000${item?.product?.main_img}`}
  alt={`Image of ${item?.product?.name}`}
  width={80}
  height={100}
  loading="lazy"
  className="border rounded"
  style={{
    objectFit: 'cover',
    width: '80px',
    height: '100px'
  }}
/>
        </Col>

        {/* Order Details */}
        <Col xs={12} md={7}>
          <h2 className="h6 mb-2 fw-semibold">{item?.product?.name}</h2>
          <section
            className="d-flex flex-wrap mb-1"
            style={{ fontSize: '14px', color: '#555' }}
            aria-label="Order attributes"
          >
            <div className="me-3">₹{item?.unit_price}</div>
            <div className="me-3">Quantity: {item?.quantity}</div>
            <div className="me-3">Size: {item?.size}</div>
          </section>
          <section style={{ fontSize: '14px', color: '#666' }}>
            <p>Payment: {item?.payment_method}</p>
            <p>Date: {formatDate(item?.created_at)}</p>
          </section>
        </Col>

        {/* Status */}
        <Col xs={6} md={2} className="text-md-center mt-3 mt-md-0">
          <div
            style={{ fontSize: '14px', color: '#333' }}
            aria-label={`Order status: ${item?.status}`}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: 'green',
                borderRadius: '50%',
                marginRight: '6px',
              }}
              role="presentation"
            />
            {item?.status}
          </div>
        </Col>

        {/* Track Order Button */}
        <Col xs={6} md={1} className="text-end mt-3 mt-md-0">
          <button
            style={{
              padding: '4px 12px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #333',
              backgroundColor: '#fff',
              color: '#333',
              cursor: 'pointer',
            }}
            aria-label={`Track order for ${item?.product?.name}`}
          >
            Track Order
          </button>
        </Col>
      </Row>
    </article>
  );
};

export default OrderItem;
