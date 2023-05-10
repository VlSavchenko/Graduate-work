import React from "react";
import styles from "./CV3.module.scss";

export default function CV3() {
  return (
    <div className={styles.CVContainer}>
      <div className={styles.cv3}>
        <div className={styles.nameAndPosition}>
          <div className={styles.name}>Nina Patel</div>
          <div className={styles.position}>UX/UI Designer</div>
        </div>
        <div className={styles.asides}>
          <aside className={styles.main}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Education</div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.f14_700_blue}>
                    Bsc(HCI) @ University of Design
                  </div>
                  <div className={styles.f10_400_black}>
                    JUNE 2018- JUNE 2022
                  </div>
                  <div className={styles.f12_400_gray}></div>
                </div>
                <div className={styles.item}>
                  <div className={styles.f14_700_blue}>
                    UX Design Bootcamp @ School of Design
                  </div>
                  <div className={styles.f10_400_black}>
                    JUNE 2018- JUNE 2022
                  </div>
                  <div className={styles.f12_400_gray}></div>
                </div>
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.blockTitle}>Work Experience</div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.f14_700_blue}>
                    UX Design Intern @ ABC Company
                  </div>
                  <div className={styles.f10_400_black}>JAN 2023 - PRESENT</div>
                  <div className={styles.f12_400_gray}>
                    Conducted user research and analyzed data to identify design
                    opportunities and inform design decisions. Collaborated with
                    cross-functional teams to create wireframes, prototypes, and
                    high-fidelity mockups.
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.f14_700_blue}>
                    UX Design Intern @ ABC Company
                  </div>
                  <div className={styles.f10_400_black}>JAN 2023 - PRESENT</div>
                  <div className={styles.f12_400_gray}>
                    Conducted user research and analyzed data to identify design
                    opportunities and inform design decisions. Collaborated with
                    cross-functional teams to create wireframes, prototypes, and
                    high-fidelity mockups.
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.f14_700_blue}>
                    UX Design Intern @ ABC Company
                  </div>
                  <div className={styles.f10_400_black}>JAN 2023 - PRESENT</div>
                  <div className={styles.f12_400_gray}>
                    Conducted user research and analyzed data to identify design
                    opportunities and inform design decisions. Collaborated with
                    cross-functional teams to create wireframes, prototypes, and
                    high-fidelity mockups.
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <aside className={styles.sidebar}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Contact</div>
              <div className={styles.list}>
                <div className={styles.f14_500_black}>ninapatel.design</div>
                <div className={styles.f14_500_black}>ninapatel@gmail.com</div>
                <div className={styles.f14_500_black}>+91 432 2222 322</div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Skills</div>
              <div className={styles.list}>
                <div className={styles.f12_500_gray}>User Research</div>
                <div className={styles.f12_500_gray}>Interaction Design</div>
                <div className={styles.f12_500_gray}>Visual Design</div>
                <div className={styles.f12_500_gray}>
                  Communication and Collaboration
                </div>
                <div className={styles.f12_500_gray}>User Testing</div>
                <div className={styles.f12_500_gray}>
                  Adaptability and Continuous Learning
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Interests</div>
              <div className={styles.list}>
                <div className={styles.f12_500_gray}>Books</div>
                <div className={styles.f12_500_gray}>Gaming</div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Languages</div>
              <div className={styles.list}>
                <div className={styles.f12_500_gray}>English</div>
                <div className={styles.f12_500_gray}>Russian</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
