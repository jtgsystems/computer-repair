import React, { useState } from 'react';
import { FaBars, FaLaptop, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <FaLaptop className={styles.logoIcon} />
          <span>PC BOY</span>
        </Link>

        <div className={styles.menuIcon} onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/services" className={styles.navLink} onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink} onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink} onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/appointment" className={styles.navButton} onClick={closeMenu}>
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
