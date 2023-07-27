import React from 'react';
import './styles/back.css';

const BackButton: React.FC = () => {
  const handleGoBack = () => {
    // Check if the previous URL contains "michaelcbryant.com"
    if (document.referrer.includes('michaelcbryant.com')) {
      window.history.back();
    } else {
      // Redirect to the root of your React Router
      window.location.href = '/';
    }
  };

  return (
    <div>
      <button onClick={handleGoBack} className="back-button">&lt;</button>
    </div>
  );
};

export default BackButton;
