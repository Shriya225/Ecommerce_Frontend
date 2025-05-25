import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-5 mt-5 border-top">
      <Container>
        <Row className="gy-4">
          {/* Left Section: Brand Description */}
          <Col md={6}>
            <h2 className="h4 mb-3">
              ShopEasy <span className="visually-hidden">Footer Brand</span>
            </h2>
            <p className="text-muted" style={{ lineHeight: "1.6" }}>
              ShopEasy is your trusted shopping partner. Bringing quality products to your door since 2024.
            </p>
          </Col>

          {/* Right Section: Company Info */}
          <Col md={6}>
            <Row>
              <Col sm={6}>
                <nav aria-label="Company Info">
                  <h3 className="h6 mb-3 text-uppercase fw-bold">Company</h3>
                  <ul className="list-unstyled">
                    <li><a href="/" className="text-muted text-decoration-none">Home</a></li>
                    <li><a href="/about" className="text-muted text-decoration-none">About Us</a></li>
                    <li><a href="/delivery" className="text-muted text-decoration-none">Delivery</a></li>
                    <li><a href="/privacy-policy" className="text-muted text-decoration-none">Privacy Policy</a></li>
                  </ul>
                </nav>
              </Col>
              <Col sm={6}>
                <address>
                  <h3 className="h6 mb-3 text-uppercase fw-bold">Get in Touch</h3>
                  <ul className="list-unstyled">
                    <li><a href="tel:+10000000000" className="text-muted text-decoration-none">+1-000-000-0000</a></li>
                    <li><a href="mailto:greenfooddengapad.com" className="text-muted text-decoration-none">greenfooddengapad.com</a></li>
                    <li><a href="https://instagram.com" className="text-muted text-decoration-none" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  </ul>
                </address>
              </Col>
            </Row>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col className="text-center text-muted small">
            &copy; {new Date().getFullYear()} ShopEasy. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
