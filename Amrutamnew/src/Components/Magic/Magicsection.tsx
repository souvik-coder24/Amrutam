import { useEffect } from 'react';
import AOS from 'aos'
import styles from './Magic.module.css';
import girl from '../../assets/images/image 57.png';
import design from '../../assets/images/image 54.png';
import logo1 from '../../assets/images/heartbeat (1) 1.png';
import logo2 from '../../assets/images/ribbon 1.png';
import logo3 from '../../assets/images/lotus-position 1.png';
import logo4 from '../../assets/images/strong 1.png';
import logo5 from '../../assets/images/ayurveda 1.png';
import logo6 from '../../assets/images/protection 1.png';

const Magicsection: React.FC = () => {
  const isMobile = window.innerWidth <= 768; // Check if the screen size is mobile

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <div className={styles.magic}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <h1>Discover Ayurveda’s magic with us</h1>
        <p>
          Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to
          better health using ancient wisdom, a totally effective approach for a better life.
        </p>
      </div>

      {/* Main Content Section */}
      <div className={styles.content}>
        {/* Left Side Boxes (Personalized Wellness, Focus on Prevention, Flexibility) */}
        <div className={styles.combine}>
          {/* Box 1: Personalized Wellness */}
          <div
            data-aos={isMobile ? 'fade' : 'fade-right'}
            style={{
              width: isMobile ? '154px' : '349px',
              height: isMobile ? '218px' : '100px',
              gap: isMobile ? '16px' : '10px',
              display: 'flex',
              position: 'absolute',
              border: isMobile ? '1px solid rgba(228, 228, 228, 1)' : undefined,
              borderRadius: isMobile ? '16px' : undefined,
              flexDirection: isMobile ? 'column-reverse' : undefined,
              alignItems: 'center',
              marginTop: isMobile ? undefined : '98px',
              marginLeft: isMobile ? '-11rem' : '134px'
            }}
          >
            <div className={styles.boxContent}>
              <h6 className={styles.boxHeader}>Personalized Wellness</h6>
              <p className={styles.boxText}
              style={{
                width: isMobile ? '136px' : '233px',
                height: isMobile ? '38px' : '63px',
                }}>
                Get treatments made just for you based on your individual doshas (body type)
              </p>
            </div>
            <div className={styles.boxImageContainer} style={{ backgroundColor: 'rgba(237, 245, 250, 1)' }}>
              <img src={logo1} alt="Personalized Wellness" 
              style={{
                width: isMobile ? '42px' : '65px',
                height: isMobile ? '42px' : '55px',
                marginLeft: '8px',
                marginTop: '8px'
                }} />
            </div>
          </div>

          {/* Box 2: Focus on Prevention */}
          <div
            data-aos={isMobile ? 'fade' : 'fade-right'}
            style={{
              width: isMobile ? '154px' : '349px',
              height: isMobile ? '218px' : '100px',
              gap: isMobile ? '16px' : '10px',
              display: 'flex',
              position: 'absolute',
              border: isMobile ? '1px solid rgba(228, 228, 228, 1)' : undefined,
              borderRadius: isMobile ? '16px' : undefined,
              flexDirection: isMobile ? 'column-reverse' : undefined,
              alignItems: 'center',
              marginTop: isMobile ? undefined : '277px',
              marginLeft: isMobile ? '11rem' : '85px',
            }}
          >
            <div className={styles.boxContent}>
              <h6 className={styles.boxHeader}>Focus on prevention</h6>
              <p className={styles.boxText} style={{ width: isMobile ? '150px' : '178px', height: '42px', marginLeft: isMobile ? undefined : '3.5rem' }}>
                Stop problems even before they start.
              </p>
            </div>
            <div className={styles.boxImageContainer} style={{ backgroundColor: 'rgba(234, 242, 234, 1)' }}>
              <img src={logo2} alt="Focus on prevention" className={styles.boxImage} />
            </div>
          </div>

          {/* Box 3: Flexibility */}
          <div
            data-aos={isMobile ? 'fade' : 'fade-right'}
            style={{
              width: isMobile ? '154px' : '349px',
              height: isMobile ? '218px' : '100px',
              gap: isMobile ? '16px' : '10px',
              display: 'flex',
              position: 'absolute',
              border: isMobile ? '1px solid rgba(228, 228, 228, 1)' : undefined,
              borderRadius: isMobile ? '16px' : undefined,
              flexDirection: isMobile ? 'column-reverse' : undefined,
              alignItems: 'center',
              marginTop: isMobile ? '15rem' : '447px',
              marginLeft: isMobile ? '-11rem' : '134px',
            }}
          >
            <div className={styles.boxContent}>
              <h6 className={styles.boxHeader}>Mind-Body Connection</h6>
              <p className={styles.boxText} style={{ width: isMobile ? '121px' : '233px', height: isMobile ? '54px' : '42px' }}>
                Keep your mind and body in sync for a happy life.
              </p>
            </div>
            <div className={styles.boxImageContainer} style={{ backgroundColor: 'rgba(252, 241, 241, 1)' }}>
              <img src={logo3} alt="Flexibility" className={styles.boxImage} />
            </div>
          </div>

          {/* Right Side Boxes (Strength, Ayurveda, Protection) */}
          {/* Box 4: Strength */}
          <div
            data-aos={isMobile ? 'fade' : 'fade-left'}
            style={{
                width: isMobile ? '154px' : '349px',
                height: isMobile ? '218px' : '100px',
                gap: isMobile ? '16px' : '10px',
                display: 'flex',
                position: 'absolute',
                border: isMobile ? '1px solid rgba(228, 228, 228, 1)' : undefined,
                borderRadius: isMobile ? '16px' : undefined,
                flexDirection: isMobile ? 'column' : undefined,
                alignItems: 'center',
                marginTop: isMobile ? '15rem' : '98px',
                marginLeft: isMobile ? '11rem' : '971px',
                paddingTop: isMobile ? '20px' : undefined
            }}
          >
            <div className={styles.boxImageContainer} style={{ backgroundColor: 'rgba(245, 243, 252, 1)' }}>
              <img src={logo6} alt="Strength" className={styles.boxImage} />
            </div>
            <div className={styles.boxContent}>
              <h6 className={styles.boxHeaderRight}>Holistic Healing</h6>
              <p className={styles.boxTextRight} style={{ width: isMobile ? '112px' : '184px', height: isMobile ? '54' : '42px' }}>
                Fix the root problem for long-lasting health.
              </p>
            </div>
          </div>

          {/* Box 5: Ayurveda */}
          <div
            data-aos={isMobile ? 'fade' : 'fade-left'}
            style={{
              width: isMobile ? '154px' : '349px',
              height: isMobile ? '218px' : '100px',
              gap: isMobile ? '16px' : '10px',
              display: 'flex',
              position: 'absolute',
              border: isMobile ? '1px solid rgba(228, 228, 228, 1)' : undefined,
              borderRadius: isMobile ? '16px' : undefined,
              flexDirection: isMobile ? 'column' : undefined,
              alignItems: 'center',
              marginTop: isMobile ? '30rem' : '277px',
              marginLeft: isMobile ? '-11rem' : '1008px',
              paddingTop: isMobile ? '20px' : undefined
            }}
          >
            <div className={styles.boxImageContainer} style={{ backgroundColor: 'rgba(254, 246, 237, 1)' }}>
              <img src={logo5} alt="Ayurveda" className={styles.boxImage} />
            </div>
            <div className={styles.boxContent}>
              <h6 className={styles.boxHeaderRight}>Natural Remedies</h6>
              <p className={styles.boxTextRight} style={{ width: isMobile ? '135px' : '202px', height: isMobile ? '53px' : '37px' }}>
                Using herbs and natural therapies for healing.
              </p>
            </div>
          </div>

          {/* Box 6: Protection */}
          <div
            data-aos={isMobile ? 'fade' : 'fade-left'}
            style={{
                width: isMobile ? '154px' : '349px',
                height: isMobile ? '218px' : '100px',
                gap: isMobile ? '16px' : '10px',
                display: 'flex',
                position: 'absolute',
                border: isMobile ? '1px solid rgba(228, 228, 228, 1)' : undefined,
                borderRadius: isMobile ? '16px' : undefined,
                flexDirection: isMobile ? 'column' : undefined,
                alignItems: 'center',
                marginTop: isMobile ? '30rem' : '447px',
                marginLeft: isMobile ? '11rem' : '971px',
                paddingTop: isMobile ? '20px' : undefined
            }}
          >
            <div className={styles.boxImageContainer} style={{ backgroundColor: 'rgba(234, 242, 234, 1)' }}>
              <img src={logo4} alt="Protection" className={styles.boxImage} />
            </div>
            <div className={styles.boxContent}>
              <h6 className={styles.boxHeaderRight}>Boosting immunity</h6>
              <p className={styles.boxTextRight} style={{ width: isMobile ? '127px' : '230px', height: isMobile ? '54px' : '42px' }}>
                Stay strong and healthy for life, not just for today.
              </p>
            </div>
          </div>
        </div>

        {/* Center Design and Image */}
        <div
          className={styles.magicCenter}
          style={{
            marginTop: isMobile ?  '20px': '267px',
            marginLeft: isMobile ?  '30px': '465px',
          }}
        >
          <img src={design} alt="design" className={styles.designImage} />
          <img src={girl} alt="girl" className={styles.girlImage} />
        </div>
      </div>
    </div>
  );
};

export default Magicsection;