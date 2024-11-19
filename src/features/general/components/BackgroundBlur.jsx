import { motion } from "framer-motion";

export function BackgroundBlur({ className, initialPosition, animate }) {
  return (
    <motion.div
      className={`absolute rounded-full mix-blend-screen filter blur-xl ${className}`}
      initial={{
        opacity: 0,
        scale: 0.5,
        x: initialPosition.x,
        y: initialPosition.y,
      }}
      animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.2, 1],
        x: animate.x,
        y: animate.y,
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
}
