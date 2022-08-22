import React from "react";
import * as styles from "../styles/navbar.module.less";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h3
          style={{ cursor: "pointer", fontSize: "1.5rem", fontWeight: "600" }}
        >
          Restaurant
        </h3>
      </div>
      <div className={styles.links}>
        <h3 className={styles.fromLeft}>Home</h3>
        <h3 className={styles.fromLeft}>Products</h3>
        <h3 className={styles.fromLeft}>Orders</h3>
      </div>
    </nav>
  );
};

export default Navbar;
