import React, { useState, useEffect, useRef } from "react";
import styles from "./Events.module.css";
import { Link } from "react-router-dom";

import headingImg from "../../assets/Events/Group 8762.svg";
import logoLeft from "../../assets/Events/Group 8763.svg";
import logoRight from "../../assets/Events/Group 8764.png";

import event1 from "../../assets/Events/1.svg";
import event2 from "../../assets/Events/2.svg";
import event3 from "../../assets/Events/3.svg";
import event4 from "../../assets/Events/4.svg";
import event5 from "../../assets/Events/5.svg";

const eventsData = [
  {
    img: event1,
    date: "12 SEP 2025",
    title: "Wine Evening",
    desc: "Lorem Ipsum is simply dummy text.",
  },
  {
    img: event2,
    date: "18 SEP 2025",
    title: "Jazz Night",
    desc: "Lorem Ipsum is simply dummy text.",
  },
  {
    img: event3,
    date: "25 SEP 2025",
    title: "Coffee Workshop",
    desc: "Lorem Ipsum is simply dummy text.",
  },
  {
    img: event4,
    date: "30 SEP 2025",
    title: "Beer Tasting",
    desc: "Lorem Ipsum is simply dummy text.",
  },
  {
    img: event5,
    date: "05 OCT 2025",
    title: "Cocktail Party",
    desc: "Lorem Ipsum is simply dummy text.",
  },
];

export default function Events() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(260); // базовая ширина
  const cardRef = useRef(null);

  const visibleCards = 4; // показываем 4 карточки на экране
  const step = 1;

  // измеряем ширину карточки для слайдера
  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 20); // ширина + gap
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const next = () => {
    if (index < eventsData.length - visibleCards) setIndex(index + step);
  };

  const prev = () => {
    if (index > 0) setIndex(index - step);
  };

  return (
    <section className={styles.eventsBlock}>
      <div className={styles.logoRow}>
        <img src={logoLeft} alt="Left Logo" className={styles.logoLeft} />

        <img
          src={headingImg}
          alt="Events Heading"
          className={styles.eventHeader}
        />

        <div className={styles.sliderControls}>
          <button className={styles.circleBtn} onClick={prev}>
            ←
          </button>
          <button className={styles.circleBtn} onClick={next}>
            →
          </button>
        </div>

        <img src={logoRight} alt="Right Logo" className={styles.logoRight} />
      </div>

      <div className={styles.sliderWrapper}>
        <div
          className={styles.eventsSlider}
          style={{ transform: `translateX(-${index * cardWidth}px)` }}
        >
          {eventsData.map((event, i) => (
            <div
              key={i}
              className={styles.eventCard}
              ref={i === 0 ? cardRef : null} // измеряем первую карточку
            >
              <img src={event.img} alt={event.title} />
              <p className={styles.eventDate}>{event.date}</p>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDesc}>{event.desc}</p>

              <div className={styles.readMoreRow}>
                <Link to="/read-more" className={styles.readMoreLink}>
                  <span className={styles.contactLabel}>READ MORE</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
