import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Changed from useHistory

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/login', { email, password });
      setUser(response.data.user);
      navigate('/'); // Changed from history.push
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login'); // Changed from history.push
  };

  const signup = async (email, password) => {
    try {
      await axios.post('/api/signup', { email, password });
      navigate('/login'); // Changed from history.push
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
