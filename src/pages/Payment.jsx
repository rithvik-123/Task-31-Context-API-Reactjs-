import React, { useState } from 'react';
import Cart from '../components/Cart';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  return (
    <div className="layout-grid">
      <div className="payment-section">
        <div className="radio-group">
          <label>
            <input 
              type="radio" 
              value="cod" 
              checked={paymentMethod === 'cod'} 
              onChange={() => setPaymentMethod('cod')} 
            /> Cash on Delivery
          </label>
          <label>
            <input 
              type="radio" 
              value="credit" 
              checked={paymentMethod === 'credit'} 
              onChange={() => setPaymentMethod('credit')} 
            /> Credit Card
          </label>
        </div>

        {paymentMethod === 'credit' && (
          <div className="credit-card-form">
            <div className="input-group">
              <label>Enter your card number:</label>
              <input type="text" placeholder="Card Number" />
            </div>
            <div className="input-group">
              <label>Enter your card's expiry date:</label>
              <input type="text" placeholder="Expiry Date" />
            </div>
            <div className="input-group">
              <label>Enter your CVV number:</label>
              <input type="password" placeholder="CVV" />
            </div>
          </div>
        )}

        <button className="btn-confirm">Confirm Payment</button>
      </div>

      <div className="sidebar">
        <Cart isPaymentPage={true} />
      </div>
    </div>
  );
};

export default Payment;