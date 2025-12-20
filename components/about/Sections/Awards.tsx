import Image from "next/image";
import styles from "./Awards.module.css";

const IMAGES = [
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
];

export default function Awards() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* TEXT CONTENT */}
        <div className={styles.header}>
          <span className={styles.kicker}>
            WHERE EVERY DETAIL CREATES A LASTING MEMORY
          </span>

          <div className={styles.headingRow}>
            <span className={styles.line} />
            <h2 className={styles.heading}>Awards &amp; Recognitions</h2>
          </div>

          <p className={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* IMAGES GRID */}
        <div className={styles.grid}>
          {IMAGES.map((src, i) => (
            <div key={i} className={styles.imageBox}>
              <Image
                src={src}
                alt={`Award ${i + 1}`}
                fill
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
