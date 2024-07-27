import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/Profile/EditProfile';
import axios from 'axios';

const ProfilePage = () => {
  const { username } = useParams();
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get(`/api/users/${username}`);
      setProfile(response.data);
    };
    fetchProfile();
  }, [username]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      {isEditing ? (
        <EditProfile user={profile} />
      ) : (
        <Profile user={profile} />
      )}
      {user.username === username && (
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      )}
    </div>
  );
};

export default ProfilePage;
