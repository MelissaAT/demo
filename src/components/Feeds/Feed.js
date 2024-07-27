import { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';

const Feed = ({ type }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`/api/posts/${type}`);
      setPosts(response.data);
    };
    fetchPosts();
  }, [type]);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
