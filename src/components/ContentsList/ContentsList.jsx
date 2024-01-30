import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import styles from './ContentsList.module.css';
import axios from 'axios';

export default function ContentsList({ filter }) {
  const [contents, setContents] = useState([]);
  
  const handleDelete = async (id) => {
    await axios.delete(`/content/${id}`);
    const updatedContents = contents.filter(content => content.id !== id);
    setContents(updatedContents);
  };
  
  useEffect(() => {
    axios.get('/content').then((response) => {
      setContents(response.data);
    });
  }, []);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {contents.map((item) => (
          <Content
            key={item.id}
            content={item}
            //onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}
