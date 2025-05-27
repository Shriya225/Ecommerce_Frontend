import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import herobg from '../assets/pexels-ron-lach-8386648.webp';

const HeroSection = ({onShopNowClick}) => {
  return (
    <section
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `
          linear-gradient(135deg, rgba(255, 241, 235, 0.5), rgba(255, 238, 233, 0.5)),
          url(${herobg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '80px 20px',
        borderBottom: '1px solid #eee',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <h1
              style={{
                fontWeight: '700',
                fontSize: '3.8rem',
                color: '#111', 
                textShadow: '0 1px 2px rgba(255,255,255,0.6)', 
                fontFamily: "'Playfair Display', serif",
                marginBottom: '25px',
                lineHeight: '1.1',
              }}
            >
              Elevate Your Everyday Style
            </h1>
            <p
              style={{
                fontSize: '1.3rem',
                color: '#333',
                fontWeight: '400',
                marginBottom: '40px',
                fontFamily: "'Open Sans', sans-serif",
                letterSpacing: '0.02em',
                textShadow: '0 1px 1px rgba(255,255,255,0.5)',
              }}
            >
              Discover timeless pieces crafted for comfort, quality, and lasting fashion.
            </p>
           
            <button  style={{
                borderRadius: '30px',
                padding: '14px 50px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                color: '#fff',
                background:"black" 
              }} onClick={onShopNowClick}>Shop Now</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
