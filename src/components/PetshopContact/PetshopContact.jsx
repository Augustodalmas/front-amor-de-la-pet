import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from './PetshopContact.module.css';

const PetshopContact = () => {
  const whatsappNumber = "555499733427";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre os serviços.";

  return (
    <motion.section
      id="contato"
      className={styles.contact}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para cuidar do seu pet com todo carinho</p>
        </motion.div>

        <div className={styles.contactGrid}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoCard}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div>
                <h3>Localização</h3>
                <p>Rua Julio Callegari Nº 1171<br />
                  Bairro Esplanada - Edifício Lá Mamma Mia - Sala 4<br />
                  Caxias do Sul - RS</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FaClock className={styles.infoIcon} />
              <div>
                <h3>Horário de Funcionamento</h3>
                <p>Segunda: 13:30 as 17:00h<br />
                  Terça a Sexta: 8:30h às 17:30h<br />
                  Sábado: 8h às 16h<br />
                  Domingo: Fechado</p>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h3>Siga-nos nas redes sociais</h3>
              <div className={styles.socialIcons}>
                <motion.a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  href="#"
                  className={styles.socialIcon}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="#"
                  className={styles.socialIcon}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.ctaSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.ctaCard}>
              <h3>Agende Agora</h3>
              <p>Seu pet merece o melhor cuidado. Entre em contato conosco pelo WhatsApp e agende um horário.</p>

              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp />
                Chamar no WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PetshopContact;