import React from "react";
import styles from "./footer.module.scss";
import Footer_icon from "../../icons/podval_icon.svg";
import Big_footer_icon from "../../icons/big_podval_icon.svg";
import Pink_insta from "../../icons/pink_insta.svg";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={Footer_icon} alt="футер иконка маленькая" />
        <div className={styles.podval_text}>
          <div className={styles.social_media}>
            <h1>Мы в социальных сетях</h1>
            <img src={Pink_insta} alt="insta" />
          </div>
          <div className={styles.contact_phones}>
            <h1>Контактные телефоны</h1>
            <p>
              +375 29 292-29-29 (VEL) <br /> +375 33 333-33-33 (МТС)
            </p>
          </div>
          <div className={styles.about_us}>
            <h1>О нас</h1>
            <p>
              Индивидуальное изготовление <br /> EVA ковриков для вашего <br />
              автомобиля
            </p>
          </div>
        </div>

        <img
          className={styles.big_icon}
          src={Big_footer_icon}
          alt="футер иконка большая"
        />
      </div>
    </div>
  );
};

export default Footer;
