import { useState, useEffect, useRef } from "react";
import logo from '../../assets/logo/image 45.png';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.section}>
        <div
          className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          ref={hamburgerRef}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img src={logo} alt="Logo" />
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;