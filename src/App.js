import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Buscador from "./pages/Buscador";
import Lista from "./pages/Lista";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscador" element={<Buscador />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </Router>
  );
};

export default App;
