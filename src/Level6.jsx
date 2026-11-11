import React, { useState } from "react";
import ReturnToHome from "../ReturnToHome";
import NextLevel from "../NextLevel";

const Level6 = () => {
  const [suspect, setSuspect] = useState(null);
  const [hints, setHints] = useState([
    "She was texting someone a lot before the break-in...",
    "The best friend had access to the office late at night!",
    "The boyfriend was seen near the server room around the incident...",
    "The best friend knew the entry code and mentioned it casually in public!",
    "Security footage showed the best friend entering the restricted area alone!",
  ]);
  const [revealedHints, setRevealedHints] = useState([]);
  const [minigameStarted, setMinigameStarted] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [minigameResult, setMinigameResult] = useState(null);
  const [completed, setCompleted] = useState(false);

  const handleSuspectChoice = (choice) => {
    setSuspect(choice);
  };

  const revealHint = () => {
    if (hints.length > 0) {
      setRevealedHints([...revealedHints, hints[0]]);
      setHints(hints.slice(1));
    }
  };

  const startMinigame = () => {
    setMinigameStarted(true);
    setMinigameResult(null);
    setCodeInput("");
    setRevealedHints([]);
  };

  const submitMinigame = () => {
    if (codeInput === "4312") {
      setMinigameResult(
        "✅ Correct! You've accessed the hidden CCTV footage revealing the best friend unlocking the file vault."
      );
      setCompleted(true);
    } else {
      setMinigameResult(
        "❌ Incorrect code! Try decoding the evidence again using the locker number clues."
      );
    }
  };

  const handleKeypadClick = (num) => {
    if (codeInput.length < 4) {
      setCodeInput(codeInput + num);
    }
  };

  const clearLastDigit = () => {
    if (codeInput.length > 0) {
      setCodeInput(codeInput.slice(0, -1));
    }
  };

  return (
    <div className="Level6-container">
      <ReturnToHome />
      <style>
        {`
          body {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            background: linear-gradient(to right, #1a1a1a, #4b1f47, #0c0c0c);
            text-align: center;
            color: #fff;
          }
          .Level6-container {
            padding: 20px;
            border-radius: 10px;
            background: #2e2e2e;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
            max-width: 800px;
            margin: auto;
            position: relative;
          }
          .chat-bubble {
            background: #222;
            padding: 10px;
            border-radius: 15px;
            display: inline-block;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
            margin-bottom: 20px;
            color: #ffd700;
            position: relative;
            overflow: hidden;
          }
          .chat-bar {
            background: #222;
            padding: 10px;
            border-radius: 15px;
            display: inline-block;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
            margin-bottom: 20px;
            color: #ffd700;
            position: relative;
            overflow: hidden;
            background: repeating-linear-gradient(
              -45deg,
              yellow,
              yellow 10px,
              black 10px,
              black 20px
            );
          }
          .button {
            background-color: #b30059;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px;
          }
          .hint-box {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: #ffdd57;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
            color: black;
          }
          .hint-button {
            background-color: #ffcc00;
            color: black;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
          }
          .minigame-container {
            margin-top: 30px;
            background-color: #333;
            padding: 15px;
            border-radius: 10px;
            color: #eee;
          }
          .minigame-code-display {
            margin: 10px auto;
            font-size: 28px;
            letter-spacing: 12px;
            width: 140px;
            padding: 10px;
            border-radius: 6px;
            background-color: black;
            color: #00FF41;
            box-shadow: inset 0 0 5px #00FF41, 0 0 10px #00FF41;
            font-family: 'Courier New', Courier, monospace;
          }
          .keypad {
            display: grid;
            grid-template-columns: repeat(3, 60px);
            grid-gap: 10px;
            justify-content: center;
            margin: 20px auto;
          }
          .key {
            background-color: #444;
            border: 2px solid #888;
            border-radius: 10px;
            font-size: 18px;
            padding: 15px;
            color: white;
            cursor: pointer;
            transition: background 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
          }
          .key:hover {
            background-color: #666;
          }
          .locker {
            width: 120px;
            height: 180px;
            background: linear-gradient(to bottom, #666, #444);
            margin: 20px auto;
            border: 4px solid #222;
            border-radius: 8px;
            position: relative;
            box-shadow: inset 0 0 8px #222;
          }
          .locker::before {
            content: '2134';
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 26px;
            color: #00FF41;
            background: black;
            padding: 6px 12px;
            border-radius: 6px;
            font-family: 'Courier New', Courier, monospace;
            box-shadow: inset 0 0 5px #00FF41, 0 0 10px #00FF41;
          }
          .locker::after {
            content: '';
            position: absolute;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 20px;
            background: #999;
            border-radius: 4px;
          }
        `}
      </style>
      <div className="chat-bar">
        <div className="chat-bubble">
          <p>
            🚨 Cyber Crime Scene Unfolded! 🚨 A top-secret locker containing
            confidential student records was digitally breached. All digital
            signs point to someone within her inner circle. Examine clues, trust
            your instincts, and identify the culprit to unlock the vault! 🕵️‍♀️🔍
          </p>
        </div>
        <div>
          <button
            className="button"
            onClick={() => handleSuspectChoice("Boyfriend")}
          >
            Boyfriend
          </button>
          <button
            className="button"
            onClick={() => handleSuspectChoice("Best Friend")}
          >
            Best Friend
          </button>
        </div>
        {suspect && (
          <div className="chat-bubble">
            {suspect === "Best Friend" ? (
              <>
                <p>
                  ✅ Nailed it! The best friend was caught red-handed bypassing
                  digital security using the victim's passphrase. Never overlook
                  basic access hygiene! 🔐
                </p>
                {!minigameStarted && (
                  <button className="button" onClick={startMinigame}>
                    Proceed to Locker Keypad Mini-Game
                  </button>
                )}
              </>
            ) : (
              <p>
                ❌ Not quite! Suspicion alone isn't proof. The boyfriend looked
                shady, but the breach was traced to the best friend.
              </p>
            )}
          </div>
        )}
      </div>
      {!minigameStarted && (
        <div className="hint-box">
          <p>📝 Hints:</p>
          {revealedHints.map((hint, index) => (
            <p key={index}>{hint}</p>
          ))}
          {hints.length > 0 && (
            <button className="hint-button" onClick={revealHint}>
              Reveal Hint
            </button>
          )}
        </div>
      )}
      {minigameStarted && (
        <div className="minigame-container">
          <h3>🔒 Keypad Mini-Game: Crack the Vault</h3>
          <p>
            Use the clues from the image to decode the 4-digit locker number
            (Hint: reverse her locker number!).
          </p>

          <div className="locker"></div>

          <div className="keypad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, ""].map((num, i) =>
              num === "C" ? (
                <div key={i} className="key" onClick={clearLastDigit}>
                  ⌫
                </div>
              ) : num !== "" ? (
                <div
                  key={i}
                  className="key"
                  onClick={() => handleKeypadClick(num)}
                >
                  {num}
                </div>
              ) : (
                <div key={i} className="key" style={{ visibility: "hidden" }} />
              )
            )}
          </div>

          <div className="minigame-code-display">
            {codeInput.padEnd(4, "_")}
          </div>
          <button className="button" onClick={submitMinigame}>
            Submit
          </button>
          {minigameResult && <p>{minigameResult}</p>}
        </div>
      )}
      {minigameResult && minigameResult.includes("✅") && (
        <div style={{ marginTop: "20px" }}>
          <NextLevel completed={completed} next={7} />
        </div>
      )}
    </div>
  );
};

export default Level6;
