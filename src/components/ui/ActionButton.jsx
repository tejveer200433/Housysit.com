"use client"
import React from 'react';
import { useModal } from '@/context/ModalContext';
import { motion } from 'framer-motion';



const ActionButton = ({ label, variant = 'primary', className = '' }) => {
  const { openModal } = useModal();

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 border-transparent",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={openModal}
      className={`
        px-8 py-4 rounded-xl font-bold transition-all duration-200 
        flex items-center justify-center whitespace-nowrap
        ${variants[variant]}
        ${className}
      `}
    >
      {label}
    </motion.button>
  );
};

export default ActionButton;