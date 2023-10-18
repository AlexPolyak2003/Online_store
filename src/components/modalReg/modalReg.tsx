import React, { ReactNode } from "react";
import styles from "../modalReg/modalReg.module.scss";
import btn from "../../icons/close_button.png";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function ModalReg(props: ModalType) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    props.toggle();
  };

  return (
    <>
      {props.isOpen && (
        <div onClick={props.toggle} className={styles.modal}>
          <div className={styles.wrapper}>
            <div
              onClick={(e) => e.stopPropagation()}
              className={styles.content}
            >
              {props.children}
              <button onClick={handleClick} className={styles.close_button}>
                <img src={btn} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
