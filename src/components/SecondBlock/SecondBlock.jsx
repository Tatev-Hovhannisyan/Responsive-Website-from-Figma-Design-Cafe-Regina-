import React from "react";
import { Link } from "react-router-dom"; // ✅ не забудь импорт
import styles from "./SecondBlock.module.css";

// картинки
import text1 from "../../assets/section-block/text1.svg";
import logoCenter from "../../assets/section-block/Group 8725.png";
import text3 from "../../assets/section-block/text3.svg";
import juse from "../../assets/section-block/juse.png";
import chepes from "../../assets/section-block/chepes.png";
import text2 from "../../assets/section-block/text2.svg";
import text4 from "../../assets/section-block/text4.svg";
import lineLogo from "../../assets/section-block/Group 8732.png";
import centerTextImg from "../../assets/section-block/Group 8761.png";
import fullwidthImg from "../../assets/section-block/Group 8731.svg";

const SecondBlock = () => {
  return (
    <section className={styles.secondBlock}>
      {/* фон */}
      <div className={styles.secondBlockInner}></div>

      {/* колонки */}
      <div className={styles.columnsWrapper}>
        {/* Левый столбец */}
        <div className={styles.textsLeft}>
          <img src={text1} alt="Text Top Left" />
          <img src={logoCenter} alt="Logo" />
          <img src={text3} alt="Text Bottom Left" />
        </div>

        {/* Центр */}
        <div className={styles.imagesCenter}>
          <img src={juse} alt="Image 1" />
          <img src={chepes} alt="Image 2" />
        </div>

        {/* Правый столбец */}
        <div className={styles.textsRight}>
          <div className={styles.textBlock}>
            <img src={text2} alt="Text Top Right" />
            <div className={styles.menuRow}>
                     <p className={styles.contactLabel}>ALL MENU</p>
          <Link to="/drinks" className={styles.readMoreLink}>
            <span className={styles.circleBtn}>→</span>
          </Link>
      
             
            </div>
          </div>

          <div className={styles.textBlock}>
            <img src={text4} alt="Text Bottom Right" />
            <div className={styles.menuRow}>
                         <p className={styles.contactLabel}>ALL MENU</p>
          <Link to="/hunger" className={styles.readMoreLink}>
            <span className={styles.circleBtn}>→</span>
          </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Линия */}
      <div className={styles.lineBlock}>
        <img src={lineLogo} alt="Line Logo" />
      </div>

      {/* Центр-блок */}
      <div className={styles.centerBlock}>
        <img src={centerTextImg}   className={styles.centerTextImg} alt="Text Image" />
        <div className={styles.readMoreRow}>
          <p className={styles.contactLabel}>READ MORE</p>
          <Link to="/read-more" className={styles.readMoreLink}>
            <span className={styles.circleBtn}>→</span>
          </Link>
        </div>
      </div>

      {/* fullwidth картинка */}
      <div className={styles.fullwidthBlock}>
        <img
          src={fullwidthImg}
          alt="Full Width"
          className={styles.fullwidthImg}
        />
      </div>
    </section>
  );
};

export default SecondBlock;
