import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <div>
          <ul className={styles.menu}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
