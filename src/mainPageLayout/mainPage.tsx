import React from "react";
import styles from "./mainPage.module.scss";
import phone from "../icons/phone.svg";
import location from "../icons/location.svg";
import "../Roboto/Roboto-Black.ttf";

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.box_header}>
            <div className={styles.left_content}>
              <img src={phone} alt="phone" />
              <h1> +375 29 292-29-29 (VEL)</h1>
              <h1> +375 33 333-33-33 (МТС)</h1>
            </div>
            <div className={styles.middle_content}>
              <img src={location} alt="" />
              <h1>ваш город</h1>
            </div>
            <div className={styles.right_content}>
              <img src={location} alt="" />
              <h1>посетите нашу страницу</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
