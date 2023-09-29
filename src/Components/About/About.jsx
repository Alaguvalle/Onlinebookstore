import React from 'react';
import "./About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImg from '../About/a1r.jpeg'
import Navbarheader from '../navbar/Navbarheader';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <>
    <Navbarheader/>
      <Container>
        <Row>
          <Col>
            <div className='about-img'>
              <img src={aboutImg} alt="" style={{borderRadius:'20px'}} />
            </div>
          </Col>
          <Col>
            <div className='about-text' style={{fontFamily:'serif',color:'black'}}>
              <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
              <p className='fs-20'>NeoHub is not just a bookstore; it's your gateway to a literary universe where stories come to life. As an avid reader's paradise and a writer's haven, NeoHub has taken the world of books to a whole new level.</p>
              <p className='fs-20'>Whether you're a lifelong reader, a budding author, or simply curious about the magic of literature, NeoHub invites you to embark on a literary journey like no other. Join us today and be a part of a thriving community where stories never end and imagination knows no bounds.

Welcome to NeoHub - Where Books Live!</p>
<p className='fs-20'>What sets NeoHub apart is not just its extensive collection of books, but the vibrant community that calls it home. With over a million passionate readers and writers from across the globe, NeoHub has become the go-to destination for bibliophiles seeking more than just pages to flip.</p>

            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Footer/>
    </>
  )
}

export default About