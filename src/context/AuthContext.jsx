import { createContext, useContext, useState, useEffect } from 'react';
import usersData from '../data/users.json';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for existing session
    const storedUser = localStorage.getItem('erss_admin_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Simulate API call
    const foundUser = usersData.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      // Remove password from state for security (even if it's mock data)
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('erss_admin_user', JSON.stringify(userWithoutPassword));
      return { success: true };
    } else {
      return { success: false, message: 'Invalid credentials' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('erss_admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
