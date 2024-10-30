import React, { useState } from "react";
import "./AtmCard.css";

const AtmCard = () => {
  const [accountNumber, setAccountNumber] = useState("3455 4562 7710 3507");
  const [name, setName] = useState("ELON MUSK");
  const [expiryDate, setExpiryDate] = useState("02/30");
  const [cvv, setCvv] = useState("619");

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-number">{accountNumber}</div>
        <div className="card-details">
          <div className="expiry-date">{expiryDate}</div>
          <div className="card-holder">{name}</div>
        </div>
      </div>

      <div className="inputs">
        <label>Account Number:</label>
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value.toUpperCase())}
        />
        <label>Expiry Date (MM/YY):</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <label>CVV:</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AtmCard;
