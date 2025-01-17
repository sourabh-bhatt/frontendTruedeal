"use client";

import { useEffect, useState } from 'react';

const phrases = [
  'Search your holiday',
  'Search your next adventure',
  'Search your happiness',
  'Search your ultimate destination'
];

export default function TypingAnimation({ children }: { children: React.ReactNode }) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // Blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 100); // Typing speed
      } else {
        setTimeout(() => setIsTyping(false), 1000); // Pause at the end
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 50); // Deleting speed
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isTyping, phraseIndex]);

  return (
    <span>
      {displayText}
      <span
        className={`inline-block w-[2px] h-[1em] ml-1 bg-yellow-500 ${showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ transition: 'opacity 0.1s' }}
      />
    </span>
  );
}
