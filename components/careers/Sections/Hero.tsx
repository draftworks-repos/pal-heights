"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          {/* Left Content */}
          <div className={styles.content}>
            {/* KICKER */}
            <span className={styles.kicker}>DISCOVER</span>

            <h1 className={styles.title}>PAL HEIGHTS</h1>

            <div className={styles.subRow}>
              <h2 className={styles.subtitle}>Have a truly memorable</h2>
              <h2 className={styles.subtitle}>
                experience
                <span className={styles.line} />
              </h2>
            </div>

            <p className={styles.paragraph}>
              Pal Heights, the centrepiece of Bhubaneswar, is a luxury 4 Star
              hotel beside a new-age shopping mall making it the perfect
              location for your stay. We welcome our guests to the rich cultural
              heritage of Odisha while being accessible and ready to cater to
              all your needs
            </p>

            <p className={styles.paragraph}>
              At Pal Heights Bhubaneswar, we take immense pleasure in
              introducing you to a world of exemplary hospitality. We adhere to
              the international standards of service and offer you a truly
              business-class experience in the center of the templecity with
              every amenity you need. Whether on a vacation, business trip or a
              short getaway, Pal Heights, Bhubaneswar looks forward to adding a
              deeper meaning and satisfaction to your journey.
            </p>
          </div>

          {/* Right Video */}
          <div
            className={styles.videoWrapper}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <video
              ref={videoRef}
              src="/default.mp4"
              className={styles.video}
              muted
              loop
              playsInline
            />

            {/* PLAY BUTTON */}
            <button
              className={`${styles.videoControl} ${
                !isPlaying ? styles.visible : styles.hidden
              }`}
              onClick={togglePlay}
              aria-label="Play video"
            >
              <span data-cursor="hover" className={styles.controlBg}>
                <span className={styles.controlInner}>
                  <Play fill="#856D4780" stroke="none" />
                </span>
              </span>
            </button>

            {/* PAUSE BUTTON */}
            <button
              className={`${styles.videoControl} ${
                isPlaying && isHovering ? styles.visible : styles.hidden
              }`}
              onClick={togglePlay}
              aria-label="Pause video"
            >
              <span data-cursor="hover" className={styles.controlBg}>
                <span className={styles.controlInner}>
                  <Pause fill="#856D4780" stroke="none" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
