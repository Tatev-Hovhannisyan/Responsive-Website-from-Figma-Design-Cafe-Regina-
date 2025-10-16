import pageStyles from "./Page.module.css"; // ⚡ все стили страницы и галереи
import styles from "../components/SecondBlock/SecondBlock.module.css"; // ⚡ все стили страницы и галереи
import Header from "../components/Header/Header";
import text1 from "../assets/Pages/Group 8756.png";

import { Link } from "react-router-dom";

const ReadMore = () => {
  return (
    <>
      <div className={pageStyles.bg}>
        <Header />
      </div>

      <section>
        {/* Блок с фоном */}
        <div className={pageStyles.bg}>
          <div className={pageStyles.headerContainer}></div>
        </div>

        {/* Теперь row стоит НАД фоном, фон снизу не давит */}
        <div className={pageStyles.readMoreRow}>
          <Link to="/" className={pageStyles.readMoreLink}>
            <span className={pageStyles.circleBtn}> ←</span>
            BACK TO HOME
          </Link>
        </div>

        <div className={pageStyles.readMoreContainer}>
          <img src={text1} alt="Text 1" />
        </div>
      </section>
    </>
  );
};

export default ReadMore;
