import React from 'react';
import styles from './email.module.css';

export default function EmailButton() {
  return (
    <a href="mailto:teal0521@gmail.com?subject=Wedding Artist Inquiry&body=Hi Luna,%0D%0A%0D%0AI'm interested in your services.">
      <button className={styles.emailButton}>Send me an email!</button>
    </a>
  );
}
