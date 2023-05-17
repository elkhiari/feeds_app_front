import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom/dist';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';

import Navbar from './components/navbar'
import { useContext, useEffect, useState } from 'react';
import { AuthProvider } from './context/authContext';
import { AuthContext } from './context/authContext';


function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className="bg-blue-200  min-h-screen">
      
        <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={user?<Home />:<Navigate to="/login"/>} />
          </Routes>
    </div>
  );
}

export default App;
