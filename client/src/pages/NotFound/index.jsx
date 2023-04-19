import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';


const NotFound = () => {
    return (
      <main className={styles.main}>
        <h1>404: Page not found</h1>
        <Link to="/" className={styles.link}>Return Home</Link>
      </main>
    );
  };

export default NotFound;