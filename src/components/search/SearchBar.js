import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearch } from '../../contexts/SearchContext';

const SearchBar = ({ placeholder = "Search...", className = "" }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const { debouncedSearch } = useSearch();

  const handleSearchChange = (value) => {
    setLocalSearchTerm(value);
    if (value.trim()) {
      debouncedSearch(value);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={localSearchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder={placeholder}
        className="input-field pl-10"
      />
    </div>
  );
};

export default SearchBar; 