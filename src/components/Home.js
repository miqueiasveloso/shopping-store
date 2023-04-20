import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#F5F5F5',
    },
    header: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      color: 'blue',
    },
    paragraph: {
      fontSize: '1.5rem',
      textAlign: 'center',
      maxWidth: '80%',
      marginBottom: '2rem',
      color: '#555',
    },
    ul: {
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    li: {
      margin: '0 1rem',
    },
    link: {
      textDecoration: 'none',
      color: '#333',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      transition: 'all 0.2s ease-in-out',
    },
    linkHover: {
      color: '#8B008B',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Vintage Blu Store</h1>
      <p style={styles.paragraph}>Welcome to the Vintage Blu Store, a place where you can buy your favorite classics in High Definition!</p>
      <ul style={styles.ul}>
        <li style={styles.li}><Link to="/home" style={styles.link} activeStyle={styles.linkHover}>Home</Link></li>
        <li style={styles.li}><Link to="/shop" style={styles.link} activeStyle={styles.linkHover}>Shop</Link></li>
        <li style={styles.li}><Link to="/contact" style={styles.link} activeStyle={styles.linkHover}>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Homepage;
