
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./level2.css";

const Level2 = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(null);
  const [step, setStep] = useState(0);
  const [fixed, setFixed] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [levelCompleted, setLevelCompleted] = useState(false);

  const wifiImg = "/api/placeholder/600/400"; // Replace with actual image if needed

  const showPopup = (message, nextStep = null) => {
    setPopup(message);
    setTimeout(() => setPopup(null), 2500);
    if (nextStep !== null) {
      setTimeout(() => setStep(nextStep), 2500);
    }
  };

  const fixWiFi = () => {
    setFixed(true);
    showPopup("Great job! The Wi-Fi is now stable, and the kid can finish his game!");
    setTimeout(() => setLevelCompleted(true), 2500);
  };

  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate('/'); // Navigate to home route
  };

  const handleNextLevelClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate('/level3'); // Navigate to level 2 route
  };

  useEffect(() => {
    setIsInfoVisible(true);
  }, [step]);

  return (
    <div className="game-container">
      {/* Home button */}
      {/* <button onClick={handleHomeClick} className="home-button2">
        <HomeIcon />
        <span>Return Home</span>
      </button> */}
      <a href="/" className="home-button" onClick={handleHomeClick}>
          <span className="home-icon">🏠</span>
          <span>Back to All Levels</span>
        </a>

      <div className="game-card">
        {/* Header */}
        <div className="game-header">
          <h1>Help the Kid Fix Wi-Fi!</h1>
          <p>The kid is frustrated because his Wi-Fi keeps disconnecting! Help him fix it.</p>
        </div>

        <div className="game-content">
          {/* Image */}
          <div className="game-image">
            <img src={wifiImg} alt="Wi-Fi Troubleshooting" />
          </div>

          {/* Game Steps */}
          <div className="game-controls">
            {!fixed ? (
              <>
                <div className="icon-container">
                  {step === 0 && <div className="icon red"><WifiOffIcon /></div>}
                  {step === 1 && <div className="icon orange pulse"><SettingsIcon size={48} /></div>}
                  {step === 2 && <div className="icon yellow pulse"><RefreshIcon /></div>}
                  {step === 3 && <div className="icon blue"><WifiIcon /></div>}
                </div>

                <div className="step-actions">
                  {step === 0 && (
                    <button className="action-button blue-gradient" onClick={() => showPopup("The router seems fine, but let's check other options!", 1)}>
                      Check Router <SettingsIcon size={18} />
                    </button>
                  )}
                  {step === 1 && (
                    <button className="action-button orange-gradient" onClick={() => showPopup("Repositioned the antenna! But the issue is still there!", 2)}>
                      Adjust Antenna <SettingsIcon size={18} />
                    </button>
                  )}
                  {step === 2 && (
                    <button className="action-button yellow-gradient" onClick={() => showPopup("Restarted the router! Signal is better now.", 3)}>
                      Restart Router <RefreshIcon />
                    </button>
                  )}
                  {step === 3 && (
                    <button className="action-button green-gradient" onClick={fixWiFi}>
                      Fix Connection <WifiIcon />
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="success-container">
                <div className="icon green"><CheckCircleIcon /></div>
                <h2>You fixed the Wi-Fi!</h2>
                <button className="action-button green-gradient" onClick={handleNextLevelClick}>
                  Next Level <ArrowRightIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup */}
      {popup && <div className="popup-message"><AlertTriangleIcon /> {popup}</div>}
    </div>
  );
};

// Icon Components
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const WifiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const WifiOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="1" y1="1" x2="23" y2="23" />
    <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
    <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
    <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
    <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const SettingsIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2v6h-6" />
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M3 22v-6h6" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export default Level2;
