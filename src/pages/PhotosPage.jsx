import { useState } from "react";

import bg from "../assets/HeroImages/Mask Group.png";
import text1 from "../assets/Pages/Group 8774.png";

import Header from "../components/Header/Header";
import heroStyles from "../components/Hero/Hero.module.css";
import pageStyles from "./Page.module.css"; // ⚡ все стили страницы и галереи
import { Link } from "react-router-dom";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";

import img1 from "../assets/PhotoGallery/1.svg";
import img2 from "../assets/PhotoGallery/3.svg";
import img3 from "../assets/PhotoGallery/5.svg";
import img4 from "../assets/PhotoGallery/7.svg";
import img5 from "../assets/PhotoGallery/8.svg";
import img6 from "../assets/PhotoGallery/9.svg";
import img7 from "../assets/PhotoGallery/10.svg";
import img8 from "../assets/PhotoGallery/11.svg";
import img9 from "../assets/PhotoGallery/12.svg";
import img10 from "../assets/PhotoGallery/13.svg";

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function PhotosPage() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      {/* Хедер */}
      <div
        className={pageStyles.drinksHeaderWrapper}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={pageStyles.headerContainer}>
         
          <hr className={pageStyles.divider} />
        </div>

        <div className={pageStyles.drinksImageWrapper}>
          <img src={text1} alt="Drinks" className={pageStyles.drinksText1} />
          <div className={pageStyles.drinksContactRow}>
            <p className={heroStyles.contactLabel}>CONTACT</p>
            <Link to="/contact" className={heroStyles.circleBtn}>
              →
            </Link>
          </div>
        </div>
      </div>

      {/* Галерея */}
      <div className={pageStyles.galleryGrid}>
        {photos.map((src, i) => (
          <div
            key={i}
            className={`${pageStyles.photoWrapper} ${
              i === current ? pageStyles.activePhoto : ""
            }`}
          >
            <img src={src} alt={`Photo ${i}`} />
          </div>
        ))}
      </div>

      {/* Управление */}
      <div className={pageStyles.controls}>
        <button onClick={handlePrev} className={heroStyles.circleBtn}>
          ←
        </button>

        <div className={pageStyles.pagination}>
          {photos.map((_, i) => (
            <span
              key={i}
              className={i === current ? pageStyles.active : ""}
              onClick={() => setCurrent(i)}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          ))}
        </div>

        <button onClick={handleNext} className={heroStyles.circleBtn}>
          →
        </button>
      </div>

      <SubscribeBlock />
    </>
  );
}
