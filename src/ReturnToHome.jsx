// ReturnToHome.js
import { useNavigate } from "react-router-dom";
import "./ReturnToHome.css";

const ReturnToHome = () => {
  const navigate = useNavigate();
  
  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <a href="/" className="home-button" onClick={handleHomeClick}>
      <span className="home-icon">ðŸ </span>
      <span>Back to All Levels</span>
    </a>
  );
};

export default ReturnToHome;
