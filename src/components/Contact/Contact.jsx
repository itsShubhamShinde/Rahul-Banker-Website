import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-4">
              <h2 className="fw-bold text-primary">Contact Us</h2>
              <p className="text-muted">We'd love to hear from you! Please fill out the form below and we'll get back to you shortly.</p>
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label><FaUser className="me-2" />Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><FaEnvelope className="me-2" />Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label><FaCommentDots className="me-2" />Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Type your message..." required />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" size="lg" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
