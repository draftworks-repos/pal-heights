"use client";

import styles from "./FooterCta.module.css";
import { Ripple } from "@components/ui/Ripple";

export default function FooterCTA() {
  return (
    <section className={styles.footer}>
      {/* Background Animation */}
      <div className={styles.rippleWrap}>
        <Ripple />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2>
          Get Exclusive Updates
          <br />
          Sign up now to be in the know!
        </h2>

        <p>
          Will be used in accordance with our <a>Privacy Policy</a>
        </p>

        <form className={styles.form}>
          <div className={styles.inputWrap}>
            <input
              id="subscribe"
              type="email"
              placeholder="email@email.com"
              aria-label="Email address"
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
}
