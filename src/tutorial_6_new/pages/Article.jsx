import React from 'react';

import { Button } from 'react-bootstrap';

import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from './Home';

export default function Article() {
  let { id } = useParams();

  const post = posts.find((obj) => obj.id === Number(id));

  

  if (!post) {
    return <Navigate to="/" />;
  }

  return (
    <div class="full-post">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
}
