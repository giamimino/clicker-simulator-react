'use client'; // Mark this as a Client Component

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';
import Link from "next/link";

function Home() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  const applePrice = 50;
  const bananaPrice = 200;
  const orangePrice = 450;
  
  const fruits = ["apple", "banana", "orange"];

  function increase() {
    setCount(count + number);
  }

  function decrease() {
    if(count >= 1) {
      setCount(count - number);
    }
  }

  function handleClick(fruit: string) {
    // Logic based on which fruit is clicked
    if(fruit === "apple" && count >= applePrice) {
      setNumber(prevNumber => prevNumber + 1);
      setCount(count - applePrice);
    } else if (fruit === "banana" && count >= bananaPrice) {
      setNumber(prevNumber => prevNumber + 5);
      setCount(count - bananaPrice);
    } else if (fruit === "orange" && count >= orangePrice) {
      setNumber(prevNumber => prevNumber + 10);
      setCount(count - orangePrice);
    } else {
      console.log(`Clicked on: ${fruit}`);
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.btn} onClick={increase}>+{ number }</button>
        <div className={styles.text}>{count}</div>
        <button className={styles.btn} onClick={decrease}>-{ number }</button>
      </div>
      <div>
        <ul className={styles.ul}>
          {fruits.map((fruit, index) => (
            <li 
              className={styles.li} 
              key={index} 
              onClick={() => handleClick(fruit)} // Pass the fruit name to handleClick
            >
              {fruit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
