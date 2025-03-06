"use client";

import React, { useState } from 'react';
import { animated, useSpring } from "@react-spring/web";
import styles from "./photoscroll.module.css";

const images = [
  { src: "/weddingart1.jpeg", alt: "Wedding Art" },
  { src: "/family.jpg", alt: "Family Portrait" },
  { src: "/woman.jpg", alt: "Woman Portrait" },
  { src: "/weddingart2.jpeg", alt: "Wedding Art 2" },
  { src: "/portrait.jpeg", alt: "Portrait" },
  { src: "/testimonial.png", alt: "Testimonial" },
  { src: "/table.jpg", alt: "Table" },
];

export default function PhotoScroll() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const style = useSpring({
    from: { transform: "rotateY(0deg)" },
    to: { transform: "rotateY(25deg)" },
    config: { duration: 1000 },
  });

  const openModal = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.PhotoScroll}>
      <div className={styles.container}>
        {images.map(({ src, alt }) => (
          <animated.div
            key={src}
            className={styles.card}
            style={{
              backgroundImage: `url(${src})`,
              ...style,
            }}
            onClick={() => openModal(src)}
          >
          </animated.div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent}>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
}
