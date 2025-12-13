import Image from "next/image";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <Image
            src="/site-logos/logo.png"
            alt="Pal Heights"
            className={styles.siteLogo}
            width={200}
            height={60}
            priority
          />
        </a>

        {/* Desktop Navbar */}
        <div className={styles.desktopNav}>
          <Navbar />
        </div>

        {/* Mobile Navbar (already exists, empty for now) */}
        <div className={styles.mobileNav}>
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
}
