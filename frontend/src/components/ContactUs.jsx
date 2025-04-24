import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="py-4" style={{ maxWidth: '1000px' }}>
      {/* Header */}
      <Row className="text-center mb-4">
        <Col>
    
          <h2 className="mb-4">CONTACT US</h2>
        </Col>
      </Row>

      {/* Main Content with Image */}
      <Row className="align-items-start mb-5">
        {/* Contact Information Column */}
        <Col >
          <Row className="mb-4">
            <Col>
              <h3 className="mb-3">Our Store</h3>
              <p className="mb-1">
                SA/09 Wilms Station<br />
                Suite 350, Washington, USA
              </p>
              <p className="mb-0">
                Tel: (45) 555-0132<br />
                Email: admin@forever.com
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <h3 className="mb-3">Careers at Forever</h3>
              <p className="mb-3">
                Learn more about our teams and job openings.
              </p>
              <Button variant="outline-dark" className="mb-4">Explore Jobs</Button>
            </Col>
          </Row>



          
        </Col>

        {/* Image Column */}
        <Col md={6} className="ps-md-5">
          <Image 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600" 
            alt="Contact us" 
            fluid 
            className="rounded"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;