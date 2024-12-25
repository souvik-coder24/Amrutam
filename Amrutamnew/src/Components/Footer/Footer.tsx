import styles from './Footer.module.css';
import social1 from '../../assets/images/Vector (2).png';
import social2 from '../../assets/images/Vector (3).png';
import social3 from '../../assets/images/Vector.png';
import social4 from '../../assets/images/image 74.png';
import { SlSocialLinkedin } from 'react-icons/sl';
import { CiInstagram } from 'react-icons/ci';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <p className={styles.header}>Get in touch</p>
        <div className={styles.contentLeft}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className={styles.logo}>
          <img src={social1} alt="social" />
          <CiInstagram />
          <SlSocialLinkedin />
          <img src={social2} alt="social" />
          <img src={social3} alt="social" />
          <img src={social4} alt="social" />
        </div>
      </div>
      <div className={styles.middle}>
        <p className={styles.header}></p>
        <div className={styles.contentMiddle}>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.header}></p>
        <div className={styles.contentRight}>
          <input type="text" placeholder="Your Email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;