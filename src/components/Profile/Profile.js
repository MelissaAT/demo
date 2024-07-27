// src/components/Profile/Profile.js
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      // Replace with your API endpoint
      const response = await axios.get(`/api/users/${username}`);
      setUser(response.data);
    };

    fetchUser();
  }, [username]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default Profile;

