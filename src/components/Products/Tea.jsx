import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import tea1 from '../../assets/img/tea1.jpeg'; 
import tea2 from '../../assets/img/tea2.jpeg';
import tea3 from '../../assets/img/tea3.jpeg';

const teas = [
  {
    name: 'Organic Green Tea',
    description: 'Boost your energy and detox naturally with every sip.',
    img: tea1,
  },
  {
    name: 'Classic Masala Chai',
    description: 'A rich blend of spices and tradition in every cup.',
    img: tea2,
  },
  {
    name: 'Soothing Herbal Tea',
    description: 'Calm your mind and soul with handpicked herbal infusions.',
    img: tea3,
  },
];

const Tea = () => (
  <Container className="py-5">
    <h1 className="text-success text-center mb-4">🍵 Discover Tea</h1>
    <p className="lead text-center mb-5">
      A cup of tea is more than a drink — it’s an experience. Explore the variety that energizes and soothes.
    </p>

    <Row>
      {teas.map((tea, idx) => (
        <Col md={4} className="mb-4" key={idx}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Img
              variant="top"
              src={tea.img}
              alt={tea.name}
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{tea.name}</Card.Title>
              <Card.Text>{tea.description}</Card.Text>
              <Button variant="success" href="/contact">
                Order Sample
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Tea;
