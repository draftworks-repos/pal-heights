"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isDarkBg = ["/about", "/discover", "/dining", "/banquets"].includes(
    pathname
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>
          <a href="/" data-cursor="hover" className={styles.a}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" data-cursor="hover" className={styles.a}>
            About Us
          </a>
        </li>
        <li>
          <a href="/discover" data-cursor="hover" className={styles.a}>
            Discover Our Hotels
          </a>
        </li>
        <li>
          <a href="/dining" data-cursor="hover" className={styles.a}>
            Dining
          </a>
        </li>
        <li>
          <a href="/banquets" data-cursor="hover" className={styles.a}>
            Banquets
          </a>
        </li>
        <li>
          <a href="/news-media" data-cursor="hover" className={styles.a}>
            News & Media
          </a>
        </li>
        <li>
          <a href="/careers" data-cursor="hover" className={styles.a}>
            Careers
          </a>
        </li>
        <li>
          <a href="/contact" data-cursor="hover" className={styles.a}>
            Contact Us
          </a>
        </li>
      </ul>

      <a
        href="/book-now"
        className={`${styles.bookNow} ${isDarkBg ? styles.light : ""} ${
          scrolled ? styles.scrolledButton : ""
        }`}
        data-cursor="hover"
      >
        Book Now
      </a>
    </nav>
  );
}
