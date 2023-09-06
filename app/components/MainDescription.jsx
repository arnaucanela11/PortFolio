"use client"
import { useInView } from 'react-intersection-observer';
import { poppins } from '../layout';
import "../styles/Main.css"
import { useEffect, useState } from 'react';

function MainDescription() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 1,
      });
      const text = ' My name is Arnau and I’m a self formed full stack developer.'
      const [visibleText, setVisibleText] = useState('');

      useEffect(() => {
        if (inView) {
          setTimeout(() => {
            let currentIndex = 0;
          const interval = setInterval(() => {
            setVisibleText(prevText => prevText + text[currentIndex]);
            currentIndex++;
    
            if (currentIndex === text.length - 1) {
              clearInterval(interval);
            }
          }, 35); // Velocidad de escritura (en milisegundos)
    
          return () => {
            clearInterval(interval);
          };
          }, 600)
        }
      }, [inView]);

  return (
    <h2 className={` ${poppins.className} main__description`} ref={ref}>
        {visibleText}
        </h2>
  )
}

export default MainDescription