import { useState, useEffect } from "react";

const useAnimatedWords = (words, interval = 3000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(wordInterval);
  }, [words, interval]);

  return words[currentWordIndex];
};

export { useAnimatedWords };
