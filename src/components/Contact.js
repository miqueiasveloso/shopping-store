import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#F5F5F5',
    },
    title: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'blue',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#555',
    },
    about: {
      textAlign: 'center',
      marginTop: '2rem',
    },
    p: {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
      color: '#333',
    },
    button: {
      marginTop: '10px',
      backgroundColor: '#333',
      border: 'none',
      color: 'white',
      padding: '10px 20px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '14px',
      cursor: 'pointer',
      borderRadius: '10px'
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <h1 style={styles.h1}>Vintage Blu Store</h1>
        <h3 style={styles.h3}>Your favorite classics in High-Def!</h3>
      </div>
      <div style={styles.about}>
        <p style={styles.p}>Contact information:</p>
        <p style={styles.p}>E-mail: vintagebluestore@fakemail.com</p>
        <p style={styles.p}>Telephone: 555-fakeblu</p>
        <Link to="/">
          <button style={styles.button}>Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;