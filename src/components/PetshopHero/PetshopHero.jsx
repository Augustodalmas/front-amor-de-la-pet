import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './PetshopHero.module.css';

const PetshopHero = () => {
  const whatsappNumber = "555499733427";
  const whatsappMessage = "Olá! Gostaria de agendar um horário para meu pet.";

  return (
    <motion.section
      id="início"
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className={styles.title}>
            Cuidando do seu pet com
            <span className={styles.highlight}> amor de verdade</span>
          </h1>

          <p className={styles.subtitle}>
            Banho, tosa e cuidados especiais para o seu melhor amigo em Caxias do Sul - RS
          </p>

          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FaWhatsapp />
            Agende seu horário no WhatsApp
          </motion.a>
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src="/imgs/pet-1.jpg" alt="Pet feliz após banho e tosa" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PetshopHero;