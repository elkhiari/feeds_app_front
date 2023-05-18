import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("token", authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const checkTokenValidity = async () => {
    try {
      setLoading(true);
      const res = await axios.get(process.env.REACT_APP_API_URL+"me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data.user);
    } catch (error) {
      console.error("Error validating token:", error);
      logout();
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      checkTokenValidity();
    }
  }, [token]);

  const AuthContextData = {
    user,
    token,
    login,
    logout,
    loading,
    setLoading
  };

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
