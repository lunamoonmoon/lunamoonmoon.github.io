import Link from 'next/link';
import styles from "./page.module.css";
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Art() {
  return (
    <div className={styles.main}>
      <Navbar/>
      <h1>Welcome to the Art section</h1>
      <p>Explore Watercolour Weddings by Luna</p>
      <Link href="/art/portfolio">
        Check out my work!
      </Link>
      <Footer/>
    </div>
  );
}
