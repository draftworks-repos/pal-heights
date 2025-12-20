import Image from "next/image";
import styles from "./CorporateGallery.module.css";

export default function WeddingGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>Seamless Corporate Gatherings</h2>
            <span className={styles.line} />
          </div>

          <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Image Grid */}
        <div className={styles.gridWrapper}>
          {/* Background Panel */}
          <div className={styles.bgPanel} />
          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={styles.imageWrap}>
                <Image
                  src="/placeholder.jpg"
                  alt="Wedding at Pal Heights"
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
