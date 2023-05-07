// import {
//   motion,
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
// } from "framer-motion";
import "macro-css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Description from "./components/Description";
import Header from "./components/Header";
import ListOfExplainCards from "./components/ListOfExplainCards";
import Navigation from "./components/Navigation";

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
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Header />}
        ></Route>
      </Routes>

      <div className="App">
        <Routes>
          <Route
            path="/about"
            element={
              <>
                <div
                  id="first"
                  className="block mt-5em"
                >
                  <div className="blockTitle">Как это работает?</div>
                  <ListOfExplainCards />
                </div>
                <div className="block whiteWrapper pr-20">
                  <div className="blockTitle">
                    Заполнить резюме онлайн и скачать бесплатно
                  </div>
                  <Description />
                </div>
              </>
            }
          ></Route>
        </Routes>
        {/* <div
          id="first"
          className="block"
        >
          <div className="blockTitle">Как это работает?</div>
          <ListOfExplainCards />
        </div>
        <div className="block whiteWrapper pr-20">
          <div className="blockTitle">
            Заполнить резюме онлайн и скачать бесплатно
          </div>
          <Description />
        </div> */}

        <div
          id="third"
          className="block whiteWrapper mt-5em"
        >
          <div className="blockTitle">Составить резюме онлайн</div>
          <div className="contentDescription">Основная информация</div>
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
              <div className="profilePic d-flex justify-center">
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
          <div className="fillInfoRow">
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
              <select
                className="input"
                id="schedule"
              >
                <option
                  selected
                  value="Полный день"
                >
                  Полный день
                </option>

                <option value="Сменный график">Сменный график</option>
                <option value="Гибкий график">Гибкий график</option>
                <option value="Удаленная работа">Удаленная работа</option>
              </select>
            </div>
          </div>
          <div className="fillInfoRow">
            <div className="inputField">
              <label
                className="label"
                htmlFor="phone"
              >
                Телефон
              </label>
              <input
                className="input"
                id="phone"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="inputField">
              <label
                className="label"
                htmlFor="email"
              >
                Электронная почта
              </label>
              <input
                className="input"
                id="email"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="block whiteWrapper">
          <div className="contentDescription">Личная информация</div>
          <div className="fillInfoRow">
            <div className="inputField">
              <label
                className="label"
                htmlFor="city"
              >
                Город проживания
              </label>
              <input
                className="input"
                id="city"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="fillInfoRow">
            <div className="inputField">
              <label
                className="label"
                htmlFor="nationality"
              >
                Гражданство
              </label>
              <input
                className="input"
                id="nationality"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="fillInfoRow">
            <div className="inputField">
              <label
                className="label"
                htmlFor="birthday"
              >
                Дата рождения
              </label>
              <input
                className="input"
                id="birthday"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="inputField">
              <label
                className="label"
                htmlFor="sex"
              >
                Пол
              </label>
              <select
                className="input"
                id="schedule"
              >
                <option
                  selected
                  value="Мужской"
                >
                  Мужской
                </option>
                <option value="Женский">Женский</option>
              </select>
            </div>
          </div>
          <div className="fillInfoRow">
            <div className="inputField">
              <label
                className="label"
                htmlFor="family"
              >
                Семейное положение
              </label>
              <select
                className="input"
                id="family"
              >
                <option
                  selected
                  value="Холост"
                >
                  Холост
                </option>
                <option value="Женат">Женат</option>
                <option value="Не замужем">Не замужем</option>
                <option value="Замужем">Замужем</option>
              </select>
            </div>
            <div className="inputField">
              <label
                className="label"
                htmlFor="children"
              >
                Есть дети
              </label>
              <input
                className="checkbox"
                type="checkbox"
                id="children"
              />
            </div>
          </div>
          <div className="fillInfoRow">
            <div className="inputField">
              <label
                className="label"
                htmlFor="schooling"
              >
                Образование
              </label>
              <select
                className="input"
                id="schooling"
              >
                <option
                  selected
                  value="Среднее"
                >
                  Среднее
                </option>
                <option value="Среднее неполное">Среднее неполное</option>
                <option value="Среднее профессиональное">
                  Среднее профессиональное
                </option>
                <option value="Высшее">Высшее</option>
                <option value="Высшее неполное">Высшее неполное</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ height: "400px" }}></footer>
    </>
  );
}

export default App;
