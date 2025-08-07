import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session
    const savedUser = localStorage.getItem('homeoguide_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            user: {
              id: '1',
              email,
              name: 'John Doe',
              bookmarks: [],
              searchHistory: []
            }
          });
        }, 1000);
      });

      setUser(response.user);
      localStorage.setItem('homeoguide_user', JSON.stringify(response.user));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    try {
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            user: {
              id: '1',
              email: userData.email,
              name: userData.name,
              bookmarks: [],
              searchHistory: []
            }
          });
        }, 1000);
      });

      setUser(response.user);
      localStorage.setItem('homeoguide_user', JSON.stringify(response.user));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('homeoguide_user');
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('homeoguide_user', JSON.stringify(updatedUser));
  };

  const addBookmark = (item) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      bookmarks: [...user.bookmarks, item]
    };
    setUser(updatedUser);
    localStorage.setItem('homeoguide_user', JSON.stringify(updatedUser));
  };

  const removeBookmark = (itemId) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      bookmarks: user.bookmarks.filter(item => item.id !== itemId)
    };
    setUser(updatedUser);
    localStorage.setItem('homeoguide_user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateUser,
    addBookmark,
    removeBookmark
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 