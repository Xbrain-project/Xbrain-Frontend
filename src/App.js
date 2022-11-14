import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageTest from "./pages/PageTest";
import NavbarStudent from "./components/navbar/NavbarStudent";
import NavbarTutor from "./components/navbar/NavbarTutor";
import FindTutor from "./pages/FindTutor";
import DetailTutor from "./pages/FindTutor/DetailTutor";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/findtutor" element={<FindTutor />} />
          <Route path="/findtutor/detailTutor" element={<DetailTutor />} />
          <Route path="/testPage" element={<PageTest />} />
     

          <Route path="/" element={<NavbarStudent />} />
          <Route path="/1" element={<NavbarTutor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
