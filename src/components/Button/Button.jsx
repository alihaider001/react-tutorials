import React from "react";
import styles from "./Button.module.css";

const Button = ({
  title = "Button",
  onClick = () => console.log("Button Click")
}) => {
  return (
    <button
      className={[styles.button, styles.container].join(" ")}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
