import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './home.css';
import heroImg from '../../assets/img/profile.png';

const Home = () => {
  return (
    <div>
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="display-4 fw-bold text-primary">Welcome to Rahul Bankar</h1>
              <h3>Website Developer / Designer </h3>
              <p className="lead">
                Where <strong>Books</strong> spark ideas, <strong>Tea</strong> soothes minds,
                and <strong>Rings</strong> symbolize commitments.
              </p>
              <Button variant="primary" href="/contact" className="mt-3">
                Get a Quote
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={heroImg}
                alt="Books Tea Rings"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 text-primary">Explore Our Products</h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <div className="p-3 border rounded shadow-sm h-100">
                <h4>📚 Books</h4>
                <p>Discover ideas and knowledge curated for you.</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="p-3 border rounded shadow-sm h-100">
                <h4>🍵 Tea</h4>
                <p>Experience calm and creativity with every sip.</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="p-3 border rounded shadow-sm h-100">
                <h4>💍 Rings</h4>
                <p>Crafting moments of elegance and meaning.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <h3 className="mb-3">Interested in our work?</h3>
          <p className="mb-4">Let’s collaborate and create something valuable together.</p>
          <Button variant="light" href="/contact">
            Contact Us
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;
