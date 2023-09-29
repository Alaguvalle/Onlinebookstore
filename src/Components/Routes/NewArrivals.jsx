import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import Navbarheader from '../navbar/Navbarheader';
import Footer from '../Footer/Footer';
import { Button, FormControl } from 'react-bootstrap';
import { addToCart } from '../Cart/Store/CartSlice';

// Import your dataset here
import { AllBooks } from '../Data/AllBooks';

export default function NewArrivals() {
    const dispatch = useDispatch();
    // Initialize state variables for search query and filtered books
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    // Filter books based on category and search query
    const filterBooks = () => {
        const filtered = AllBooks.filter(
            (book) =>
                book.category === 'Newarrival' &&
                (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        setFilteredBooks(filtered);
    };

    // Handle changes in the search input
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        filterBooks(); // Call filterBooks to update the filtered list
    };

    // Display the filtered books or all New Arrival books when there's no search query
    const booksToDisplay = searchQuery ? filteredBooks : AllBooks.filter((book) => book.category === 'Newarrival');
    const handleBuyNowClick = (book) => {
        dispatch(addToCart(book)); // Dispatch the addToCart action to add the book to the cart
      };
    return (
        <div>
            <Navbarheader />
            <h4 style={{ padding: '10px' }}>New Arrival</h4>

            {/* Add a search input */}
            <FormControl
                type="text"
                placeholder="Search by Title/Author"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                    width:'400px', marginLeft: '10px' }}

            />
            <br></br>

            <div className="row justify-content-between mx-0">
                {booksToDisplay.map((book) => (
                    <div key={book.id} className="col-md-4">
                        <div className='card mb-3'>
                            <div className="row g-0">
                                <div className="col-md-4 d-flex align-items-center">
                                    <Card.Img variant="top" src={book.image} />
                                </div>
                                <div className="col-md-8">
                                    <Card.Body>
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
                                        <Button variant="secondary" onClick={() => handleBuyNowClick(book)}>Buy Now</Button>
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
