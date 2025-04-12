import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css"; // For minor custom adjustments
const Subscribe = () => {
  return (
    <div style={{"margin":"50px"}}>
      <Row className="mb-5 text-center">
        <Col>
          <h2 className="mb-3 fw-normal">Subscribe now & get 20% off</h2>
          <p className="text-muted mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <Form className="d-flex justify-content-center gap-2 mx-auto" style={{ maxWidth: "500px" }}>
            <Form.Control 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow-1 py-2"
              style={{ minWidth: "200px" }}
            />
            <Button variant="dark" className="px-4 fw-bold py-2">
              SUBSCRIBE
            </Button>
          </Form>
        </Col>
      </Row>

    </div>
  )
}

export default Subscribe
