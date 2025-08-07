import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import RemedySearchPage from './pages/RemedySearchPage';
import RemedyDetailPage from './pages/RemedyDetailPage';
import DoctorSearchPage from './pages/DoctorSearchPage';
import AIConsultationPage from './pages/AIConsultationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboardPage from './pages/UserDashboardPage';
import { AuthProvider } from './contexts/AuthContext';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/remedies" element={<RemedySearchPage />} />
              <Route path="/remedies/:id" element={<RemedyDetailPage />} />
              <Route path="/doctors" element={<DoctorSearchPage />} />
              <Route path="/ai-consultation" element={<AIConsultationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<UserDashboardPage />} />
            </Routes>
          </Layout>
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App; 