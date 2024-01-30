import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ContentsDetail() {
  const [content, setContent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/content/${id}`)
      .then(response => {
        setContent(response.data);
      })
      .catch(error => {
        console.error('Error fetching content detail:', error);
      });
  }, [id]);

  if (!content) return <div>Loading...</div>;

  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
    </div>
  );
}

export default ContentsDetail;