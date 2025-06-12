import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './blog.css'; 

const blogPosts = [
  {
    title: 'The Power of Books: Transforming Minds',
    description:
      'Books are more than just pages — they’re windows into new ideas and possibilities. Explore how curated reading shapes your personal and professional growth.',
    date: 'June 10, 2025',
  },
  {
    title: 'Brewing Clarity: Tea as a Daily Ritual',
    description:
      'Discover the calming and creative benefits of tea in your routine. Learn which blends boost focus, reduce stress, and help spark innovation.',
    date: 'May 25, 2025',
  },
  {
    title: 'Why Rings Still Matter: Symbolism in the Modern Age',
    description:
      'Rings hold timeless value — from engagements to professional achievements. We explore their evolving significance in today’s culture.',
    date: 'May 5, 2025',
  },
];

const Blog = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Our Blog</h2>
          <p className="text-muted">Insights on Books, Tea, and Rings to enrich your journey.</p>
        </div>
        <Row>
          {blogPosts.map((post, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm border-0 blog-card">
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                  <Card.Title className="fw-semibold">{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent text-end border-0">
                  <Button variant="primary" size="sm" href="#">
                    Read More
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
