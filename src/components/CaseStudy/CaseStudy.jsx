import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import cs1 from '../../assets/img/cs1.webp';
import cs2 from '../../assets/img/cs2.jpg';
import cs3 from '../../assets/img/cs3.jpeg';
const caseStudies = [
  {
    title: 'Empowering Readers Through Curated Book Picks',
    description: 'How Rahul Bankar helped young professionals rediscover their passion for reading through a monthly book club initiative.',
    image: cs1,
  },
  {
    title: 'Creating Calm in Chaos: The Tea Break Revolution',
    description: 'A corporate wellness campaign where daily tea rituals improved employee well-being across 3 companies.',
    image: cs2,
  },
  {
    title: 'Crafting Custom Rings for Celebrating Milestones',
    description: 'Our handcrafted rings became the centerpiece of memorable proposals and anniversary celebrations.',
    image: cs3,
  },
];

const CaseStudy = () => (
  <Container className="py-5">
    <h1 className="text-center text-primary mb-4">📊 Case Studies</h1>
    <p className="lead text-center mb-5">
      Real stories, real results. Explore how Rahul Bankar’s offerings made a difference.
    </p>
    <Row>
      {caseStudies.map((item, index) => (
        <Col md={4} className="mb-4" key={index}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="outline-primary" href="/contact">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default CaseStudy;
