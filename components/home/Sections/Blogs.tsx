"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Blogs.module.css";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    id: 1,
    image: "/home/blog-1.jpg",
    category: "Selected Category",
    title: "PAL Height’s Zaika: Rich Legacy & Evolution",
    excerpt:
      "Everyone in and around the city of Bhubaneswar knows about the restaurant Zaika located in Pal Heights hotel. However, the early history and evolution of the restaurant is something that not many are aware about...",
  },
  {
    id: 2,
    image: "/home/blog-2.jpg",
    category: "Selected Category",
    title: "PAL Height’s Zaika: Rich Legacy & Evolution",
    excerpt:
      "Everyone in and around the city of Bhubaneswar knows about the restaurant Zaika located in Pal Heights hotel. However, the early history and evolution of the restaurant is something that not many are aware about...",
  },
  {
    id: 3,
    image: "/home/blog-3.jpg",
    category: "Selected Category",
    title: "PAL Height’s Zaika: Rich Legacy & Evolution",
    excerpt:
      "Everyone in and around the city of Bhubaneswar knows about the restaurant Zaika located in Pal Heights hotel. However, the early history and evolution of the restaurant is something that not many are aware about...",
  },
];

export default function Blogs() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const kickerRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const leftLineRef = useRef<HTMLSpanElement | null>(null);
  const rightLineRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    const kicker = kickerRef.current;
    const title = titleRef.current;
    const leftLine = leftLineRef.current;
    const rightLine = rightLineRef.current;

    if (!container || !header || !kicker || !title || !leftLine || !rightLine)
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // kicker (translate ONLY, no fade)
      tl.from(kicker, {
        y: 50,
        duration: 0.6,
        ease: "power3.out",
      });

      // title spans — translate ONLY
      tl.from(
        title.querySelectorAll("span"),
        {
          y: 70,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0,
        },
        "-=0.3"
      );

      // lines — fade + translate
      tl.from(
        leftLine,
        {
          x: 40,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      );

      tl.from(
        rightLine,
        {
          x: -40,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "<"
      );

      // cards — fade + translate + stagger
      tl.from(
        `.${styles.card}`,
        {
          y: 50,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.15,
        },
        "<"
      );

      // CTA — fade + translate
      tl.from(
        `.${styles.ctaWrap}`,
        {
          y: 40,
          opacity: 0,
          duration: 0.45,
          ease: "power3.out",
        },
        "<"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} data-cursor-theme="dark">
      <div ref={containerRef} className={styles.container}>
        {/* Header */}
        <div ref={headerRef} className={styles.header}>
          <div className={styles.kickerWrapper}>
            <span ref={kickerRef} className={styles.kicker}>
              THE COMFORT CORNER
            </span>
          </div>

          <div className={styles.titleRow}>
            <span ref={leftLineRef} className={styles.line} />

            <h2 ref={titleRef} className={styles.title}>
              <span>Blogs for</span> <br className={styles.br} />
              <span className={styles.span}>Curious Travelers</span>
            </h2>

            <span ref={rightLineRef} className={styles.line} />
          </div>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <article key={blog.id} className={styles.card}>
              <div
                data-cursor-theme="light"
                className={styles.image}
                style={{ backgroundImage: `url(${blog.image})` }}
              />

              <div className={styles.content}>
                <span className={styles.category}>{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>

                <a className={styles.readMore} data-cursor="hover">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <a className={styles.cta} data-cursor="hover">
            Explore News & Media
          </a>
        </div>
      </div>
    </section>
  );
}
