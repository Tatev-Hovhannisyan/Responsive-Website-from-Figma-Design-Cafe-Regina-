// PhotoGallery.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./PhotoGallery.module.css";

import img1 from "../../assets/PhotoGallery/1.svg";
import img2 from "../../assets/PhotoGallery/3.svg";
import img3 from "../../assets/PhotoGallery/5.svg";
import img4 from "../../assets/PhotoGallery/7.svg";
import img5 from "../../assets/PhotoGallery/8.svg";
import img6 from "../../assets/PhotoGallery/9.svg";
import img7 from "../../assets/PhotoGallery/10.svg";
import img8 from "../../assets/PhotoGallery/11.svg";
import img9 from "../../assets/PhotoGallery/12.svg";
import img10 from "../../assets/PhotoGallery/13.svg";
import textImg from "../../assets/PhotoGallery/text.png";

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const PhotoGallery = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const visiblePhotos = 4; // показываем всегда 4 фото
  const step = 1;

  // Измеряем ширину карточки
  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        const firstCard = sliderRef.current.querySelector(
          `.${styles.photoWrapper}`
        );
        if (firstCard) {
          const computed = firstCard.offsetWidth;
          setCardWidth(computed + 10); // + gap
        }
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - step, 0));
  };

  const handleNext = () => {
    const maxIndex = Math.max(photos.length - visiblePhotos, 0);
    setIndex((prev) => Math.min(prev + step, maxIndex));
  };

  return (
    <>
      <hr className={styles.divider} />
      <section className={styles.gallery}>
        {/* Левая часть */}
        <div className={styles.left}>
          <img src={textImg} alt="Text" className={styles.textImg} />
          <div className={styles.controls}>
            <button onClick={handlePrev} className={styles.circleBtn}>
              ←
            </button>
            <button onClick={handleNext} className={styles.circleBtn}>
              →
            </button>
          </div>
        </div>

        {/* Правая часть */}
        <div className={styles.right}>
          <div
            className={styles.slider}
            ref={sliderRef}
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
          >
            {photos.map((src, i) => (
              <div key={i} className={styles.photoWrapper}>
                <img src={src} alt={`Photo ${i}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;
