import React, { useState } from 'react';
import { ShieldExclamationIcon } from '@heroicons/react/24/outline';
import AIConsentModal from '../components/ai/AIConsentModal';
import AIChat from '../components/ai/AIChat';
import AIDisclaimerBanner from '../components/ai/AIDisclaimerBanner';

const AIConsultationPage = () => {
  const [hasConsented, setHasConsented] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(true);

  const handleAcceptConsent = () => {
    setHasConsented(true);
    setShowConsentModal(false);
  };

  const handleDeclineConsent = () => {
    setShowConsentModal(false);
    // Redirect to home or show alternative content
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            AI Educational Assistant
          </h1>
          <p className="text-text-secondary text-lg">
            Learn about homeopathic principles and remedies through AI-powered educational conversations.
          </p>
        </div>

        {/* Consent Modal */}
        <AIConsentModal
          isOpen={showConsentModal}
          onAccept={handleAcceptConsent}
          onDecline={handleDeclineConsent}
        />

        {/* AI Chat Interface */}
        {hasConsented && (
          <div className="space-y-6">
            <AIDisclaimerBanner />
            <AIChat />
          </div>
        )}

        {/* Alternative Content if Consent Declined */}
        {!hasConsented && !showConsentModal && (
          <div className="text-center py-12">
            <ShieldExclamationIcon className="w-16 h-16 text-text-secondary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Consent Required
            </h2>
            <p className="text-text-secondary mb-6">
              To use the AI educational assistant, you must first read and accept the terms and conditions.
            </p>
            <button
              onClick={() => setShowConsentModal(true)}
              className="btn-primary"
            >
              Review Terms & Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIConsultationPage;
