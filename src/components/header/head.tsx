import React from "react";
import styles from "./head.module.scss";
import phone from "../../icons/phone.svg";
import location from "../../icons/location.svg";
import instagram from "../../icons/Insta.svg";
import ModalLog from "../modalLogin/modalLogin";
import useLog from "../modalLogin/useLog";
import useReg from "../modalReg/useReg";
import ModalReg from "../modalReg/modalReg";

const Head = () => {
  const { isOpen, toggle } = useLog();
  const { isOpen_1, toggle_1 } = useReg();
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
              <div className={styles.auth}>
                <div className={styles.login_position}>
                  <button onClick={toggle} className={styles.login_btn}>
                    Вход
                  </button>
                  <ModalLog isOpen={isOpen} toggle={toggle}>
                    <div className={styles.log_auth}>
                      <div className={styles.entrance}>
                        <h3>Вход</h3>
                      </div>

                      <div className={styles.inputs}>
                        <input
                          className={styles.log_inp}
                          placeholder="Логин"
                          type="text"
                        />
                        <input
                          className={styles.pass_inp}
                          placeholder="Пароль"
                          type="text"
                        />
                      </div>
                      {/* <textarea
                        className={styles.message}
                        placeholder="Ваше сообщение (марка автомобиля, цвет ковриков, номер телефона)"
                      ></textarea> */}

                      <button className={styles.send_btn}>ОТПРАВИТЬ</button>
                    </div>
                  </ModalLog>
                </div>
                <div className={styles.registration_position}>
                  <button
                    onClick={toggle_1}
                    className={styles.registration_btn}
                  >
                    Регистрация
                  </button>

                  <ModalReg isOpen={isOpen_1} toggle={toggle_1}>
                    <div className={styles.register}>
                      <h3>Регистрация</h3>

                      <input
                        className={styles.name}
                        placeholder="Ваше имя"
                        type="text"
                      />

                      <input
                        className={styles.surname}
                        placeholder="Ваша фамилия"
                        type="text"
                      />
                      <input
                        className={styles.email}
                        placeholder="Ваш e-mail"
                        type="text"
                      />

                      <input
                        className={styles.log_inp}
                        placeholder="Логин"
                        type="text"
                      />
                      <input
                        className={styles.pass_inp}
                        placeholder="Пароль"
                        type="text"
                      />
                      {/* <textarea
                        className={styles.message}
                        placeholder="Ваше сообщение (марка автомобиля, цвет ковриков, номер телефона)"
                      ></textarea> */}

                      <button className={styles.send_btn}>ОТПРАВИТЬ</button>
                    </div>
                  </ModalReg>
                </div>
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
