import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousels() {
  const imageStyle = {
    width: '100%', // Set the width to 100% to make images fill the available space
    height: '80vh', // Automatically adjust the height to maintain aspect ratio
  };
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src="src\Components\Data\Images\bok.jpg" // Replace with the actual image path
            alt="First slide"
            style={imageStyle}
          />
          <Carousel.Caption className='text-center' style={{ position: "absolute", top: "0", left: "0", right: "0" }}>
            <h3>The Reader's Paradise</h3>
            <p>Welcome to the World of Reading</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src\Components\Carousels\s2.jpg" // Replace with the actual image path
            alt="Second slide"
            style={imageStyle}
          />
          <Carousel.Caption className='text-center' style={{ position: "absolute", top: "5", left: "0", right: "0",color:'Black' }}>
            <h2>Children's choice</h2>
            <p>The passion towards Reading takes us to an another world</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src\Components\Carousels\s3.jpeg" // Replace with the actual image path
            alt="Third slide"
            style={imageStyle}
          />
          <Carousel.Caption className='text-center' style={{ position: "absolute", top: "0", left: "0", right: "0" }}>
            <h3>Exciting Deal's</h3>
            <p>
              Come grab the order soon!<br/>
              Happy Reading!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
