'use client'

import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const NeonContainer = styled.div`
  display: inline-block;
  text-align: center;
  
  i {
    font-style: normal;
    font-family: 'Press Start 2P', cursive;
    font-size: 2rem;
    color: #EEDDE0;
    text-shadow: 0 0 30px #EC637B,
                 0 0 10px rgba(230, 161, 173, 0.41),
                 0 0 100px #E6A1AD,
                 0 0 500px #F36780,
                 5px 9px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.03s ease;
    letter-spacing: 0.1em;
    line-height: 1.8;

    &.off {
      color: rgba(46, 46, 46, 0.61);
      text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.5);
    }

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }
`

interface RetroNeonTextProps {
  text: string;
}

const randomFromInterval = (from: number, to: number) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

export default function RetroNeonText({ text }: RetroNeonTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Convertir el texto en letras individuales con etiquetas i
    const chars = text.split('');
    const newText = chars.map((char, index) => 
      `<i key="${index}">${char}</i>`
    ).join('');
    containerRef.current.innerHTML = newText;

    const letters = containerRef.current.getElementsByTagName('i');
    const flickers = [5, 7, 9, 11, 13, 15, 17];
    let counter = 0;

    const flicker = (randomLetter: HTMLElement, flickerNumber: number) => {
      counter += 1;

      if (counter === flickerNumber) {
        counter = 0;
        return;
      }

      setTimeout(() => {
        if (randomLetter.classList.contains('off')) {
          randomLetter.classList.remove('off');
        } else {
          randomLetter.classList.add('off');
        }

        flicker(randomLetter, flickerNumber);
      }, 30);
    };

    const loop = () => {
      const rand = randomFromInterval(500, 3000);
      const letterIndex = randomFromInterval(0, letters.length - 1);
      const randomLetter = letters[letterIndex];
      const flickerIndex = randomFromInterval(0, flickers.length - 1);
      const flickerNumber = flickers[flickerIndex];

      setTimeout(() => {
        flicker(randomLetter, flickerNumber);
        loop();
      }, rand);
    };

    loop();
  }, [text]);

  return (
    <NeonContainer ref={containerRef} />
  );
} 