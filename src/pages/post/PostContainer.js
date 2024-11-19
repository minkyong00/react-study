import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const PostContainer = () => {
  //https://jsonplaceholder.typicode.com/posts
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const datas = await response.json()
      return datas;
    }

    getPosts()
    .then(setPosts)
    .catch(console.error)

  }, [])
  
  console.log(posts)

  return (
    <ul>
      <Outlet />
      {posts.map((post, i) => (
        <Link key={i} to={`/post/${post.id}`} >
          <li>{post.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default PostContainer;