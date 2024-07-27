// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/feed/:id" element={<FeedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      
    </Router>
  );
}

export default App;

