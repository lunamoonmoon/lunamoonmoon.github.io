import React from 'react';
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
        <Image
            src="/Watercolour Weddings Logo.png"
            alt="Luna Watercolour Weddings"
            width={250}
            height={150}
          />
          <h1>Welcome to Watercolour Weddings BC!</h1>
          <p>
            Hi! My name is Luna and I&apos;m a passionate local artist based in Victoria, BC, specializing in creating stunning watercolor portraits that capture the essence of guests on your important day.
          </p>
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

        <div className={styles.services} id="services">
          <h2>Watercolour Illustration Services</h2>

          <div className={styles.service}>
            <h3>Wedding Guest Portraits</h3>
            <p className={styles.price}>Custom Guest Portraits starting at $60/hr</p>
            <p className={styles.description}>
              Celebrate your special day with personalized, hand-painted wedding guest portraits. Guests will be delighted by a one-of-a-kind piece of art that captures the joy and love shared at your wedding. These portraits make a unique and meaningful memento for everyone in attendance.
            </p>
          </div>

          <div className={styles.service}>
            <h3>Custom Family Paintings</h3>
            <p className={styles.price}>Custom Family Art starting at $30</p>
            <p className={styles.description}>
              Create lasting memories with a custom family portrait. Whether it&apos;s for a family gathering or a special occasion, these hand-painted paintings capture the beauty and personality of your loved ones. It&apos;s the perfect way to preserve the charm and warmth of your family for years to come.
            </p>
          </div>
        </div>

        <div className={styles.testimonials} id="testimonials">
          <h2>Testimonials</h2>
          <div className={styles.testimonialscontainer} id="testimonialscontainer">
            <div className={styles.testimonialCard}>
              <Image
                src="/testimonial.png"
                alt="testimonial"
                width={200}
                height={200}
                className={styles.testimonialImage}
              />
              <p className={styles.testimonialText}>
                &quot;We are so touched with the amount of work and effort you put in to make our day special. Everyone absolutely loved it, and I can not believe how talented you are and how beautiful the paintings were.&quot; - The Rams
              </p>
            </div>
          </div>
        </div>

        <div className={styles.about} id='about'>
          <h2>About me</h2>
          <p>
          I&apos;m passionate about painting, drawing, and watercolour. I also like to make crochet plushies too! Art has always been something I enjoy, and it’s been truly rewarding to share my creations with others. I love expressing my creativity and connecting with people through portraits.
          </p>
        </div>
        
        <div className={styles.contact} id='contact'>
          <h1>Let&apos;s Connect!</h1>
          <p>
            Find me on Instagram at
            <br />
            <a href="https://www.instagram.com/lunawatercolourweddings/">
              <button className={styles.button}>@lunawatercolourweddings</button>
            </a>
            <br />
            <br />
            <p>Or send me an email at 5862lunamoon@gmail.com</p>
            <EmailButton className={styles.emailbtn} />
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
