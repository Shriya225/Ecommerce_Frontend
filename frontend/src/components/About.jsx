import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-4 px-3" style={{ maxWidth: '800px' }}>
      {/* Main Heading */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="mb-4">ABOUT US</h2>
          <p>
            ShopEasy was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preferences. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
        </Col>
      </Row>

      {/* Mission Section with Side-by-Side Layout */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h3 className="mb-4">Our Mission</h3>
          <p>
            Our mission  is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </Col>
        <Col md={6}>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300" 
            alt="Mission visual" 
            className="img-fluid rounded"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      <hr className="my-4" />

      {/* Why Choose Us Section */}
      <Row className="mb-4">
        <Col>
          <h4 className="mb-4"><strong>WHY CHOOSE US</strong></h4>
          
          <div className="mb-4">
            <h5>Quality Assurance:</h5>
            <p className="mb-0">
              We meticulously select each product to ensure it meets our stringent quality standards.
            </p>
          </div>
          
          
          <div className="mb-4">
            <h5>Convenience:</h5>
            <p className="mb-0">
              With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
          </div>
         
          
          <div>
            <h5>Exceptional Customer Service:</h5>
            <p className="mb-0">
              Our team of dedicated professionals is here to assist you every way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;