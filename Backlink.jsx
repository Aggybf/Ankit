import React from "react";
import styles from "./backlink.module.css";
const Backlink = () => {
  return (
    <>
      <h2>Check Out Our Other Tools:</h2>
      <div className={styles.backlink}>
        <a href="/" target="_blank">
          Bgmi Name Generator
        </a>
        <a href="/heictojpg.html" target="_blank">
          Heic to Jpg Converter
        </a>
        <a href="/age-calculator.html" target="_blank">
          Age Calculator
        </a>
        <a href="/faq-generator-tool.html" target="_blank">
          Faq Generator
        </a>
      </div>
    </>
  );
};

export default Backlink;
