import Image from "next/image";
import styles from "./Detail.module.css";

export default function DetailSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* LEFT COLUMN */}
          <div className={styles.leftCol}>
            {/* Text */}
            <div className={styles.header}>
              <span className={styles.kicker}>
                WHERE EVERY DETAIL CREATES A LASTING MEMORY
              </span>

              <div className={styles.headingRow}>
                <h2 className={styles.heading}>What is Lorem Ipsum?</h2>
                <span className={styles.line} />
              </div>

              <p className={styles.paragraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Bottom Images */}
            <div className={styles.bottomImages}>
              <div className={styles.imageBox}>
                <Image
                  src="/about/small-left.png"
                  alt=""
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.imageBox}>
                <Image
                  src="/about/small-right.png"
                  alt=""
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN IMAGE */}
          <div className={styles.rightCol}>
            <Image
              src="/about/right-large.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
