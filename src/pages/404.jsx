import React from 'react';
import * as styles from '../styles/404.module.scss';

const NotFound = () => (
  <div className={styles.container}>
    <img
      className={styles.image}
      src="https://cdn.jsdelivr.net/gh/gabrielvlad/assets-cdn@main/Busines-card-style-resume-website/oops-404-error-with-broken-robot-concept-illustration-only-robot.png"
      alt="Broken robot with a 404 sign"
    />
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Error..Page not..remembe...</h1>
      <p className={styles.description}>
        Beep beep... It looks like you've wandered into the unknown. And lost yourself on the way.
      </p>
      <div className={styles.buttonContainer}>
        <a href="/" className={styles.button}>Return to the home base</a>
      </div>
    </div>
  </div>
);

export default NotFound;
