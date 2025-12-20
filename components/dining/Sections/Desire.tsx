import Image from "next/image";
import styles from "./Desire.module.css";

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
            <h3 className={styles.title}>Desire</h3>

            <p className={styles.desc}>
              Zaika, the best restaurant in Bhubaneswar, is a hidden gem nestled
              within our hotel, offering an exceptional fine-dining experience.
              Step into Zaika and be enchanted by its contemporary aesthetics
              and welcoming family-friendly atmosphere. As the top choice for
              food enthusiasts, we take pride in presenting a diverse and
              tantalizing selection of cuisines. At Zaika, we go above and
              beyond to provide impeccable service that leaves a lasting
              impression on our guests. One of the highlights of our restaurant
              is the captivating live tandoor experience, where you can witness
              the mastery of our chefs as they prepare fresh and delectable
              delights right before your eyes. This not only elevates the dining
              experience but also adds a charming touch to your meal. Whether
              you are a connoisseur of Indian, Chinese, or Continental cuisine,
              Zaika offers a unique dining experience that will satisfy your
              cravings and leave you craving for more.
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
