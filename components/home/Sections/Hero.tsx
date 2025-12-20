"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;

    if (!heading || !paragraph) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // LEFT → RIGHT MASK reveal
      tl.fromTo(
        heading.querySelectorAll(`.${styles.mask}`),
        {
          clipPath: "inset(0 100% 0 0)", // fully hidden from right
        },
        {
          clipPath: "inset(0 0% 0 0)", // fully revealed left → right
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.5,
        }
      );

      // PARAGRAPH fade + translate
      tl.from(
        paragraph,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 ref={headingRef} className={styles.heading}>
            <div className={styles.mask}>
              <div className={styles.line}>Ample Luxurious</div>
            </div>
            <div className={styles.mask}>
              <div className={styles.line}>Spaces for You</div>
            </div>
          </h1>

          <p ref={paragraphRef} className={styles.paragraph}>
            True hospitality at your service
          </p>
        </div>
      </div>
    </section>
  );
}
