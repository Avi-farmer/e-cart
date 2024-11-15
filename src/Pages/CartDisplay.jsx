import React from 'react';
import { Col, Row } from 'react-bootstrap';

const CartDisplay = ({ cart, setCart }) => {
  const handleRemove = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="m-4 pb-4">
        <center>
          <h1 className="m-3">Your Cart</h1>
        </center>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <Row key={index} className="cart_display_items">
                <Col sm={2}>
                  <img src={item.images} alt={item.title} />
                </Col>
                <Col sm={8}>
                  <h5 className="pb-4">{item.title}</h5>
                  <small className="pb-4 text-secondary">{item.description.slice(0, 100)}</small>
                  <p>
                    Price: ₹<span className="h3">{item.price}</span>
                  </p>
                </Col>
                <Col sm={2} className='remove_btn'>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </Col>
              </Row>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDisplay;
