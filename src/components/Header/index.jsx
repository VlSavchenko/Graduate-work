import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header
      id="header"
      className={`${styles.header} ${styles.backgroundHeader}`}
    >
      <div className={styles.blur}>
        <div className={styles.blockInHeader}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>
              Конструктор резюме онлайн
              <p>
                {/* Составить резюме онлайн и вывести его на печать или скачать
          готовый файл вы можете с помощью нашего онлайн конструктора.
          Создайте резюме бесплатно, используя качественные шаблоны и
          образцы, которые отлично подойдут для устройства на работу. */}
              </p>
            </div>
          </div>
          <img
            className={styles.mainHeaderImg}
            src="img/icons/a_man_who_uses_a_computer.svg"
            alt="Man"
          />
        </div>
      </div>

      {/* <div className="btnCreateResumeContainer">
          <div className="btnCreateResume">Создать резюме</div>
        </div> */}

      {/* <div className="listOfAdvantages">
          <div className="item">
            <p>Быстро</p>
            <img
              width={40}
              src="img/icons/quickly_fill_resume.svg"
              alt="Quickly"
            />
          </div>
          <div className="item">
            <p>Просто</p>
            <img
              width={40}
              src="img/icons/simply_fill_resume.svg"
              alt="Simply"
            />
          </div>
          <div className="item">
            <p>Эффективно</p>
            <img
              width={40}
              src="img/icons/effective_resume.svg"
              alt="Effective"
            />
          </div>
        </div> */}
    </header>
  );
}
