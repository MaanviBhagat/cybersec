import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReturnToHome from "./ReturnToHome";
import "./Level7.css";
import NextLevel from "./NextLevel";

const Level7 = () => {
  const [completed, setCompleted] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [task, setTask] = useState(null);
  const [sql, setSql] = useState("SELECT * FROM inventory;");
  const [result, setResult] = useState(
    "[Mock Result] List of all inventory items..."
  );
  const [showTable, setShowTable] = useState(false);
  const [taskProgress, setTaskProgress] = useState({
    create: false,
    edit: false,
    select: false,
  });

  const handleTaskSelection = (selectedTask) => {
    setTask(selectedTask);
    setShowTable(false);

    if (selectedTask === "Create Database") {
      setSql(
        `CREATE TABLE inventory (
          item_id INTEGER PRIMARY KEY,
          item_name VARCHAR(100),
          quantity INTEGER,
          price_per_kg DECIMAL(5,2),
          last_updated DATE
        );`
      );
      setResult("[Mock Result] Table 'inventory' created successfully!");
    } else if (selectedTask === "Add/Edit Data") {
      setSql(
        `-- Add new item
INSERT INTO inventory (item_id, item_name, quantity, price_per_kg, last_updated)
VALUES (1, 'Tomatoes', 150, 2.99, SYSDATE);

-- Edit item quantity
UPDATE inventory SET quantity = 175 WHERE item_id = 1;`
      );
      setResult("[Mock Result] Data inserted and updated successfully!");
    } else if (selectedTask === "Access Data Anywhere") {
      setSql("SELECT * FROM inventory;");
      setResult("[Mock Result] List of all inventory items...");
    }
  };

  const handleRunQuery = () => {
    const lowerSql = sql.toLowerCase();
    let newProgress = { ...taskProgress };
  
    if (lowerSql.includes("select")) {
      setResult("[Mock Result] List of all inventory items...");
      newProgress.create = true;
      setShowTable(true);
    } else if (lowerSql.includes("insert")) {
      setResult("[Mock Result] Data inserted successfully!");
      newProgress.edit = true;
      setShowTable(false);
    } else if (lowerSql.includes("update")) {
      setResult("[Mock Result] Inventory updated!");
      newProgress.edit = true;
      setShowTable(false);
    } else if (lowerSql.includes("delete")) {
      setResult("[Mock Result] Item deleted from inventory.");
      newProgress.select = true;
      setShowTable(false);
    } else if (lowerSql.includes("create table")) {
      setResult("[Mock Result] Table 'inventory' created successfully!");
      setShowTable(false);
    } else {
      setResult("[Mock Result] Invalid or unsupported SQL query.");
      setShowTable(false);
    }
  
    // Update progress state
    setTaskProgress(newProgress);
  
    // Check if all tasks are done
    if (newProgress.create && newProgress.edit && newProgress.select) {
      setCompleted(true);
    }
  };
  

  return (
    <div className="level7-container">
      <ReturnToHome />
      <style>{`/* styles here (same as your provided styles, not repeated for brevity) */`}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="chat-bubble"
      >
        <p>ðŸŠ Welcome to Level 6: The Data Harvest!</p>
        <p>
          ðŸ“¦ Your dad runs a booming wholesale vegetable market, but the network
          is lagging! Itâ€™s up to you to get things running by building a
          blazing-fast inventory system using Oracle Live SQL!
        </p>
        <p>
          ðŸŽ¯ Letâ€™s outsmart the chaos with your coding skills and fix this like
          a pro!
        </p>
      </motion.div>

      <div>
        <motion.button
          className="button"
          onClick={() => handleTaskSelection("Create Database")}
          whileTap={{ scale: 0.95 }}
        >
          ðŸ—ï¸ Create Database
        </motion.button>
        <motion.button
          className="button"
          onClick={() => handleTaskSelection("Add/Edit Data")}
          whileTap={{ scale: 0.95 }}
        >
          âœï¸ Add/Edit Data
        </motion.button>
        <motion.button
          className="button"
          onClick={() => handleTaskSelection("Access Data Anywhere")}
          whileTap={{ scale: 0.95 }}
        >
          ðŸŒ Access Data Anywhere
        </motion.button>
      </div>

      <AnimatePresence>
        {task && (
          <motion.div
            key="response"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="chat-bubble"
          >
            <p>
              âœ… Awesome! <strong>{task}</strong> is a crucial skill to master
              for building a reliable inventory system. Keep going!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {task === "Create Database" && (
        <div className="table-preview">
          <h4>ðŸ§¾ Inventory Table Design</h4>
          <table>
            <thead>
              <tr>
                <th>Column Name</th>
                <th>Data Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>item_id</td>
                <td>INTEGER</td>
                <td>Unique ID for each item</td>
              </tr>
              <tr>
                <td>item_name</td>
                <td>VARCHAR(100)</td>
                <td>Name of the vegetable</td>
              </tr>
              <tr>
                <td>quantity</td>
                <td>INTEGER</td>
                <td>Amount in stock</td>
              </tr>
              <tr>
                <td>price_per_kg</td>
                <td>DECIMAL(5,2)</td>
                <td>Price per kilogram</td>
              </tr>
              <tr>
                <td>last_updated</td>
                <td>DATE</td>
                <td>Last update timestamp</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="sql-area">
        <div className="sql-input">
          <h4>ðŸ’» SQL Editor</h4>
          <textarea value={sql} onChange={(e) => setSql(e.target.value)} />
          <button className="run-btn" onClick={handleRunQuery}>
            Run Query
          </button>
        </div>
        <div className="sql-output">
          <h4>ðŸ“Š Result</h4>
          {!showTable ? (
            <pre>{result}</pre>
          ) : (
            <table className="table-preview">
              <thead>
                <tr>
                  <th>Item ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price/Kg</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Tomatoes</td>
                  <td>175</td>
                  <td>$2.99</td>
                  <td>2025-04-21</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Potatoes</td>
                  <td>200</td>
                  <td>$1.20</td>
                  <td>2025-04-20</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Onions</td>
                  <td>180</td>
                  <td>$1.75</td>
                  <td>2025-04-19</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showInfo && (
          <motion.div
            key="info-box"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="info-box"
          >
            <p>
              ðŸ“œ <strong>Database Basics:</strong>
            </p>
            <p>ðŸ”¹ CRUD: Create, Read, Update, Delete</p>
            <p>ðŸ”¹ Organize product info in tables</p>
            <p>ðŸ”¹ Use SQL to query and manage data</p>
            <button className="close-button" onClick={() => setShowInfo(false)}>
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {completed && (
        <div style={{ textAlign: "center" }}>
          <NextLevel completed={completed} next={8} />
        </div>
      )}
    </div>
  );
};

export default Level7;
