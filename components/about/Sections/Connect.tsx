import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Globe,
  Dribbble,
  MessageCircle, // WhatsApp substitute
  Twitch,
} from "lucide-react";

import styles from "./Connect.module.css";

const ICON_PROPS = {
  size: 0.75 * 16, // 0.75rem icon inside 1.5rem container
  fill: "currentColor",
  stroke: "none",
};

export default function Connect() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <span className={styles.kicker}>ORDINARY MADE EXTRAORDINARY</span>

          <div className={styles.headingRow}>
            <h2 className={styles.heading}>Connect with us</h2>
            <span className={styles.line} />
          </div>

          <div className={styles.icons}>
            <a className={styles.icon}>
              <Twitter {...ICON_PROPS} />
            </a>
            <a className={styles.icon}>
              <Facebook {...ICON_PROPS} />
            </a>
            <a className={styles.icon}>
              <Instagram {...ICON_PROPS} />
            </a>
            <a className={styles.icon}>
              <Dribbble {...ICON_PROPS} />
            </a>
            <a className={styles.icon}>
              <MessageCircle {...ICON_PROPS} />
            </a>
            <a className={styles.icon}>
              <Twitch {...ICON_PROPS} />
            </a>
            <a className={styles.icon}>
              <Linkedin {...ICON_PROPS} />
            </a>
            <a className={styles.icon}>
              <Globe {...ICON_PROPS} />
            </a>
            <a className={styles.icon}>
              <Youtube {...ICON_PROPS} />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
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
    </section>
  );
}
