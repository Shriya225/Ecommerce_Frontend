import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-1 order-2">
            <div className="hero-content">
              <span className="hero-badge">Summer Sale</span>
              <h1 className="hero-title">
                <span>Elevate Your</span>
                <span className="highlight"> Shopping</span>
                <span> Experience</span>
              </h1>
              <p className="hero-subtitle">
                Discover premium products with exclusive discounts. Limited time offer!
              </p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className="me-3 hero-btn">
                  Shop Collection
                </Button>
                <Button variant="outline-light" size="lg" className="hero-btn">
                  Explore Deals
                </Button>
              </div>
              <div className="hero-features">
                <div className="feature-item">
                  <i className="bi bi-truck"></i>
                  <span>Free Shipping</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-shield-check"></i>
                  <span>Secure Payments</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-lg-2 order-1 mb-4 mb-lg-0">
            <div className="hero-image-container">
              <Image
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Modern shopping experience"
                fluid
                className="hero-image"
              />
              <div className="floating-tag discount-tag">
                <span>50% OFF</span>
              </div>
              <div className="floating-tag new-tag">
                <span>New Arrivals</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;