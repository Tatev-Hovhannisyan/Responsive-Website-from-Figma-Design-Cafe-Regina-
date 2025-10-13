import { useState, useRef, useEffect } from "react";
import bg from "../assets/HeroImages/Mask Group.png";
import text1 from "../assets/Pages/Group 8775.svg";

import Header from "../components/Header/Header";
import styles from "../components/Hero/Hero.module.css";
import pageStyles from "./Page.module.css";

import { Link } from "react-router-dom";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";

const timelineData = [
  {
    year: 1927,
    text: "In 1927 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    year: 1940,
    text: "In 1940 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    year: 1957,
    text: "In 1957 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    year: 1965,
    text: "In 1965 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    year: 1979,
    text: "In 1979 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    year: 1990,
    text: "In 1990 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    year: 1999,
    text: "In 1999 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    year: 2010,
    text: "In 2010 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    year: 2024,
    text: "In 2024 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState(timelineData[0].year);
  const yearsRef = useRef([]);
  const [indicatorLeft, setIndicatorLeft] = useState("0px");

  useEffect(() => {
    const updateIndicatorPosition = () => {
      const activeIndex = timelineData.findIndex(
        (item) => item.year === activeYear
      );
      const activeElement = yearsRef.current[activeIndex];
      const parent = activeElement?.parentElement;
      if (activeElement && parent) {
        const rect = activeElement.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        // рассчитываем центр в процентах от родителя
        const centerPercent =
          ((rect.left + rect.width / 2 - parentRect.left) / parentRect.width) *
          100;

        // обновляем state и CSS переменную
        setIndicatorLeft(`${centerPercent}%`);
        parent.parentElement.style.setProperty(
          "--indicator-left",
          `${centerPercent}%`
        );
      }
    };

    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);
    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [activeYear]);

  return (
    <>
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
            <p className={styles.contactLabel}>CONTACT</p>
            <Link to="/contact" className={styles.circleBtn}>
              →
            </Link>
          </div>
        </div>
      </div>

      <div
  className={`${pageStyles.timelineAndSubscribeWrapper} ${pageStyles.aboutPageWrapper}`}
>
  <div className={pageStyles.timelineWrapper}>
    <div className={pageStyles.timeline}>
      <div className={pageStyles.timelineContent}>
        <div className={pageStyles.timelineHeader}>
          <div className={pageStyles.years}>
            {timelineData.map((item, i) => (
              <span
                key={item.year}
                ref={(el) => (yearsRef.current[i] = el)}
                className={`${pageStyles.year} ${
                  activeYear === item.year ? pageStyles.activeYear : ""
                }`}
                onClick={() => setActiveYear(item.year)}
              >
                {item.year}
              </span>
            ))}
          </div>

          {/* Индикатор */}
          <svg
            width="20"
            height="10"
            style={{
              position: "absolute",
              bottom: 0,
              left: indicatorLeft,
              transform: "translateX(-47%) translateY(-390%)",
              transition: "left 0.3s ease",
            }}
          >
            <polyline
              points="0,11 10,0 18,10"
              fill="transparent"
              stroke="#969493"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className={pageStyles.yearText}>
          {timelineData.find((item) => item.year === activeYear)?.text}
        </div>
      </div>
    </div>
  </div>
  <SubscribeBlock />
</div>

    </>
  );
}
