import React, { useState, useEffect } from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import DoctorCard from '../components/content/DoctorCard';

const DoctorSearchPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [location, setLocation] = useState('');

  const sampleDoctors = [
    {
      id: 'dr-sarah-johnson',
      name: 'Dr. Sarah Johnson',
      credentials: ['ND', 'DHt', 'CCH'],
      verified: true,
      specializations: ['Classical Homeopathy', 'Pediatric Care'],
      location: {
        city: 'Portland',
        state: 'Oregon'
      },
      contact: {
        phone: '(555) 123-4567',
        email: 'dr.johnson@example.com'
      },
      consultationTypes: ['In-Person', 'Telehealth'],
      experience: 15,
      bio: 'Dr. Johnson specializes in classical homeopathy with focus on constitutional treatment.'
    },
    {
      id: 'dr-michael-chen',
      name: 'Dr. Michael Chen',
      credentials: ['MD', 'CCH'],
      verified: true,
      specializations: ['Acute Care', 'Chronic Disease'],
      location: {
        city: 'Seattle',
        state: 'Washington'
      },
      contact: {
        phone: '(555) 987-6543',
        email: 'dr.chen@example.com'
      },
      consultationTypes: ['In-Person'],
      experience: 12,
      bio: 'Dr. Chen focuses on acute care and chronic disease management using homeopathic principles.'
    }
  ];

  useEffect(() => {
    setDoctors(sampleDoctors);
  }, []);

  const filteredDoctors = doctors.filter(doctor => {
    if (!location) return true;
    return doctor.location.city.toLowerCase().includes(location.toLowerCase()) || 
           doctor.location.state.toLowerCase().includes(location.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Find Homeopathic Practitioners
          </h1>
          <p className="text-text-secondary text-lg">
            Connect with qualified homeopathic doctors and practitioners in your area.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md">
            <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city or state..."
              className="input-field pl-10"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorSearchPage;
