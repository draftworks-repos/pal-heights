"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import SplitType from "split-type";
import styles from "./DiningHighlight.module.css";

const DATA = [
  {
    tab: "Jaika",
    heroTitle: "Dine In The Best Way",
    title: "Jaika",
    image: "/placeholder.jpg",
    desc: "A MuLti-Cuisine Restaurant That Promises You An Enthralling Menu With A Dispense Bar Domed Within The Restaurant Perfectly Complements The Contemporary Ambience. Guests Can Savour The Tranquil Ambience Of This Outlet As They Enjoy Delectable Food & Drink Preparations.",
  },
  {
    tab: "Breeze",
    heroTitle: "Dine In The Best Way",
    title: "Breeze",
    image: "/placeholder.jpg",
    desc: "An Open-Air Dining Experience Offering Refreshing Cuisine And Beverages. Ideal For Relaxed Evenings, Breeze Lets Guests Enjoy Food In A Calm And Airy Setting With A Contemporary Feel.",
  },
  {
    tab: "Desire",
    heroTitle: "Dine In The Best Way",
    title: "Desire",
    image: "/placeholder.jpg",
    desc: "An Intimate Fine-Dining Space With Carefully Curated Menus And Elegant Interiors. Desire Is Crafted For Guests Seeking A Refined And Memorable Culinary Journey.",
  },
];

export default function DiningHighlight() {
  const [active, setActive] = useState(0);
  const animating = useRef(false);

  const heroTitleRef = useRef<HTMLSpanElement>(null);
  const textTitleRef = useRef<HTMLHeadingElement>(null);

  const heroSplit = useRef<SplitType | null>(null);
  const textSplit = useRef<SplitType | null>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const animateIn = () => {
    heroSplit.current?.revert();
    textSplit.current?.revert();

    heroSplit.current = new SplitType(heroTitleRef.current!, {
      types: "chars",
    });
    textSplit.current = new SplitType(textTitleRef.current!, {
      types: "chars",
    });

    const heroChars = heroSplit.current.chars ?? [];
    const textChars = textSplit.current.chars ?? [];

    gsap.set(descRef.current, { opacity: 0, y: 12 });
    gsap.set(imageRef.current, { opacity: 0 });

    const tl = gsap.timeline();

    // IMAGE IN (FIRST)
    tl.to(
      imageRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "+=0.15"
    );

    // TITLE IN
    tl.fromTo(
      [...heroChars, ...textChars],
      { y: 120 },
      {
        y: 0,
        stagger: 0.045,
        duration: 0.25,
        ease: "power4.out",
      },
      "-=0.15"
    );

    // PARAGRAPH IN
    tl.to(
      descRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: "power3.out",
      },
      ">-=0.3"
    );
  };

  const animateOut = (onComplete: () => void) => {
    const heroChars = heroSplit.current?.chars ?? [];
    const textChars = textSplit.current?.chars ?? [];

    const tl = gsap.timeline({ onComplete });

    // IMAGE OUT
    tl.to(
      imageRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      0
    );

    // PARAGRAPH OUT
    tl.to(
      descRef.current,
      {
        opacity: 0,
        y: 7,
        duration: 0.25,
        ease: "power2.in",
      },
      ">+=0.2"
    );

    // TITLES OUT
    if (heroChars.length || textChars.length) {
      tl.to(
        [...heroChars, ...textChars],
        {
          y: -120,
          stagger: 0.035,
          duration: 0.25,
          ease: "power4.in",
        },
        0
      );
    }
  };

  const handleTabClick = (index: number) => {
    if (index === active || animating.current) return;

    animating.current = true;

    animateOut(() => {
      setActive(index);

      requestAnimationFrame(() => {
        animateIn();
        animating.current = false;
      });
    });
  };

  useEffect(() => {
    animateIn();
    return () => {
      heroSplit.current?.revert();
      textSplit.current?.revert();
    };
  }, []);

  const current = DATA[active];

  return (
    <section className={styles.section} data-cursor-theme="dark">
      <div className={styles.bgPanel} />

      <div className={styles.container}>
        {/* IMAGE GROUP */}
        <div className={styles.imageGroup}>
          <div className={styles.imageWrap}>
            <div className={styles.titleRow}>
              <span
                ref={heroTitleRef}
                className={`${styles.title} ${styles.imageTitle}`}
              >
                {current.heroTitle}
              </span>
              <span className={styles.line} />
            </div>

            <Image
              ref={imageRef}
              src={current.image}
              alt="Dining"
              width={960}
              height={540}
              className={styles.image}
              data-cursor-theme="light"
            />
          </div>

          <div className={styles.tabs}>
            {DATA.map((item, i) => (
              <span
                key={item.tab}
                className={styles.tab}
                onClick={() => {
                  handleTabClick(i);
                }}
                data-cursor="hover"
                data-cursor-theme="dark"
              >
                {item.tab}
              </span>
            ))}
          </div>
        </div>

        {/* TEXT GROUP */}
        <div className={styles.textGroup}>
          <h3 ref={textTitleRef} className={styles.title}>
            {current.title}
          </h3>

          <p ref={descRef} className={styles.desc}>
            {current.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
