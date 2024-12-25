import './Hero.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="hero-container">
      <div className="box-container">
        <div className="color-box"></div>
        <div className="hero-image"></div>
      </div>
      <div className="captions">
        <p className="welcome" data-aos="fade-up">Namaste, Welcome to Amrutam</p>
        <h1 data-aos="fade-up" data-aos-delay="200">
          Step into Holistic Healing with <span className="underline">Ayurveda</span> Book Consultation with Certified Experts.
        </h1>
        <p className="subheading" data-aos="fade-up" data-aos-delay="400">
          Dive into the world of Ayurveda and experience personalized health solutions and holistic guidance from trusted Ayurvedic doctors, anytime, anywhere.
        </p>
        <button data-aos="fade-up" data-aos-delay="600">
          <p className="button-text">BOOK AN APPOINTMENT</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;