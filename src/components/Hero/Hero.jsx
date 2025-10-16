// components/Hero/Hero.jsx
import styles from "./Hero.module.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

import imgLeft from "../../assets/HeroImages/Rectangle 17 (1).svg";
import imgCenter from "../../assets/HeroImages/Rectangle 15.svg";
import imgRight from "../../assets/HeroImages/Rectangle 17.svg";
import textMain from "../../assets/HeroImages/geniet van een gezellige tijd bij café regina.svg";
import textSub from "../../assets/HeroImages/text2.svg";
import imagetext from "../../assets/HeroImages/Group 8724.svg";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      left: imgLeft,
      center: imgCenter,
      right: imgRight,
      main: textMain,
      sub: textSub,
    },
    {
      left: imgRight,
      center: imgCenter,
      right: imgLeft,
      main: textMain,
      sub: textSub,
    },
    {
      left: imgCenter,
      center: imgLeft,
      right: imgRight,
      main: textMain,
      sub: textSub,
    },
    {
      left: imgLeft,
      center: imgRight,
      right: imgCenter,
      main: textMain,
      sub: textSub,
    },
    {
      left: imgRight,
      center: imgLeft,
      right: imgCenter,
      main: textMain,
      sub: textSub,
    },
  ];

  const slide = slides[activeSlide];

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <img
          src={imagetext}
          alt="Cafe Regina Text"
          className={styles.imagetext}
        />

        <div className={styles.heroImages}>
          <div className={styles.heroImageWrapper}>
            <img src={slide.left} alt="Drink 1" className={styles.imgLeft} />
            <img
              src={slide.center}
              alt="Drink 2"
              className={styles.imgCenter}
            />
            <img src={slide.right} alt="Drink 3" className={styles.imgRight} />
          </div>

          <div className={styles.pagination}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={index === activeSlide ? styles.active : ""}
                onClick={() => setActiveSlide(index)}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            ))}
          </div>

          <div className={styles.textBlock}>
            <img
              src={textMain}
              alt="Cafe Regina Text"
              className={styles.textMain}
            />
            <img
              src={textSub}
              alt="Cafe Regina Subtext"
              className={styles.textSub}
            />

            <div className={styles.contactRow}>
              <p className={styles.contactLabel}>CONTACT</p>
              <Link to="/contact" className={styles.circleBtn}>
                →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
