import React, { useState, useEffect } from 'react';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import SearchBar from '../components/search/SearchBar';
import RemedyCard from '../components/content/RemedyCard';

const RemedySearchPage = () => {
  const [remedies, setRemedies] = useState([]);
  const [filters, setFilters] = useState({
    sourceType: '',
    family: '',
    potency: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const sampleRemedies = [
    {
      id: 'arnica-montana',
      name: 'Arnica Montana',
      scientificName: 'Arnica montana',
      commonNames: ['Mountain Arnica', "Leopard's Bane"],
      sourceType: 'Plant',
      family: 'Asteraceae',
      description: 'Traditionally used for bruises and trauma',
      keywords: ['trauma', 'bruising', 'shock', 'injury']
    },
    {
      id: 'belladonna',
      name: 'Belladonna',
      scientificName: 'Atropa belladonna',
      commonNames: ['Deadly Nightshade'],
      sourceType: 'Plant',
      family: 'Solanaceae',
      description: 'Traditionally used for fever and inflammation',
      keywords: ['fever', 'inflammation', 'sudden onset']
    },
    {
      id: 'chamomilla',
      name: 'Chamomilla',
      scientificName: 'Matricaria chamomilla',
      commonNames: ['German Chamomile'],
      sourceType: 'Plant',
      family: 'Asteraceae',
      description: 'Traditionally used for teething and irritability',
      keywords: ['teething', 'irritability', 'pain']
    }
  ];

  useEffect(() => {
    setRemedies(sampleRemedies);
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      sourceType: '',
      family: '',
      potency: ''
    });
  };

  const filteredRemedies = remedies.filter(remedy => {
    if (filters.sourceType && remedy.sourceType !== filters.sourceType) return false;
    if (filters.family && remedy.family !== filters.family) return false;
    return true;
  });

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Remedy Database
          </h1>
          <p className="text-text-secondary text-lg">
            Educational information about homeopathic remedies and their traditional uses.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search Bar */}
          <div className="flex-1">
            <SearchBar placeholder="Search remedies by name, scientific name, or keywords..." />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-outline flex items-center space-x-2 lg:hidden"
          >
            <FunnelIcon className="w-5 h-5" />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <span className="bg-primary-green text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-text-primary">Filters</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-sm text-primary-green hover:text-primary-dark"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Source Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Source Type
                </label>
                <select
                  value={filters.sourceType}
                  onChange={(e) => handleFilterChange('sourceType', e.target.value)}
                  className="input-field"
                >
                  <option value="">All Types</option>
                  <option value="Plant">Plant</option>
                  <option value="Mineral">Mineral</option>
                  <option value="Animal">Animal</option>
                </select>
              </div>

              {/* Family Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Family
                </label>
                <select
                  value={filters.family}
                  onChange={(e) => handleFilterChange('family', e.target.value)}
                  className="input-field"
                >
                  <option value="">All Families</option>
                  <option value="Asteraceae">Asteraceae</option>
                  <option value="Solanaceae">Solanaceae</option>
                  <option value="Ranunculaceae">Ranunculaceae</option>
                </select>
              </div>

              {/* Active Filters */}
              {activeFiltersCount > 0 && (
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-text-primary mb-2">Active Filters:</h4>
                  <div className="space-y-2">
                    {Object.entries(filters).map(([key, value]) => {
                      if (!value) return null;
                      return (
                        <div key={key} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                          <span className="text-sm text-text-secondary">
                            {key}: {value}
                          </span>
                          <button
                            onClick={() => handleFilterChange(key, '')}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <XMarkIcon className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {filteredRemedies.length > 0 ? (
              <div>
                <div className="mb-6">
                  <p className="text-text-secondary">
                    Showing {filteredRemedies.length} remedy{filteredRemedies.length !== 1 ? 'ies' : ''}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredRemedies.map((remedy) => (
                    <RemedyCard key={remedy.id} remedy={remedy} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-text-secondary mb-4">No remedies found</div>
                <button
                  onClick={resetFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemedySearchPage; 