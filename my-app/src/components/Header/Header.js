import React from 'react';
import { Link } from 'react-router-dom';
import LogoHeader from '../../assets/argentBankLogo.png';
import './HeaderStyle.css';

export default function Header() {
  const token = sessionStorage.getItem('token');

  if (token) {
    return (
      <header className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img className="main-nav-logo-image" src={LogoHeader} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className='header-right'>
          <Link to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Tony
          </Link>
          <a href="/" className="main-nav-item" onClick={() => sessionStorage.clear()}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      </header>
    );
  }

  return (
    <header className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={LogoHeader} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <Link to="/login" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </header>
  );
}
