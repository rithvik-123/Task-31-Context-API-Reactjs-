import React, { useState } from 'react';
import Cart from '../components/Cart';

function Payment() {
  // Basic states for the form
  const [paymentType, setPaymentType] = useState('credit');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvvCode, setCvvCode] = useState('');
  
  // States for the new requirements
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // The function that runs when the form is submitted
  function handlePaymentSubmit(event) {
    event.preventDefault(); // Prevents page reload
    setErrorMessage('');
    setSuccessMessage('');

    // REQUIREMENT 1: Form Validation
    if (paymentType === 'credit') {
      if (cardNumber.length !== 16) {
        setErrorMessage('Error: Card number must be exactly 16 digits long.');
        return;
      }
      if (cvvCode.length !== 3) {
        setErrorMessage('Error: CVV must be exactly 3 digits.');
        return;
      }
      if (!expiryDate.includes('/')) {
        setErrorMessage('Error: Expiry date must include a / character (example: 12/26).');
        return;
      }
    }

    // REQUIREMENT 3: Loading State
    setIsProcessing(true);

    // Simulate a network request taking 2 seconds
    setTimeout(function() {
      setIsProcessing(false);
      // REQUIREMENT 2: Order Confirmation Message
      setSuccessMessage('Success! Your payment has been processed and your order is confirmed.');
      
      // Clear the form
      setCardNumber('');
      setExpiryDate('');
      setCvvCode('');
    }, 2000);
  }

  return (
    <div className="layout-grid">
      <div className="payment-section">
        <h2>Checkout Details</h2>
        
        {/* Display Success or Error Messages */}
        {successMessage && <div style={{ color: 'green', marginBottom: '15px', fontWeight: 'bold' }}>{successMessage}</div>}
        {errorMessage && <div style={{ color: 'red', marginBottom: '15px', fontWeight: 'bold' }}>{errorMessage}</div>}

        <form onSubmit={handlePaymentSubmit} className="credit-card-form">
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                value="cod" 
                checked={paymentType === 'cod'} 
                onChange={function() { setPaymentType('cod') }} 
              /> Cash on Delivery
            </label>
            <label>
              <input 
                type="radio" 
                value="credit" 
                checked={paymentType === 'credit'} 
                onChange={function() { setPaymentType('credit') }} 
              /> Credit Card
            </label>
          </div>

          {/* Only show credit card inputs if credit is selected */}
          {paymentType === 'credit' && (
            <div>
              <div className="input-group">
                <label>Enter your card number:</label>
                <input 
                  type="text" 
                  value={cardNumber}
                  onChange={function(e) { setCardNumber(e.target.value) }}
                  placeholder="1234567812345678" 
                />
              </div>
              <div className="input-group">
                <label>Enter your card's expiry date:</label>
                <input 
                  type="text" 
                  value={expiryDate}
                  onChange={function(e) { setExpiryDate(e.target.value) }}
                  placeholder="MM/YY" 
                />
              </div>
              <div className="input-group">
                <label>Enter your CVV number:</label>
                <input 
                  type="text" 
                  value={cvvCode}
                  onChange={function(e) { setCvvCode(e.target.value) }}
                  placeholder="123" 
                />
              </div>
            </div>
          )}

          {/* Button changes text based on loading state */}
          <button type="submit" className="btn-confirm" disabled={isProcessing}>
            {isProcessing ? 'Processing Payment...' : 'Confirm Payment'}
          </button>
        </form>
      </div>

      <div className="sidebar">
        <Cart isPaymentPage={true} />
      </div>
    </div>
  );
}

export default Payment;