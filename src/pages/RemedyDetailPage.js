import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../contexts/AuthContext';

const RemedyDetailPage = () => {
  const { id } = useParams();
  const { user, addBookmark, removeBookmark } = useAuth();
  const [remedy, setRemedy] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample remedy data
  const sampleRemedy = {
    id: 'arnica-montana',
    name: 'Arnica Montana',
    scientificName: 'Arnica montana',
    commonNames: ['Mountain Arnica', "Leopard's Bane"],
    sourceType: 'Plant',
    family: 'Asteraceae',
    traditionalUses: [
      'Historically used for bruises and trauma',
      'Traditional wound care applications',
      'Shock and injury support'
    ],
    preparation: 'Potentized from fresh flowering plant',
    potencies: ['6C', '12C', '30C', '200C', '1M'],
    contraindications: 'Not for open wounds (traditional topical use)',
    historicalReferences: [
      'Hahnemann\'s Materia Medica Pura',
      'Clarke\'s Dictionary of Practical Materia Medica'
    ],
    relatedRemedies: ['Bellis Perennis', 'Hypericum', 'Ledum'],
    keywords: ['trauma', 'bruising', 'shock', 'injury']
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRemedy(sampleRemedy);
      setLoading(false);
    }, 500);
  });

  const isBookmarked = user?.bookmarks?.some(item => item.id === remedy?.id);

  const handleBookmarkToggle = () => {
    if (!user) {
      window.location.href = '/login';
      return;
    }

    if (isBookmarked) {
      removeBookmark(remedy.id);
    } else {
      addBookmark({
        id: remedy.id,
        name: remedy.name,
        type: 'remedy',
        scientificName: remedy.scientificName
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">Loading remedy information...</div>
        </div>
      </div>
    );
  }

  if (!remedy) {
    return (
      <div className="min-h-screen bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">Remedy not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/remedies" 
          className="inline-flex items-center text-primary-green hover:text-primary-dark mb-6"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Remedies
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="educational-badge mb-3">Educational Information</div>
              <h1 className="text-3xl font-bold text-text-primary mb-2">
                {remedy.name}
              </h1>
              <p className="text-lg text-text-secondary italic mb-4">
                {remedy.scientificName}
              </p>
              <div className="flex flex-wrap gap-2">
                {remedy.commonNames.map((name, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
            
            <button
              onClick={handleBookmarkToggle}
              className="text-gray-400 hover:text-primary-green transition-colors duration-200 p-2"
              title={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
            >
              {isBookmarked ? (
                <BookmarkSolidIcon className="w-6 h-6 text-primary-green" />
              ) : (
                <BookmarkIcon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Important Disclaimer */}
          <div className="bg-warning-red text-white p-4 rounded-lg">
            <h4 className="font-semibold mb-2">⚠️ Educational Information Only</h4>
            <p className="text-sm">
              This information is provided for educational purposes only and is not intended as medical advice. 
              Always consult with qualified healthcare professionals for medical treatment. 
              Use of this information is at your own risk.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Traditional Uses */}
            <div className="card">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Traditional Uses
              </h2>
              <ul className="space-y-2">
                {remedy.traditionalUses.map((use, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-green mr-2">•</span>
                    <span className="text-text-secondary">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation */}
            <div className="card">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Preparation
              </h2>
              <p className="text-text-secondary mb-4">{remedy.preparation}</p>
              
              <h3 className="font-medium text-text-primary mb-2">Common Potencies:</h3>
              <div className="flex flex-wrap gap-2">
                {remedy.potencies.map((potency, index) => (
                  <span
                    key={index}
                    className="inline-block bg-accent-teal bg-opacity-10 text-accent-teal text-sm px-3 py-1 rounded"
                  >
                    {potency}
                  </span>
                ))}
              </div>
            </div>

            {/* Historical References */}
            <div className="card">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Historical References
              </h2>
              <ul className="space-y-2">
                {remedy.historicalReferences.map((reference, index) => (
                  <li key={index} className="text-text-secondary">
                    {reference}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-4">Basic Information</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-text-primary">Source Type:</span>
                  <p className="text-text-secondary">{remedy.sourceType}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-text-primary">Family:</span>
                  <p className="text-text-secondary">{remedy.family}</p>
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {remedy.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-block bg-accent-teal bg-opacity-10 text-accent-teal text-sm px-2 py-1 rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Remedies */}
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-4">Related Remedies</h3>
              <div className="space-y-2">
                {remedy.relatedRemedies.map((related, index) => (
                  <Link
                    key={index}
                    to={`/remedies/${related.toLowerCase().replace(' ', '-')}`}
                    className="block text-primary-green hover:text-primary-dark hover:underline"
                  >
                    {related}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contraindications */}
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-4">Contraindications</h3>
              <p className="text-text-secondary text-sm">{remedy.contraindications}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemedyDetailPage;
