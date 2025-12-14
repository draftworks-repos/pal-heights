import styles from "./Properties.module.css";

export default function TwoProperties() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <span className={styles.kicker}>ORDINARY MADE EXTRAORDINARY</span>

          <div className={styles.titleRow}>
            <span className={styles.line} />
            <h2 className={styles.title}>
              Two Properties
              <span>One signature Experience</span>
            </h2>
            <span className={styles.line} />
          </div>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          <div
            className={`${styles.card} ${styles.cardOne}`}
            data-cursor="hover"
          >
            <div className={styles.overlay}>
              <div className={styles.cardContent}>
                <div className={styles.textWrap}>
                  <h3>Pal Heights</h3>
                  <p>BHUBANESWAR</p>
                </div>

                <div className={styles.actions}>
                  <a href="#">Explore More</a>
                  <a href="#" className={styles.primary}>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.cardTwo}`}
            data-cursor="hover"
          >
            <div className={styles.overlay}>
              <div className={styles.cardContent}>
                <div className={styles.textWrap}>
                  <h3>Pal Heights Mantra</h3>
                  <p>BHUBANESWAR | CUTTACK</p>
                </div>

                <div className={styles.actions}>
                  <a href="#">Explore More</a>
                  <a href="#" className={styles.primary}>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
