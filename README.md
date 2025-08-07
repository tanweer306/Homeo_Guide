# HomeoGuide - Educational Homeopathic Information Platform

A comprehensive React-based web application providing educational information about homeopathic remedies, practitioner directory, and AI consultation features. This platform emphasizes educational content with strong legal disclaimers and professional medical referrals.

## 🎯 Project Overview

HomeoGuide is designed to be a trusted educational resource for learning about homeopathic principles and remedies. The platform includes:

- **Educational Remedy Database** - Comprehensive information about homeopathic remedies
- **Practitioner Directory** - Find qualified homeopathic doctors and practitioners
- **AI Educational Assistant** - Interactive learning through AI-powered conversations
- **User Dashboard** - Personal bookmarking and search history management
- **Strong Legal Disclaimers** - Clear educational-only messaging throughout

## ⚠️ Important Disclaimer

**This platform provides educational information only and is not intended as medical advice. Always consult with qualified healthcare professionals for medical treatment. Use of this information is at your own risk.**

## 🚀 Features

### Core Functionality
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Search & Filter** - Advanced search with debouncing and filtering
- **User Authentication** - Registration, login, and user management
- **Bookmarking System** - Save favorite remedies and content
- **AI Consultation** - Educational AI chat with consent flow
- **Professional Referrals** - Clear pathways to find practitioners

### Educational Focus
- Comprehensive remedy information with traditional uses
- Historical references and preparation methods
- Related remedies and contraindications
- Professional consultation recommendations
- Educational disclaimers throughout

### Safety & Legal
- Multi-step AI consent process
- Prominent medical disclaimers
- Professional referral system
- Educational-only content labeling
- Risk warnings and professional consultation reminders

## 🛠️ Tech Stack

- **Frontend**: React 18+ with functional components and hooks
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Context API + useState/useReducer
- **Routing**: React Router v6
- **HTTP Client**: Axios for API calls
- **Icons**: Heroicons
- **UI Components**: Custom components with Tailwind

## 🎨 Design System

### Color Palette
```css
--primary-green: #87A96B      /* Sage green */
--primary-dark: #355E3B       /* Forest green */
--secondary-cream: #F5F5DC    /* Warm cream */
--accent-teal: #4A9B8E        /* Muted teal */
--text-primary: #333333       /* Dark charcoal */
--text-secondary: #666666     /* Medium gray */
--warning-red: #DC2626        /* Error/warning */
--background: #FFFFFF         /* Pure white */
--surface: #F9FAFB           /* Light gray background */
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, dark gray
- **Body**: Medium weight, readable line height
- **Captions**: Smaller, secondary color

## 📁 Project Structure

```
src/
├── components/
│   ├── ai/                    # AI consultation components
│   │   ├── AIConsentModal.js
│   │   ├── AIDisclaimerBanner.js
│   │   └── AIChat.js
│   ├── content/               # Content display components
│   │   ├── RemedyCard.js
│   │   └── DoctorCard.js
│   ├── layout/                # Layout components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Layout.js
│   └── search/                # Search components
│       └── SearchBar.js
├── contexts/                  # React contexts
│   ├── AuthContext.js
│   └── SearchContext.js
├── pages/                     # Page components
│   ├── HomePage.js
│   ├── RemedySearchPage.js
│   ├── RemedyDetailPage.js
│   ├── DoctorSearchPage.js
│   ├── AIConsultationPage.js
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   └── UserDashboardPage.js
├── App.js                     # Main app component
├── index.js                   # Entry point
└── index.css                  # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd homeoguide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with main search
- Feature cards for different sections
- Popular remedies preview
- Trust indicators and statistics

### Remedy Database (`/remedies`)
- Search and filter remedies
- Remedy cards with educational information
- Detailed remedy pages with comprehensive information
- Bookmarking functionality

### Doctor Directory (`/doctors`)
- Location-based practitioner search
- Doctor profiles with credentials and contact info
- Verification badges and specializations
- Direct contact options

### AI Consultation (`/ai-consultation`)
- Multi-step consent process
- Educational AI chat interface
- Prominent disclaimers
- Professional consultation reminders

### User Dashboard (`/dashboard`)
- Personal bookmarks management
- Search history tracking
- Quick access to main features
- User preferences

## 🔒 Authentication

The platform includes a complete authentication system:
- User registration with terms acceptance
- Login with remember me functionality
- Password reset capabilities
- User profile management
- Session persistence

## 🎯 Key Features Implementation

### Search & Filter System
- Debounced search with instant results
- Advanced filtering by multiple criteria
- Search history tracking
- Search suggestions and autocomplete

### Bookmarking System
- Save remedies and doctors
- Personal bookmark management
- Quick access from dashboard
- Cross-device synchronization

### AI Consultation
- Multi-step consent process
- Educational-only responses
- Professional referral integration
- Risk warnings and disclaimers

## 📋 Legal & Compliance

### Medical Disclaimers
- Prominent educational-only messaging
- Professional consultation recommendations
- Risk warnings throughout the platform
- Clear separation from medical advice

### Privacy & Terms
- User data protection
- Educational content terms
- Professional referral disclaimers
- Medical information disclaimers

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Create a `.env` file for production:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_AI_ENDPOINT=your_ai_endpoint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Important Notes

- **Educational Purpose Only**: This platform is designed for educational purposes only
- **Not Medical Advice**: All content should not be considered medical advice
- **Professional Consultation**: Always recommend consulting qualified healthcare professionals
- **Legal Compliance**: Ensure all disclaimers and legal requirements are met

## 🆘 Support

For support or questions about the educational content, please contact the development team or refer to the professional consultation recommendations within the platform.

---

**Remember**: This platform provides educational information only. Always consult qualified healthcare professionals for medical treatment.
