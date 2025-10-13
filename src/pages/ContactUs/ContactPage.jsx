import bg from "../../assets/HeroImages/Mask Group.png";
import text1 from "../../assets/Pages/Group 8776.svg";

import Header from "../../components/Header/Header";
import styles from "../../components/Hero/Hero.module.css"; // тут стили из Hero
import pageStyles from "../Page.module.css"; // твои модульные стили
import { Link } from "react-router-dom";

import ContactBox from "./ContactBox";

export default function ContactPage() {
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
            <p className={styles.contactLabel}>VIEW MENU</p>
            <Link to="/drinks" className={styles.circleBtn}>
              →
            </Link>
          </div>
        </div>
      </div>

         <ContactBox />
    </>
  );
}
