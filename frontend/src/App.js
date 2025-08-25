import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import TabsPage from "./TabsPage"; // new page for tabs

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tabs" element={<TabsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
