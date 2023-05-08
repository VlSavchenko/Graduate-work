import React from "react";
import styles from "./CV1.module.scss";

export default function CV1() {
  return (
    <div className={styles.CVContainer}>
      <div className={styles.cv1}>
        <aside className={styles.sidebar}>
          <div className={styles.nameAndPosition}>
            <p className={styles.name}>Hani Husamuddin</p>
            <p className={styles.position}>Frontend Developer</p>
          </div>
          <div className={styles.personalInfo}>
            <div className={styles.info}>Surakarta, December 2, 1994</div>
            <div className={styles.info}>+62 822 2045 4652</div>
            <div className={styles.info}>hani.husam@gmail.com</div>
            <div className={styles.info}>Yogyakarta, Indonesia</div>
          </div>
          <div className={styles.personalInfo}>
            <div className={styles.blockTitle}>Skills</div>
            <ul className={styles.list}>
              <li>HTML and CSS</li>
              <li>Scripting language: Javascript, Typescript, Python, Java</li>
              <li>
                Framework/Library: Django, React, Next, Bootstrap, TailwindCSS,
                etc
              </li>
              <li>
                Understanding UI Design; Visual Hierarchy, Design System, etc
              </li>
            </ul>
          </div>
          <div className={styles.personalInfo}>
            <div className={styles.blockTitle}>Hobbies</div>
            <ul className={styles.list}>
              <li>Apple device</li>
              <li>Movie</li>
              <li>Book</li>
            </ul>
          </div>
        </aside>
        <aside className={styles.main}>
          <div className={styles.aboutBlock}>
            <div>
              <div className={styles.blockTitle}>About</div>
              <hr />
            </div>
            <div className={styles.aboutText}>
              I have a background in information technology, with a focus on
              frontend development and UI design. I am the type of person who
              seizes every opportunity to learn something new. That is why I
              enjoy challenges. From there, I'm under pressure to learn quickly
              and gain a lot of new experience.
            </div>
          </div>
          <div className={styles.block}>
            <div>
              <div className={styles.blockTitle}>Education</div>
              <hr />
            </div>
            <div className={styles.blockContent}>
              <div className={styles.time}>2015 - 2019</div>
              <div className="d-flex flex-row">
                <img
                  className={styles.dot}
                  src="/img/icons/dotForCV.svg"
                  alt="Dot"
                />
                <div className={styles.text}>
                  <div className={styles.f14_400}>
                    Informtics, Universitas Pembangunan Nasional ”Veteran”
                    Yogyakarta
                  </div>
                  <div className={styles.f12_600}>
                    Bachelor of Computer Science, Artificial Intelligence
                  </div>
                  <div className={styles.f12_400_grey}>
                    I graduated in July 2019 with a GPA of 3.63. One of the
                    award recipients for the best graduate of the university at
                    the time. In my thesis, I looked into how Natural Language
                    Processing (NLP) was used in Telegram Bot. For the NLP
                    approach method, I used Neural Network (Deep Learning) and
                    Text Mining.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.blockContent}>
              <div className={styles.time}>2015 - 2019</div>
              <div className="d-flex flex-row">
                <img
                  className={styles.dot}
                  src="/img/icons/dotForCV.svg"
                  alt="Dot"
                />
                <div className={styles.text}>
                  <div className={styles.f14_400}>
                    Informtics, Universitas Pembangunan Nasional ”Veteran”
                    Yogyakarta
                  </div>
                  <div className={styles.f12_600}>
                    Bachelor of Computer Science, Artificial Intelligence
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
              <div className={styles.blockTitle}>Experience</div>
              <hr />
            </div>
            <div className={styles.blockContent}>
              <div className={styles.time}>2019 - Present</div>
              <div className="d-flex flex-row">
                <img
                  className={styles.dot}
                  src="/img/icons/dotForCV.svg"
                  alt="Dot"
                />
                <div className={styles.text}>
                  <div className={styles.f14_600}>Upwork</div>
                  <div className={styles.f12_400}>Frontend Developer</div>
                  <div className={styles.f12_400_grey}>
                    Upwork is an American freelancing platform where enterprises
                    and individuals connect in order to conduct business. I am
                    currently accepting remote or freelance Web Development and
                    UI Design work from this platform.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.blockContent}>
              <div className={styles.time}>Oct 2020 - Aug 2021</div>
              <div className="d-flex flex-row">
                <img
                  className={styles.dot}
                  src="/img/icons/dotForCV.svg"
                  alt="Dot"
                />
                <div className={styles.text}>
                  <div className={styles.f14_600}>Currinda Pty. Ltd.</div>
                  <div className={styles.f12_400}>UI Engineer</div>
                  <div className={styles.f12_400_grey}>
                    I am a member of the Engineer Team, along with three other
                    people. I am in charge of creating an interface design that
                    is both user-friendly and consistent with the company's
                    brand. I also assist the team with frontend development,
                    particularly in the creation of design systems and UI
                    components with React.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.blockContent}>
              <div className={styles.time}>May 2019 - Nov 2019</div>
              <div className="d-flex flex-row">
                <img
                  className={styles.dot}
                  src="/img/icons/dotForCV.svg"
                  alt="Dot"
                />
                <div className={styles.text}>
                  <div className={styles.f14_600}>Bubays Pte. Ltd.</div>
                  <div className={styles.f12_400}>Web Developer</div>
                  <div className={styles.f12_400_grey}>
                    I am in charge of the company website's full-stack
                    development and maintenance. The job entails creating and
                    maintaining a website from the ground up. In addition, I am
                    the only Web Developer in this company.
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
