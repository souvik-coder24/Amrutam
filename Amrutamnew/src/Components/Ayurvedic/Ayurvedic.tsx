import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Ayurvedic.module.css';

const data = [
  { id: 1, header: 'Make Appointment', content: 'You must make an appointment in advance, to choose the service and date.' },
  { id: 2, header: 'Consultations', content: 'The next stage involves a thorough consultation with an Ayurveda practitioner.' },
  { id: 3, header: 'Treatment Planning', content: 'The Ayurvedic practitioner creates a personalized treatment plan for you' },
  { id: 4, header: 'Maintenance', content: 'These visits allow for assessment of progress, adjustments to the treatment.' },
];

const Ayurvedic = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1.04,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.slickGoTo(index);
  };

  let sliderRef = null;

  return (
    <div className={styles.ayurvedic}>
      <div className={styles.ayurvedicContent}>
        <div className={styles.headerSection}>
          <p className={styles.header}>Our Ayurvedic Approach</p>
          <p className={styles.description}>
            At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.
          </p>
        </div>

        <div className={styles.slider}>
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {data.map((item) => (
              <div key={item.id} className={styles.box}>
                <div className={styles.numberSection}>
                  <span className={styles.number}>{item.id}</span>
                </div>
                <div className={styles.content}>
                  <span className={styles.contentHeader}>{item.header}</span>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className={styles.customDots}>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        <div className={styles.desktopBoxes}>
          {data.map((item) => (
            <div key={item.id} className={styles.box}>
              <div className={styles.numberSection}>
                <span className={styles.number}>{item.id}</span>
              </div>
              <div className={styles.content}>
                <span className={styles.contentHeader}>{item.header}</span>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ayurvedic;
