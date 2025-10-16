import bg from "../assets/HeroImages/Mask Group.png";
import text1 from "../assets/Pages/Group 8772.svg";
import text2 from "../assets/Pages/Group 8773.svg";
import Header from "../components/Header/Header";
import styles from "../components/Hero/Hero.module.css"; // Hero.module.css
import pageStyles from "./Page.module.css"; // Page.module.css
import { Link } from "react-router-dom";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";

export default function SuggestionsPage() {
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
        className={pageStyles.drinksText2Wrapper}
        style={{ justifyContent: "center" }}
      >
        <img
          src={text2}
          alt="Suggestions 2"
          className={pageStyles.drinksText2}
        />
      </div>

      <SubscribeBlock />
    </>
  );
}
