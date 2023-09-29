// BookCard.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function BookCard({ book }) {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <Card.Img variant="top" src={book.image} />
          </div>
          <div className="col-md-8">
            <div className="card-body-arrival" style={{marginLeft:'20px'}}>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.text}</Card.Text>
              <Card.Text style={{marginRight:'10px'}}>
                Author: {book.author}<br />
                Price: ₹{book.price}<br />
                Language: {book.language}<br />
                Print Length: {book.printLength} pages<br />
                Publication Date: {book.PublicationDate}<br />
                Reviews: {book.reviews}
              </Card.Text>
              <Button variant="secondary">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
