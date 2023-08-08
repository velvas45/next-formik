"use client";
import { AnimatePresence } from "framer-motion";

export const TransitionLayout = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <main>{children}</main>
    </AnimatePresence>
  );
};
