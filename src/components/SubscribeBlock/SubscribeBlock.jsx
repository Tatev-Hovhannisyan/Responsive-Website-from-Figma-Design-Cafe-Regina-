import React, { useState } from "react";
import styles from "./SubscribeBlock.module.css";

import lineLogo from "../../assets/section-block/Group 8732.png";
import text1 from "../../assets/subscribe/text1.svg";
import text2 from "../../assets/subscribe/text2.svg";
import text3 from "../../assets/subscribe/text3.svg";

const SubscribeBlock = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // сообщение для клиента

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("❌ Please enter your email");
      return;
    }

    // тут вместо console.log можно сделать отправку на сервер
    console.log("Subscribed with email:", email);

    setStatus(" Thank you for subscribing!");
    setEmail(""); // очищаем поле
  };

  return (
    <section className={styles.subscribeBlock}>
      <div className={styles.lineBlock}>
        <img src={lineLogo} alt="Logo" className={styles.lineLogo} />
      </div>
      <div className={styles.subscribeContainer}>
        <img
          src={text1}
          alt="Text 1"
          className={`${styles.subText} ${styles.subText1}`}
        />
        <img
          src={text2}
          alt="Text 2"
          className={`${styles.subText} ${styles.subText2}`}
        />

        {/* Черный прямоугольник с тенью */}
        <div className={styles.subscribeBlockInner}>
          <img
            src={text3}
            alt="Text 3"
            className={`${styles.subText} ${styles.subText3}`}
          />

          <form className={styles.subscribeForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>

          {status && <p className={styles.statusMessage}>{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default SubscribeBlock;
