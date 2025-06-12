import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ring1 from '../../assets/img/Gold.jpg'; 
import ring2 from '../../assets/img/silver.jpg';
import ring3 from '../../assets/img/Stone.jpeg';

const rings = [
  {
    name: 'Gold Eternity Band',
    description: 'Timeless elegance crafted in 18k gold – a perfect symbol of forever.',
    img: ring1,
  },
  {
    name: 'Silver Promise Ring',
    description: 'Minimalist yet meaningful. Made with pure silver and crafted with care.',
    img: ring2,
  },
  {
    name: 'Gemstone Engagement Ring',
    description: 'Celebrate your moment with a dazzling handcrafted gemstone ring.',
    img: ring3,
  },
];

const Ring = () => (
  <Container className="py-5">
    <h1 className="text-primary text-center mb-4">💍 Elegant Rings</h1>
    <p className="lead text-center mb-5">
      Discover timeless pieces that celebrate love, commitment, and elegance.
    </p>

    <Row>
      {rings.map((ring, idx) => (
        <Col md={4} className="mb-4" key={idx}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Img
              variant="top"
              src={ring.img}
              alt={ring.name}
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{ring.name}</Card.Title>
              <Card.Text>{ring.description}</Card.Text>
              <Button variant="primary" href="/contact">
                Inquire Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Ring;
