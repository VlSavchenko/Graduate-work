import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header
      id="header"
      className={`${styles.header} ${styles.backgroundHeader}`}
    >
      <div className={styles.back}>
        <div>
          Начните оттуда, где вы сейчас находитесь. Используйте то, что у вас
          есть и делайте все, что можете
        </div>
        <div>
          <span>Определенность цели</span> - отправная точка всех достижений
        </div>

        <div>
          Говорят, что время всё изменяет, а в действительности
          <span> перемены – дело рук человеческих</span>
        </div>
        <div>
          Секрет перемен состоит в том, чтобы
          <span> сосредоточиться на создании нового</span>, а не на борьбе со
          старым
        </div>
        <div>
          Если ты хочешь перемену в будущем, <span> стань</span> этой
          <span> переменой</span> в настоящем
        </div>
        <div>
          <span>Впереди</span> нас ждут гораздо лучшие вещи, чем те, что мы
          оставляем позади
        </div>
        <div>
          Изменения – закон жизни. И те, кто <span>смотрит</span> только в
          прошлое или только <span>на настоящее</span>, бесспорно, пропустят
          будущее
        </div>
        <div>
          Многие люди <span>терпят неудачу</span> только
          <span> потому, что сдаются</span> в двух шагах от успеха
        </div>
        <div>
          Всегда помните о том, что ваша <span>решимость преуспеть</span> важнее
          всего остального
        </div>
        <div>
          Стоит только поверить, что вы можете – и
          <span> вы уже на полпути</span> к цели
        </div>
        <div>
          Чтобы <span>дойти до цели</span>, человеку нужно только одно. Идти
        </div>
        <div>
          <span>Поверьте, что сможете</span>, и полпути уже пройдено
        </div>
        <div>
          Гонясь за недостижимым, <span>мы совершаем невозможное</span>
        </div>
        <div>Настоящая ответственность бывает только личной</div>
        <div>Идите уверенно по направлению к мечте</div>
      </div>

      {/* <div className={styles.blur}> */}
      <div className={styles.blockInHeader}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <div>Возможности не приходят сами</div>
            <div>
              Вы <span>создаете</span> их
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}
