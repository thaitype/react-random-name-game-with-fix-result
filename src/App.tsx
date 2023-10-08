import React, { useState, CSSProperties, useEffect } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web';

// No type provided for useSound
// @ts-ignore
import useSound from 'use-sound';
import clickSound from './mixkit-gate-latch-click-1924.wav';


import styles from './styles.module.css'
import { names, selectedIndexes } from './data'

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = names.map(
  item =>
    ({ style }) =>
      <animated.div style={{ ...style, color: item.color }}>{item.name}</animated.div>
)


const fireConfetti = async () => {
  window.dispatchEvent(new Event('fireConfetti'));
};

export default function App() {
  const [playSound] = useSound(clickSound);
  const [index, set] = useState(names.length-1);
  // const nextSlide = () => set(state => (state + 1) % names.length);
  const [result, setResult] = useState(selectedIndexes); 

  const getNextIndexResult = () => {
    const nextResult = result[result.length-1];
    setResult(state =>  state.slice(0, result.length - 1));
    return nextResult;
  }
  const goSlide = (i: number) => set(i);
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
  });

  const loopSlide = async (ms: number) => {
    await delay(ms)
    // nextSlide()
    goSlide(getRandomInt(0, names.length));
    playSound();
  }

  const loopConfetti = async (ms: number) => {
    await delay(ms)
    fireConfetti();
  }

  const onClick = async () => {
    const loopCount = 20;
    for (let i = loopCount; i >= 1; i--) {
      await loopSlide(20 * i)
    }
    for (let i = 0; i < loopCount+10; i++) {
      await loopSlide(20 * i);
    }
    const nextIndex = getNextIndexResult();
    console.log(nextIndex, names[nextIndex]);
    goSlide(nextIndex);
    for(let i = 0; i < 25; i++) {
      await loopConfetti(300);
    }
  }

  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}
