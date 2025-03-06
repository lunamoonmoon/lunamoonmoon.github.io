import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <nav className={styles.footer}>
      <div>
        <p>
          Made by LunaMoon
        </p>
        <div className={styles.links}>
        {/* <Link href="/dev">Check out my dev work!</Link> */}
        </div>
      </div>
    </nav>
  );
}
