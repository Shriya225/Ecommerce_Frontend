import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaExchangeAlt, FaHeadphonesAlt } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';
import about2 from '../assets/pexels-kish-1488463.jpg'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <section aria-label="About Us" className="py-5 font" style={{"text-align":"left"}} >
      <Container>
        <Row className="align-items-center mb-5">
          <Col
            md={5}
            className="mb-4 mb-md-0 d-flex justify-content-center"
          >
            <Image
              src={about2}
              alt="Clothing Store"
              fluid
              rounded
              
              style={{
                maxHeight: '420px',
                width: '100%',
                objectFit: 'cover',
              }}
              className="shadow"
            />
          </Col>

          <Col md={7}>
            <h1 className="h2 mb-3">About Our Company</h1>
            <p className="lead">
              We’re a passionate team dedicated to delivering high-quality solutions since 2024.
            </p>
            <p>
              Founded in San Francisco, our mission is to simplify technology for everyday users.
            we pride ourselves on innovation
              and reliability.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">✓ 100% Customer Satisfaction</li>
              <li className="mb-2">✓ Award-Winning Support</li>
              <li>✓ Sustainable Business Practices</li>
            </ul>
            <Link to="/collection">
                       
             <Button variant="outline-dark" className="mt-3"  aria-label="Explore">Explore Now</Button>
                      </Link>
          </Col>
        </Row>

     

        
        <Row className="text-center px-md-5">
          <Col md={4} className="mb-4">
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <FaExchangeAlt size={40} className="mb-3 text-primary" />
              <h6 className="fw-bold">Easy Exchange Policy</h6>
              <p className="text-muted">Hassle-free exchanges for a worry-free shopping experience.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <BsShieldCheck size={40} className="mb-3 text-success" />
              <h6 className="fw-bold">7 Days Return Policy</h6>
              <p className="text-muted">Change your mind? We’ve got you covered with easy returns.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <FaHeadphonesAlt size={40} className="mb-3 text-danger" />
              <h6 className="fw-bold">24/7 Customer Support</h6>
              <p className="text-muted">Always here to help — any time, any day.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
