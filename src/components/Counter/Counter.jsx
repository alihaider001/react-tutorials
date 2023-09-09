import React, { useState } from "react";
import styles from "./Counter.module.css";

const Counter = ({ quantity }) => {
  const [count, setCount] = useState(quantity);

  const handleIncreament = () => {
    setCount((prev) => ++prev);
  };

  const handleDecreament = () => {
    if (count > 1) setCount((prev) => --prev);
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleDecreament}>
        -
      </button>
      <div>{count}</div>
      <button className={styles.button} onClick={handleIncreament}>
        +
      </button>
    </div>
  );
};

export default Counter;
