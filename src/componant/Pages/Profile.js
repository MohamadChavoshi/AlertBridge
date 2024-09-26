import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center'
    }}>
      <FontAwesomeIcon icon={faTools} style={{ fontSize: '4rem', marginBottom: '1rem', color: '#007bff' }} />
      <h1>Under Development</h1>
      <p>This page is not available at the moment. We're working on it!</p>
    </div>
  );
};

export default Profile;
