import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarStudent from "./components/navbar/NavbarStudent";
import NavbarTutor from "./components/navbar/NavbarTutor";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<NavbarStudent />} />
          <Route path="/1" element={<NavbarTutor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
