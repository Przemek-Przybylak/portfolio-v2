"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioPage() {
  const [dots, setDots] = useState(0);
  const [loading, setLoading] = useState(true);

  // Animacja kropek (6 kropki, nie ruszamy nawiasów)
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      setDots((prev) => prev + 1);
      count++;
      if (count >= 6) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 100); // Czas na pełne zapełnienie
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center max-h-screen">
      {/* Nagłówek "Moje Portfolio" - zawsze na górze, bez zakłócania layoutu */}
      <h1 className="text-4xl font-bold mb-4 top-4 z-10">Moje Portfolio</h1>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center absolute top-1/2 transform -translate-y-1/2"
          >
            {/* Mrugający napis "Loading" */}
            <div className="text-3xl font-mono mb-4 h-10">
              <span>{`< coding >`}</span>
            </div>

            {/* Pasek z nawiasami i kropkami */}
            <div className="text-4xl font-mono tracking-widest">
              [ {".".repeat(dots)}
              {" ".repeat(6 - dots)} ]
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Treść portfolio po załadowaniu */}
            <p>Tu znajdziesz moje projekty.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
