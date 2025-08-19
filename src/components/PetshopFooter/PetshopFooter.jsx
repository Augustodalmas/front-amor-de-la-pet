import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import styles from './PetshopFooter.module.css';

const PetshopFooter = () => {
  const whatsappNumber = "5554999887766";

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <motion.div
            className={styles.logoSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="/imgs/logo.png" alt="Amor De La Pet" className={styles.logo} />
            <p>Cuidando do seu pet com amor de verdade</p>
          </motion.div>

          <motion.div
            className={styles.addressSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Endereço</h3>
            <div className={styles.addressInfo}>
              <FaMapMarkerAlt className={styles.addressIcon} />
              <div>
                <p>Rua Julio Callegari Nº 1171</p>
                <p>Bairro Esplanada - Edifício Lá Mamma Mia - Sala 4</p>
                <p>Caxias do Sul - RS</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.socialSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Redes Sociais</h3>
            <div className={styles.socialLinks}>
              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="#"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            © 2024 Amor De La Pet. Feito com <FaHeart className={styles.heartIcon} /> para pets e seus tutores.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default PetshopFooter;