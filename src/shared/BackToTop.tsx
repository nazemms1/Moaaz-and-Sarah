import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-7 right-7 z-40 w-11 h-11 flex items-center justify-center cursor-pointer shadow-lg"
          style={{
            background: "linear-gradient(135deg, #C9A84C, #A8883A)",
            color: "#FFFDF8",
            border: "1px solid rgba(232,204,128,0.4)",
            boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25 }}
          whileHover={{
            scale: 1.15,
            boxShadow: "0 6px 28px rgba(201,168,76,0.55)",
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
