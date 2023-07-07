import React from 'react';
import './styles/back.css';

const BackButton: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button onClick={handleGoBack} className="back-button">&lt;</button>
    </div>
  );
};

export default BackButton;

