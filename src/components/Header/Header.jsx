import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoBlock}>
          <img src={logo} alt="Cafe Regina Logo" className={styles.logo} />
        </div>

        {/* КНОПКА-ГАМБУРГЕР */}
        <div
          className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* МЕНЮ: Добавляем класс menuOpen, если меню открыто */}
        <nav className={`${styles.mainNav} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
            <li><Link to="/drinks" onClick={closeMenu}>DRINKS</Link></li>
            <li><Link to="/hunger" onClick={closeMenu}>SMALL HUNGER</Link></li>
            <li><Link to="/suggestions" onClick={closeMenu}>SUGGESTIONS</Link></li>
            <li><Link to="/photos" onClick={closeMenu}>PHOTOS</Link></li>
            <li><Link to="/about" onClick={closeMenu}>ABOUT US</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>CONTACT US</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}