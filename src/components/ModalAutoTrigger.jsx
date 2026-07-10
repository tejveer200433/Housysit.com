"use client";

import { useEffect } from "react";
import { useModal } from "../context/ModalContext";

export default function ModalAutoTrigger() {
  const { openModal } = useModal();

  useEffect(() => {
    const interval = setInterval(() => {
      openModal();
    }, 120000);

    return () => clearInterval(interval);
  }, [openModal]);

  return null;
}