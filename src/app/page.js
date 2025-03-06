import React from 'react';
import Link from 'next/link';
import styles from "./page.module.css";

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
