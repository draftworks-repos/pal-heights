"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Reviews.module.css";
import Image from "next/image";
const reviews = [
  {
    id: 1,
    image: "/home/review-1.jpg",
    title: "Stunning hotel incredible views",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud",
    author: "John Doe",
    role: "Product Head",
  },
  {
    id: 2,
    image: "/home/review-2.jpg",
    title: "An unforgettable stay",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud",
    author: "Jane Smith",
    role: "Travel Blogger",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    scale: 0.95,
    opacity: 0,
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    scale: 0.95,
    opacity: 0,
  }),
};

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header (UNCHANGED TEXT INTENT) */}
        <div className={styles.header}>
          <span className={styles.kicker}>
            WHERE EVERY DETAIL CREATES A LASTING MEMORY
          </span>

          <div className={styles.titleRow}>
            <span className={styles.line} />
            <h2 className={styles.title}>
              Real Experiences <br className={styles.br} />{" "}
              <span>Real Reviews</span>
            </h2>
            <span className={styles.line} />
          </div>
        </div>

        <div className={styles.slider}>
          {/* Left */}
          <button
            className={`${styles.nav} ${styles.hideSm}`}
            onClick={prev}
            data-cursor="hover"
            aria-label="Previous"
          >
            <ChevronLeft className={styles.navIcon} size={26} />
          </button>

          <div className={styles.slideWrap}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={reviews[index].id}
                className={styles.card}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className={styles.cardContent}>
                  <Image
                    className={`${styles.image} ${styles.hideSm}`}
                    src={reviews[index].image}
                    alt={reviews[index].title}
                    width={300}
                    height={300}
                  />

                  <div className={styles.textContent}>
                    <h3>{reviews[index].title}</h3>
                    <p>&quot;{reviews[index].text}&quot;</p>

                    <div className={`${styles.author} ${styles.hideSm}`}>
                      <strong>{reviews[index].author}</strong>
                      <span>{reviews[index].role}</span>
                    </div>
                  </div>

                  <div className={styles.hideLg}>
                    <Image
                      className={styles.image}
                      src={reviews[index].image}
                      alt={reviews[index].title}
                      width={300}
                      height={300}
                    />
                    <div className={styles.author}>
                      <strong>{reviews[index].author}</strong>
                      <span>{reviews[index].role}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
          <div className={styles.navMobile}>
            {/* Left */}
            <button className={styles.nav} onClick={prev} aria-label="Previous">
              <ChevronLeft className={styles.navIcon} size={26} />
            </button>

            {/* Right */}
            <button className={styles.nav} onClick={next} aria-label="Next">
              <ChevronRight className={styles.navIcon} size={26} />
            </button>
          </div>

          {/* Right */}
          <button
            className={`${styles.nav} ${styles.hideSm}`}
            onClick={next}
            data-cursor="hover"
            aria-label="Next"
          >
            <ChevronRight className={styles.navIcon} size={26} />
          </button>
        </div>
      </div>
    </section>
  );
}
