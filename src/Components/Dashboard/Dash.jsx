import React from 'react'
import { Link } from 'react-router-dom';
import '../Dashboard/Dash.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousels from '../Carousels/Carousel';
import Navbarheader from '../navbar/Navbarheader';
import Accimg from '../Data/Images/tea-time-3240766.jpg'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import watch from '../Data/Images/watch.jpg'
import Footer from '../Footer/Footer';
import Sidebar from '../SideBar/Sidebar';

const contentStyle = {
    backgroundColor: '#f8f8f8', // Change to your desired background color
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)', // Increa
    padding: '30px',
    borderRadius: '10px',
    paddingbottom: '25px',
};


export default function Dash() {
    return (
        <div>
            <Navbarheader />
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='secondaryNav'>
                            <Nav.Link><Link to="/newarrivals">New Arrivals</Link></Nav.Link>
                            <Nav.Link><Link to="/bestseller">Best Sellers</Link></Nav.Link>
                            <Nav.Link><Link to="/awardwinning">Award Winner</Link></Nav.Link>
                            <Nav.Link><Link to='/request'>Request a book</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
            <br></br>
            <Carousels />
            <div className="container mt-4" style={contentStyle}>
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={Accimg}
                            alt="Neo Hub"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-5">
                        {/* Text describing the popularity of Neo Hub */}
                        <h2>Discover the Popularity of Neo Hub</h2>
                        <p>
                            Neo Hub is your go-to destination for all things books. With a wide range of genres and a collection of bestsellers, award-winning books, and new arrivals, we cater to all your reading needs.
                        </p><Link to='/about' style={{ textDecoration: "none", color: "white" }}>
                            <Button variant='secondary'>

                                Learn More

                            </Button></Link>
                    </div>
                </div>
            </div>
            <Container className="mt-5" style={contentStyle}>
                <Row>
                    {/* Left column with text */}
                    <Col md={7}>
                        <h2>Explore a World of Imagination</h2>
                        <p>
                            At Neo Hub, we believe in the magic of books. Our bookstore is more than just a collection of printed pages; it's a gateway to worlds unexplored and adventures untold. With every turn of a page, you embark on a journey through the minds of brilliant authors and the lives of fascinating characters.
                        </p>
                        {/* <p>
                            Whether you're a seasoned reader or just starting your literary voyage, Neo Hub offers a diverse selection that caters to all tastes. Dive into gripping mysteries, get lost in epic fantasies, or gain insights from thought-provoking non-fiction. We're here to nurture your love for reading and provide a haven for book enthusiasts.
                        </p> */}
                        <p>
                            Join us in celebrating the written word and let the stories within our books transport you to places you've never been and experiences you've never imagined. Discover the joy of reading at Neo Hub.
                        </p>

                        {/* <Button variant='secondary'>
                            <Link to='/about' style={{ textDecoration: "none", color: "white" }}>
                                Learn More
                            </Link>
                        </Button> */}
                    </Col>

                    {/* Right column with image */}
                    <Col md={4} >
                        <img
                            src={watch}
                            alt="Neo Hub"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Footer />
        </div>
    )
}