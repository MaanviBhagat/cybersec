// Level1.js
import { useEffect, useState } from "react";
import ReturnToHome from "../ReturnToHome";
import NextLevel from "../NextLevel";
import classroom2 from './classroom2.png';
import "./level1.css";

const Level1 = () => {
  const [popup, setPopup] = useState(null);
  const [info, setInfo] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [topicsLearned, setTopicsLearned] = useState({
    wifi: false,
    netstat: false,
    wireshark: false,
    nmap: false
  });

  
useEffect(() => {
  const learned = allTopicsLearned();
  console.log("All topics learned?", learned);
  if (learned && !completed) {
    console.log("Setting completed to true");
    setCompleted(true);
    setPopup("Level Completed! 🎉");
    setInfo("Great job! You've completed Level 1 on networking basics. You're now ready for the next level!");
  }
}, [topicsLearned]); // Run whenever topicsLearned changes

  const handleLearn = (id, message, infoText) => {
    setPopup(message);
    setInfo(infoText);
    setActiveButton(id);
    setTopicsLearned(prev => ({ ...prev, [id]: true }));
    setTimeout(() => setPopup(null), 3000);
  };

  const allTopicsLearned = () => {
    return Object.values(topicsLearned).every(learned => learned);
  };

  const handleComplete = () => {
    if (allTopicsLearned()) {
      setCompleted(true);
      setPopup("Level Completed! 🎉");
      setInfo("Great job! You've completed Level 1 on networking basics. You're now ready for the next level!");
    } else {
      setPopup("Not so fast! 🧐");
      setInfo("You need to learn about all topics before completing this level. Look for any topics that don't have a checkmark yet!");
    }
  };

  const topics = [
    {
      id: "wifi",
      title: "Wi-Fi Basics",
      icon: "📡",
      message: "A router connects to the ISP to provide internet access!",
      info: "Wi-Fi is a wireless networking technology..."
    },
    {
      id: "netstat",
      title: "Netstat",
      icon: "🖥️",
      message: "Use netstat to view network connections!",
      info: "Netstat is a command-line tool that provides information..."
    },
    {
      id: "wireshark",
      title: "Wireshark",
      icon: "🦈",
      message: "Wireshark helps analyze network traffic!",
      info: "Wireshark is a network protocol analyzer that captures and displays packets in real-time. It helps identify suspicious activity, troubleshoot network problems, and analyze network protocols. Users can filter packets based on protocol, IP address, or port number. It's widely used in cybersecurity for packet-level inspection. Understanding packet headers and content aids in vulnerability detection and prevention. Though powerful, Wireshark requires proper training to avoid misinterpretation."
    },
    {
      id: "nmap",
      title: "Nmap",
      icon: "🔍",
      message: "Nmap scans networks for open ports!",
      info: "Nmap (Network Mapper) is an open-source tool for network exploration and security auditing. It scans devices on a network to identify hosts, open ports, and running services. Nmap is used in ethical hacking and penetration testing to find vulnerabilities. Common scans include TCP connect scan, SYN scan, and OS detection. It supports scripting via NSE (Nmap Scripting Engine) for deeper analysis. Nmap helps administrators secure systems by revealing weak points in the network."
    }
  ];

  return (
    <div className="app-container">
      <div className="level-container">
        <ReturnToHome /> {/* Include the ReturnToHome component here */}
        
        <div className="header">
          <div className="level-badge">Level 1</div>
          <h1>Networking Basics</h1>
          <p className="subtitle">Welcome to XYZ Institute! Your first class is about networking fundamentals.</p>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${Object.values(topicsLearned).filter(Boolean).length / Object.values(topicsLearned).length * 100}%` 
            }}
          ></div>
          <div className="progress-text">
            {Object.values(topicsLearned).filter(Boolean).length} of {Object.values(topicsLearned).length} topics learned
          </div>
        </div>

        <div className="main-content">
          <div className="classroom-image">
            <img src={classroom2} alt="classroom" />
            {popup && <div className="popup">{popup}</div>}
          </div>

          <div className="topics-container">
            {topics.map((topic) => (
              <button 
                key={topic.id}
                className={`topic-button ${activeButton === topic.id ? 'active' : ''} ${topicsLearned[topic.id] ? 'learned' : ''}`}
                onClick={() => handleLearn(topic.id, topic.message, topic.info)}
              >
                <span className="topic-icon">{topic.icon}</span>
                <span className="topic-title">{topic.title}</span>
                {topicsLearned[topic.id] && <span className="checkmark">✓</span>}
              </button>
            ))}
          </div>
        </div>

        {info && (
          <div className="info-box">
            <h3>🔍 Did You Know?</h3>
            <p>{info}</p>
          </div>
        )}
        
        <NextLevel completed={completed} onClick={handleComplete} next={2} /> {/* Include the NextLevel component here */}
      </div>
    </div>
  );
};

export default Level1;
