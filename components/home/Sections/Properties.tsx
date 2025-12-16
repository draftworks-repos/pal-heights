import styles from "./Properties.module.css";

export default function TwoProperties() {
  return (
    <section className={styles.section} data-cursor-theme="dark">
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
            data-cursor-theme="light"
            className={`${styles.card} ${styles.cardOne}`}
          >
            <div className={styles.overlay}>
              <div className={styles.cardContent}>
                <div className={styles.textWrap}>
                  <h3>Pal Heights</h3>
                  <p>BHUBANESWAR</p>
                </div>

                <div className={styles.actions}>
                  <a href="#" data-cursor="hover">
                    Explore More
                  </a>
                  <a href="#" data-cursor="hover" className={styles.primary}>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            data-cursor-theme="light"
            className={`${styles.card} ${styles.cardTwo}`}
          >
            <div className={styles.overlay}>
              <div className={styles.cardContent}>
                <div className={styles.textWrap}>
                  <h3>Pal Heights Mantra</h3>
                  <p>BHUBANESWAR | CUTTACK</p>
                </div>

                <div className={styles.actions}>
                  <a href="#" data-cursor="hover">
                    Explore More
                  </a>
                  <a href="#" data-cursor="hover" className={styles.primary}>
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
