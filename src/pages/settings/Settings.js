// Settings.js
import React, { useState } from "react";
import "./Settings.css";
import Button from "../../components/button/Button";

export default function Settings() {
  const [settings, setSettings] = useState({
    paymentMethodState: "",
    businessWebsite: "",
    bankAccountInfo: "",
    loginCredentials: {
      username: "",
      password: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      loginCredentials: {
        ...prevSettings.loginCredentials,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings saved:", settings);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        {/* Payment Method Request States */}
        <div className="setting-section">
          <label>Payment Method Request State:</label>
          <select
            name="paymentMethodState"
            value={settings.paymentMethodState}
            onChange={handleInputChange}
          >
            <option value="">Select a state</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Declined">Declined</option>
          </select>
        </div>

        {/* Business Website Details */}
        <div className="setting-section">
          <label>Business Website URL:</label>
          <input
            type="text"
            name="businessWebsite"
            value={settings.businessWebsite}
            onChange={handleInputChange}
            placeholder="Enter business website"
          />
        </div>

        {/* Bank Account Information */}
        <div className="setting-section">
          <label>Bank Account Information:</label>
          <input
            type="text"
            name="bankAccountInfo"
            value={settings.bankAccountInfo}
            onChange={handleInputChange}
            placeholder="Enter bank account details"
          />
        </div>

        {/* Login Credentials */}
        <div className="setting-section">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={settings.loginCredentials.username}
            onChange={handleLoginChange}
            placeholder="Enter username"
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={settings.loginCredentials.password}
            onChange={handleLoginChange}
            placeholder="Enter password"
          />
        </div>
        <Button className="save-button">Save Settings</Button>
      </form>
    </div>
  );
}
