import React from "react";
import styles from "./input.module.css";

export const Input = ({ type, name, value, placeholder, handleChange }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            className={styles.inputField}
            onChange={handleChange}
        />
    );
};
