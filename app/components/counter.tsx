'use client'; // Mark this as a Client Component
import { useState } from 'react';
import styles from "./counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);
  const storedNumber = sessionStorage.getItem("number");
  const number = storedNumber ? parseInt(storedNumber, 10) : 1;


  function increase() {
    setCount(count + number);
  }

  function decrease() {
    if(count >= 1) {
    setCount(count - number);
    } 
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={increase}>+{ number }</button>
      <div className={styles.text}>{count}</div>
      <button className={styles.btn} onClick={decrease}>-{ number }</button>
      </div>
  );
}

export default Counter;