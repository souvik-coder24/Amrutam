import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styles from './Customer.module.css';
import star from '../../assets/images/emojione_star.png';

const Customer = () => {
  const data = [
    { id: 1, category: 'Consulted for Skin', name: 'Sophie Moore', city: 'Chennai', date: '2024-02-17', headline: '"One of a kind service"', text: 'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.', rating: 5 },
    { id: 2, category: 'Consulted for hair', name: 'Sophie Moore', city: 'Mumbai', date: '2024-02-17', headline: '"One of a kind service"', text: 'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.', rating: 4 },
    { id: 3, category: 'Consulted for hair', name: 'Sophie Moore', city: 'Kolkata', date: '2024-02-17', headline: '"One of a kind service"', text: 'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.', rating: 4 },
  ];

  const categoryColors = ['rgba(236, 231, 255, 1)', 'rgba(236, 254, 231, 1)', 'rgba(236, 254, 231, 1)', 'rgba(236, 231, 255, 1)', 'rgba(236, 231, 255, 1)'];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className={styles.customer}>
      <span className={styles.header}>Stories from our valued customers!</span>
      {isMobile ? (
        <Slider {...settings} className={styles.content}>
          {data.map((item, index) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.category} style={{ backgroundColor: categoryColors[index] }}>
                <div className={styles.categoryText}>{item.category}</div>
              </div>
              <div className={styles.review}>
                <div className={styles.title}>
                  <div className={styles.left}>
                    <div className={styles.image}></div>
                    <div className={styles.personal}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.city}>{item.city}</span>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <span className={styles.date}>{item.date}</span>
                  </div>
                </div>
                <div className={styles.details}>
                  <div className={styles.starSection}>
                    {[...Array(item.rating)].map((_, i) => (
                      <img key={i} src={star} alt="star" />
                    ))}
                  </div>
                  <div className={styles.texts}>
                    <span className={styles.headline}>{item.headline}</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className={styles.content}>
          {data.map((item, index) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.category} style={{ backgroundColor: categoryColors[index] }}>
                <div className={styles.categoryText}>{item.category}</div>
              </div>
              <div className={styles.review}>
                <div className={styles.title}>
                  <div className={styles.left}>
                    <div className={styles.image}></div>
                    <div className={styles.personal}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.city}>{item.city}</span>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <span className={styles.date}>{item.date}</span>
                  </div>
                </div>
                <div className={styles.details}>
                  <div className={styles.starSection}>
                    {[...Array(item.rating)].map((_, i) => (
                      <img key={i} src={star} alt="star" />
                    ))}
                  </div>
                  <div className={styles.texts}>
                    <span className={styles.headline}>{item.headline}</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Customer;
