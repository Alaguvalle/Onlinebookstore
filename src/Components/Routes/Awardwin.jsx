import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Navbarheader from '../navbar/Navbarheader';
import Footer from '../Footer/Footer';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { addToCart } from '../Cart/Store/CartSlice';

// Import your dataset here
import { AllBooks } from '../Data/AllBooks';

export default function Awardwin() {
  const dispatch = useDispatch(); // Initialize useDispatch

  // Filter only the "Bestsellers" category
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Filter books based on search query
  const filterBooks = () => {
    const filtered = AllBooks.filter(
      (book) =>
        book.category === 'Awardwinning' &&
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  // Handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterBooks(); // Call filterBooks to update the filtered list
  };

  // Display the filtered books
  const booksToDisplay = searchQuery ? filteredBooks : AllBooks.filter((book) => book.category === 'Awardwinning');

  const handleBuyNowClick = (book) => {
    dispatch(addToCart(book)); // Dispatch the addToCart action to add the book to the cart
  };

  return (
    <div>
      <Navbarheader />
      <h4 style={{ padding: '10px' }}>Award winning</h4><br></br>

      {/* Add a search input */}
      <FormControl
        type="text"
        className="form-control-lg"
        placeholder="Search by Title/Author"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{
          width: '400px', marginLeft: '10px'
        }}
      />

      <br></br>

      <div className="row justify-content-between mx-0">
        {booksToDisplay.map((bestseller) => (
          <div key={bestseller.id} className="col-md-4">

            <div className='card mb-3'>
              <div className="row g-0">
                <div class="col-md-4 d-flex align-items-center">
                  <Card.Img variant="top" src={bestseller.image} />
                </div>
                <div className="col-md-8">
                  <Card.Body>
                    <Card.Title>{bestseller.title}</Card.Title>
                    <Card.Text>{bestseller.text}</Card.Text>
                    <Card.Text>
                      Author: {bestseller.author}<br />
                      Price: ₹{bestseller.price}<br />
                      Language: {bestseller.language}<br />
                      Print Length: {bestseller.printLength} pages<br />
                      Publication Date: {bestseller.PublicationDate}<br />
                      Reviews: {bestseller.reviews}<br />
                      Awards:{bestseller.awards}
                    </Card.Text>
                    <Button variant="secondary" onClick={() => handleBuyNowClick(bestseller)}>Buy Now</Button>
                  </Card.Body>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
