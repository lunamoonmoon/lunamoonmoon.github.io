import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Italianno&family=Lato"
        key="google-fonts"
      />
      </Head>
      <div className={styles.logo}>
        <a href="/art" className="logo">
        Watercolour Weddings BC by Luna
        </a>
      </div>
      <div className={styles.links} >
        <ul>
          <li>
            <Link href="#portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
