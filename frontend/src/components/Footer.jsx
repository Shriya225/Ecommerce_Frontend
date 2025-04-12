import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css"; // For minor custom adjustments

const Footer = () => {
  return (
    <Container fluid className="bg-white text-dark p-5">
      {/* Subscribe Section
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
      </Row> */}

      {/* <hr className="my-4" /> */}

      {/* Main Footer Content - Side by Side Layout */}
      <Row className="g-4">
        {/* Left Side - FOREVER */}
        <Col md={6} className="pe-md-5">
          <h2 className="h4 mb-3">
            ShopEasy <span className="d-inline-block">-</span>
          </h2>
          <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 5000s, where an unknown printer took a graffy off type and scrambled it to make a type specimen book.
          </p>
        </Col>

        {/* Right Side - COMPANY and GET IN TOUCH */}
        <Col md={6}>
          <Row>
            {/* COMPANY Column */}
            <Col sm={6}>
              <h3 className="h5 mb-3 text-uppercase fw-bold">COMPANY</h3>
              <ul className="list-unstyled">
                <li className="mb-2 text-muted">Home</li>
                <li className="mb-2 text-muted">About us</li>
                <li className="mb-2 text-muted">Delivery</li>
                <li className="mb-2 text-muted">Privacy policy</li>
              </ul>
            </Col>

            {/* GET IN TOUCH Column */}
            <Col sm={6}>
              <h3 className="h5 mb-3 text-uppercase fw-bold">GET IN TOUCH</h3>
              <ul className="list-unstyled">
                <li className="mb-2 text-muted">+1-000-000-0000</li>
                <li className="mb-2 text-muted">greenfooddengapad.com</li>
                <li className="mb-2 text-muted">Instagram</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Copyright */}
      <hr className="my-4" />
      <Row>
        <Col className="text-center text-muted small">
          Copyright 2024@greenfood.dar - All Right Reserved.
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;