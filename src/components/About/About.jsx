import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImg from '../../assets/img/profile.png';

const About = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={5}>
            <Image
              src={profileImg}
              alt="Rahul Bankar"
              fluid
              rounded
              className="shadow-sm"
            />
          </Col>
          <Col md={7}>
            <h2 className="fw-bold text-primary mb-3">About Me</h2>
            <p>
              Hi, I’m Rahul Bankar — a passionate creator driven by the values of reflection,
              authenticity, and meaning. My work blends the literary depth of <strong>Books</strong>,
              the tranquility of <strong>Tea</strong>, and the timeless symbolism of <strong>Rings</strong>.
            </p>
            <p>
              Whether you're here to explore inspiring stories, discover curated products, or connect for collaborations —
              I’m excited to share my journey with you.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div className="p-4 border rounded shadow-sm h-100">
              <h4 className="text-primary">Mission</h4>
              <p>
                To create and curate meaningful experiences that enlighten, calm, and connect
                people through timeless elements — Books, Tea, and Rings.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-4 border rounded shadow-sm h-100">
              <h4 className="text-primary">Vision</h4>
              <p>
                To build a community where creativity meets purpose, encouraging a lifestyle
                rooted in learning, mindfulness, and lasting values.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
