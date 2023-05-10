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
              <div className={styles.blockTitle}>Andrew Mallen</div>
              <div className={styles.yellowDescription}>Design Lead</div>
            </div>
            <div className={styles.links}>
              <div>+11012223344</div>
              <div>hello@andrew.com</div>
            </div>
          </div>
          <div className={styles.skillsAndInterests}>
            <div className={styles.blockTitle}>Skills</div>
            <div className={styles.list}>
              <div>Web Design</div>
              <div>UX/UI Design</div>
              <div>Usability testing</div>
              <div>Prototyping</div>
              <div>Figma</div>
              <div>After Effects</div>
              <div>Webflow</div>
              <div>Framer</div>
            </div>
          </div>
          <div className={styles.skillsAndInterests}>
            <div className={styles.blockTitle}>Interests</div>
            <div className={styles.list}>
              <div>Illustration</div>
              <div>No Code Tools</div>
              <div>3D Modelling</div>
              <div>Motion Graphics</div>
              <div>Gaming</div>
              <div>Bike Riding</div>
              <div>Reading</div>
              <div>Football</div>
            </div>
          </div>
        </aside>
        <aside className={styles.main}>
          <div className={styles.aboutBlock}>
            <div className={styles.blockTitle}>About me</div>
            <div className={styles.grayText}>
              I'm a multi-disciplinary Product Designer, specialising in no-code
              and visual development. Currently Design Lead @ Revolution. Take a
              look below!
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Experience</div>
            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.yellowDescription}>
                  Design Lead @ Revolution
                </div>
                <div className={styles.grayText12}>Sep 2019 - Present</div>
                <div className={styles.grayText}>
                  Details of your job experience goes here. Briefly showcase
                  what you did and what you have accomplished at this role. You
                  can also talk about the tools you used.
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.yellowDescription}>
                  Product Designer @ Circle
                </div>
                <div className={styles.grayText12}>Jul 2015 - Aug 2019</div>
                <div className={styles.grayText}>
                  Details of your job experience goes here. Briefly showcase
                  what you did and what you have accomplished at this role. You
                  can also talk about the tools you used.
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.yellowDescription}>
                  Product Designer @ 360degree
                </div>
                <div className={styles.grayText12}>Jan 2012 - Mar 2015</div>
                <div className={styles.grayText}>
                  Details of your job experience goes here. Briefly showcase
                  what you did and what you have accomplished at this role. You
                  can also talk about the tools you used.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Education</div>
            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.yellowDescription}>
                  University of Technology Sydney
                </div>
                <div className={styles.grayText12}>Sep 2019 - Present</div>
                <div className={styles.grayText}>
                  Here is where you can mention what you studied and brief
                  details on what you learnt. You can also mention any
                  extra-curricular activities you did relating to your degree.
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
