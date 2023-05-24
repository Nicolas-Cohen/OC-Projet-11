import React from 'react';
import { Navigate } from 'react-router-dom';
import User from '../../components/User/User';
import Account from '../../components/Account/Account';

function Profile() {
  const token = sessionStorage.getItem('token');

  if (!token) {
    // Redirect user to login page if not logged in
    return <Navigate to="/login" />;
  }

  return (
    <div className="main bg-dark">
      <User />
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </div>
  );
}

export default Profile;
