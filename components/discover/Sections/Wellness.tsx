"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import SplitType from "split-type";
import styles from "./Wellness.module.css";

const SLIDES = [
  {
    title: "SPA & GYM",
    subtitle: ["Renew Your Zen:", "Surrender to the Art of", "Relaxation"],
    paragraph:
      "At Pal Heights, we believe in crafting an unparalleled experience for our guests. From our renowned bar and restaurant to the addition of Seven Seas Spa, every aspect of your stay is designed to ensure your utmost comfort, rejuvenation, and satisfaction. Complementing our spa and swimming pool, at Pal Heights, Mantra we offer a fully equipped gym and fitness center, inviting you to stay committed to your wellness goals. Our fitness experts are on hand to assist and motivate you as you embark on a path of health and vitality.",
    image: "/placeholder.jpg",
  },
  {
    title: "WELLNESS",
    subtitle: ["Renew Your Zen:", "Surrender to the Art of", "Relaxation"],
    paragraph:
      "At Pal Heights, we believe in crafting an unparalleled experience for our guests. From our renowned bar and restaurant to the addition of Seven Seas Spa, every aspect of your stay is designed to ensure your utmost comfort, rejuvenation, and satisfaction. Complementing our spa and swimming pool, at Pal Heights, Mantra we offer a fully equipped gym and fitness center, inviting you to stay committed to your wellness goals. Our fitness experts are on hand to assist and motivate you as you embark on a path of health and vitality.",
    image: "/placeholder.jpg",
  },
];

export default function Wellness() {
  const [active, setActive] = useState(0);
  const animating = useRef(false);

  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const titleSplitRef = useRef<SplitType | null>(null);
  const subtitleRefs = useRef<HTMLHeadingElement[]>([]);
  const subtitleSplits = useRef<SplitType[]>([]);
  const slide = SLIDES[active];

  /* ---------------- ANIMATE IN ---------------- */
  const animateIn = () => {
    titleSplitRef.current?.revert();
    subtitleSplits.current.forEach((s) => s.revert());
    subtitleSplits.current = [];

    titleSplitRef.current = new SplitType(titleRef.current!, {
      types: "chars",
    });

    subtitleRefs.current.forEach((el) => {
      if (!el) return;
      subtitleSplits.current.push(new SplitType(el, { types: "chars" }));
    });

    const titleChars = titleSplitRef.current.chars ?? [];
    const subtitleChars = subtitleSplits.current.flatMap((s) => s.chars ?? []);

    gsap.set(descRef.current, { autoAlpha: 0 });
    gsap.set(imageRef.current, { autoAlpha: 0, x: 40 });

    const tl = gsap.timeline();

    // IMAGE IN
    tl.to(imageRef.current, {
      autoAlpha: 1,
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // TITLE IN
    tl.fromTo(
      titleChars,
      { y: 100 },
      {
        y: 0,
        stagger: 0.045,
        duration: 0.3,
        ease: "power4.out",
      },
      0
    );

    // SUBTITLES IN (ALL LINES)
    tl.fromTo(
      subtitleChars,
      { y: 80 },
      {
        y: 0,
        stagger: 0.03,
        duration: 0.2,
        ease: "power4.out",
      },
      0
    );

    // PARAGRAPH IN
    tl.to(
      descRef.current,
      {
        autoAlpha: 1,
        duration: 0.45,
        ease: "power2.out",
      },
      ">+=0.1"
    );
  };

  /* ---------------- ANIMATE OUT ---------------- */
  const animateOut = (onComplete: () => void) => {
    const titleChars = titleSplitRef.current?.chars ?? [];
    const subtitleChars = subtitleSplits.current.flatMap((s) => s.chars ?? []);

    const tl = gsap.timeline({ onComplete });

    tl.to(
      imageRef.current,
      {
        autoAlpha: 0,
        x: -40,
        duration: 0.2,
        ease: "power2.in",
      },
      0
    );

    tl.to(
      descRef.current,
      {
        autoAlpha: 0,
        duration: 0.2,
        ease: "power2.in",
      },
      1
    );

    tl.to(
      titleChars,
      {
        y: -120,
        stagger: 0.035,
        duration: 0.3,
        ease: "power4.in",
      },
      0
    );

    tl.to(
      subtitleChars,
      {
        y: -80,
        stagger: 0.025,
        duration: 0.25,
        ease: "power4.in",
      },
      0
    );
  };

  const runTransition = (index: number) => {
    if (animating.current) return;
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
      titleSplitRef.current?.revert();
      subtitleSplits.current.forEach((s) => s.revert());
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 ref={titleRef} className={styles.title}>
              {slide.title}
            </h1>

            <div className={styles.subRow}>
              {slide.subtitle.map((text, i) => (
                <h2
                  key={i}
                  ref={(el) => {
                    subtitleRefs.current[i] = el!;
                  }}
                  className={styles.subtitle}
                >
                  {text}
                  {i === slide.subtitle.length - 1 && (
                    <span className={styles.line} />
                  )}
                </h2>
              ))}
            </div>

            <p ref={descRef} className={styles.paragraph}>
              {slide.paragraph}
            </p>
          </div>

          <div ref={imageRef} className={styles.imageWrapper}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className={styles.image}
            />

            <div className={styles.slideIcons}>
              <button
                className={styles.slideIcon}
                onClick={() => {
                  runTransition((active - 1 + SLIDES.length) % SLIDES.length);
                }}
                aria-label="Previous"
                data-cursor="hover"
              >
                <Image
                  src="/discover/slide-left.png"
                  alt="Slide previous icon"
                  width={48}
                  height={48}
                  className={styles.slideLogo}
                />
              </button>

              <button
                className={styles.slideIcon}
                onClick={() => {
                  runTransition((active + 1) % SLIDES.length);
                }}
                aria-label="Next"
                data-cursor="hover"
              >
                <Image
                  src="/discover/slide-right.png"
                  alt="Slide next icons"
                  width={48}
                  height={48}
                  className={styles.slideLogo}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
