"use client";

import Image from 'next/image';
import Link from 'next/link';
import { animated, useSpring } from "@react-spring/web";
import styles from "./photoscroll.module.css";

const images = [
  "/lunamoonmoon.github.io/portrait.jpeg",
  "/lunamoonmoon.github.io/table.jpg",
  "/lunamoonmoon.github.io/weddingart1.jpeg",
  "/lunamoonmoon.github.io/weddingart2.jpeg",
];

export default function PhotoScroll() {
  const style = useSpring({
    from: { transform: "rotateY(0deg)" },
    to: { transform: "rotateY(25deg)" },
    config: { duration: 1000 },
  });

  return (
    <nav className={styles.PhotoScroll}>
      <div className={styles.container}>
        {images.map(src => (
          <animated.div
            key={src}
            className={styles.card}
            style={{
              backgroundImage: `url(${src})`,
              ...style,
            }}
          >
          </animated.div>
        ))}
      </div>
    </nav>
  );
}
