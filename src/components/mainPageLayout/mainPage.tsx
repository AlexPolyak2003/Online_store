import React from "react";
import Head from "../header/head";
import styles from "./mainPage.module.scss";
import Logo from "../../icons/logo.svg";
import Carpet from "../../icons/carpet.svg";

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Head />
        <div className={styles.mainLayout}>
          <div className={styles.topContent}>
            <div className={styles.logo}>
              <img src={Logo} alt="" />
              <h1>EVARUGS</h1>
            </div>

            <div className={styles.topRight}>
              <p>отзывы</p>
              <p>что это?</p>
              <p>контакты</p>
            </div>
          </div>

          <div className={styles.innoCarpets}>
            <div className={styles.left_carpet}>
              <h1>
                Инновационные коврики <br /> для автомобиля
              </h1>
              <p>в вашем городе</p>
              <div className={styles.btn}>
                <button>Заказать</button>
              </div>
            </div>
            <div className={styles.right_carpet}>
              <img src={Carpet} alt="" />
            </div>
          </div>
          <div className={styles.eva}>
            <h1>
              Что такое <code>EVA</code> коврики?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
