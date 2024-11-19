import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostRead = () => {
  const {id} = useParams();
  console.log(id)

  const [post, setPost] = useState([])

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const datas = await response.json()
      return datas;
    }

    getPost()
    .then(setPost)
    .catch(console.error)

  }, [])

  console.log(post)

  return (
    <div>
      <h1>제목 : {post.title}</h1>
      <p>내용 : {post.body}</p>
    </div>
  );
};

export default PostRead;