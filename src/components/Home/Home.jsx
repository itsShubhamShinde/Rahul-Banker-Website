import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './home.css';
import heroImg from '../../assets/img/profile.png';

const Home = () => {
  return (
    <div>
      <section className="hero-section text-white d-flex align-items-center">
        <div className="overlay"></div>
        <div className="position-relative z-2 w-100">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start p-5">
                <h1 className="display-4 fw-bold">Welcome to Rahul Bankar</h1>
                <h3 className="text-warning">Website Developer / Designer</h3>
                <p className="lead text-white-50">
                  Where <strong className="text-info">Books</strong> spark ideas,{' '}
                  <strong className="text-warning">Tea</strong> soothes minds, and{' '}
                  <strong className="text-success">Rings</strong> symbolize commitments.
                </p>
                <Button
                  variant="light"
                  href="/contact"
                  className="mt-3 text-primary fw-bold shadow"
                >
                  Get a Quote
                </Button>
              </Col>
              <Col md={6} className="text-center">
                <img
                  src={heroImg}
                  alt="Books Tea Rings"
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* <section className="py-5 bg-success text-white text-center">
        <Container>
          <h3 className="mb-3 text-white">Interested in our work?</h3>
          <p className="mb-4 text-white-50">Let’s collaborate and create something valuable together.</p>
          <Button
            variant="light"
            href="/contact"
            className="text-success fw-bold shadow-sm"
          >
            Contact Us
          </Button>
        </Container>
      </section> */}
    </div>
  );
};

export default Home;
