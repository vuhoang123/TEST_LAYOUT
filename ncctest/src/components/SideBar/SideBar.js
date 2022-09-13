import React from "react";
import styles from "./styles.module.css";
function SideBar() {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_container}>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>News</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
