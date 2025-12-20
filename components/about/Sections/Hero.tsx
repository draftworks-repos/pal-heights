import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          {/* Left Content */}
          <div className={styles.content}>
            <h1 className={styles.title}>About Us</h1>

            <div className={styles.subRow}>
              <h2 className={styles.subtitle}>Pal Heights</h2>
              <span className={styles.line} />
            </div>

            <p className={styles.paragraph}>
              Discover the essence of India's majestic heritage at our quartet
              of extraordinary properties, nestled in the heart of Jaipur,
              Jodhpur, rural Rajasthan's serene Chhatrasagar, and the enchanting
              vicinity of Udaipur's Devigarh.
            </p>

            <p className={styles.paragraph}>
              Each of our meticulously crafted hotels is a masterful blend of
              timeless legacy and modern sophistication, where ancient stories
              meet eco conscious innovation. We're the guardians of India's most
              treasured heritage properties, transformed into sublime retreats
              for the modern wanderer.
            </p>

            <p className={styles.paragraph}>
              Indulge in culinary mastery, rejuvenate at our holistic spas, and
              bask in the warmth of our devoted staff, all set amidst
              mesmerizing settings that will leave you spellbound. We invite you
              to experience the RAAS Hotels difference – where heritage meets
              luxury, and every moment is a testament to the art of hospitality.
            </p>
          </div>

          {/* Right Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/placeholder.jpg"
              alt="Pal Heights Interior"
              fill
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
