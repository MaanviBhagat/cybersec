import React, { useState } from "react";
import { motion } from "framer-motion";
import ReturnToHome from "../ReturnToHome";
import NextLevel from "../NextLevel";

const App = () => {
  const [sql, setSql] = useState("");
  const [result, setResult] = useState("");
  const [feedback, setFeedback] = useState("");
  const [task, setTask] = useState("");
  const [useMongo, setUseMongo] = useState(false);
  const [mongoQuery, setMongoQuery] = useState(`db.inventory.insert({
  item_id: 1,
  item_name: "Tomatoes",
  quantity: 150,
  price_per_kg: 2.99,
  last_updated: new Date()
});`);
  const [completedTasks, setCompletedTasks] = useState({
    "Create Database": false,
    "Add/Edit Data": false,
    "Access Data Anywhere": false,
    "Try MongoDB": false,
  });

  const handleRunQuery = () => {
    document.getElementById("hacker-attack").classList.add("attack-animation");
    setTimeout(() => {
      document
        .getElementById("hacker-attack")
        .classList.remove("attack-animation");
    }, 1500);

    if (useMongo) {
      setResult("[Mock Result] MongoDB document inserted successfully.");
      setFeedback("✅ MongoDB: Flexible and injection-resistant by design.");
      return;
    }

    if (sql.includes("' OR '1'='1") || sql.toLowerCase().includes("or 1=1")) {
      setFeedback(
        "🚨 SQL Injection Attempt Blocked! Always use parameterized queries to prevent attacks."
      );
      setResult("[Mock Result] Injection attempt blocked.");
    } else if (sql.toLowerCase().includes("select")) {
      setResult("[Mock Result] List of all inventory items...");
      setFeedback("✅ Query executed safely! Your database is secure.");
    } else if (sql.toLowerCase().includes("insert")) {
      setResult("[Mock Result] Data inserted successfully!");
      setFeedback("✅ Inserted successfully.");
    } else if (sql.toLowerCase().includes("update")) {
      setResult("[Mock Result] Inventory updated!");
      setFeedback("✅ Updated successfully.");
    } else if (sql.toLowerCase().includes("create table")) {
      setResult("[Mock Result] Table 'inventory' created successfully!");
      setFeedback("✅ Table created successfully.");
    } else {
      setResult("[Mock Result] Invalid or unsupported SQL query.");
      setFeedback("");
    }
  };

  const handleTaskSelection = (selectedTask) => {
    setTask(selectedTask);
    setUseMongo(false);
  
    if (selectedTask === "Create Database") {
      setSql(`CREATE TABLE inventory (
        item_id INTEGER PRIMARY KEY,
        item_name VARCHAR(100),
        quantity INTEGER,
        price_per_kg DECIMAL(5,2),
        last_updated DATE
      );`);
      setResult("[Mock Result] Table 'inventory' created successfully!");
      setCompletedTasks(prev => ({ ...prev, create: true }));
    } else if (selectedTask === "Add/Edit Data") {
      setSql(`-- Safe query
      INSERT INTO inventory (item_id, item_name, quantity, price_per_kg, last_updated)
      VALUES (1, 'Tomatoes', 150, 2.99, SYSDATE);`);
      setResult("[Mock Result] Safe insert query prepared.");
      setCompletedTasks(prev => ({ ...prev, add: true }));
    } else if (selectedTask === "Access Data Anywhere") {
      setSql("SELECT * FROM inventory WHERE item_name = '' OR '1'='1';");
      setResult("[Mock Result] Query that might be vulnerable to injection.");
      setCompletedTasks(prev => ({ ...prev, access: true }));
    } else if (selectedTask === "Try MongoDB") {
      setUseMongo(true);
      setMongoQuery(`db.inventory.insert({
        item_id: 1,
        item_name: "Tomatoes",
        quantity: 150,
        price_per_kg: 2.99,
        last_updated: new Date()
      });`);
      setResult("[Mock Result] Ready to insert a document into MongoDB.");
      setCompletedTasks(prev => ({ ...prev, mongo: true }));
    }
  };
  
  const allTasksCompleted = Object.values(completedTasks).every(Boolean);
  return (
    <div className="level8-container">
      <ReturnToHome />
      <style>{`
        body {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #d32f2f, #1976d2);
          text-align: center;
          color: white;
        }
        .level8-container {
          padding: 40px;
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
          max-width: 1000px;
          margin: 60px auto;
          position: relative;
          overflow: hidden;
          color: black;
        }
        .button {
          background-color: #1976d2;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin: 10px;
          font-weight: bold;
          transition: background 0.3s;
        }
        .button:hover {
          background-color: #1565c0;
        }
        .sql-area {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          gap: 20px;
        }
        .sql-input, .sql-output {
          flex: 1;
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 3px 3px 15px rgba(0,0,0,0.15);
          color: #333;
          font-size: 1rem;
        }
        .sql-input textarea {
          width: 100%;
          height: 120px;
          font-family: monospace;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
        }
        .run-btn {
          margin-top: 10px;
          background: #d32f2f;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
        }
        .feedback-box {
          margin-top: 20px;
          padding: 10px;
          background: ${feedback.includes("🚨") ? "#f44336" : "#388e3c"};
          color: white;
          border-radius: 5px;
        }
        #hacker-attack {
          position: absolute;
          top: -20px;
          right: -20px;
          font-size: 3rem;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .attack-animation {
          opacity: 1 !important;
          animation: shake 0.5s linear infinite;
        }
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          25% { transform: translate(-1px, -2px) rotate(-1deg); }
          50% { transform: translate(-3px, 0px) rotate(1deg); }
          75% { transform: translate(3px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -1px) rotate(1deg); }
        }
        .hint-box {
          margin-top: 20px;
          background: #eeeeee;
          color: #333;
          padding: 15px;
          border-left: 4px solid #1976d2;
          border-radius: 6px;
          text-align: left;
          font-size: 0.95rem;
        }
      `}</style>

      <div id="hacker-attack">💻⚠️</div>

      <div>
        <motion.button
          className="button"
          onClick={() => handleTaskSelection("Create Database")}
        >
          🏗️ Create Database
        </motion.button>
        <motion.button
          className="button"
          onClick={() => handleTaskSelection("Add/Edit Data")}
        >
          ✍️ Add/Edit Data
        </motion.button>
        <motion.button
          className="button"
          onClick={() => handleTaskSelection("Access Data Anywhere")}
        >
          🌐 Access Data Anywhere
        </motion.button>
        <motion.button
          className="button"
          onClick={() => handleTaskSelection("Try MongoDB")}
        >
          🍃 Try MongoDB
        </motion.button>
      </div>

      <div className="sql-area">
        <div className="sql-input">
          <h4>{useMongo ? "🍃 MongoDB Editor" : "💻 SQL Editor"}</h4>
          <textarea
            value={useMongo ? mongoQuery : sql}
            onChange={(e) =>
              useMongo ? setMongoQuery(e.target.value) : setSql(e.target.value)
            }
          />
          <button className="run-btn" onClick={handleRunQuery}>
            Run Query
          </button>
          {feedback && <div className="feedback-box">{feedback}</div>}
          <div className="hint-box">
            <strong>Hint:</strong>{" "}
            {useMongo
              ? "MongoDB stores data as JSON-like documents and avoids SQL query syntax, making it naturally resistant to SQL injection."
              : sql.includes("' OR '1'='1") ||
                sql.toLowerCase().includes("or 1=1")
              ? "This query simulates an SQL injection attack. Always use parameterized queries to protect against this."
              : "To prevent SQL injection, always use parameterized queries or prepared statements. This separates code from user input."}
          </div>
        </div>
        <div className="sql-output">
          <h4>📊 Result</h4>
          <pre>{result}</pre>
        </div>
      </div>
      {allTasksCompleted && (
        <NextLevel completed={allTasksCompleted} next={9} />
      )}
    </div>
  );
};

export default App;
