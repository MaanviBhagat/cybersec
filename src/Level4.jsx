import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Wrench, Lightbulb } from "lucide-react";
import ReturnToHome from "../ReturnToHome";

const hints = [
  "Make sure the cable wires follow the T568B color sequence.",
  "Apply firm but even pressure when crimping.",
  "Ensure the jacket is inside the RJ45 connector.",
  "If one pin doesn’t connect, the whole cable could fail!",
];

export default function CrimpingChallenge() {
  const navigate = useNavigate();
  const [isCrimpedCorrectly, setIsCrimpedCorrectly] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const crimpAttempt = () => {
    const success = Math.random() < 0.4 + attempts * 0.2;
    setAttempts(attempts + 1);
    setAnimationKey((prev) => prev + 1);

    setTimeout(() => {
      if (success) {
        setIsCrimpedCorrectly(true);
        setGameOver(true);
      }
    }, 1200);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "0 auto" }}>
      <ReturnToHome />
      <h1 style={{ fontSize: "28px", color: "red" }}>⚠️ Network Disaster Strikes!</h1>
      <p style={{ fontSize: "18px" }}>
        Your network is crawling. The Ethernet cable’s crimp looks suspicious...
        Can you fix it before the entire lab comes to a screeching halt?
      </p>

      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "22px" }}>🔧 Crimping Task</h2>
        {!gameOver ? (
          <>
            <motion.div
              key={animationKey}
              initial={{ scale: 0.8, rotate: 0 }}
              animate={{ scale: 1, rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 1 }}
              style={{
                width: "120px",
                height: "120px",
                margin: "20px auto",
                backgroundColor: "#eee",
                borderRadius: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Wrench size={48} color="blue" />
            </motion.div>

            <button
              onClick={crimpAttempt}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              🛠 Attempt Crimp Fix
            </button>
            <p style={{ fontSize: "14px", color: "#555", marginTop: "10px" }}>Attempts: {attempts}</p>
          </>
        ) : (
          <div style={{ backgroundColor: "#d4edda", padding: "15px", borderRadius: "5px", marginTop: "20px" }}>
            <h3 style={{ color: "#155724", margin: "0 0 10px" }}>Cable Fixed!</h3>
            <p style={{ margin: 0 }}>You nailed the crimp. Network restored, challenge continues!</p>
            <button
              onClick={() => navigate("/level5")}
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              ➔ Next Level
            </button>
          </div>
        )}
      </div>

      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", marginTop: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: "22px", display: "flex", alignItems: "center", gap: "10px" }}>
            <Lightbulb /> Hint Box
          </h2>
          <button
            onClick={() => setShowHint(!showHint)}
            style={{
              padding: "6px 12px",
              border: "1px solid #aaa",
              backgroundColor: "#f9f9f9",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {showHint ? "Hide Hints" : "Show Hints"}
          </button>
        </div>
        {showHint && (
          <ul style={{ marginTop: "15px", paddingLeft: "20px", color: "#333" }}>
            {hints.map((hint, idx) => (
              <li key={idx}>{hint}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
