import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/authsliice";

const happyFace = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Face-smile.svg/1024px-Face-smile.svg.png";
const nerdFace = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Emoji_u1f913.svg/1024px-Emoji_u1f913.svg.png";
const coolFace = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Emoji_u1f60e.svg/1024px-Emoji_u1f60e.svg.png";
const surpriseEgg = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Easter_egg_1.svg/1024px-Easter_egg_1.svg.png";
const clickSound = "https://www.soundjay.com/button/button-3.mp3";
const avatars = [happyFace, nerdFace, coolFace];

const HomePage = () => {
  // const [musicOn, setMusicOn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(
    avatars[Math.floor(Math.random() * avatars.length)]
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    // Check login status from localStorage
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
    
    // Get user data if logged in
    if (loginStatus) {
      const user = JSON.parse(localStorage.getItem('data') || '{"name":"User","email":"user@example.com","mobile":"1234567890"}');
      setUserData(user);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const showEasterEgg = () => {
    setCurrentAvatar(surpriseEgg);
    setTimeout(() => {
      setCurrentAvatar(avatars[Math.floor(Math.random() * avatars.length)]);
    }, 3000);
  };

  const handleButtonClick = (number) => {
    navigate(`/level${number}`);
  };

  const handleLogin = () => {
  navigate('/level1');
};

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const handleLogout = async() => {

    const response = await dispatch(logout())
    // if(response?.payload?.success){
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('userData');
      setIsLoggedIn(false);
      setUserDropdownOpen(false);
      setUserData(null);
    // }
  };

  return (
    <div className={`homepage-container ${darkMode ? "dark" : "light"}`}>
      <style>{`
        body {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          margin: 0;
          background: ${darkMode ? "#0f1117" : "#f0f8ff"};
          color: ${darkMode ? "#e8e8e8" : "#2c2c2c"};
        }
        .homepage-container {
          padding: 50px;
          border-radius: 20px;
          background: ${darkMode ? "#1e1f29" : "#ffffff"};
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          max-width: 900px;
          margin: 30px auto;
          position: relative;
          transition: all 0.3s ease-in-out;
        }
        h1 {
          font-size: 2.8em;
          margin-bottom: 25px;
          color: ${darkMode ? "#82f6ff" : "#0066cc"};
        }
        .button {
          background: ${darkMode ? "#4b0082" : "#add8e6"};
          border: 2px solid ${darkMode ? "#9932cc" : "#4682b4"};
          padding: 12px 30px;
          margin: 10px;
          font-size: 1.1em;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          color: black;
        }
        .button:hover {
          background-color: ${darkMode ? "#6a0dad" : "#87cefa"};
          transform: scale(1.05);
        }
        .levels {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .toggle-btns {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          align-items: center;
        }
        .toggle-btns button {
          margin-left: 10px;
          background: ${darkMode ? "#333950" : "#e6f0ff"};
          padding: 8px 15px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
          color: ${darkMode ? "#ffffff" : "#003366"};
        }
        .login-btn {
          background: ${darkMode ? "#6a5acd" : "#4682b4"} !important;
          color: white !important;
        }
        .avatar-container {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 30px;
        }
        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: transparent;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .avatar:hover {
          transform: rotate(5deg) scale(1.05);
          animation: sparkle 1s ease-in-out;
        }
        .user-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid ${darkMode ? "#9932cc" : "#4682b4"};
          transition: all 0.2s ease;
        }
        .user-avatar:hover {
          transform: scale(1.1);
        }
        .user-dropdown {
          position: absolute;
          top: 60px;
          right: 10px;
          background: ${darkMode ? "#2a2d3d" : "#ffffff"};
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          padding: 15px;
          min-width: 200px;
          z-index: 100;
          border: 1px solid ${darkMode ? "#444" : "#ddd"};
        }
        .user-info {
          margin-bottom: 15px;
        }
        .user-info p {
          margin: 5px 0;
          font-size: 0.9em;
        }
        .user-info .user-name {
          font-weight: bold;
          font-size: 1.1em;
          color: ${darkMode ? "#82f6ff" : "#0066cc"};
        }
        .logout-btn {
          background: ${darkMode ? "#ff4757" : "#ff6b81"};
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
          font-weight: bold;
          transition: all 0.2s ease;
        }
        .logout-btn:hover {
          background: ${darkMode ? "#ff6b81" : "#ff4757"};
          transform: scale(1.05);
        }

        @keyframes sparkle {
          0%, 100% { filter: drop-shadow(0 0 10px #7df9ff); }
          50% { filter: drop-shadow(0 0 20px #ff66ff); }
        }
      `}</style>

      <div className="toggle-btns">
        {isLoggedIn ? (
          <div style={{ position: 'relative' }}>
            <img 
              src={userData?.avatar?.secure_url || avatars[0]} 
              className="user-avatar" 
              alt="User" 
              onClick={toggleUserDropdown}
            />
            {userDropdownOpen && (
              <div className="user-dropdown">
                <div className="user-info">
                  <p className="user-name">{userData?.fullName || "User"}</p>
                  <p>{userData?.email || "user@example.com"}</p>
                  <p>{userData?.number || "1234567890"}</p>
                </div>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="login-btn" onClick={handleLogin}>
            Login / Signup
          </button>
        )}
        <button onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1>🌐 Welcome to <span style={{ color: darkMode ? "#ffd700" : "#1e90ff" }}>Cybersec</span>! 🛡️</h1>

      <div className="levels">
        {Array.from({ length: 10 }, (_, i) => (
          <button className="button" onClick={() => handleButtonClick(i+1)} key={i}>Level {i + 1}</button>
        ))}
        <button onClick={() => navigate('/bonus')} className="button">🎁 Bonus Level</button>
      </div>

      {/* <div className="avatar-container">
        <img
          src={currentAvatar}
          className="avatar"
          alt="Cybersec Character"
          onClick={showEasterEgg}
        />
        <img
          src={avatars[1]}
          className="avatar"
          alt="Cybersec Character"
        />
        <img
          src={avatars[2]}
          className="avatar"
          alt="Cybersec Character"
        />
      </div> */}
    </div>
  );
};

export default HomePage;