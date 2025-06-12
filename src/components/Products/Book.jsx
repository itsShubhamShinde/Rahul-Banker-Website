import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import book1 from '../../assets/img/book1.png'; 
import book2 from '../../assets/img/book2.jpeg';
import book3 from '../../assets/img/book3.jpg';

const books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    description:
      'A powerful guide on building good habits and breaking bad ones through small daily changes.',
    img: book1,
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    description:
      'Explore the ability to focus without distraction — an essential skill for success in a noisy world.',
    img: book2,
  },
  {
    title: 'Ikigai',
    author: 'Héctor García & Francesc Miralles',
    description:
      'Discover the Japanese secret to a long and meaningful life rooted in purpose.',
    img: book3,
  },
];

const Book = () => (
  <Container className="py-5">
    <h1 className="text-primary mb-4 text-center">📚 Featured Books</h1>
    <p className="lead text-center mb-5">
      Curated with care by Rahul Bankar — discover books that inspire growth, peace, and purpose.
    </p>

    <Row>
      {books.map((book, idx) => (
        <Col md={4} className="mb-4" key={idx}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Img
              variant="top"
              src={book.img}
              alt={book.title}
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
              <Card.Text>{book.description}</Card.Text>
              <Button variant="primary" href="/contact">
                Get This Book
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Book;
