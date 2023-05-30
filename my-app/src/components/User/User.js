import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './UserStyle.css';

function User() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.username);
  const firstname = useSelector((state) => state.auth.firstname);
  const lastname = useSelector((state) => state.auth.lastname);

  const [showForm, setShowForm] = useState(false);
  const [newUsername, setNewUsername] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch({
        type: 'SET_USER',
        payload: {
          username: newUsername,
        },
      });

      setShowForm(false);
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
    }
  };

  return (
    <div className="header">
      {showForm ? (
        <div className='edit-user'>
          <h2>Edit user info</h2>
          <form onSubmit={handleSubmit}>
            <div className='divSpaceform'>
              <div className='divEdit'>
                <label htmlFor='edit-username'>User name:</label>
                <input
                  placeholder="New username..."
                  type="text"
                  value={newUsername}
                  id='edit-username'
                  onChange={handleInputChange}
                />
              </div>
              <div className='divEdit'>
                <label fort='edit-firstname'>First name:</label>
                <input type="text" value={firstname} id='edit-firstname' disabled />
              </div>
              <div className='divEdit'>
                <label for='edit-lastname'>Last name:</label>
                <input type="text" value={lastname} id='edit-lastname' disabled />
              </div>
              <div className='edit-username-buttons'>
                <button className="button-edit-green" type="submit">Save</button>
                <button className="button-edit-red" onClick={toggleForm}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h1>Welcome back<br />{user}!</h1>
          <button className="edit-button" onClick={toggleForm}>Edit Name</button>
        </div>
      )}
    </div>
  );
}

export default User;

