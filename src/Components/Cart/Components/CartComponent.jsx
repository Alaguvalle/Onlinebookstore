import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { removeFromCart } from '../Store/CartSlice';
import { useDispatch } from 'react-redux';
import Navbarheader from '../../navbar/Navbarheader';
import { Button } from 'react-bootstrap';

const CartComponent = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <Navbarheader />
      <h2 style={{ marginLeft: '10px' }}>Shopping Cart</h2>
      <br />
      {cart.length === 0 ? (
        <p style={{ marginLeft: '10px' }}>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-md-4">
              <Card style={{ marginLeft: '20px' }}>
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-self-center">
                    <Card.Img variant="top" src={item.image} />
                  </div>
                  <div className="col-md-8">
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        Author: {item.author}<br />
                        Price: ₹{item.price}<br />
                        Language: {item.language}<br />
                        Print Length: {item.printLength} pages<br />
                        Publication Date: {item.PublicationDate}<br />
                        Reviews: {item.reviews}<br />
                      </Card.Text>
                      <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item)}>Remove</button>{''}
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
      <br/><br/>
      {cart.length > 0 && (
        <div className="text-center">
          <h4>Total Price: ₹{calculateTotalPrice()}</h4><br/>
          <Button variant="dark">Pay Now</Button>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
