import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileStudent from "./pages/ProfileStudent";
import ProfileTutor from "./pages/ProfileTutor";
import NavbarStudent from "./components/navbar/NavbarStudent"
import PostTeach from "./pages/PostTeach";




function App() {
  return (
    <div>
      <Routes>
        <Route path="/ProfileStudent" element={<ProfileStudent/>} />
        <Route path="/" element={<ProfileTutor/>} />
        <Route path="/b" element={<NavbarStudent/>} />
        <Route path="/PostTeach" element={<PostTeach/>}/>
      </Routes>
    </div>
  );
}

export default App;
