import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileStudent from "./pages/Profile-student";


function App() {
  return (
    <div>
      <Routes>
    <Route path="/" element={<ProfileStudent/>} />
    </Routes>
    </div>
  );
}

export default App;
