"use client"
import React, { createContext, useContext, useState } from 'react';
import ContactModal from '@/components/ContactModal';

const ModalContext = createContext({ openModal: () => {} });

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      {/* The Modal lives here globally */}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);