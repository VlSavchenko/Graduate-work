// import {
//   motion,
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
// } from "framer-motion";
import "macro-css";
import React from "react";
import "./App.scss";

function App() {
  // const { scrollYProgress } = useScroll();
  // const [scrollVal, setScrollVal] = React.useState(0);
  // const [visibility, setVisibility] = React.useState("visible");

  // // const offsetY = [0, 100];
  // // const heightSizes = ["1000px", "50px"];

  // // const height = useTransform(scrollY, offsetY, ["1000px", "50px"]);

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   if (latest > scrollVal) {
  //     setScrollVal(latest);
  //     setVisibility("visible");
  //   } else if (latest < scrollVal) {
  //     setScrollVal(latest);
  //     setVisibility("hidden");
  //   }
  // });

  return (
    <>
      <header
        id="header"
        className="header"
      >
        <div className="titleWrapper">
          <div className="title">
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
          className="mainHeaderImg"
          src="img/icons/a_man_who_uses_a_computer.svg"
          alt="Man"
        />
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
      <div className="navigation clear">
        <a href="#header">Header</a>
        <a href="#first">First</a>
        <a href="#second">Second</a>
        <a href="#third">Third</a>
      </div>
      <div className="App">
        <div
          id="first"
          className="block"
        >
          <div className="blockTitle">Как это работает?</div>
          <div className="listOfExplainCards">
            <div className="explainCard">
              <img
                src="img/icons/fill_resume_on_laptop.svg"
                alt="Male"
              />
              <p className="text">Заполняйте резюме онлайн в удобной форме</p>
            </div>
            <div className="explainCard">
              <img
                src="img/icons/share_link.svg"
                alt="Male"
              />
              <p className="text">Поделитесь ссылкой на резюме</p>
            </div>
            <div className="explainCard">
              <img
                src="img/icons/cloud_download.svg"
                alt="Male"
              />
              <p className="text">Скачайте резюме в личном кабинете</p>
            </div>
          </div>
        </div>
        <div
          id="second"
          className="block whiteWrapper pr-20"
        >
          <div className="blockTitle">
            Заполнить резюме онлайн и скачать бесплатно
          </div>
          <p className="text ml-20">
            Составление резюме – сложная задача, требующая определённых знаний.
            Соискателю необходимо подумать не только над его содержимым, но и
            над оформлением. Также нужно продумать наличие всех важных блоков.
            Упростить задачу подготовки резюме поможет составленный нами сервис.
            Его преимущества:
          </p>
          <ul className="text ml-20">
            <li>
              Абсолютно бесплатный – никаких разовых или регулярных платежей за
              пользование сервисом.
            </li>
            <li>
              Простота – воспользоваться сервисом сможет даже начинающий
              пользователь ПК, плохо разбирающийся в онлайн-инструментах.
            </li>
            <li>
              Создаёт структурированные красивые резюме – не нужно думать над
              оформлением или расположением отдельных блоков.
            </li>
            <li>
              Не требует регистрации по электронной почте или SMS – приступайте
              к работе над резюме без предварительных приготовлений.
            </li>
            <li>
              Полностью открытый функционал – пользуйтесь всеми функциями для
              составления резюме без ограничений.
            </li>
          </ul>
        </div>
        <div
          id="third"
          className="block whiteWrapper"
        >
          <div className="blockTitle">Составить резюме онлайн</div>
          <div className="fillInfoRow columnReverse">
            <div className="fillInfoContainer flex2">
              <div className="inputField">
                <label
                  className="label"
                  htmlFor="surname"
                >
                  Фамилия
                </label>
                <input
                  className="input"
                  id="surname"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div className="inputField">
                <label
                  className="label"
                  htmlFor="name"
                >
                  Имя
                </label>
                <input
                  className="input"
                  id="name"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div className="inputField">
                <label
                  className="label"
                  htmlFor="patronymic"
                >
                  Отчество
                </label>
                <input
                  className="input"
                  id="patronymic"
                  type="text"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="fillInfoContainer">
              <div className="profilePic">
                <img
                  className=""
                  width={50}
                  src="img/icons/camera.svg"
                  alt="ProfilePic"
                />
              </div>
            </div>
          </div>
          <div className="fillInfoRow">
            <div className="inputField">
              <label
                className="label"
                htmlFor="position"
              >
                Должность
              </label>
              <input
                className="input"
                id="position"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="inputField">
              <label
                className="label"
                htmlFor="salary"
              >
                Желаемая зарплата
              </label>
              <input
                className="input"
                id="salary"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="fillInfoRow1">
            <div className="inputField">
              <label
                className="label"
                htmlFor="busy"
              >
                Занятость
              </label>

              <select
                className="input"
                id="busy"
              >
                <option
                  selected
                  value="Полная"
                >
                  Полная
                </option>
                <option value="Частичная">Частичная</option>
                <option value="Проектная">Проектная</option>
                <option value="Стажировка">Стажировка</option>
                <option value="Волонтёрство">Волонтёрство</option>
              </select>
            </div>
            <div className="inputField">
              <label
                className="label"
                htmlFor="schedule"
              >
                График работы
              </label>
              <input
                className="input"
                id="schedule"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
      <footer style={{ height: "400px" }}></footer>
    </>
  );
}

export default App;
