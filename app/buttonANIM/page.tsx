'use client'; // Mark this as a Client Component

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';
import Link from "next/link";

function Button() {

  return (
    <body className={styles.body}>
        <br />
        <Link href="../" className={styles.hover}>go back</Link>
    </body>
  );
}

export default Button;
