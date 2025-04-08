import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lista from "./pages/Lista";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Lista />} />
      </Routes>
    </Router>
  );
};

export default App;
