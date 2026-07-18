import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = ({ isPaymentPage }) => {
  const { cart, updateQty, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h3>Cart</h3>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <p className="item-name">{item.name}</p>
              <p className="item-price">${item.price}</p>
            </div>
            <div className="qty-controls">
              <button onClick={() => updateQty(item.id, -1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${cartTotal.toFixed(2)}</h2>
        
        {isPaymentPage ? (
          <button className="btn-action" onClick={() => navigate('/')}>
            Go back to Shopping
          </button>
        ) : (
          <button 
            className="btn-action" 
            onClick={() => navigate('/payment')}
            disabled={cart.length === 0}
          >
            Proceed To Payment
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;