import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookmarkIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

const UserDashboardPage = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Please log in</h2>
          <Link to="/login" className="btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center">
              <UserIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text-primary">
                Welcome back, {user.name}!
              </h1>
              <p className="text-text-secondary">Manage your educational content and preferences</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bookmarks Section */}
          <div className="card">
            <div className="flex items-center space-x-2 mb-6">
              <BookmarkIcon className="w-6 h-6 text-primary-green" />
              <h2 className="text-xl font-semibold text-text-primary">Bookmarked Content</h2>
            </div>

            {user.bookmarks && user.bookmarks.length > 0 ? (
              <div className="space-y-4">
                {user.bookmarks.slice(0, 5).map((bookmark) => (
                  <div key={bookmark.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-text-primary">{bookmark.name}</h3>
                        {bookmark.scientificName && (
                          <p className="text-sm text-text-secondary italic">{bookmark.scientificName}</p>
                        )}
                        <span className="inline-block bg-accent-teal bg-opacity-10 text-accent-teal text-xs px-2 py-1 rounded mt-2">
                          {bookmark.type}
                        </span>
                      </div>
                      <Link
                        to={`/${bookmark.type === 'remedy' ? 'remedies' : 'doctors'}/${bookmark.id}`}
                        className="text-primary-green hover:text-primary-dark text-sm"
                      >
                        View →
                      </Link>
                    </div>
                  </div>
                ))}
                {user.bookmarks.length > 5 && (
                  <p className="text-sm text-text-secondary text-center">
                    +{user.bookmarks.length - 5} more bookmarks
                  </p>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <BookmarkIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-text-secondary mb-4">No bookmarks yet</p>
                <Link to="/remedies" className="btn-primary">
                  Explore Remedies
                </Link>
              </div>
            )}
          </div>

          {/* Search History Section */}
          <div className="card">
            <div className="flex items-center space-x-2 mb-6">
              <ClockIcon className="w-6 h-6 text-primary-green" />
              <h2 className="text-xl font-semibold text-text-primary">Recent Searches</h2>
            </div>

            {user.searchHistory && user.searchHistory.length > 0 ? (
              <div className="space-y-3">
                {user.searchHistory.slice(0, 5).map((search, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-text-primary">{search.term}</p>
                      <p className="text-sm text-text-secondary">
                        {search.type} • {search.resultsCount} results
                      </p>
                    </div>
                    <span className="text-xs text-text-secondary">
                      {new Date(search.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                ))}
                {user.searchHistory.length > 5 && (
                  <p className="text-sm text-text-secondary text-center">
                    +{user.searchHistory.length - 5} more searches
                  </p>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <ClockIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-text-secondary mb-4">No search history yet</p>
                <Link to="/remedies" className="btn-primary">
                  Start Searching
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/remedies"
              className="card hover:shadow-md transition-shadow duration-200 text-center"
            >
              <h3 className="font-medium text-text-primary mb-2">Browse Remedies</h3>
              <p className="text-sm text-text-secondary">Explore homeopathic remedies</p>
            </Link>
            
            <Link
              to="/doctors"
              className="card hover:shadow-md transition-shadow duration-200 text-center"
            >
              <h3 className="font-medium text-text-primary mb-2">Find Doctors</h3>
              <p className="text-sm text-text-secondary">Connect with practitioners</p>
            </Link>
            
            <Link
              to="/ai-consultation"
              className="card hover:shadow-md transition-shadow duration-200 text-center"
            >
              <h3 className="font-medium text-text-primary mb-2">AI Assistant</h3>
              <p className="text-sm text-text-secondary">Learn with AI chat</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
