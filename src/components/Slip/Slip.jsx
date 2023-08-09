import React, { useState } from 'react';
import './components/Slip.css';
function Slip() {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');

  const generateCashSlip = () => {
    // Add your logic here to generate the cash slip
    // For this example, we'll just log the values to the console
    console.log('Date:', date);
    console.log('Amount:', amount);
    console.log('Purpose:', purpose);
  };

  return (
    <div className="App">
      <h1>Cash Slip Form</h1>
      <div className="form">
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Purpose:</label>
          <input
            type="text"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>
        <button onClick={generateCashSlip}>Generate Cash Slip</button>
      </div>
    </div>
  );
}

export default Slip;
