import React from 'react';
import { Link } from 'react-router-dom';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../../contexts/AuthContext';

const RemedyCard = ({ remedy }) => {
  const { user, addBookmark, removeBookmark } = useAuth();
  
  const isBookmarked = user?.bookmarks?.some(item => item.id === remedy.id);

  const handleBookmarkToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      // Redirect to login if not authenticated
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

  return (
    <Link to={`/remedies/${remedy.id}`} className="block">
      <div className="card hover:shadow-md transition-shadow duration-200 group h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="educational-badge mb-2">Educational</div>
            <h3 className="text-xl font-semibold text-text-primary mb-1 group-hover:text-primary-green transition-colors duration-200">
              {remedy.name}
            </h3>
            <p className="text-sm text-text-secondary italic">
              {remedy.scientificName}
            </p>
          </div>
          
          {/* Bookmark Button */}
          <button
            onClick={handleBookmarkToggle}
            className="text-gray-400 hover:text-primary-green transition-colors duration-200 p-1"
            title={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
          >
            {isBookmarked ? (
              <BookmarkSolidIcon className="w-5 h-5 text-primary-green" />
            ) : (
              <BookmarkIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Description */}
        <p className="text-text-secondary mb-4 line-clamp-3">
          {remedy.description}
        </p>

        {/* Common Names */}
        {remedy.commonNames && remedy.commonNames.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-text-primary mb-2">Common Names:</h4>
            <div className="flex flex-wrap gap-1">
              {remedy.commonNames.map((name, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Keywords */}
        {remedy.keywords && remedy.keywords.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-text-primary mb-2">Keywords:</h4>
            <div className="flex flex-wrap gap-1">
              {remedy.keywords.slice(0, 3).map((keyword, index) => (
                <span
                  key={index}
                  className="inline-block bg-accent-teal bg-opacity-10 text-accent-teal text-xs px-2 py-1 rounded"
                >
                  {keyword}
                </span>
              ))}
              {remedy.keywords.length > 3 && (
                <span className="text-xs text-text-secondary">
                  +{remedy.keywords.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-text-secondary">
              {remedy.sourceType} • {remedy.family}
            </div>
            <div className="text-primary-green font-medium group-hover:underline">
              Learn More →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RemedyCard; 