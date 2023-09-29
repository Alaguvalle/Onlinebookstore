import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Navbarheader from '../navbar/Navbarheader'
import '../Contact/Contact.css'
import Footer from '../Footer/Footer';

const contactConfig = {
    YOUR_EMAIL: 'pralaguvalle@gmail.com',
    YOUR_FONE: '(+91)8667871789',
    description:
        "We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you. Contact us through the form below, and we'll get back to you as soon as possible. Your thoughts and inquiries matter to us!",
    YOUR_SERVICE_ID: 'service_id',
    YOUR_TEMPLATE_ID: 'template_id',
    YOUR_USER_ID: 'user_id',
};


export default function Contact() {
    return (
        <div>
            <Navbarheader />
            <Container>
                <div className='contactbody'>
                    <Row className="mb-5 mt-3">
                        <Col lg="8">
                            <h1 className="display-4 mb-4">Contact Me</h1>
                            <hr className="t_border my-4 ml-0 text-left" />
                        </Col>
                    </Row>
                    <Row className="sec_sp">
                        <Col lg="5" className="mb-5">
                            <h3 className="color_sec py-4">Get in touch</h3>
                            <address>
                                <strong>Email:</strong>{" "}
                                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                                    {contactConfig.YOUR_EMAIL}
                                </a>
                                <br />
                                <br />
                                {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                                    <p>
                                        <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                                    </p>
                                ) : (
                                    ""
                                )}
                            </address>
                            <p>{contactConfig.description}</p>
                        </Col>
                        <Col lg="7" className="d-flex align-items-center">
                            <form className="contact__form w-100">
                                <Row>
                                    <Col lg="6" className="form-group">
                                        <input
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                    <Col lg="6" className="form-group">
                                        <input
                                            className="form-control rounded-0"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                            required
                                        />
                                    </Col>
                                </Row>
                                <textarea
                                    className="form-control rounded-0"
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    rows="5"
                                    required
                                ></textarea>
                                <br />
                                <Row>
                                    <Col lg="12" className="form-group">
                                        <button variant="success" className='btn btn-success' type="submit">
                                            Send
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}