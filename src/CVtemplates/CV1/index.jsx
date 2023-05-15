import React from "react";
import styles from "./CV1.module.scss";

export default function CV1() {
  return (
    <div className={styles.CVContainer}>
      <div className={styles.cv1}>
        <aside className={styles.sidebar}>
          <div className={styles.nameAndPosition}>
            <p className={styles.name}>Эндрю Маллен</p>
            <p className={styles.position}>Фронтенд разработчик</p>
          </div>
          <div className={styles.personalInfo}>
            <div className={styles.info}>+11012223344</div>
            <div className={styles.info}>hello@andrew.com</div>
          </div>
          <div className={styles.personalInfo}>
            <div className={styles.blockTitle}>Навыки</div>
            <ul className={styles.list}>
              <li>HTML and CSS</li>
              <li>
                Языки программирования: Javascript, Typescript, Python, Java
              </li>
              <li>
                Фреймворки/Библиотеки: Django, React, Next, Bootstrap,
                TailwindCSS, etc
              </li>
              <li>
                Понимание дизайна пользовательского интерфейса; Визуальной
                иерархии, системы проектирования и т.д
              </li>
            </ul>
          </div>
          <div className={styles.personalInfo}>
            <div className={styles.blockTitle}>Хобби и интересы</div>
            <ul className={styles.list}>
              <li>Фильмы</li>
              <li>Книги</li>
            </ul>
          </div>
          <div className={styles.personalInfo}>
            <div className={styles.blockTitle}>Языки</div>
            <ul className={styles.list}>
              <li>Английский</li>
              <li>Русский</li>
            </ul>
          </div>
        </aside>
        <aside className={styles.main}>
          <div className={styles.aboutBlock}>
            <div>
              <div className={styles.blockTitle}>Обо мне</div>
              <hr />
            </div>
            <div className={styles.aboutText}>
              У меня есть опыт работы в области информационных технологий, с
              акцентом на разработку интерфейсов и дизайн пользовательского
              интерфейса. Я отношусь к тому типу людей, которые хватаются за
              любую возможность узнать что-то новое. Вот почему мне нравятся
              сложные задачи. С этого момента я испытываю давление, требующее
              быстрого обучения и приобретете много нового опыта.
            </div>
          </div>
          <div className={styles.block}>
            <div>
              <div className={styles.blockTitle}>Образование</div>
              <hr />
            </div>
            <div className={styles.blockContent}>
              <div className={styles.time}>2015 - 2019</div>
              <div className="d-flex flex-row">
                <img
                  className={styles.dot}
                  src="img/icons/dotForCV.svg"
                  alt="Dot"
                />
                <div className={styles.text}>
                  <div className={styles.f14_400}>
                    Информатика, Национальный университет Пембангунан ”Ветеран”
                    Джокьякарта
                  </div>
                  <div className={styles.f12_600}>
                    Бакалавр компьютерных наук, Искусственный интеллект
                  </div>
                  <div className={styles.f12_400_grey}>
                    Я окончил школу в июле 2019 года со средним баллом 3,63.
                    Один из лауреатов премии "Лучший выпускник университета того
                    времени". В своей диссертации я изучал, как естественный
                    язык Обработка (NLP) была использована в Telegram-боте. Для
                    НЛП подходя к методу, я использовал нейронную сеть (глубокое
                    обучение) и интеллектуальный анализ текста.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.blockContent}>
              <div className={styles.time}>2015 - 2019</div>
              <div className="d-flex flex-row">
                <img
                  className={styles.dot}
                  src="img/icons/dotForCV.svg"
                  alt="Dot"
                />
                <div className={styles.text}>
                  <div className={styles.f14_400}>
                    Информатика, Национальный университет Пембангунан ”Ветеран”
                    Джокьякарта
                  </div>
                  <div className={styles.f12_600}>
                    Бакалавр компьютерных наук, Искусственный интеллект
                  </div>
                  {/* <div className={styles.f12_400_grey}>
                    I graduated in July 2019 with a GPA of 3.63. One of the
                    award recipients for the best graduate of the university at
                    the time. In my thesis, I looked into how Natural Language
                    Processing (NLP) was used in Telegram Bot. For the NLP
                    approach method, I used Neural Network (Deep Learning) and
                    Text Mining.
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <div>
              <div className={styles.blockTitle}>Опыт работы</div>
              <hr />
            </div>
            <div className={styles.blockContent}>
              <div className={styles.time}>2019 - Настоящее время</div>
              <div className="d-flex flex-row">
                <img
                  className={styles.dot}
                  src="img/icons/dotForCV.svg"
                  alt="Dot"
                />
                <div className={styles.text}>
                  <div className={styles.f14_600}>Upwork</div>
                  <div className={styles.f12_400}>Фронтенд разработчик</div>
                  <div className={styles.f12_400_grey}>
                    Upwork - это американская платформа для фриланса, где
                    предприятия и отдельные люди объединяются для того, чтобы
                    вести бизнес. Я в настоящее время принимаются удаленные или
                    внештатные работы по веб-разработке и дизайну
                    пользовательского интерфейса с этой платформы.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.blockContent}>
              <div className={styles.time}>Октябрь 2020 - Август 2021</div>
              <div className="d-flex flex-row">
                <img
                  className={styles.dot}
                  src="img/icons/dotForCV.svg"
                  alt="Dot"
                />
                <div className={styles.text}>
                  <div className={styles.f14_600}>Currinda</div>
                  <div className={styles.f12_400}>UI Engineer</div>
                  <div className={styles.f12_400_grey}>
                    Я являюсь членом команды инженеров вместе с тремя другими
                    люди. Я отвечаю за создание дизайна интерфейса, который был
                    бы одновременно удобен для пользователя и соответствовал
                    принципам компании марка. Я также помогаю команде с
                    разработкой интерфейса, особенно в создании систем
                    проектирования и компонентов пользовательского интерфейса с
                    помощью React.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.blockContent}>
              <div className={styles.time}>Май 2019 - Ноябрь 2019</div>
              <div className="d-flex flex-row">
                <img
                  className={styles.dot}
                  src="img/icons/dotForCV.svg"
                  alt="Dot"
                />
                <div className={styles.text}>
                  <div className={styles.f14_600}>Bubays</div>
                  <div className={styles.f12_400}>Веб разработчик</div>
                  <div className={styles.f12_400_grey}>
                    Я отвечаю за полноценную разработку и обслуживание веб-сайта
                    компании. Работа включает в себя создание и поддержку
                    веб-сайта с нуля. Кроме того, я являюсь единственный
                    веб-разработчик в этой компании.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
