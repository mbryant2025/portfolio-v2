import React from 'react';
import '../styles/back.css';

const BackButton: React.FC = () => {
  const handleGoBack = () => {

    // Kill any audio
    const audio = document.getElementsByTagName("audio");
    for (let i = 0; i < audio.length; i++) {
      audio[i].pause();
    }

    // Check if the previous URL contains "michaelcbryant.com"
    console.log(document.referrer)
    if (document.referrer.includes('michaelcbryant.com') || document.referrer.includes('localhost')) {
      window.history.back();
    } else {
      // Redirect to the root of React Router
      window.location.href = '/';
    }
  };

  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/img/back-arrow.png`} alt="" className="back-button" onClick={handleGoBack} />
    </div>
  );
};

export default BackButton;
