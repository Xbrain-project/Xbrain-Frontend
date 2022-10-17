import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileStudent from "./pages/Profile-student";
import ProfileTutor from "./pages/Profile-tutor";
import NavbarStudent from "./components/navbar/NavbarStudent"




function App() {
  return (
    <div>
      <Routes>
        <Route path="/ProfileStudent" element={<ProfileStudent/>} />
        <Route path="/" element={<ProfileTutor/>} />
        <Route path="/b" element={<NavbarStudent/>} />
      </Routes>
    </div>
  );
}

export default App;
