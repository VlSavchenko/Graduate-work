import React from "react";
import styles from "./ListOfExplainCards.module.scss";

export default function ListOfExplainCards() {
  return (
    <div className={styles.listOfExplainCards}>
      <div className={styles.explainCard}>
        <img
          src="img/icons/fill_resume_on_laptop.svg"
          alt="Male"
        />
        <p className={styles.text}>Заполняйте резюме онлайн в удобной форме</p>
      </div>
      <div className={styles.explainCard}>
        <img
          src="img/icons/share_link.svg"
          alt="Male"
        />
        <p className={styles.text}>Поделитесь ссылкой на резюме</p>
      </div>
      <div className={styles.explainCard}>
        <img
          src="img/icons/cloud_download.svg"
          alt="Male"
        />
        <p className={styles.text}>Скачайте резюме в личном кабинете</p>
      </div>
    </div>
  );
}
