import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (text.trim() === "") {
      alert("Please enter something!");
    } else {
      alert(`You entered: ${text}`);
    }
  };

  const openTabsPage = () => {
    navigate("/tabs"); // navigate to tabs page
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Dashboard</h2>

        <input
          type="text"
          placeholder="Enter something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSubmit} style={styles.button}>
          Submit
        </button>

        <button onClick={openTabsPage} style={styles.tabsButton}>
          Open 5 Tabs
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "50px 40px",
    borderRadius: "15px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "500px",
  },
  title: {
    marginBottom: "30px",
    color: "#333",
    fontSize: "28px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  tabsButton: {
    width: "100%",
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "rgba(152, 173, 157, 1)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Dashboard;
