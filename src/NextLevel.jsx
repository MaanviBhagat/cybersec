// NextLevel.js
import { useNavigate } from "react-router-dom";
import "./NextLevel.css";

const NextLevel = ({ completed, onClick, next }) => {
  const navigate = useNavigate();

  const handleNextLevelClick = (e) => {
    e.preventDefault();
    if (completed) {
      navigate(`/level${next}`);
    }
  };

  return (
    <button
      className={`complete-btn ${completed ? 'completed' : ''}`}
      onClick={handleNextLevelClick}
      disabled={!completed}
    >
      {completed ? "âœ… Completed!" : "Complete Level"}
    </button>
  );
};

export default NextLevel;
