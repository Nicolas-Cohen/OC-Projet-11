import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoHeader from '../../assets/argentBankLogo.png';
import './HeaderStyle.css';

function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const firstname = useSelector((state) => state.user.firstname);

  const handleLogout = () => {
    dispatch({ 
      type: 'LOGOUT',
    });
  };

  useEffect(() => {
    if (token) {
      const fetchProfile = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            dispatch({ // Enregistrement des donées dans le store
              type: 'SET_USER',
              payload: {
                username: data.body.userName,
                firstname: data.body.firstName,
                lastname: data.body.lastName,
              },
            });

          } else {
            console.log("Erreur lors de la récupération du profil de l'utilisateur");
          }
        } catch (error) {
          console.log("Erreur lors de la récupération du profil de l'utilisateur");
        }
      };

      fetchProfile();
    }
  }, [dispatch, token]);

  if (token) {
    return (
      <header className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img className="main-nav-logo-image" src={LogoHeader} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className='header-right' onClick={handleLogout}>
          <Link to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {firstname}
          </Link>
          <Link to="/" className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
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

export default Header