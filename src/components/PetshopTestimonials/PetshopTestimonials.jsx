import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import styles from './PetshopTestimonials.module.css';

const PetshopTestimonials = () => {
  const testimonials = [
    {
      name: 'Ellis Torres',
      pet: 'Toy',
      text: 'Trabalho perfeito, meu Toy ficou, cheiroso e nós adoramos o carinho e cuidado.',
      rating: 5
    },
    {
      name: 'Aline Rasador',
      pet: 'Mimi (Poodle)',
      text: 'Banho e tosa perfeitos , muito atenciosos, pacenciosos. Parabéns',
      rating: 5
    },
    {
      name: 'Cristiano Kovalezyk',
      pet: 'Thor (Labrador)',
      text: 'Atendimento maravilhoso. Super recomendo.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? styles.starFilled : styles.starEmpty}
      />
    ));
  };

  return (
    <motion.section
      className={styles.testimonials}
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
          <h2>O que nossos clientes dizem</h2>
          <p>Depoimentos de tutores que confiam em nosso trabalho</p>
        </motion.div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className={styles.quoteIcon} />

              <p className={styles.testimonialText}>"{testimonial.text}"</p>

              <div className={styles.rating}>
                {renderStars(testimonial.rating)}
              </div>

              <div className={styles.author}>
                <strong>{testimonial.name}</strong>
                <span>Tutor(a) de {testimonial.pet}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PetshopTestimonials;