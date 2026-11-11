import React, { useState } from "react";
import ReturnToHome from "./ReturnToHome";

const cyberTools = [
  { name: "Firewall Booster", rarity: "common", image: "firewall-booster.webp" },
  { name: "AI Threat Detector", rarity: "rare", image: "ai-threat-detector.webp" },
  { name: "Quantum Encryptor", rarity: "epic", image: "quantum-encryptor.webp" },
  { name: "Hacker Persona: Shadow Fox", rarity: "legendary", image: "shadow-fox.webp" },
  { name: "Cyber Shield", rarity: "rare", image: "cyber-shield.webp" }
];

const characterImages = {
  "Black Hat": "blackhat.png",
  "White Hat": "whitehat.png",
  "Grey Hat": "greyhat.png"
};

const Bonus = () => {
  const [inventory, setInventory] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [gachaResult, setGachaResult] = useState(null);

  const drawGacha = () => {
    const randomItem = cyberTools[Math.floor(Math.random() * cyberTools.length)];
    setGachaResult(randomItem);
    setInventory((prevInventory) => [...prevInventory, randomItem]);
  };

  return (
    <div className="game-container">
      <ReturnToHome />
      <style>
        {`
          body {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            background-color: #f8f3ff;
            text-align: center;
            color: #333;
          }
          .game-container {
            padding: 20px;
            border-radius: 10px;
            background: #ffdfba;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
            max-width: 500px;
            margin: auto;
          }
          .character-selection button, .gacha-box button {
            background: #ff6699;
            border: none;
            padding: 10px;
            margin: 5px;
            border-radius: 10px;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
          }
          .character-selection button:hover, .gacha-box button:hover {
            background: #ff3385;
          }
          .character-image, .item-image {
            width: 100px;
            height: auto;
            border: 2px solid #fff;
            border-radius: 10px;
            margin-top: 10px;
          }
          .inventory {
            margin-top: 20px;
            background: #fff3e6;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      <h1>CyberSec Gacha Game</h1>
      <div className="character-selection">
        <h2>Select Your Hacker Type</h2>
        {Object.keys(characterImages).map((character) => (
          <button key={character} onClick={() => setSelectedCharacter(character)}>
            {character}
          </button>
        ))}
        {selectedCharacter && (
          <div>
            <p>Selected: {selectedCharacter}</p>
            <img src={characterImages[selectedCharacter]} alt={selectedCharacter} className="character-image" />
          </div>
        )}
      </div>

      <div className="gacha-box">
        <button onClick={drawGacha}>Draw a Cyber Tool!</button>
        {gachaResult && (
          <div className="fade-in">
            <p className={gachaResult.rarity}>You got: {gachaResult.name}!</p>
            <img src={gachaResult.image} alt={gachaResult.name} className="item-image" />
          </div>
        )}
      </div>

      <div className="inventory">
        <h2>Inventory</h2>
        <ul>
          {inventory.map((item, index) => (
            <li key={index} className={item.rarity}>
              {item.name}
              <img src={item.image} alt={item.name} className="item-image" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bonus;
