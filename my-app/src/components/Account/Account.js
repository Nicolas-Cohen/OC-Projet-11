import React from 'react';
import './AccountStyle.css'

const Account = ({ title, amount, description }) => {
  const handleViewTransactions = () => {
    // Logic to display transactions
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={handleViewTransactions}>
          View transactions
        </button>
      </div>
    </section>
  );
};

export default Account;
