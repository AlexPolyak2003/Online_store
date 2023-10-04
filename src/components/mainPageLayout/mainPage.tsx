import React from "react";
import Head from "../header/head";
import styles from "./mainPage.module.scss";
import Logo from "../../icons/logo.svg";
import Carpet from "../../icons/carpet.svg";
import Material from "../../icons/material.svg";
import Differences from "../../icons/differences.svg";
import Color from "../../icons/color.svg";
import Footer from "../footer/footer";
import SimpleCarousel from "../slider/slider";

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

              <button className={styles.btn}>Заказать</button>
            </div>
            <div className={styles.right_carpet}>
              <img src={Carpet} alt="ковер" />
            </div>
          </div>
          <div className={styles.eva}>
            <h1>
              Что такое <code>EVA</code> коврики?
            </h1>
          </div>

          <div className={styles.containers}>
            <div className={styles.container_1}>
              <img src={Material} alt="материал" />
              <div className={styles.text}>
                <h1>Материал</h1>
                <p>
                  Коврики EVA всесезонные и отличаются уникальной поверхностью
                  материала с ячейками ромбовидной формы. Из-за чего вода не
                  проливается при изъятии ковра и не плещется при езде. Коврики
                  воду не пропускают.
                </p>
              </div>
            </div>
            <div className={styles.container_2}>
              <img src={Differences} alt="различия" />
              <div className={styles.text}>
                <h1>Отличия</h1>
                <p>
                  Резиновые коврики загибаются и лезут на педали. EVA коврики
                  такого не допустят! Специальные липучки держат его в одном
                  положении. При желании, для водителя устанавливается подпятник
                  из рельефного алюминия.
                </p>
              </div>
            </div>
            <div className={styles.container_3}>
              <img src={Color} alt="цвет" />
              <div className={styles.text}>
                <h1>Расцветка</h1>
                <p>
                  Автомобильные коврики EVA можно заказать и в индивидуальных
                  размерах и в разных цветах, которые комбинируется на выбор
                  покупателя с такими же цветами окантовочной полипропиленовой
                  ременной ленты.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.purple_line}>
          <SimpleCarousel />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
