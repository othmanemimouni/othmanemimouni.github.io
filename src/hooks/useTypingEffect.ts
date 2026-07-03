import { useState, useEffect } from 'react';

export function useTypingEffect(texts: string[], typingSpeed: number) {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [texts, textIndex, charIndex, isDeleting, typingSpeed]);

  return { text };
}