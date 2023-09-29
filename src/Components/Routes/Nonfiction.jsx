import React from 'react';
import Navbarheader from '../navbar/Navbarheader';
import Footer from '../Footer/Footer';
import BookCard from './mapfile';

// Import or define your fiction book data here
import { books } from '../Data/Databook'; // Replace with the actual path

export default function Nonfiction() {
  return (
    <>
      <Navbarheader />
      <div className="row justify-content-between mx-0">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Footer />
    </>
  );
}
