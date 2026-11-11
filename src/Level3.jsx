
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Level3 = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(null);
  const [success, setSuccess] = useState(false);
  const [popupType, setPopupType] = useState("error"); // "error" or "success"

  useEffect(() => {
    // Add confetti effect when level is completed
    if (success) {
      const createConfetti = () => {
        const confettiCount = 100;
        const container = document.querySelector('.level3-container');
        
        for (let i = 0; i < confettiCount; i++) {
          const confetti = document.createElement('div');
          confetti.className = 'confetti';
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
          confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
          confetti.style.animationDelay = `${Math.random() * 2}s`;
          container.appendChild(confetti);
          
          setTimeout(() => {
            confetti.remove();
          }, 5000);
        }
      };
      
      createConfetti();
    }
  }, [success]);

  const showPopup = (message, type = "error") => {
    setPopupType(type);
    setPopup(message);
    setTimeout(() => setPopup(null), 3000);
  };

  const hackWiFi = () => {
    setSuccess(true);
    showPopup("Success! You 'borrowed' your neighbor's Wi-Fi. Proceed with caution!", "success");
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleNextLevelClick = (e) => {
    e.preventDefault();
    navigate('/level4');
  };

  return (
    <div className="level-page">
      <div className="level3-container">
        <div className="level-header">
          <h1>LEVEL 3: Wi-Fi Emergency!</h1>
          <div className="wifi-icon">📶</div>
        </div>
        
        <div className="scenario-box">
          <h2>Oh No! Your Wi-Fi is Down!</h2>
          <p>Your internet connection suddenly dropped, and your parents aren't home to fix the router. Your online game tournament starts in 5 minutes! What do you do?</p>
        </div>
        
        {!success ? (
          <div className="options-grid">
            <button className="option-btn" onClick={() => showPopup("You tried guessing passwords... but no luck!")}>
              <span className="option-icon">🔑</span>
              <span>Guess Password</span>
            </button>
            <button className="option-btn" onClick={() => showPopup("Scanning for open networks... No luck in this neighborhood!")}>
              <span className="option-icon">🔍</span>
              <span>Find Open Wi-Fi</span>
            </button>
            <button className="option-btn" onClick={() => showPopup("Brute-force attack failed! Too many attempts! Your device is now blocked.")}>
              <span className="option-icon">🔨</span>
              <span>Brute-force Attack</span>
            </button>
            <button className="option-btn hack-btn" onClick={hackWiFi}>
              <span className="option-icon">💻</span>
              <span>Use Kali Linux Tools</span>
            </button>
          </div>
        ) : (
          <div className="success-container">
            <h2 className="success-message">🎉 Connection Established! 🎉</h2>
            <p className="warning-message">But remember, hacking Wi-Fi networks is illegal and unethical in real life!</p>
            <div className="lesson-box">
              <h3>What you should do instead:</h3>
              <ul>
                <li>Use your phone's hotspot in emergencies</li>
                <li>Call your parents for the password</li>
                <li>Ask neighbors politely if you can use their Wi-Fi</li>
                <li>Go to a location with public Wi-Fi</li>
              </ul>
            </div>
          </div>
        )}
        
        {popup && <div className={`popup ${popupType}`}>{popup}</div>}
        
        <div className="navigation-buttons">
          <a href="/" className="home-button" onClick={handleHomeClick}>
            <span className="home-icon">🏠</span>
            <span>Back to All Levels</span>
          </a>
          
          {success && (
            <a href="/level4" className="next-level-button" onClick={handleNextLevelClick}>
              <span>Next Level</span>
              <span className="next-icon">➡️</span>
            </a>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .level-page {
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #7bdff2 0%, #b2ebf2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          color: #263238;
        }
        
        .level3-container {
          padding: 30px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          max-width: 800px;
          margin: auto;
          position: relative;
          overflow: hidden;
        }
        
        .level-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          position: relative;
        }
        
        .level-header h1 {
          background: linear-gradient(90deg, #00838f, #006064);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-size: 32px;
          text-align: center;
          margin: 0;
          padding: 10px 0;
        }
        
        .wifi-icon {
          font-size: 40px;
          margin-left: 15px;
          animation: pulse 2s infinite;
        }
        
        .scenario-box {
          background: #e0f7fa;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 25px;
          border-left: 6px solid #00acc1;
        }
        
        .scenario-box h2 {
          color: #00838f;
          margin-top: 0;
        }
        
        .scenario-box p {
          font-size: 18px;
          line-height: 1.6;
        }
        
        .options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .option-btn {
          padding: 15px;
          border: none;
          border-radius: 12px;
          background: #b2ebf2;
          color: #00565e;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100px;
        }
        
        .option-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          background: #80deea;
        }
        
        .option-icon {
          font-size: 28px;
          margin-bottom: 8px;
        }
        
        .hack-btn {
          background: #4db6ac;
          color: white;
        }
        
        .hack-btn:hover {
          background: #009688;
        }
        
        .popup {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 15px 25px;
          border-radius: 10px;
          color: white;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          animation: slideDown 0.5s ease-out forwards;
          z-index: 100;
          max-width: 80%;
        }
        
        .popup.error {
          background: #f44336;
        }
        
        .popup.success {
          background: #4caf50;
        }
        
        .success-container {
          text-align: center;
          padding: 20px;
          margin-bottom: 25px;
          animation: fadeIn 1s;
        }
        
        .success-message {
          color: #00897b;
          font-size: 28px;
          margin-bottom: 10px;
        }
        
        .warning-message {
          color: #d32f2f;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .lesson-box {
          background: #e8f5e9;
          border-radius: 12px;
          padding: 20px;
          text-align: left;
          border-left: 6px solid #66bb6a;
        }
        
        .lesson-box h3 {
          color: #2e7d32;
          margin-top: 0;
        }
        
        .lesson-box ul {
          padding-left: 20px;
        }
        
        .lesson-box li {
          margin-bottom: 8px;
          font-size: 16px;
        }
        
        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 25px;
        }
        
        .home-button3, .next-level-button {
          padding: 12px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .home-button3 {
          background: #e0e0e0;
          color: #424242;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: all 0.3s ease;
        }
        
        .home-button3:hover {
          background: #bdbdbd;
        }
        
  
  .home-button3 span {
    font-weight: 500;
  }
        
        .next-level-button {
          background: #00acc1;
          color: white;
          margin-left: auto;
        }
        
        .next-level-button:hover {
          background: #00838f;
          transform: translateX(5px);
        }
        
        .home-icon, .next-icon {
          font-size: 20px;
          margin: 0 8px;
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.8;
          animation: fall linear forwards;
        }
        
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes slideDown {
          0% {
            transform: translate(-50%, -50px);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Level3;