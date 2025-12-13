import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/discover">Discover Our Hotels</a>
        </li>
        <li>
          <a href="/dining">Dining</a>
        </li>
        <li>
          <a href="/banquets">Banquets</a>
        </li>
        <li>
          <a href="/news-media">News & Media</a>
        </li>
        <li>
          <a href="/careers">Careers</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>

      <a href="/book-now" className={styles.bookNow} data-cursor="hover">
        Book Now
      </a>
    </nav>
  );
}
