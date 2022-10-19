import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarStudent from "./components/navbar/NavbarStudent";
import NavbarTutor from "./components/navbar/NavbarTutor";
import FindTutor from "./pages/FindTutor"; 

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/findtutor" element={<FindTutor />} />
          <Route path="/" element={<NavbarStudent />} />
          <Route path="/1" element={<NavbarTutor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
