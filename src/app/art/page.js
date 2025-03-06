import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from './components/navbar';
import Footer from './components/footer';
import EmailButton from './components/email';
import PhotoScroll from './components/photoscroll';

export default function Art() {
  return (
    <div className={styles.main}>
      <Navbar/>
      <div className={styles.main}>
        <div className={styles.welcome} id='welcome'>
          <h1>Welcome to Watercolour Weddings by Me (Luna)!</h1>
        </div>

        <div className={styles.about} id='about'>
          <h2>How it works</h2>
          <ul>
            <li>Guests pose for an Instax photo.</li>
            <li>Then, they return to the party or watch as I transform their portrait into a watercolor artwork.</li>
            <li>Each artwork is painted in just 5 minutes per person.</li>
            <li>Guests leave with a one-of-a-kind, hand-painted memory and their photo!</li>
          </ul>
        </div>
        
        <div className={styles.portfolio} id='portfolio'>
          <PhotoScroll/>
        </div>
        
        <div className={styles.contact} id='contact'>
          <h1>Let's Connect!</h1>
          <p>Contact me by email</p>
          <EmailButton/>
          <a href="https://www.instagram.com/lunawatercolourweddings/">
            <button className={styles.button}>Or find me on Instagram here!</button>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
