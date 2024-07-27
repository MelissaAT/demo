// src/components/Profile/EditProfile.js
import { useState } from 'react';
import axios from 'axios';

const EditProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your API endpoint
    await axios.put(`/api/users/${user.username}`, { name, email, bio });
    // Optionally, refresh user data or redirect to profile page
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfile;
