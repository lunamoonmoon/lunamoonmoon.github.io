import Image from 'next/image'
import Link from 'next/link';
import styles from "./page.module.css";
import Navbar from './art/components/navbar';
import Footer from './art/components/footer';

export default function Page() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Choose your path!</h1>
        <h2>I am looking for...</h2>
        <Link href="/art">
          Watercolour Weddings by Luna
        </Link>
        {/* <DevMain/> */}
      </div>
    </main>
  );
}
