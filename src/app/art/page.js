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

        <div className={styles.howitworks} id='howitworks'>
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

        <div className={styles.portfolio} id='services'>
          <h2>Watercolour Illistration Services</h2>
          <ul>
            <li>
              Wedding Guest Portraits

              Custom Guest Art starting at $250

              Our wedding portraits are a timeless way to commemorate your special day, capturing the love and joy shared with your guests. The custom art adds a personal touch to your event, creating a memorable experience for all your guests to cherish.
            </li>
            <li>
            Custom Family Paintings

            A fun family keepsake starting at $7 per person

            Capture the beauty and charm of your family with our paintings.
            </li>
          </ul>
        </div>

        <div className={styles.about} id='about'>
          <h2>About me</h2>
          <p>
          Hello! I&apos;m passionate about painting, drawing, and watercolour. Art has always been something I enjoy, and it’s been truly rewarding to share my creations with others. I love expressing my creativity and connecting with people through portraits.
          </p>
        </div>
        
        <div className={styles.contact} id='contact'>
          <h1>Let&apos;s Connect!</h1>
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
