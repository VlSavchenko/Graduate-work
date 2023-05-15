import React from "react";
import styles from "./CV3.module.scss";

export default function CV3() {
  return (
    <div className={styles.CVContainer}>
      <div className={styles.cv3}>
        <div className={styles.nameAndPosition}>
          <div className={styles.name}>Эндрю Маллен</div>
          <div className={styles.position}>Фронтенд разработчик</div>
        </div>
        <div className={styles.asides}>
          <aside className={styles.main}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Образование</div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.placeAndPosition}>
                    <div className={styles.place}>
                      Информатика, Национальный университет Пембангунан
                      ”Ветеран” Джокьякарта
                    </div>
                    <div className={styles.position}>
                      Бакалавр компьютерных наук, Искусственный интеллект
                    </div>
                  </div>
                  <div className={styles.f10_400_black}>
                    ИЮНЬ 2018- ИЮНЬ 2022
                  </div>
                  <div className={styles.f12_400_gray}></div>
                </div>
                <div className={styles.item}>
                  <div className={styles.placeAndPosition}>
                    <div className={styles.place}>Школа дизайна</div>
                    <div className={styles.position}>
                      Бакалавр компьютерных наук, Искусственный интеллект
                    </div>
                  </div>
                  <div className={styles.f10_400_black}>
                    ИЮНЬ 2018- ИЮНЬ 2022
                  </div>
                  <div className={styles.f12_400_gray}></div>
                </div>
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.blockTitle}>Опыт работы</div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.placeAndPosition}>
                    <div className={styles.place}>ABC Company</div>
                    <div className={styles.position}>Стажер по UX-дизайну</div>
                  </div>
                  <div className={styles.f10_400_black}>
                    ЯНВАРЬ 2023 - НАСТОЯЩЕЕ ВРЕМЯ
                  </div>
                  <div className={styles.f12_400_gray}>
                    Провел исследование пользователей и проанализировал данные
                    для определения дизайна возможности и обоснованные
                    дизайнерские решения. Сотрудничал с кросс-функциональные
                    команды для создания каркасов, прототипов и высокоточных
                    макетов.
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.placeAndPosition}>
                    <div className={styles.place}>ABC Company</div>
                    <div className={styles.position}>Стажер по UX-дизайну</div>
                  </div>
                  <div className={styles.f10_400_black}>
                    ЯНВАРЬ 2023 - НАСТОЯЩЕЕ ВРЕМЯ
                  </div>
                  <div className={styles.f12_400_gray}>
                    Провел исследование пользователей и проанализировал данные
                    для определения дизайна возможности и обоснованные
                    дизайнерские решения. Сотрудничал с кросс-функциональные
                    команды для создания каркасов, прототипов и высокоточных
                    макетов.
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.placeAndPosition}>
                    <div className={styles.place}>ABC Company</div>
                    <div className={styles.position}>Стажер по UX-дизайну</div>
                  </div>
                  <div className={styles.f10_400_black}>
                    ЯНВАРЬ 2023 - НАСТОЯЩЕЕ ВРЕМЯ
                  </div>
                  <div className={styles.f12_400_gray}>
                    Провел исследование пользователей и проанализировал данные
                    для определения дизайна возможности и обоснованные
                    дизайнерские решения. Сотрудничал с кросс-функциональные
                    команды для создания каркасов, прототипов и высокоточных
                    макетов.
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <aside className={styles.sidebar}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Контакты</div>
              <div className={styles.list}>
                <div className={styles.f14_500_black}>hello@andrew.com</div>
                <div className={styles.f14_500_black}>+11012223344</div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Обо мне</div>
              <div className={styles.f12_500_gray}>
                У меня есть опыт работы в области информационных технологий, с
                акцентом на разработку интерфейсов и дизайн пользовательского
                интерфейса. Я отношусь к тому типу людей, которые хватаются за
                любую возможность узнать что-то новое. Вот почему мне нравятся
                сложные задачи. С этого момента я испытываю давление, требующее
                быстрого обучения и приобретете много нового опыта.
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Навыки</div>
              <div className={styles.list}>
                <div className={styles.f12_500_gray}>Дизайн взаимодействия</div>
                <div className={styles.f12_500_gray}>Визуальный дизайн</div>
                <div className={styles.f12_500_gray}>
                  Пользовательское тестирование
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Хобби и интересы</div>
              <div className={styles.list}>
                <div className={styles.f12_500_gray}>Книги</div>
                <div className={styles.f12_500_gray}>Кино</div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Языки</div>
              <div className={styles.list}>
                <div className={styles.f12_500_gray}>Английский</div>
                <div className={styles.f12_500_gray}>Русский</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
