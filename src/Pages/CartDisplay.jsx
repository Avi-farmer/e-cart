import React from 'react';

const CartDisplay = ({ cart, setCart }) => {
  const handleRemove = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="m-4 p-4">
        <center>
          <h1 className="m-3">Your Cart</h1>
        </center>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart_display_items d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex">
                  <img
                    src={item.images}
                    alt={item.title}
                    style={{ width: '130px', height: '140px', marginRight: '20px' }}
                  />
                  <div>
                    <h5 className="pb-4">{item.title}</h5>
                    <small className="pb-4 text-secondary">{item.description.slice(0, 100)}</small>
                    <p>
                      Price: ₹<span className="h3">{item.price}</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="btn btn-danger"
                  style={{ padding: '5px 15px' }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDisplay;
