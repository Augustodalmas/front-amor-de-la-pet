import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './PetshopHeader.module.css';

const PetshopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Início', 'Serviços', 'Contato'];

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/imgs/logo.png" alt="Amor De La Pet" />
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={styles.navLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>
    </motion.header>
  );
};

export default PetshopHeader;