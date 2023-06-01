import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './LoginStyle.css';

function Login() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const [username, setUsername] = useState(''); // État pour le champ de l'identifiant
  const [password, setPassword] = useState(''); // État pour le champ du mot de passe
  const [error, setError] = useState(''); // État pour gérer les erreurs

  const navigate = useNavigate(); // Utilise le hook useNavigate pour la navigation

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // Met à jour le champ de l'identifiant avec la valeur saisie
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Met à jour le champ du mot de passe avec la valeur saisie
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: username,
      password: password
    };

    fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        if (data.status !== 200) {
          setError('Invalid username or password');
          return;
        } else {
          dispatch({
            type: 'LOGIN',
            payload: {
              token: data.body.token,
            }
          });
          navigate('/profile'); // Redirige vers la page de profil après une connexion réussie
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Si l'utilisateur est déjà connecté, on le redirige vers la page du profil
  useEffect(() => {
    if (token) {
      navigate('/profile');
    }
  }, [token, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              id="email"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
