"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./NavbarMobile.module.css";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`${styles.toggle} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span className={styles.icon}>
          {open ? (
            <X size={28} strokeWidth={1.5} />
          ) : (
            <Menu size={28} strokeWidth={1.5} />
          )}
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <nav className={styles.nav}>
          {[
            "Home",
            "About Us",
            "Discover Our Hotels",
            "Dining",
            "Banquets",
            "News & Media",
            "Careers",
            "Contact Us",
          ].map((label, i) => (
            <a
              key={label}
              href="#"
              className={styles.navLink}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {label}
            </a>
          ))}

          <a href="/book-now" className={styles.bookNow}>
            Book Now
          </a>
        </nav>
      </aside>
    </>
  );
}
