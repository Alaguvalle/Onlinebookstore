import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BookIcon from '../navbar/bookicon.jpg';
import logo from '../Data/Images/logo.png.png'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Example from '../SideBar/Sidebar';

import './Navbar.css';
const stylenav = {
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow
  borderRadius: '10px', // Border radius
}

export default function Navbarheader() {
  return (
    <div>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbarDesign mb-3 " >
          <Container>
            <div className='d-flex align-items-center'>
            <Example />

            <Navbar.Brand>
              <Link to="/dashboard" className="neohub" style={{ textDecoration: 'none', color: 'black' }}>
                <h2 style={{color:'brown',fontFamily:'Serif'}}>NeoHub</h2>
              </Link>
            </Navbar.Brand>
            </div>

            <Navbar.Brand>
              <img
                src={logo}
                width="70px"
                height="50px"
                className="d-inline-block align-center"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>

            <div className='d-flex align-items-center'>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/dashboard">
               <h4 style={{color:'brown',fontFamily:'serif'}}> Home</h4>
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
              <h4 style={{color:'brown',fontFamily:'serif'}}> About</h4>
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
              <h4 style={{color:'brown',fontFamily:'serif'}}>Contact Us</h4>
              </Nav.Link>
            </Nav>

            <Navbar expand="lg">
              <Navbar.Brand as={Link} to="/cart">
                <h2 style={{marginRight:'10px',marginLeft:'20px'}}><i className="bi bi-cart-check-fill"></i></h2>
              </Navbar.Brand>

              <Dropdown className="dropDownLogs">
                <Dropdown.Toggle variant="link">
                  <i className="bi bi-person-circle"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/">Log in</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">Sign Up</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/">Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar></div>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
