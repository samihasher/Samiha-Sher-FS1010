import React from 'react';
import './Account.css';
import { useHistory, useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    navigate('/');
  };

  return (
    <div className="account-container">
      <div className="profile">
        <img
          src="images/image2.png"
          alt="Profile"
          className="profile-picture"
        />
        <h2 className="username">Jane Doe</h2>
        <p className="email">janedoe@example.com</p>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Account;
