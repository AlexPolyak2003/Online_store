import React, { Component } from "react";
import Slider from "react-slick";
import car from "../../images/car.png";
import styles from "./slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={styles.block}>
        {/* <h2> Responsive </h2> */}
        <Slider className={styles.slider} {...settings}>
          <div className={styles.report}>
            <h3>Отзыв 1</h3>
          </div>
          <div className={styles.report}>
            <h3>Отзыв 2</h3>
          </div>
          <div className={styles.report}>
            <h3>Отзыв 3</h3>
          </div>
          <div className={styles.report}>
            <h3>Отзыв 4</h3>
          </div>
          <div className={styles.report}>
            <h3>Отзыв 5</h3>
          </div>
          <div className={styles.report}>
            <h3>Отзыв 6</h3>
          </div>
          <div className={styles.report}>
            <h3>Отзыв 7</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
