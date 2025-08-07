import React, { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const { user, updateUser } = useAuth();

  // Debounced search function (inline, not useCallback)
  let timeoutId;
  const debouncedSearch = (term, type = 'remedies') => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      performSearch(term, type);
    }, 300);
  };

  const performSearch = async (term, type = 'remedies') => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      const results = await new Promise((resolve) => {
        setTimeout(() => {
          if (type === 'remedies') {
            resolve([
              {
                id: 'arnica-montana',
                name: 'Arnica Montana',
                scientificName: 'Arnica montana',
                description: 'Traditionally used for bruises and trauma',
                type: 'remedy'
              },
              {
                id: 'belladonna',
                name: 'Belladonna',
                scientificName: 'Atropa belladonna',
                description: 'Traditionally used for fever and inflammation',
                type: 'remedy'
              }
            ].filter(item => 
              item.name.toLowerCase().includes(term.toLowerCase()) ||
              item.scientificName.toLowerCase().includes(term.toLowerCase())
            ));
          } else if (type === 'doctors') {
            resolve([
              {
                id: 'dr-sarah-johnson',
                name: 'Dr. Sarah Johnson',
                credentials: ['ND', 'DHt'],
                location: 'Portland, OR',
                type: 'doctor'
              }
            ].filter(item => 
              item.name.toLowerCase().includes(term.toLowerCase()) ||
              item.location.toLowerCase().includes(term.toLowerCase())
            ));
          }
        }, 500);
      });

      setSearchResults(results);
      
      // Save to user's search history if logged in
      if (user) {
        const searchHistory = user.searchHistory || [];
        const newSearch = {
          term,
          type,
          timestamp: new Date().toISOString(),
          resultsCount: results.length
        };
        
        const updatedHistory = [
          newSearch,
          ...searchHistory.filter(item => item.term !== term)
        ].slice(0, 10); // Keep only last 10 searches
        
        updateUser({ searchHistory: updatedHistory });
      }
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setFilters({});
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({});
  };

  const value = {
    searchTerm,
    setSearchTerm,
    searchResults,
    loading,
    filters,
    debouncedSearch,
    performSearch,
    clearSearch,
    updateFilters,
    resetFilters
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}; 