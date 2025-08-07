import React from 'react';
import { ShieldExclamationIcon } from '@heroicons/react/24/outline';

const AIDisclaimerBanner = () => {
  return (
    <div className="bg-warning-red text-white p-4 rounded-lg">
      <div className="flex items-start space-x-3">
        <ShieldExclamationIcon className="w-6 h-6 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold mb-1">Educational Information Only</h3>
          <p className="text-sm">
            This AI assistant provides educational information about homeopathy only. 
            It is NOT medical advice. Always consult qualified healthcare professionals for medical treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIDisclaimerBanner;
