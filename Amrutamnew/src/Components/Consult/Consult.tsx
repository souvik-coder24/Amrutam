import styles from './Consult.module.css';
import image1 from '../../assets/images/Rectangle 4144.png';
import image2 from '../../assets/images/Rectangle 4146.png';
import image3 from '../../assets/images/Rectangle 4148.png';

const Consult= () => {
  return (
    <div className={styles.consult}>
      <div className={styles.header}>What sets Ayurvedic consultations apart?</div>
      <div className={styles.content}>
        <div className={`${styles.box} ${styles.boxLarge}`}>
          <div className={styles.largeContent}>
            <p className={styles.largeHeader}>
              स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।
            </p>
            <p>
              [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person
              and to cure the disease of a diseased person. ]
            </p>
          </div>
        </div>

        <img src={image1} alt="Image 1" className={styles.secondBox} />

        <div className={`${styles.box} ${styles.boxSmall}`}>
          <div className={styles.smallContent}>
            <p className={styles.smallHeader}>Precise Diagnosis</p>
            <p className={styles.smallText}>
              Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas,
              guiding you with precise diagnosis and treatment.
            </p>
          </div>
        </div>

        <div className={`${styles.box} ${styles.boxSmall}`}>
          <div className={styles.smallContent}>
            <p className={styles.smallHeader}>Zero side-effects</p>
            <p className={styles.smallText}>
              Ayurvedic treatments are devoid of chemicals and are based completely on natural herbs.
            </p>
          </div>
        </div>

        <img src={image2} alt="Image 2" className={styles.image} />

        <div className={`${styles.box} ${styles.boxSmall}`}>
          <div className={styles.smallContent}>
            <p className={styles.smallHeader}>Individual Treatment</p>
            <p className={styles.smallText}>
              All treatments are personalized based on a person's unique constitution and health concerns.
            </p>
          </div>
        </div>

        <img src={image3} alt="Image 3" className={styles.imageLast} />
      </div>
    </div>
  );
};

export default Consult;