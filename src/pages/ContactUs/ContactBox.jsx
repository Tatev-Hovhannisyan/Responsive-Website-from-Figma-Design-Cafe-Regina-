import { useState } from "react";
import styles from "./ContactBox.module.css";
import text2 from "../../assets/Pages/Frame 33.png";

export default function ContactBox() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // пример с Formspree (замени на свою ссылку action)
    fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert("✅ Сообщение отправлено!");
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: "",
          });
        } else {
          alert("❌ Ошибка при отправке");
        }
      })
      .catch(() => alert("⚠️ Нет соединения"));
  };

  return (
    <div className={styles.contactWrapper}>
      <form className={styles.contactBox} onSubmit={handleSubmit}>
        <img src={text2} alt="Contact Us" className={styles.contactImage} />

        <div className={styles.row}>
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.inputHalf}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.inputHalf}
            required
          />
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleChange}
          className={styles.inputFull}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.inputFull}
          required
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          required
        />
        <button type="submit" className={styles.sendBtn}>
          SEND
        </button>
      </form>
    </div>
  );
}
