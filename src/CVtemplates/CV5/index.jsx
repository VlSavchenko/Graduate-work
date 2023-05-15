import React from "react";
import styles from "./CV5.module.scss";

export default function CV5() {
  return (
    <div className={styles.CVContainer}>
      <div className={styles.cv5}>
        <div className={styles.header}>
          <div className={styles.nameAndPosition}>
            <div className={styles.name}>Эндрю Маллен</div>
            <div className={styles.position}>Фронтенд разработчик</div>
          </div>
          <div className={styles.contact}>
            <div>+11012223344</div>
            <div>hello@andrew.com</div>
          </div>
        </div>
        <div className={styles.asides}>
          <aside className={styles.sidebar}>
            <div className={styles.about}>
              <div className={styles.blockTitle}>Обо мне</div>
              <div>
                У меня есть опыт работы в области информационных технологий, с
                акцентом на разработку интерфейсов и дизайн пользовательского
                интерфейса. Я отношусь к тому типу людей, которые хватаются за
                любую возможность узнать что-то новое. Вот почему мне нравятся
                сложные задачи. С этого момента я испытываю давление, требующее
                быстрого обучения и приобретете много нового опыта.
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
            <div className={styles.language}>
              <div className={styles.blockTitle}>Языки</div>
              <div className={styles.list}>
                <div>Русский</div>
                <div>Английский</div>
              </div>
            </div>
          </aside>
          <aside className={styles.main}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Опыт работы</div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.placeAndDate}>
                    <div className={styles.place}>Университет Джорджии</div>
                    <div className={styles.date}>
                      Сентябрь 2019 - Настоящее время
                    </div>
                  </div>
                  <div className={styles.position}>Научный сотрудник</div>
                  <div className={styles.description}>
                    Подробная информация о вашем опыте работы приведена здесь.
                    Кратко продемонстрируйте что вы сделали и чего достигли на
                    этой должности. Вы можете также рассказать об инструментах,
                    которые вы использовали.
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.placeAndDate}>
                    <div className={styles.place}>Университет Джорджии</div>
                    <div className={styles.date}>
                      Сентябрь 2019 - Настоящее время
                    </div>
                  </div>
                  <div className={styles.position}>Научный сотрудник</div>
                  <div className={styles.description}>
                    Подробная информация о вашем опыте работы приведена здесь.
                    Кратко продемонстрируйте что вы сделали и чего достигли на
                    этой должности. Вы можете также рассказать об инструментах,
                    которые вы использовали.
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.placeAndDate}>
                    <div className={styles.place}>Университет Джорджии</div>
                    <div className={styles.date}>
                      Сентябрь 2019 - Настоящее время
                    </div>
                  </div>
                  <div className={styles.position}>Научный сотрудник</div>
                  <div className={styles.description}>
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
                  <div className={styles.placeAndDate}>
                    <div className={styles.place}>Университет Джорджии</div>
                    <div className={styles.date}>
                      Сентябрь 2019 - Настоящее время
                    </div>
                  </div>
                  <div className={styles.position}>
                    Бакалавр компьютерных наук, Искусственный интеллект
                  </div>
                  <div className={styles.description}>
                    Здесь вы можете упомянуть о том, что вы изучали, и кратко
                    изложить подробности о том, что вы узнали. Вы также можете
                    упомянуть о любых внеклассных мероприятиях, которые вы
                    проводили в связи с вашей степенью.
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.placeAndDate}>
                    <div className={styles.place}>Университет Джорджии</div>
                    <div className={styles.date}>
                      Сентябрь 2019 - Настоящее время
                    </div>
                  </div>
                  <div className={styles.position}>
                    Бакалавр компьютерных наук, Искусственный интеллект
                  </div>
                  <div className={styles.description}>
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
    </div>
  );
}
