import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import React, { useState } from 'react';
import './Login.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';


const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigateToDashboard = () => {
    window.location.href = "/Dashboard";
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with email:', loginEmail, 'and password:', loginPassword);
    // Simulate a successful login with a delay
    setTimeout(() => {
      // Show a success toast notification
      toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Redirect to the dashboard after a successful login
      window.location.href = "/Dashboard";
    }, 3000);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigateToDashboard();
    console.log('Signing up with first name:', firstName, 'last name:', lastName, 'email:', signupEmail);
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <Container fluid>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Row className="justify-content-center">
          <Col md={12}>
            <Card className='log'>
              <Card.Body className='login'>
                <h2 className="card-title text-center">
                  {isLoginForm ? 'Login' : 'Sign Up'}
                </h2>
                {isLoginForm ? (
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <div className="text-center col-lg-12">
                      <Button variant="secondary" onClick={handleLogin} type="submit">
                        Login
                      </Button>
                      <p className="mt-3">
                        Don't have an account?{' '}
                        <Button variant="link" onClick={toggleForm} className='btn-primary1' style={{color:'blue'}}>
                          Sign Up
                        </Button>
                      </p>
                    </div>
                  </Form>
                ) : (
                  <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>New Password:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your new password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <div className="text-center" >
                      <Button variant="secondary" type="submit" >
                        Sign Up
                      </Button>
                      <p className="mt-3">
                        Already have an account?{' '}
                        <Button variant="link" onClick={toggleForm} style={{color:'blue'}}>
                          Login
                        </Button>
                      </p>
                    </div>
                  </Form>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default LoginPage;