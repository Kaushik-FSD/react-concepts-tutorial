import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";

// Creating global context/ global store
// This context can be used to share state across components without prop drilling
export const AppContext = createContext();

function StateManagementHook() {
  const [username, setUsername] = useState("John Doe");

  return (
    <div>
      {/* Passing the required var and functions throughout the all components */}
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>Error Page: 404 Not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
export default StateManagementHook;
