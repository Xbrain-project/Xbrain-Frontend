import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarStudent from "./components/navbar/NavbarStudent";
import NavbarTutor from "./components/navbar/NavbarTutor";
import HomeStudent from "./pages/HomeStudent";
import HomeTutor from "./pages/HomeTutor";
import HistoryStudent from "./pages/HistoryStudent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavbarStudent />} />
        {/* <Route path="/1" element={<NavbarTutor />} /> */}
        <Route path="/homestudent" element={<HomeStudent />} />
        <Route path="/hometutor" element={<HomeTutor />} />
        <Route path="/historystudent" element={<HistoryStudent />} />
      </Routes>
    </div>
  );
}

export default App;
