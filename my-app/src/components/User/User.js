import React from 'react';
import './UserStyle.css';


export default function User() {

  return (
    <div className="header">
      <h1>Welcome back<br />Tony Stark!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};