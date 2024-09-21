'use client'; // Mark this as a Client Component
import { useState } from 'react';
import styles from "./list.module.css";

function List() {
  const fruits = ["apple", "banana", "orange"];

  const [number, setNumber] = useState(1);

  function handleClick() {
    setNumber(prevNumber => prevNumber + 1);
    sessionStorage.setItem("number", number.toString());
  }

  return (
    <div>
      <ul className={styles.ul}>
        {fruits.map((fruit, index) => (
          <li className={styles.li} key={index} onClick={handleClick}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
