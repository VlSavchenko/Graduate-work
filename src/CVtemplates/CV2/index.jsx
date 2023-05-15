import React from "react";
import styles from "./CV2.module.scss";

export default function index() {
  return (
    <div className={styles.CVContainer}>
      <div className={styles.cv2}>
        <aside className={styles.sidebar}>
          <div className={styles.personalInfo}>
            <img
              className={styles.photo}
              src="img/icons/headerPic.jpg"
              alt="user"
            />
            <div className={styles.nameAndPosition}>
              <div className={styles.blockTitle}>Эндрю Маллен</div>
              <div className={styles.yellowDescription}>
                Фронтенд разработчик
              </div>
            </div>
            <div className={styles.links}>
              <div>+11012223344</div>
              <div>hello@andrew.com</div>
            </div>
          </div>
          <div className={styles.skillsAndInterests}>
            <div className={styles.blockTitle}>Навыки</div>
            <div className={styles.list}>
              <div>Веб-дизайн</div>
              <div>Дизайн UX/UI</div>
              <div>Тестирование юзабилити</div>
              <div>Создание прототипов</div>
              <div>Figma</div>
              <div>After Effects</div>
              <div>Webflow</div>
              <div>Framer</div>
            </div>
          </div>
          <div className={styles.skillsAndInterests}>
            <div className={styles.blockTitle}>Хобби и интересы</div>
            <div className={styles.list}>
              <div>3D моделирование</div>
              <div>Motion Graphics</div>
              <div>Компьютерные игры</div>
              <div>Езда на велосипеде</div>
              <div>Чтение</div>
              <div>Футбол</div>
            </div>
          </div>
          <div className={styles.skillsAndInterests}>
            <div className={styles.blockTitle}>Языки</div>
            <div className={styles.language}>
              <div>Русский</div>
              <div>Английский</div>
            </div>
          </div>
        </aside>
        <aside className={styles.main}>
          <div className={styles.aboutBlock}>
            <div className={styles.blockTitle}>Обо мне</div>
            <div className={styles.grayText}>
              Я мультидисциплинарный дизайнер продуктов, специализирующийся на
              программировании без кода и визуальной разработке.
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Опыт работы</div>
            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.placeAndPosition}>
                  <div className={styles.place}>Университет Джорджии</div>
                  <div className={styles.position}>Научный сотрудник</div>
                </div>

                <div className={styles.grayText12}>
                  Сентябрь 2019 - Настоящее время
                </div>
                <div className={styles.grayText}>
                  Подробная информация о вашем опыте работы приведена здесь.
                  Кратко продемонстрируйте что вы сделали и чего достигли на
                  этой должности. Вы можете также рассказать об инструментах,
                  которые вы использовали.
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.placeAndPosition}>
                  <div className={styles.place}>Университет Джорджии</div>
                  <div className={styles.position}>Научный сотрудник</div>
                </div>
                <div className={styles.grayText12}>Jul 2015 - Aug 2019</div>
                <div className={styles.grayText}>
                  Подробная информация о вашем опыте работы приведена здесь.
                  Кратко продемонстрируйте что вы сделали и чего достигли на
                  этой должности. Вы можете также рассказать об инструментах,
                  которые вы использовали.
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.placeAndPosition}>
                  <div className={styles.place}>Университет Джорджии</div>
                  <div className={styles.position}>Научный сотрудник</div>
                </div>
                <div className={styles.grayText12}>Jan 2012 - Mar 2015</div>
                <div className={styles.grayText}>
                  Подробная информация о вашем опыте работы приведена здесь.
                  Кратко продемонстрируйте что вы сделали и чего достигли на
                  этой должности. Вы можете также рассказать об инструментах,
                  которые вы использовали.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Образование</div>
            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.placeAndPosition}>
                  <div className={styles.place}>Университет Джорджии</div>
                  <div className={styles.position}>
                    Бакалавр компьютерных наук, Искусственный интеллект
                  </div>
                </div>
                <div className={styles.grayText12}>
                  Сентябрь 2019 - Настоящее время
                </div>
                <div className={styles.grayText}>
                  Здесь вы можете упомянуть о том, что вы изучали, и кратко
                  изложить подробности о том, что вы узнали. Вы также можете
                  упомянуть о любых внеклассных мероприятиях, которые вы
                  проводили в связи с вашей степенью.
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
