import React, { useState } from "react";
import ReturnToHome from "../ReturnToHome";
import NextLevel from "../NextLevel";

// Sample firewall rules
const spoofRules = [
  { id: 1, text: "Reverse Path Filtering" },
  { id: 2, text: "Ingress Filtering" },
  { id: 3, text: "MAC Address Checking" },
];

const Level9 = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState("");
  const [spark, setSpark] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [completed, setCompleted] = useState(false);


  const handleNext = () => setStep((prev) => prev + 1);

  const handleAnswer = (choice) => {
    setSelected(choice);
    if (choice === "IP Spoofing") {
      setResult("✅ Correct! IP Spoofing is the technique used here.");
      setSpark(true);
      setTimeout(() => setSpark(false), 2000);
    } else {
      setResult("❌ Not quite. Review the log again!");
    }
  };

  const handleDrop = (e) => {
    const data = e.dataTransfer.getData("text/plain");
    if (data === "Reverse Path Filtering" || data === "Ingress Filtering") {
      setDropped(true);
    }
  };

  return (
    <div style={styles.container}>
      <ReturnToHome />
      <h2 style={styles.heading}>🕵️‍♂️ Level 9: Disguised Intruder</h2>

      {/* Step 1: Terminal-style scenario */}
      {step === 1 && (
        <>
          <div style={styles.terminal}>
            <p>[Access Attempt] IP: 192.168.1.101 | Status: SUCCESS</p>
            <p>[Access Attempt] IP: 104.24.10.8 | Status: DENIED</p>
            <p>[Access Attempt] IP: 192.168.1.102 | Status: SUCCESS</p>
            <p>[Access Attempt] IP: 192.168.1.99 | Status: SUCCESS</p>
          </div>

          <div style={styles.questionBox}>
            <p>🧠 What attack was used to bypass the internal-only IP restriction?</p>
            {["DNS Spoofing", "MAC Address Spoofing", "IP Spoofing", "SQL Injection"].map((choice) => (
              <button
                key={choice}
                style={{
                  ...styles.optionButton,
                  backgroundColor: selected === choice ? "#ffd6f0" : "#f0f0f0",
                }}
                onClick={() => handleAnswer(choice)}
              >
                {choice}
              </button>
            ))}
            {result && <p style={styles.result}>{result}</p>}
            {spark && <div style={styles.spark}>✨ Well done, Agent!</div>}
            <button onClick={handleNext} style={styles.nextBtn}>Next ➡️</button>
          </div>
        </>
      )}

      {/* Step 2: Mini-game - Drag & Drop */}
      {step === 2 && (
        <div style={styles.popup}>
          <h3>🧪 Spoof Blocker Mini-Game</h3>
          <p>Drag a valid firewall rule into the slot to stop spoofed packets.</p>

          <div style={styles.dndContainer}>
            {spoofRules.map((rule) => (
              <div
                key={rule.id}
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", rule.text)}
                style={styles.dndItem}
              >
                {rule.text}
              </div>
            ))}

            <div
              style={styles.dropZone}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              {dropped ? "🛡️ Spoofing Blocked!" : "🕳️ Firewall Slot"}
            </div>
          </div>
          <button onClick={handleNext} style={styles.nextBtn}>Continue ➡️</button>
        </div>
      )}

      {/* Step 3: Theory Recap */}
      {step === 3 && (
        <>
        <div style={styles.theory}>
          <h3>📘 Theory Recap</h3>
          <p><strong>What is an IP Address?</strong></p>
          <p>
            An IP address is a unique number assigned to each device on a network.
            Internal/private IPs (e.g. <code>192.168.1.X</code>) are used within organizations.
          </p>
          <p><strong>What is IP Spoofing?</strong></p>
          <p>
            IP Spoofing is when an attacker fakes their IP to make it look like they're inside a secure network. This can allow them to bypass IP-based access controls.
          </p>
          <p>Great job reaching the end of Level 9! 🔒</p>
        </div>
        {!completed && setCompleted(true)}
        <NextLevel completed={completed} next={10} />
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
    borderRadius: "20px",
    background: "linear-gradient(to bottom right, #f5e0ff, #e0f7ff)",
    fontFamily: "'Comic Sans MS', cursive",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  heading: {
    color: "#5e0080",
    fontSize: "2em",
    marginBottom: "20px",
  },
  terminal: {
    backgroundColor: "#1e1e1e",
    color: "#00ffae",
    fontFamily: "monospace",
    textAlign: "left",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  questionBox: {
    backgroundColor: "#fff0fb",
    padding: "20px",
    borderRadius: "15px",
    color: "black"
  },
  optionButton: {
    padding: "10px 20px",
    margin: "8px",
    border: "1px solid #aaa",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1em",
  },
  result: {
    marginTop: "1em",
    fontWeight: "bold",
    color: "#8e44ad",
  },
  spark: {
    marginTop: "10px",
    fontSize: "1.5em",
    animation: "sparkle 0.5s ease-in-out",
    color: "#ff69b4",
  },
  nextBtn: {
    marginTop: "20px",
    padding: "10px 25px",
    borderRadius: "12px",
    backgroundColor: "#ccf0ff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  popup: {
    backgroundColor: "#fffce5",
    padding: "25px",
    borderRadius: "15px",
    marginTop: "20px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
    color: "black"
  },
  dndContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  dndItem: {
    padding: "10px 15px",
    background: "#ffe6fa",
    border: "2px dashed #d291ff",
    borderRadius: "8px",
    cursor: "grab",
  },
  dropZone: {
    width: "220px",
    height: "100px",
    border: "3px dashed #999",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    backgroundColor: "#fafafa",
  },
  theory: {
    backgroundColor: "#f6faff",
    padding: "25px",
    borderRadius: "15px",
    marginTop: "20px",
    fontSize: "1em",
    textAlign: "left",
    color:"black"
  },
};

export default Level9;