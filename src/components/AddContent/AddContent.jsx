import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddContent.module.css';

export default function AddContent({ onAdd }) {
  const [title, setTitle] = useState('');
  const handleChange = (e) => setTitle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), title, status: 'active' });
    setTitle('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Add Content'
        value={title}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
