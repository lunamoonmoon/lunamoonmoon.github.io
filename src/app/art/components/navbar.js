import Image from 'next/image'
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
        Luna Watercolour Weddings
        </a>
        {/* <Image
            src="/path/to/logo.png"
            alt="Luna Watercolour Weddings"
            width={150} // Adjust width
            height={50} // Adjust height
          /> */}
      </div>
      <div className={styles.links} >
        <ul>
          <li>
            <Link href="#portfolio">
              Portfolio
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
