import React, { useState } from 'react';
import styles from './InputTextBig.module.scss';

function InputTextBig({ placeholder }) {
  const [text, setText] = useState('');
  const maxLength = 500;
  const remainingCharacters = maxLength - text.length;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  return (
    <div className={styles.custom_input_container}>
      <p>{placeholder}</p>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        className={styles.custom_input}
      />
      <div className={styles.character_count}>Caracteres restantes: {remainingCharacters}</div>
    </div>
  );
}

export default InputTextBig;
