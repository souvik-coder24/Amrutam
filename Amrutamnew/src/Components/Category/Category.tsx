import { useEffect } from 'react';
import './Category.css';
import image1 from '../../assets/images/speech-bubble (2) 1.png';
import image2 from '../../assets/images/shield 1.png';
import image3 from '../../assets/images/doctor (1) 1.png';
import image4 from '../../assets/images/prescription (1) 1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Category {
  id: number;
  image: string;
  text: string;
}

const categories: Category[] = [
  { id: 1, image: image1, text: 'Convenient online & In-clinic consultations' },
  { id: 2, image: image2, text: 'Safe and effective treatment' },
  { id: 3, image: image3, text: 'Experienced Ayurvedic Practitioners' },
  { id: 4, image: image4, text: 'Personalized Treatment Plans & Guidance' },
];

const CategorySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="category-section">
      {categories.map((category) => (
        <div 
          key={category.id} 
          className="category-box"
          data-aos="fade-up"
          data-aos-delay={`${category.id * 100}`}
        >
          <div className="image-container">
            <img src={category.image} alt={category.image} />
          </div>
          <p className="category-text">{category.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;