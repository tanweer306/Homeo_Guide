import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-text-primary">HomeoGuide</span>
            </div>
            <p className="text-text-secondary mb-4">
              Educational homeopathic information platform for learning purposes only.
            </p>
            
            {/* Important Disclaimer */}
            <div className="bg-warning-red text-white p-3 rounded-lg">
              <h4 className="font-semibold mb-1">⚠️ Medical Disclaimer</h4>
              <p className="text-sm">
                Educational information only. Not medical advice. Consult healthcare professionals. Use at your own risk.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-text-secondary hover:text-primary-green">Home</Link></li>
              <li><Link to="/remedies" className="text-text-secondary hover:text-primary-green">Remedies</Link></li>
              <li><Link to="/doctors" className="text-text-secondary hover:text-primary-green">Find Doctors</Link></li>
              <li><Link to="/ai-consultation" className="text-text-secondary hover:text-primary-green">AI Chat</Link></li>
              <li><Link to="/learn" className="text-text-secondary hover:text-primary-green">Learn</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-text-secondary hover:text-primary-green">About</Link></li>
              <li><Link to="/privacy" className="text-text-secondary hover:text-primary-green">Privacy</Link></li>
              <li><Link to="/terms" className="text-text-secondary hover:text-primary-green">Terms</Link></li>
              <li><Link to="/disclaimer" className="text-text-secondary hover:text-primary-green">Disclaimer</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-primary-green">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} HomeoGuide. All rights reserved. Educational information only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 