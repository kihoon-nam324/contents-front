import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Content.module.css';
//import axios from 'axios';

export default function Content({ content, onDelete }) {
  //const { id, text, status } = todo;
  const { id, title } = content;
  // const handleChange = (e) => {
  //   const status = e.target.checked ? 'completed' : 'active';
  //   onUpdate({ ...content, status });
  // };
  // const handleDelete = async () => {
  //   console.log('id : ', id);
  //   await axios.delete(`/content/${id}`);
  //   //fetchContents();
  // };

  const handleDelete = () => onDelete(id);

  return (
    <li className={styles.content}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id}
        //checked={status === 'completed'}
        //onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {title}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
