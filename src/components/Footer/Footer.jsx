import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <img
        src="/footer.svg" // или footerImg, если через import
        alt="Footer Background"
        className={styles.footer}
      />
    </footer>
  );
};

export default Footer;
