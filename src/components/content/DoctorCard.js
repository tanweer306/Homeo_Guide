import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="card hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Doctor Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-text-primary">
                  {doctor.name}
                </h3>
                {doctor.verified && (
                  <CheckBadgeIcon className="w-5 h-5 text-green-600" title="Verified" />
                )}
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {doctor.credentials.map((credential, index) => (
                  <span
                    key={index}
                    className="inline-block bg-primary-green bg-opacity-10 text-primary-green text-xs px-2 py-1 rounded"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center text-text-secondary mb-3">
            <MapPinIcon className="w-4 h-4 mr-2" />
            <span>{doctor.location.city}, {doctor.location.state}</span>
          </div>

          {/* Specializations */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-text-primary mb-2">Specializations:</h4>
            <div className="flex flex-wrap gap-1">
              {doctor.specializations.map((spec, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Bio */}
          <p className="text-text-secondary text-sm mb-4">
            {doctor.bio}
          </p>

          {/* Experience & Consultation Types */}
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
            <span>{doctor.experience} years experience</span>
            <span>•</span>
            <span>{doctor.consultationTypes.join(', ')}</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:w-64">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-text-primary mb-3">Contact Information</h4>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="w-4 h-4 text-text-secondary mr-2" />
                <a 
                  href={`tel:${doctor.contact.phone}`}
                  className="text-primary-green hover:text-primary-dark text-sm"
                >
                  {doctor.contact.phone}
                </a>
              </div>
              
              <div className="flex items-center">
                <EnvelopeIcon className="w-4 h-4 text-text-secondary mr-2" />
                <a 
                  href={`mailto:${doctor.contact.email}`}
                  className="text-primary-green hover:text-primary-dark text-sm"
                >
                  {doctor.contact.email}
                </a>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="btn-primary w-full text-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
