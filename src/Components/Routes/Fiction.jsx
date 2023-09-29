import React from 'react';
import Navbarheader from '../navbar/Navbarheader';
import Footer from '../Footer/Footer';
import BookCard from './mapfile';
import { ficdata } from '../Data/Fictiondata';

export default function Fiction() {
  return (
    <>
      <Navbarheader/>
      <div className="row justify-content-between mx-0">
        {ficdata.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Footer />
    </>
  );
}
