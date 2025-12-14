import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Ample Luxurious Spaces for You</h1>
          <p className={styles.paragraph}>True hospitality at your service</p>
        </div>
      </div>
    </section>
  );
}
