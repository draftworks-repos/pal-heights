import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.top}>
            {/* Column 1 */}
            <div className={styles.colLeft}>
              <h4 className={styles.smallHeading}>
                Welcome to Pal Heights <br />
                Group of Hotels and Resorts
              </h4>

              <p className={styles.paragraph}>
                Pal Heights Group of Hotels and Resorts happens to be the best
                hotels in Bhubaneswar and stands as a beacon of exceptional
                hospitality. Renowned as one of the premier luxury hotels and
                resorts in the city, we are dedicated to ensuring that our
                guests enjoy an unforgettable stay, thanks to our top-notch
                amenities and extraordinary service.
              </p>
            </div>

            {/* Column 2 */}
            <div className={styles.col}>
              <ul className={styles.links}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className={styles.col}>
              <ul className={styles.links}>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className={styles.colRight}>
              <a href="/terms">Terms and Conditions</a>
              <span>Copyright © 2023</span>
            </div>
          </div>

          {/* Bottom */}
          <div className={styles.bottom}>
            <div className={styles.policyLinks}>
              <a href="/terms">Terms of Use</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/cookies">About Cookies</a>
            </div>

            <p className={styles.copyright}>
              Copyright © 2023 Transparent. All rights reserved.
            </p>

            <p className={styles.disclaimer}>
              This product focuses on providing organizations with tools to
              achieve financial transparency. It might include features for
              budgeting, expense tracking, financial reporting, and analytics to
              help businesses understand and communicate their financial health
              clearly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
