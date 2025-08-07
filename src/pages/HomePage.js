import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline';
import SearchBar from '../components/search/SearchBar';

const HomePage = () => {
  const popularRemedies = [
    {
      id: 'arnica-montana',
      name: 'Arnica Montana',
      scientificName: 'Arnica montana',
      description: 'Traditionally used for bruises and trauma'
    },
    {
      id: 'belladonna',
      name: 'Belladonna',
      scientificName: 'Atropa belladonna',
      description: 'Traditionally used for fever and inflammation'
    },
    {
      id: 'chamomilla',
      name: 'Chamomilla',
      scientificName: 'Matricaria chamomilla',
      description: 'Traditionally used for teething and irritability'
    }
  ];

  const features = [
    {
      icon: MagnifyingGlassIcon,
      title: 'Remedy Database',
      description: 'Comprehensive educational information about homeopathic remedies',
      link: '/remedies'
    },
    {
      icon: UserGroupIcon,
      title: 'Find Doctors',
      description: 'Connect with qualified homeopathic practitioners in your area',
      link: '/doctors'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI Consultation',
      description: 'Educational AI chat for learning about homeopathy (not medical advice)',
      link: '/ai-consultation'
    },
    {
      icon: BookOpenIcon,
      title: 'Educational Content',
      description: 'Learn about homeopathic principles and practices',
      link: '/learn'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Guide to Homeopathic Education
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary-cream max-w-3xl mx-auto">
              Comprehensive educational platform for learning about homeopathic remedies, 
              finding practitioners, and understanding homeopathic principles.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar placeholder="Search remedies, doctors, or topics..." />
            </div>

            {/* Disclaimer Banner */}
            <div className="bg-warning-red text-white p-4 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <ShieldExclamationIcon className="w-5 h-5" />
                <span className="font-semibold">Educational Information Only</span>
              </div>
              <p className="text-sm">
                This platform provides educational content only. Not medical advice. 
                Always consult qualified healthcare professionals for medical treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Explore Homeopathic Education
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Discover comprehensive resources for learning about homeopathic principles, 
              remedies, and finding qualified practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="card hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="text-center">
                  <feature.icon className="w-12 h-12 text-primary-green mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Remedies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Popular Educational Remedies
            </h2>
            <p className="text-text-secondary text-lg">
              Learn about commonly discussed homeopathic remedies and their traditional uses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularRemedies.map((remedy) => (
              <Link
                key={remedy.id}
                to={`/remedies/${remedy.id}`}
                className="card hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="educational-badge mb-3">Educational</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary-green transition-colors duration-200">
                  {remedy.name}
                </h3>
                <p className="text-sm text-text-secondary italic mb-2">
                  {remedy.scientificName}
                </p>
                <p className="text-text-secondary">
                  {remedy.description}
                </p>
                <div className="mt-4 text-primary-green font-medium group-hover:underline">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/remedies" className="btn-primary">
              Browse All Remedies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find a Qualified Practitioner
          </h2>
          <p className="text-xl mb-8 text-secondary-cream max-w-2xl mx-auto">
            Connect with experienced homeopathic doctors and practitioners in your area 
            for professional consultation and treatment.
          </p>
          <Link to="/doctors" className="btn-secondary">
            Find Doctors Near You
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Trusted Educational Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold text-primary-green mb-2">1000+</div>
              <div className="text-text-secondary">Educational Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-green mb-2">500+</div>
              <div className="text-text-secondary">Verified Practitioners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-green mb-2">50K+</div>
              <div className="text-text-secondary">Monthly Learners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 