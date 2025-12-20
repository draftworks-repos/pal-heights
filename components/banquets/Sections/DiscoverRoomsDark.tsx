"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import styles from "./DiscoverRoomsDark.module.css";

const ROOM_SETS = [
  {
    images: [
      { label: "Couple Simple Room", src: "/discover/tab-1/left-tall.png" },
      { label: "Luxe Room", src: "/discover/tab-1/right-large.png" },
      { label: "Premium Room", src: "/discover/tab-1/small-1.png" },
      { label: "Master Room", src: "/discover/tab-1/small-2.png" },
      { label: "Family Luxe", src: "/discover/tab-1/small-3.png" },
    ],
  },
  {
    images: [
      { label: "Couple Simple Room", src: "/discover/tab-1/left-tall.png" },
      { label: "Luxe Room", src: "/discover/tab-1/right-large.png" },
      { label: "Premium Room", src: "/discover/tab-1/small-1.png" },
      { label: "Master Room", src: "/discover/tab-1/small-2.png" },
      { label: "Family Luxe", src: "/discover/tab-1/small-3.png" },
    ],
  },
];

const ICONS = [
  "Free Wi-Fi",
  "AC",
  "Swimming Pool",
  "GYM",
  "Parking",
  "Laundry",
  "Room Service",
];

export default function DiscoverRooms() {
  const [active, setActive] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);

  const handleIconClick = (index: number) => {
    if (!galleryRef.current || animating.current) return;
    animating.current = true;

    const images = galleryRef.current.querySelectorAll("img");
    const labels = galleryRef.current.querySelectorAll(`.${styles.label}`);

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        setActive(index % ROOM_SETS.length);

        requestAnimationFrame(() => {
          const newImages = galleryRef.current!.querySelectorAll("img");
          const newLabels = galleryRef.current!.querySelectorAll(
            `.${styles.label}`
          );

          gsap.fromTo(
            newImages,
            { opacity: 0, scale: 0.985, y: -6 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              stagger: 0.04,
              duration: 0.45,
              ease: "power3.out",
            }
          );

          gsap.fromTo(
            newLabels,
            { opacity: 0, y: 6 },
            {
              opacity: 1,
              y: 0,
              delay: 0.25,
              duration: 0.35,
              ease: "power2.out",
              onComplete: () => {
                animating.current = false;
              },
            }
          );
        });
      },
    });

    // OUT
    tl.to(images, {
      opacity: 0,
      scale: 1.015,
      y: 8,
      stagger: 0.03,
      duration: 0.25,
    });

    tl.to(
      labels,
      {
        opacity: 0,
        y: 6,
        duration: 0.2,
      },
      "<"
    );
  };

  const current = ROOM_SETS[active];

  return (
    <section className={styles.section} data-cursor-theme="light">
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.heading}>Breeze</h2>
            <span className={styles.line} />
          </div>

          <div className={styles.headerRight}>
            <p className={styles.desc}>
               If you’re looking to add a touch of elegance and charm to your
              corporate event, Breeze is the venue to choose. The open terrace
              provides a breathtaking panoramic view of Bhubaneswar, making it a
              unique location for evening corporate events, team-building
              activities, and networking sessions. With a seating arrangement
              for 250 guests, this venue is ideal for smaller corporate
              functions with an unforgettable view.
            </p>
          </div>
        </div>

        {/* IMAGE LAYOUT */}
        <div ref={galleryRef} className={styles.gallery}>
          <div className={styles.topRow}>
            <div className={styles.leftTall}>
              <div className={styles.overlay}></div>
              <img src={current.images[0].src} alt="" />
              <span className={styles.label}>{current.images[0].label}</span>
            </div>

            <div className={styles.rightLarge}>
              <div className={styles.overlay}></div>
              <img src={current.images[1].src} alt="" />
              <span className={styles.label}>{current.images[1].label}</span>
            </div>
          </div>

          <div className={styles.bottomRow}>
            {current.images.slice(2).map((img, i) => (
              <div key={i} className={styles.smallImage}>
                <div className={styles.overlay}></div>
                <img src={img.src} alt="" />
                <span className={styles.label}>{img.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* INFO BAR */}
        <div className={styles.infoBar}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Ideal For</span>
            <p className={styles.infoValue}>Lavish weddings and receptions</p>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Capacity</span>
            <p className={styles.infoValue}>600–1000 people</p>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>USPs</span>
            <p className={styles.infoValue}>
              Stunning city views, outdoor seating, live tandoor, and bar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
