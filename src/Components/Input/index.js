import React, { useState } from 'react';
import styles from './Input.scss';

function InputComponent({ label, maxLength, required, onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        maxLength={maxLength}
        className={styles.input}
      />
    </div>
  );
}

export default InputComponent;
