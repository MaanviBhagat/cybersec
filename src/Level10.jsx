import React, { useState } from "react";
import ReturnToHome from "../components/ReturnToHome";

const Level10 = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null);
  const [firewallAnswer, setFirewallAnswer] = useState(null);
  const [firewallResult, setFirewallResult] = useState("");
  const [result, setResult] = useState("");

  const handleNext = () => setStep((prev) => prev + 1);

  const handleSecurityChoice = (choice) => {
    setSelected(choice);
    if (choice === "Weak Access Control & Monitoring") {
      setResult("✅ Correct! Lack of proper monitoring and access controls led to data loss.");
    } else {
      setResult("❌ Not quite. Think about what let Ravi go unnoticed.");
    }
  };

  const handleFirewallFix = (port) => {
    setFirewallAnswer(port);
    if (port === "21 (FTP)") {
      setFirewallResult("✅ Correct! Port 21 was left open and must be blocked.");
    } else {
      setFirewallResult("❌ Nope, that port wasn't the issue.");
    }
  };

  return (
    <div style={styles.container}>
      <ReturnToHome />
      <h2 style={styles.heading}>🧑‍💻 Level 10: The Insider Leak</h2>

      {/* Step 1: Story Popup */}
      {step === 1 && (
        <div style={styles.popup}>
          <h3>📁 The Story So Far...</h3>
          <p>
            Mr. Ravi connects his laptop to the internal network and bypasses VPN and endpoint security. He uploads sensitive files to his personal cloud — undetected. 🕵️‍♂️  
            Later, the IT team spots unusual traffic, but it's too late. Can you figure out what went wrong?
          </p>
          <button onClick={handleNext}>Investigate 🔍</button>
        </div>
      )}

      {/* Step 2: Analyze Logs */}
      {step === 2 && (
        <>
          <div style={styles.terminal}>
            <p>[10:03] Device: LAPTOP-RAVI | VPN: Disabled</p>
            <p>[10:04] File uploaded to Dropbox</p>
            <p>[10:05] No alerts triggered</p>
            <p>[13:20] Network anomaly detected (cloud sync spike)</p>
            <p>[13:45] IT Team investigates incident</p>
          </div>

          <div style={styles.questionBox}>
            <p>❓ What was the main cause of this breach?</p>
            {[
              "Antivirus Signature Failure",
              "Weak Access Control & Monitoring",
              "Weak Password",
              "Cloud Provider Vulnerability"
            ].map((choice) => (
              <button
                key={choice}
                onClick={() => handleSecurityChoice(choice)}
                style={{
                  ...styles.optionButton,
                  backgroundColor: selected === choice ? "#ffd6f0" : "#fff",
                }}
              >
                {choice}
              </button>
            ))}
            {result && <p style={styles.result}>{result}</p>}
            {result.includes("Correct") && <button onClick={handleNext} style={styles.nextBtn}>Next ➡️</button>}
          </div>
        </>
      )}

      {/* Step 3: Bonus Firewall Scenario */}
      {step === 3 && (
        <div style={styles.popup}>
          <h3>🔥 Firewall Fumble</h3>
          <p>
            A junior admin accidentally exposed an internal service by leaving a port open on the firewall.  
            Which port do you need to block immediately?
          </p>

          {["21 (FTP)", "443 (HTTPS)", "53 (DNS)", "25 (SMTP)"].map((port) => (
            <button
              key={port}
              onClick={() => handleFirewallFix(port)}
              style={{
                ...styles.optionButton,
                backgroundColor: firewallAnswer === port ? "#ccf" : "#fff"
              }}
            >
              {port}
            </button>
          ))}
          {firewallResult && <p style={styles.result}>{firewallResult}</p>}
          {firewallResult.includes("Correct") && <button onClick={handleNext} style={styles.nextBtn}>Final Recap 📘</button>}
        </div>
      )}

      {/* Step 4: Recap */}
      {step === 4 && (
  <div style={styles.theory}>
    <h3>📘 Recap: What You Learned</h3>
    <ul>
      <li>Access Control must enforce least privilege — Ravi had too much access.</li>
      <li>Monitoring tools like SIEM or DLP must alert unusual behavior (e.g. cloud uploads).</li>
      <li>VPN enforcement should be mandatory — Ravi bypassed this weak point.</li>
      <li>Firewalls should block unused ports like FTP (21) to prevent external intrusion.</li>
    </ul>
    <p>🎉 Level 10 Complete! You've stopped an insider threat and fixed a firewall! 🛡️</p>
  </div>
)};

const styles = {
  container: {
    maxWidth: "850px",
    margin: "auto",
    padding: "30px",
    fontFamily: "'Comic Sans MS', cursive",
    background: "linear-gradient(to bottom right, #d0f4f7, #e9dfff)",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(0,0,0,0.15)",
    textAlign: "center",
    color: "black"
  },
  heading: {
    fontSize: "2em",
    color: "#5c007a",
    marginBottom: "20px"
  },
  popup: {
    background: "#fffbea",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  terminal: {
    backgroundColor: "#1e1e1e",
    color: "#00ffcc",
    fontFamily: "monospace",
    textAlign: "left",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px"
  },
  questionBox: {
    backgroundColor: "#f3e8ff",
    padding: "20px",
    borderRadius: "15px"
  },
  optionButton: {
    margin: "10px",
    padding: "10px 20px",
    border: "1px solid #aaa",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  result: {
    marginTop: "1em",
    fontWeight: "bold",
    color: "#333"
  },
  nextBtn: {
    marginTop: "20px",
    padding: "10px 25px",
    background: "#ccf0ff",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold"
  },
  theory: {
    backgroundColor: "#e0faff",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "left"
  }
};

export default Level10;