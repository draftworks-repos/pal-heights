import Image from "next/image";
import styles from "./InstaPosts.module.css";

export default function DiningHighlight() {
  return (
    <section className={styles.section} data-cursor-theme="light">
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className={styles.curveOne}
      >
        <path
          d="M0 120 C 240 40, 480 40, 720 100 C 960 160, 1200 160, 1440 80"
          fill="none"
          stroke="#FBF4DE"
          strokeWidth="0.5"
        />
      </svg>
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className={styles.curveTwo}
      >
        <path
          d="M0 120 C 240 40, 480 40, 720 100 C 960 160, 1200 160, 1440 80"
          fill="none"
          stroke="#FBF4DE"
          strokeWidth="0.5"
        />
      </svg>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>Straight from</h2>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>their Hearts</h2>
              <span className={styles.line} />
            </div>

            <p className={styles.desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <a href="#" className={styles.button} data-cursor="hover">
              Book Now
            </a>
          </div>

          {/* Right Images */}
          <div className={styles.images}>
            <div className={`${styles.imageWrap} ${styles.large}`}>
              <Image
                src="/placeholder.jpg"
                alt="Zaika Restaurant Interior"
                fill
                priority
                className={styles.image}
              />
            </div>

            <div className={`${styles.imageWrap} ${styles.small}`}>
              <Image
                src="/placeholder.jpg"
                alt="Zaika Seating Area"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
