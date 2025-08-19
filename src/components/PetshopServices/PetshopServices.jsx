import React from 'react';
import { motion } from 'framer-motion';
import { FaBath, FaCut, FaHeart, FaBrush, FaPaw, FaTooth, FaStar } from 'react-icons/fa';
import styles from './PetshopServices.module.css';

const PetshopServices = () => {
  const services = [
    {
      icon: FaBath,
      title: 'Banho e Tosa',
      description: 'Banho completo com produtos de qualidade e tosa personalizada para cada raça'
    },
    {
      icon: FaCut,
      title: 'Tosa Higiênica',
      description: 'Cuidados especiais nas áreas íntimas para maior conforto e higiene'
    },
    {
      icon: FaStar,
      title: 'Hidratação',
      description: 'Tratamento hidratante para pelos macios e saudáveis'
    },
    {
      icon: FaBrush,
      title: 'Desembolo',
      description: 'Remoção cuidadosa de nós e emaranhados sem causar desconforto'
    },
    {
      icon: FaHeart,
      title: 'Remoção de Subpelo',
      description: 'Técnica especializada para reduzir a queda de pelos em casa'
    },
    {
      icon: FaPaw,
      title: 'Corte de Unhas',
      description: 'Corte seguro e preciso das unhas para o conforto do seu pet'
    },
    {
      icon: FaTooth,
      title: 'Escovação Dentária',
      description: 'Cuidados bucais para manter a saúde e o hálito fresquinho'
    }
  ];

  return (
    <motion.section
      id="serviços"
      className={styles.services}
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
          <h2>Nossos Serviços</h2>
          <p>Cuidados completos para o bem-estar do seu melhor amigo</p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconContainer}>
                <service.icon className={styles.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PetshopServices;