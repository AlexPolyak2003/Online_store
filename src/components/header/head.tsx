import React from "react";
import styles from "./head.module.scss";
import phone from "../../icons/phone.svg";
import location from "../../icons/location.svg";
import instagram from "../../icons/Insta.svg";

const Head = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.box_header}>
            <div className={styles.left_content}>
              <img src={phone} alt="phone" />
              <h1> +375 29 292-29-29 (VEL)</h1>
              <h2> +375 33 333-33-33 (МТС)</h2>
            </div>
            <div className={styles.middle_content}>
              <img src={location} alt="" />
              <h1>ваш город</h1>
            </div>

            <div className={styles.right_content}>
              <div className={styles.login_position}>
                <button className={styles.login}>Вход</button>
              </div>
              <div className={styles.registration_position}>
                <button className={styles.registration}>Регистрация</button>
              </div>

              <div className={styles.visit_page}>
                <img src={instagram} alt="" />
                <h1>
                  посетите нашу <br /> страницу
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
