import React, { useState } from 'react';
import { XMarkIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

const AIConsentModal = ({ isOpen, onAccept, onDecline }) => {
  const [consents, setConsents] = useState({
    educational: false,
    notMedical: false,
    professional: false,
    understand: false
  });

  const handleConsentChange = (consentType) => {
    setConsents(prev => ({
      ...prev,
      [consentType]: !prev[consentType]
    }));
  };

  const allConsentsAccepted = Object.values(consents).every(Boolean);

  const handleAccept = () => {
    if (allConsentsAccepted) {
      onAccept();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <ShieldExclamationIcon className="w-8 h-8 text-warning-red" />
              <h2 className="text-2xl font-bold text-text-primary">
                Important Consent Required
              </h2>
            </div>
            <button
              onClick={onDecline}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Warning Banner */}
          <div className="bg-warning-red text-white p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">⚠️ Educational Information Only</h3>
            <p className="text-sm">
              This AI assistant provides educational information about homeopathy only. 
              It is NOT a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="educational"
                checked={consents.educational}
                onChange={() => handleConsentChange('educational')}
                className="mt-1 rounded border-gray-300 text-primary-green focus:ring-primary-green"
              />
              <label htmlFor="educational" className="text-sm text-text-primary">
                I understand this AI assistant provides <strong>educational information only</strong> about homeopathic principles and remedies.
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="notMedical"
                checked={consents.notMedical}
                onChange={() => handleConsentChange('notMedical')}
                className="mt-1 rounded border-gray-300 text-primary-green focus:ring-primary-green"
              />
              <label htmlFor="notMedical" className="text-sm text-text-primary">
                I understand this is <strong>NOT medical advice</strong> and should not be used for self-diagnosis or treatment.
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="professional"
                checked={consents.professional}
                onChange={() => handleConsentChange('professional')}
                className="mt-1 rounded border-gray-300 text-primary-green focus:ring-primary-green"
              />
              <label htmlFor="professional" className="text-sm text-text-primary">
                I agree to <strong>consult qualified healthcare professionals</strong> for any medical concerns or treatment decisions.
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="understand"
                checked={consents.understand}
                onChange={() => handleConsentChange('understand')}
                className="mt-1 rounded border-gray-300 text-primary-green focus:ring-primary-green"
              />
              <label htmlFor="understand" className="text-sm text-text-primary">
                I understand that using this information is at my own risk and I will not hold HomeoGuide responsible for any outcomes.
              </label>
            </div>
          </div>

          {/* Professional Consultation Reminder */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-blue-900 mb-2">Professional Consultation Recommended</h4>
            <p className="text-sm text-blue-800">
              For personalized homeopathic treatment, we strongly recommend consulting with a qualified homeopathic practitioner. 
              You can find verified practitioners in our <a href="/doctors" className="underline">doctor directory</a>.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onDecline}
              className="btn-outline flex-1"
            >
              Decline & Exit
            </button>
            <button
              onClick={handleAccept}
              disabled={!allConsentsAccepted}
              className={`btn-primary flex-1 ${!allConsentsAccepted ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              I Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsentModal;
